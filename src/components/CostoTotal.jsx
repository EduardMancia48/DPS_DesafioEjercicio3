// CostoTotal.jsx
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    const impuestoCalculado = parseFloat(precios[destino][0]) * cantidadPersonas * tasaImpuesto / 100;
    setImpuesto(impuestoCalculado);

    // Calcula el costo total
    const precioIndex =
      cantidadPersonas >= 5
        ? 3
        : cantidadPersonas >= 3
        ? 2
        : cantidadPersonas >= 2
        ? 1
        : 0;
    const precio = precios[destino][precioIndex];
    const costoTotalCalculado = precio * cantidadPersonas;
    setCostoTotal(costoTotalCalculado);
  }, [destino, cantidadPersonas]);

  return (
    <div className="form-group">
      <h2>Costo Total:</h2>
      <p className="lead">${(costoTotal + impuesto).toFixed(2)}</p>
    </div>
  );
}

export default CostoTotal;
