import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ManageLocationScreen from '../screens/ManageLocation';
import LocationScreen from '../screens/Location';

const Stack = createStackNavigator();

const LocationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home-location"
        component={LocationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="manage-location"
        component={ManageLocationScreen}
        options={{
          headerTitle: "Gestion de location d'une voiture",
        }}
      />
    </Stack.Navigator>
  );
};

export default LocationStack;
