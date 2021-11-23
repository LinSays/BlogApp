import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingsScreen from "../../../screens/Settings";

const Stack = createStackNavigator();

const SettingsNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="Settings"
      options={SettingsScreen.navigationOptions}
      component={SettingsScreen}
    />
  </Stack.Navigator>
);

export default SettingsNavigator;
