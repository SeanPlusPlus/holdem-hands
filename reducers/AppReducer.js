import { log } from '../utils/logger'
import { hand } from '../utils/hand'

export default (state, action) => {

  const d = new Date();
  log('→', 'rgb(229, 231, 235)', d.toLocaleTimeString());
  log('action', 'rgb(251, 189, 35)', action);

  switch (action.type) {
    case 'UPDATE_MODAL':
      return {
        ...state,
        modal: action.payload,
      }
    case 'UPDATE_HAND':
      return {
        ...state,
        hand: [...state.hand, hand()],
      }
    default:
      return state;
  }
}