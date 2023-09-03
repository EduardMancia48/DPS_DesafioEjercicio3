// Destino.jsx
import React from 'react';

function Destino({ destino, onChangeDestino }) {
  return (
    <div>
      <label>Selecciona un destino:</label>
      <select value={destino} onChange={(e) => onChangeDestino(e.target.value)}>
        <option value="Ciudad de Panamá">Ciudad de Panamá</option>
        <option value="Cancún México">Cancún México</option>
        <option value="Santiago de Chile">Santiago de Chile</option>
        <option value="Machu Picchu Perú">Machu Picchu Perú</option>
        <option value="Roatán Honduras">Roatán Honduras</option>
      </select>
    </div>
  );
}

export default Destino;
