import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UpdateLocataireScreen from '../screens/UpdateLocataire';
import LocataireScreen from '../screens/Locataire';

const Stack = createStackNavigator();

const LocataireStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home-locataire"
        component={LocataireScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="update-locataire"
        component={UpdateLocataireScreen}
        options={{
          headerTitle: 'Modification locataire',
        }}
      />
    </Stack.Navigator>
  );
};

export default LocataireStack;
