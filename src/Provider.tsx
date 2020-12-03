import React, {FC} from 'react';
import NavigationRoot from './navigations';
import {StoreProvider} from './store';

const Provider: FC = () => {
  return (
    <StoreProvider>
      <NavigationRoot />
    </StoreProvider>
  );
};

export default Provider;
