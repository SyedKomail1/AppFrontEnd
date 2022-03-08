import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Button, View, Text,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import MainScreen from './components/MainScreen';
import practice from './components/practice';

import Hotelbooking from './components/Hotelbooking';
import Tripbooking from './components/Tripbooking';
import OnBoardScreen from './src/views/OnBoardScreen';
import HomeScreen from './src/views/HomeScreen';
import DetailsScreen from './src/views/DetailsScreen';
import Started from './src/views/Started.js';
import LoginScreen from './src/views/LoginScreen.js';
import RegisterScreen from './src/views/RegisterScreen';




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
        component={OnBoardScreen}
        options={{ title: 'Home Screen' }}
      />

<Stack.Screen
        name="Started"
        component={Started}
        options={{ title: 'Started' }}
      />

      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: 'Home Screen' }}
      />

<Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: 'LoginScreen' }}
      />
         <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ title: 'RegisterScreen' }}
      />
     
       <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{ title: 'DetailsScreen' }}
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