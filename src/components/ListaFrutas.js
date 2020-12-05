import React from 'react';
import { useSelector } from 'react-redux';

import Fruta from './Fruta';
import AdicionaFruta from './AdicionaFruta';

const ListaFrutas = () => {

  const frutas = useSelector(state => state.frutaReducers.frutas);

  return (
    <>
      <h1>Lista de frutas</h1>

      <AdicionaFruta />

      {frutas.map(fruta => (
        <Fruta key={fruta.id} fruta={fruta}/>
      ))}
    </>
  );
}

export default ListaFrutas;