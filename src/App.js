// App.js
import React, { useState } from 'react';
import Destino from './components/Destino';
import CantidadPersonas from './components/CantidadPersonas';
import CostoTotal from './components/CostoTotal';
import NavBar from './components/NavBar'; // Importa el nuevo componente NavBar

function App() {
  const [destino, setDestino] = useState('Ciudad de Panamá');
  const [cantidadPersonas, setCantidadPersonas] = useState(1);

  return (
    <div className="App">
      <NavBar /> {/* Agrega el NavBar */}
      <div className="container mt-4">
        <h1>Calculadora de Costo de Viaje</h1>
        <div className="row">
          <div className="col-md-4">
            <Destino destino={destino} onChangeDestino={setDestino} />
          </div>
          <div className="col-md-4">
            <CantidadPersonas cantidadPersonas={cantidadPersonas} onChangeCantidadPersonas={setCantidadPersonas} />
          </div>
          <div className="col-md-4">
            <CostoTotal destino={destino} cantidadPersonas={cantidadPersonas} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
