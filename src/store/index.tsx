import React, {FC} from 'react';
import {DateSegProvider} from './dateSeg';
import {LocataireProvider} from './locataire';
import {LocationProvider} from './location';
import {VoitureProvider} from './voiture';

export const StoreProvider: FC<any> = ({children}) => {
  return [
    LocataireProvider,
    VoitureProvider,
    LocationProvider,
    DateSegProvider,
  ].reduce((acc, Cur) => {
    return <Cur>{acc}</Cur>;
  }, children);
};
