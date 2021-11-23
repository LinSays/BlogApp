import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SaveScreen from "../../../screens/Save";

const Stack = createStackNavigator();

const SaveNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen name="Save" options={SaveScreen.navigationOptions} component={SaveScreen} />
  </Stack.Navigator>
);

export default SaveNavigator;
