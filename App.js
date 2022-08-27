;import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './screen/ZipCodeScreen';
import WeatherScreen from './screen/WeatherScreen';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ZipCodeScreen}  options={{
          title: 'Choose a zip code',
          headerStyle: {
            backgroundColor: 'rgba(40, 110, 193, 0.5)',
          }}}/>
        <Stack.Screen name="Weather" component={WeatherScreen} options={{
          headerStyle: {
            backgroundColor: 'rgba(40, 110, 193, 0.5)',
          }}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
