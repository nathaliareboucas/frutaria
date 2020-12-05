import {actionsTypes} from '../constants/fruta';

const INITIAL_STATE = {
  frutas: [
    {id: 1, nome: 'Abacaxi', quantidade: 5},
    {id: 2, nome: 'Melão', quantidade: 2},
    {id: 3, nome: 'Laranla', quantidade: 4},
  ]
};

const reducers = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionsTypes.ADCIONAR_FRUTA:
      return { frutas: [...state.frutas, {...action.payload}] };
    case actionsTypes.REMOVER_FRUTA:
      return { frutas: state.frutas.filter(fruta => fruta.id !== action.payload.id) };
    default:
      return state;
  }  
}

export { reducers };