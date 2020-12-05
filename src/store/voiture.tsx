import React, {createContext, FC, useContext} from 'react';
import {useImmer} from 'use-immer';
import {STORE_ERROR_MESSAGE} from '../configs';
import {IVoiture} from '../types';

interface IState {
  voitures: IVoiture[];
}

interface IActions {
  setVoitures: (voitures: IVoiture[]) => void;
  addVoiture: (voiture: IVoiture) => void;
}

interface IContext {
  state: IState;
  actions: IActions;
}

const Context = createContext<IContext | undefined>(undefined);

export const VoitureProvider: FC = ({children}) => {
  const [state, setState] = useImmer<IState>({
    voitures: [],
  });

  const contextValue: IContext = {
    state,
    actions: {
      setVoitures(voitures) {
        setState((draft) => {
          draft.voitures = voitures;
        });
      },
      addVoiture(voiture) {
        setState((draft) => {
          draft.voitures.unshift(voiture);
        });
      },
    },
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useVoitureCtx = () => {
  const context = useContext(Context);
  if (!context) {
    throw STORE_ERROR_MESSAGE('Voiture');
  }
  return context;
};
