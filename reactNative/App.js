import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NumericalCalculationsView from './NumericalCalculationsView';
import SharedPreferencesView from './SharedPreferencesView';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="NumericalCalculations"
          component={NumericalCalculationsView}
        />
        <Stack.Screen
          name="SharedPreferences"
          component={SharedPreferencesView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
