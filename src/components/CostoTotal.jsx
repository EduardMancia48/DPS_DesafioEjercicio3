import React, { useState, useEffect } from 'react';

function CostoTotal({ destino, cantidadPersonas }) {
  const [costoTotal, setCostoTotal] = useState(0);
  const [impuesto, setImpuesto] = useState(0);

  useEffect(() => {
    // Define los precios por destino y cantidad de personas
    const precios = {
      'Ciudad de Panamá': [197, 165, 149, 129],
      'Cancún México': [485, 439, 400, 380],
      'Santiago de Chile': [198, 178, 158, 138],
      'Machu Picchu Perú': [754, 699, 649, 629],
      'Roatán Honduras': [565, 499, 469, 449],
    };

    // Calcula el impuesto
    const tasaImpuesto = {
      'Ciudad de Panamá': 4.5,
      'Cancún México': 6,
      'Santiago de Chile': 7,
      'Machu Picchu Perú': 7.5,
      'Roatán Honduras': 4,
    }[destino];

    // Calcula el precio por persona
    const precio = precios[destino][cantidadPersonas >= 5 ? 3 : cantidadPersonas >= 3 ? 2 : cantidadPersonas >= 2 ? 1 : 0];

    // Calcula el impuesto por persona
    const impuestoCalculado = precio * cantidadPersonas * tasaImpuesto / 100;
    setImpuesto(impuestoCalculado);

    // Calcula el costo total
    const costoTotalCalculado = precio * cantidadPersonas;
    setCostoTotal(costoTotalCalculado);
  }, [destino, cantidadPersonas]);

  // Calcula el costo por persona
  const costoPorPersona = cantidadPersonas === 0 ? 0 : costoTotal / cantidadPersonas;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Costo total</h2>
          <table className="table table-bordered table-striped table-responsive">
            <thead>
              <tr>
                <th>Nombre del destino</th>
                <th>Cantidad de personas</th>
                <th>Costo por persona</th>
                <th>Impuesto por persona</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{destino}</td>
                <td>{cantidadPersonas}</td>
                <td>${costoPorPersona.toFixed(2)}</td>
                <td>${impuesto.toFixed(2)}</td>
                <td>${(costoTotal + impuesto).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CostoTotal;
