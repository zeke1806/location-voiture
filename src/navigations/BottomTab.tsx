import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import themes from '../theme';
import LocataireStack from './LocataireStack';
import VoitureStack from './VoitureStack';
import LocationStack from './LocationStack';

const Tab = createBottomTabNavigator();

const BottomTab: FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        inactiveBackgroundColor: themes.colors.primary,
        activeBackgroundColor: themes.colors.primary,
        activeTintColor: '#fff',
        inactiveTintColor: 'black',
        labelStyle: {
          fontSize: themes.space,
          textTransform: 'uppercase',
        },
        tabStyle: {
          justifyContent: 'center',
        },
      }}>
      <Tab.Screen
        name="locataire-stack"
        component={LocataireStack}
        options={{tabBarLabel: 'LOCATAIRE'}}
      />
      <Tab.Screen
        name="voiture-stack"
        component={VoitureStack}
        options={{tabBarLabel: 'VOITURE'}}
      />
      <Tab.Screen
        name="location-stack"
        component={LocationStack}
        options={{tabBarLabel: 'LOCATION'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
