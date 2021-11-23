import React from "react";
import { StackNavigationOptions } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

import { Text } from "components";
import { t } from "utils";
import { Colors, ComponentsStyle } from "style";

const navigationOptions = (): StackNavigationOptions => ({
  ...ComponentsStyle.transitionBetweenScreenPresets,
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerBackTitleVisible: false,
  headerTintColor: Colors.grey100,
  headerShown: false,
  headerRight: () => (
    <LinearGradient
      colors={["#F2F9F2", "#F3F9F3"]}
      style={{
        height: "100%",
        width: 120,
        position: "absolute",
        alignSelf: "flex-end",
        zIndex: 0,
      }}
    ></LinearGradient>
  ),
});

export default navigationOptions;
