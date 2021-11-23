import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../../../screens/Home";

const Stack = createStackNavigator();

const HomeNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen name="Home" options={HomeScreen.navigationOptions} component={HomeScreen} />
  </Stack.Navigator>
);

export default HomeNavigator;
