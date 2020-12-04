import React, {createContext, FC, useContext} from 'react';
import {useImmer} from 'use-immer';
import {STORE_ERROR_MESSAGE} from '../configs';
import {ILocataire} from '../types';

interface IState {
  locataires: ILocataire[];
}

interface IActions {
  setLocataires: (locataires: ILocataire[]) => void;
  addLocataires: (locataire: ILocataire) => void;
  updateLocataire: (id: string, data: ILocataire) => void;
  deleteLocataire: (id: number) => void;
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

      updateLocataire(id, data) {
        setState((draft) => {
          draft.locataires.forEach((l) => {
            if (String(l.idLocataire) === String(id)) {
              Object.assign(l, data);
            }
          });
        });
      },

      deleteLocataire(id) {
        setState((draft) => {
          draft.locataires.splice(
            draft.locataires.findIndex(
              (elt) => String(elt.idLocataire) === String(id),
            ),
            1,
          );
        });
      },
    },
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useLocataireCtx = () => {
  const context = useContext(Context);
  if (!context) {
    throw STORE_ERROR_MESSAGE('Locataire');
  }
  return context;
};
