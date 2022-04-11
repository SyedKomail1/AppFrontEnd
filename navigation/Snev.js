import "react-native-gesture-handler";
import React, { Component } from "react";
import { Button, View, Text, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Tripbooking from "../components/Tripbooking";
import OnBoardScreen from "../src/views/OnBoardScreen";
import HomeScreen from "../src/views/HomeScreen";
import DetailsScreen from "../src/views/DetailsScreen";
import Started from "../src/views/Started.js";
import LoginScreen from "../src/views/LoginScreen.js";
import RegisterScreen from "../src/views/RegisterScreen";
import ForgetPassword from "../src/views/ForgetPassword";
import ForgetCode from "../src/views/ForgetCode";
import NewPass from "../src/views/NewPass";
import CreateTour from "../src/views/CreateTour";
import Userprofile from "../src/views/Userprofile";
import Shared from "../components/Shared";
import Caronboardscreen from "../src/views/Caronboardscreen";
import CarHomeScreen from "../src/views/CarHomeScreen";
import CarDetailsScreen from "../src/views/CarDetailsScreen";
import Booking from "../src/views/Booking";
import TourGuide from "../src/views/TourGuide";
import TourGuideDetails from "../src/views/TourGuideDetails";
import TourguideBoard from "../src/views/TourguideBoard";
import TourguideFind from "../src/views/TourguideFind";
import BudgetEstimate from "../src/views/BudgetEstimate";
import TourPlanner from "../src/views/TourPlanner";

const Stack = createNativeStackNavigator();

function Snev() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={OnBoardScreen}
        options={{ title: "Home Screen" }}
      />

      <Stack.Screen
        name="TourGuide"
        component={TourGuide}
        options={{ title: "TourGuide" }}
      />

      <Stack.Screen
        name="Started"
        component={Started}
        options={{ title: "Started" }}
      />

      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Home Screen" }}
      />

      <Stack.Screen
        name="TourguideBoard"
        component={TourguideBoard}
        options={{ title: "TourguideBoard" }}
      />

      <Stack.Screen
        name="TourguideFind"
        component={TourguideFind}
        options={{ title: "TourguideFind" }}
      />

      <Stack.Screen
        name="TourPlanner"
        component={TourPlanner}
        options={{ title: "TourPlanner" }}
      />

      <Stack.Screen
        name="BudgetEstimate"
        component={BudgetEstimate}
        options={{ title: "BudgetEstimate" }}
      />

      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: "LoginScreen" }}
      />

      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ title: "RegisterScreen" }}
      />

      <Stack.Screen
        name="Shared"
        component={Shared}
        options={{ title: "Shared" }}
      />

      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{ title: "DetailsScreen" }}
      />

      <Stack.Screen
        name="TourGuideDetails"
        component={TourGuideDetails}
        options={{ title: "TourGuideDetails" }}
      />

      <Stack.Screen
        name="Caronboardscreen"
        component={Caronboardscreen}
        options={{ title: "Caronboardscreen" }}
      />

      <Stack.Screen
        name="Booking"
        component={Booking}
        options={{ title: "Booking" }}
      />

      <Stack.Screen
        name="CarDetailsScreen"
        component={CarDetailsScreen}
        options={{ title: "CarDetailsScreen" }}
      />

      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{ title: "ForgetPassword" }}
      />

      <Stack.Screen
        name="NewPass"
        component={NewPass}
        options={{ title: "NewPass" }}
      />

      <Stack.Screen
        name="ForgetCode"
        component={ForgetCode}
        options={{ title: "ForgetCode" }}
      />

      <Stack.Screen
        name="CreateTour"
        component={CreateTour}
        options={{ title: "CreateTour" }}
      />

      <Stack.Screen
        name="Userprofile"
        component={Userprofile}
        options={{ title: "Userprofile" }}
      />

      <Stack.Screen
        name="CarHomeScreen"
        component={CarHomeScreen}
        options={{ title: "CarHomeScreen" }}
      />

      <Stack.Screen
        name="Tripbooking"
        component={Tripbooking}
        options={{ title: "Trip Booking" }}
      />
    </Stack.Navigator>
  );
}

export default Snev;
