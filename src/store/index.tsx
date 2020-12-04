import React, {FC} from 'react';
import {LocataireProvider} from './locataire';
import {VoitureProvider} from './voiture';

export const StoreProvider: FC<any> = ({children}) => {
  return [LocataireProvider, VoitureProvider].reduce((acc, Cur) => {
    return <Cur>{acc}</Cur>;
  }, children);
};
