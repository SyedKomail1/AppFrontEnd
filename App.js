import "react-native-gesture-handler";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";

import Drawernev from "./navigation/Drawernev";

function App() {
  return (
    <NavigationContainer>
      <Drawernev />
    </NavigationContainer>
  );
}

export default App;
