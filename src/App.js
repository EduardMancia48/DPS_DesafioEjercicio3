
import React, { useState } from 'react';
import Destino from './components/Destino';
import CantidadPersonas from './components/CantidadPersonas';
import CostoTotal from './components/CostoTotal';

function App() {
  const [destino, setDestino] = useState('Ciudad de Panamá');
  const [cantidadPersonas, setCantidadPersonas] = useState(1);

  return (
    <div className="App">
      <h1>Calculadora de Costo de Viaje</h1>
      <Destino destino={destino} onChangeDestino={setDestino} />
      <CantidadPersonas cantidadPersonas={cantidadPersonas} onChangeCantidadPersonas={setCantidadPersonas} />
      <CostoTotal destino={destino} cantidadPersonas={cantidadPersonas} />
    </div>
  );
}

export default App;
