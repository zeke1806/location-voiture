import React, {createContext, FC, useContext} from 'react';
import {useImmer} from 'use-immer';
import {ILocataire} from '../types';

interface IState {
  locataires: ILocataire[];
}

interface IActions {
  setLocataires: (locataires: ILocataire[]) => void;
  addLocataires: (locataire: ILocataire) => void;
}

interface IContext {
  state: IState;
  actions: IActions;
}

const Context = createContext<IContext | undefined>(undefined);

export const LocataireProvider: FC = ({children}) => {
  const [state, setState] = useImmer<IState>({
    locataires: [],
  });

  const contextValue: IContext = {
    state,
    actions: {
      setLocataires(locataires) {
        setState((draft) => {
          draft.locataires = locataires;
        });
      },
      addLocataires(locataire) {
        setState((draft) => {
          draft.locataires.unshift(locataire);
        });
      },
    },
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useLocataireCtx = () => {
  const context = useContext(Context);
  if (!context) {
    throw 'useLocataireCtx cannot be used outside LocataireProvider';
  }
  return context;
};
