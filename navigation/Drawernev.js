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
import TopToursScreen from "../src/views/TopToursScreen";
import TopTours from "../src/views/TopTours";
import TopTours1 from "../src/views/TopTours1";
import TopTours2 from "../src/views/TopTours2";
import BudgetEstimateBoard from "../src/views/BudgetEstimateBoard";
import TourPlannerBoard from "../src/views/TourPlannerBoard";
import Category1 from "../src/views/Category1";
import Category2 from "../src/views/Category2";
import Category3 from "../src/views/Category3";
import Category4 from "../src/views/Category4";
import Contact from "../src/views/Contact";
import Review from "../src/views/Review";

import About from "../src/views/About";

const Drawer = createDrawerNavigator();

function Drawernev() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="OnBoardScreen" component={OnBoardScreen} />

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

      <Drawer.Screen name="TopToursScreen" component={TopToursScreen} />

      <Drawer.Screen name="TopTours" component={TopTours} />

      <Drawer.Screen name="TourPlannerBoard" component={TourPlannerBoard} />

      <Drawer.Screen name="TopTours1" component={TopTours1} />
      <Drawer.Screen name="TopTours2" component={TopTours2} />

      <Drawer.Screen name="Category1" component={Category1} />
      <Drawer.Screen name="Category2" component={Category2} />
      <Drawer.Screen name="Category3" component={Category3} />
      <Drawer.Screen name="Category4" component={Category4} />

      <Drawer.Screen
        name="BudgetEstimateBoard"
        component={BudgetEstimateBoard}
      />

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

      <Drawer.Screen name="Contact" component={Contact} />

      <Drawer.Screen name="Review" component={Review} />

      <Drawer.Screen name="About" component={About} />

      <Drawer.Screen name="Tripbooking" component={Tripbooking} />
    </Drawer.Navigator>
  );
}

export default Drawernev;
