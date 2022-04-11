import "react-native-gesture-handler";
import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

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
const Drawer = createDrawerNavigator();

function Drawernev() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={OnBoardScreen} />

      <Drawer.Screen name="TourGuide" component={TourGuide} />

      <Drawer.Screen name="Started" component={Started} />

      <Drawer.Screen name="HomeScreen" component={HomeScreen} />

      <Drawer.Screen name="TourguideBoard" component={TourguideBoard} />

      <Drawer.Screen name="TourguideFind" component={TourguideFind} />

      <Drawer.Screen name="TourPlanner" component={TourPlanner} />

      <Drawer.Screen name="BudgetEstimate" component={BudgetEstimate} />

      <Drawer.Screen name="LoginScreen" component={LoginScreen} />

      <Drawer.Screen name="RegisterScreen" component={RegisterScreen} />

      <Drawer.Screen name="Shared" component={Shared} />

      <Drawer.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          drawerItemStyle: { height: 0 },
        }}
      />

      <Drawer.Screen name="TourGuideDetails" component={TourGuideDetails} />

      <Drawer.Screen name="Caronboardscreen" component={Caronboardscreen} />

      <Drawer.Screen name="Booking" component={Booking} />

      <Drawer.Screen name="CarDetailsScreen" component={CarDetailsScreen} />

      <Drawer.Screen name="ForgetPassword" component={ForgetPassword} />

      <Drawer.Screen name="NewPass" component={NewPass} />

      <Drawer.Screen name="ForgetCode" component={ForgetCode} />

      <Drawer.Screen name="CreateTour" component={CreateTour} />

      <Drawer.Screen name="Userprofile" component={Userprofile} />

      <Drawer.Screen name="CarHomeScreen" component={CarHomeScreen} />

      <Drawer.Screen name="Tripbooking" component={Tripbooking} />
    </Drawer.Navigator>
  );
}

export default Drawernev;
