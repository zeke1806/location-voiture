import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import LocataireScreen from '../screens/Locataire';
import VoitureScreen from '../screens/Voiture';
import LocationScreen from '../screens/Location';
import themes from '../theme';

const Tab = createBottomTabNavigator();

const BottomTab: FC = () => {
  return (
    <Tab.Navigator
      // eslint-disable-next-line react-native/no-inline-styles
      sceneContainerStyle={{
        backgroundColor: '#fff',
      }}
      tabBarOptions={{
        inactiveBackgroundColor: themes.colors.primary,
        activeBackgroundColor: themes.colors.primary,
        activeTintColor: themes.colors.secondary,
        inactiveTintColor: '#fff',
        labelStyle: {
          fontSize: themes.space,
          textTransform: 'uppercase',
        },
        tabStyle: {
          justifyContent: 'center',
        },
      }}>
      <Tab.Screen name="locataire" component={LocataireScreen} />
      <Tab.Screen name="voiture" component={VoitureScreen} />
      <Tab.Screen name="location" component={LocationScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
