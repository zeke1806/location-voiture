import React, {FC} from 'react';
import {LocataireProvider} from './locataire';

export const StoreProvider: FC<any> = ({children}) => {
  return [LocataireProvider].reduce((acc, Cur) => {
    return <Cur>{acc}</Cur>;
  }, children);
};
