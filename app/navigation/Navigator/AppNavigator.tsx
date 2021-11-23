import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./DrawerNavigator";

const App = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
