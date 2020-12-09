import React, {createContext, FC, useContext} from 'react';
import {useImmer} from 'use-immer';
import {STORE_ERROR_MESSAGE} from '../configs';

interface IState {
  debut: string;
  fin: string;
}

interface IActions {
  setDate: (key: keyof IState, value: string) => void;
}

interface IContext {
  state: IState;
  actions: IActions;
}
const Context = createContext<IContext | undefined>(undefined);

export const DateSegProvider: FC = ({children}) => {
  const defaultDate = new Date().toISOString();
  const [state, setState] = useImmer<IState>({
    debut: defaultDate,
    fin: defaultDate,
  });

  const contextValue: IContext = {
    state,
    actions: {
      setDate(key, value) {
        setState((draft) => {
          draft[key] = value;
        });
      },
    },
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useDateSegCtx = () => {
  const context = useContext(Context);
  if (!context) {
    throw STORE_ERROR_MESSAGE('DateSeg');
  }
  return context;
};
