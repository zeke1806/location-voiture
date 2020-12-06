import React, {createContext, FC, useContext} from 'react';
import {useImmer} from 'use-immer';
import {STORE_ERROR_MESSAGE} from '../configs';
import {IVoiture} from '../types';

interface IState {
  voitures: IVoiture[];
  search: string;
}

interface IActions {
  setVoitures: (voitures: IVoiture[]) => void;
  addVoiture: (voiture: IVoiture) => void;
  updateVoiture: (voiture: IVoiture) => void;
  handleChangeSearch: (search: string) => void;
  deleteVoiture: (id: number) => void;
}

interface IContext {
  state: IState;
  actions: IActions;
}

const Context = createContext<IContext | undefined>(undefined);

export const VoitureProvider: FC = ({children}) => {
  const [state, setState] = useImmer<IState>({
    voitures: [],
    search: '',
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

      updateVoiture(voiture) {
        setState((draft) => {
          draft.voitures.splice(
            draft.voitures.findIndex(
              (elt) => String(elt.idVoiture) === String(voiture.idVoiture),
            ),
            1,
            voiture,
          );
        });
      },

      handleChangeSearch(search) {
        setState((draft) => {
          draft.search = search;
        });
      },

      deleteVoiture(id) {
        setState((draft) => {
          draft.voitures.splice(
            draft.voitures.findIndex((elt) => elt.idVoiture === id),
            1,
          );
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

  const filteredVoitures = context.state.search
    ? context.state.voitures.filter((v) => {
        return (
          String(v.idVoiture).includes(context.state.search) ||
          v.designation.includes(context.state.search)
        );
      })
    : context.state.voitures;

  return {
    ...context,
    filteredVoitures,
  };
};
