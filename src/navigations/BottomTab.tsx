import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import LocataireScreen from '../screens/Locataire';

const Tab = createBottomTabNavigator();

const BottomTab: FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Locataire" component={LocataireScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
