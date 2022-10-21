import React, {
  createContext,
  useReducer,
  useEffect,
} from 'react';
import AppReducer from '../reducers/AppReducer';
import { log } from '../utils/logger'
import { deck } from '../utils/deck';

const { env: { NODE_ENV }} = process

const DECK = deck()

const initialState = {
  NODE_ENV,
  DECK,
  modal: {},
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({
  children
}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions for changing state
  function setModal(data) {
    dispatch({
      type: 'UPDATE_MODAL',
      payload: data
    });
  }

  useEffect(() => {
    log('state', 'rgb(217, 38, 169)', state);
  }, [state])

  return ( <GlobalContext.Provider value = {
      {
        ...state,
        setModal,
      }
    } > {
      children
    } </GlobalContext.Provider>
  )
}