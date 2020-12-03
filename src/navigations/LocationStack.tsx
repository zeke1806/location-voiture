import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ManageLocationScreen from '../screens/ManageLocation';
import LocationScreen from '../screens/Location';
import UpdateLocationScreen from '../screens/UpdateLocation';
import StatLocationScreen from '../screens/StatLocation';

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
      <Stack.Screen
        name="update-location"
        component={UpdateLocationScreen}
        options={{
          headerTitle: 'Modification location',
        }}
      />
      <Stack.Screen
        name="stat-location"
        component={StatLocationScreen}
        options={{
          headerTitle: 'Statistique de location pour une voiture',
        }}
      />
    </Stack.Navigator>
  );
};

export default LocationStack;
