// Destino.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
  
function Destino({ destino, onChangeDestino }) {
  return (
    <div className="form-group">
      <label htmlFor="destino">Selecciona un destino:</label>
      <select className="form-control" id="destino" value={destino} onChange={(e) => onChangeDestino(e.target.value)}>
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
