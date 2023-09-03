// CostoTotal.jsx
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CostoTotal({ destino, cantidadPersonas }) {
  const [costoTotal, setCostoTotal] = useState(0);

  useEffect(() => {
    // Define los precios por destino y cantidad de personas
    const precios = {
      'Ciudad de Panamá': [197, 165, 149, 129],
      'Cancún México': [485, 439, 400, 380],
      'Santiago de Chile': [198, 178, 158, 138],
      'Machu Picchu Perú': [754, 699, 649, 629],
      'Roatán Honduras': [565, 499, 469, 449],
    };

    // Calcula el costo total
    const calcularCostoTotal = () => {
      const precioIndex =
        cantidadPersonas >= 5
          ? 3
          : cantidadPersonas >= 3
          ? 2
          : cantidadPersonas >= 2
          ? 1
          : 0;
      const precio = precios[destino][precioIndex];
      const impuestoCalculado = precio * cantidadPersonas * tasasImpuesto[destino];
      return precio * cantidadPersonas
    };  
    // Define las tasas de impuesto por destino
    const tasasImpuesto = {
        'Ciudad de Panamá': 0.045,
        'Cancún México': 0.06,
        'Santiago de Chile': 0.07,
        'Machu Picchu Perú': 0.075,
        'Roatán Honduras': 0.04,
      };
    const nuevoCostoTotal = calcularCostoTotal();
    setCostoTotal(nuevoCostoTotal);
  }, [destino, cantidadPersonas]);

  return (
    <div className="form-group">
      <h2>Costo Total:</h2>
      <p className="lead">${costoTotal.toFixed(2)}</p>
    </div>
  );
}

export default CostoTotal;
