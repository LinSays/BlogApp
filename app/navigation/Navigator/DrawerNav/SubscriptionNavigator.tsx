import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CustomizeNotificationScreen from "../../../screens/CustomizeNotification";
import SubscriptionScreen from "../../../screens/Subscription";
import PostListScreen from "../../../screens/PostList";
import CustomizeByCategoriesScreen from "../../../screens/CustomizeByCategories";

const Stack = createStackNavigator();

const SubscriptionNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="CategorySelection"
      options={SubscriptionScreen.navigationOptions}
      component={SubscriptionScreen}
    />
    <Stack.Screen
      name="CustomizeNotification"
      options={CustomizeNotificationScreen.navigationOptions}
      component={CustomizeNotificationScreen}
    />
    <Stack.Screen
      name="CustomizeByCategories"
      options={CustomizeByCategoriesScreen.navigationOptions}
      component={CustomizeByCategoriesScreen}
    />
  </Stack.Navigator>
);

export default SubscriptionNavigator;
