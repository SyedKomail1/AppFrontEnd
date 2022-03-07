import React, { Component } from 'react';
import { Button, View, Text,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import MainScreen from './components/MainScreen';
import practice from './components/practice';
import Hotelbooking from './components/Hotelbooking';
import Tripbooking from './components/Tripbooking';





const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
       
      <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
         <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home Screen' }}
      />
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ title: 'Main Screen' }}
      />
        <Stack.Screen
        name="Hotelbooking"
        component={Hotelbooking}
        options={{ title: 'Hotel Booking' }}
      />
     <Stack.Screen
        name="Tripbooking"
        component={Tripbooking}
        options={{ title: 'Trip Booking' }}
      />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;