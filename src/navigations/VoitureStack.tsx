import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UpdateVoitureScreen from '../screens/UpdateVoiture';
import VoitureScreen from '../screens/Voiture';

const Stack = createStackNavigator();

const VoitureStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home-voiture"
        component={VoitureScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="update-voiture"
        component={UpdateVoitureScreen}
        options={{
          headerTitle: 'Modification voiture',
        }}
      />
    </Stack.Navigator>
  );
};

export default VoitureStack;
