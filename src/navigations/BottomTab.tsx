import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import VoitureScreen from '../screens/Voiture';
import LocationScreen from '../screens/Location';
import themes from '../theme';
import LocataireStack from './LocataireStack';

const Tab = createBottomTabNavigator();

const BottomTab: FC = () => {
  return (
    <Tab.Navigator
      // eslint-disable-next-line react-native/no-inline-styles
      sceneContainerStyle={{
        backgroundColor: '#fff',
      }}
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
      <Tab.Screen name="voiture" component={VoitureScreen} />
      <Tab.Screen name="location" component={LocationScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
