import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import NotificationScreen from "../../../screens/Notification";

const Stack = createStackNavigator();

const NotficationNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="NotificationScreen"
      options={NotificationScreen.navigationOptions}
      component={NotificationScreen}
    />
  </Stack.Navigator>
);

export default NotficationNavigator;
