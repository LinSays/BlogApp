import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignInScreen from "../../../screens/SignIn";
import SignUpScreen from "../../../screens/SignUp";

const Stack = createStackNavigator();

const SignInNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="SignInScreen"
      options={SignInScreen.navigationOptions}
      component={SignInScreen}
    />
    <Stack.Screen name="SignUp" options={SignUpScreen.navigationOptions} component={SignUpScreen} />
  </Stack.Navigator>
);

export default SignInNavigator;
