import React, {createContext, FC, useContext} from 'react';
import {useImmer} from 'use-immer';
import {STORE_ERROR_MESSAGE} from '../configs';
import {ILocation} from '../types';

interface IState {
  locations: ILocation[];
}

interface IActions {
  setLocations: (locations: ILocation[]) => void;
  addLocation: (location: ILocation) => void;
}

interface IContext {
  state: IState;
  actions: IActions;
}

const Context = createContext<undefined | IContext>(undefined);

export const LocationProvider: FC = ({children}) => {
  const [state, setState] = useImmer<IState>({
    locations: [],
  });

  const contextValue: IContext = {
    state,
    actions: {
      setLocations(locations) {
        setState((draft) => {
          draft.locations = locations;
        });
      },

      addLocation(location) {
        setState((draft) => {
          draft.locations.unshift(location);
        });
      },
    },
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useLocationCtx = () => {
  const context = useContext(Context);
  if (!context) {
    throw STORE_ERROR_MESSAGE('Location');
  }
  return context;
};
