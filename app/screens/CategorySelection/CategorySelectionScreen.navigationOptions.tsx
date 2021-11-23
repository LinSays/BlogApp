import { StackNavigationOptions } from "@react-navigation/stack";

import { Colors, ComponentsStyle } from "style";

const navigationOptions = (): StackNavigationOptions => ({
  ...ComponentsStyle.transitionBetweenScreenPresets,
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerBackTitleVisible: true,
  headerTintColor: Colors.grey,
  headerShown: false,
});

export default navigationOptions;
