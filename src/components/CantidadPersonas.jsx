// CantidadPersonas.jsx
import React from 'react';

function CantidadPersonas({ cantidadPersonas, onChangeCantidadPersonas }) {
  return (
    <div className="form-group">
      <label htmlFor="cantidadPersonas">Cantidad de personas:</label>
      <input
        type="number"
        className="form-control"
        id="cantidadPersonas"
        value={cantidadPersonas}
        onChange={(e) => onChangeCantidadPersonas(parseInt(e.target.value))}
      />
    </div>
  );
}

export default CantidadPersonas;
