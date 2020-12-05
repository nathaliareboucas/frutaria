import {actionsTypes} from '../constants/fruta';

const actions = {
  adicionar: fruta => ({
    type: actionsTypes.ADCIONAR_FRUTA,
    payload: fruta
  }),

  remover: fruta => ({
    type: actionsTypes.REMOVER_FRUTA,
    payload: fruta
  })
};

export { actions };