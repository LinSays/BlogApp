import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Button, Linking, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { FontDisplay } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { Icon, Text } from "components";
import { Colors, Layout } from "style";

import AppStackNavigator from "./AppStackNavigator";
import styles from "./navigator.styles";
import CategoriesNavigator from "./BottomTab/CategoriesNavigator";
import SubscriptionNavigator from "./DrawerNav/SubscriptionNavigator";
import SignInNavigator from "./DrawerNav/SignInNavigator";

const Drawer = createDrawerNavigator();
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Text.H1 style={Layout.androidNavTitle}>Menu</Text.H1>
        <TouchableOpacity
          onPress={() => {
            props.navigation.toggleDrawer();
          }}
          activeOpacity={0.7}
        >
          <Ionicons name={"close-outline"} size={30} />
        </TouchableOpacity>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
const DrawerNavigator = () => {
  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ navigation }) => ({
        drawerStyle: isLargeScreen ? null : { width: "70%" },
        headerLeft: (props) => (
          <TouchableOpacity
            onPress={() => {
              navigation.toggleDrawer();
            }}
            activeOpacity={0.7}
          >
            <Icon
              fill="none"
              width="24"
              height="24"
              name={"Menu"}
              style={{ paddingHorizontal: 30 }}
            />
          </TouchableOpacity>
        ),
        headerShown: false,
        headerStyle: {
          backgroundColor: Colors.white,
          borderWidth: 0,
          elevation: 0,
          height: 72,
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: Colors.red,
        },
        drawerItemStyle: {
          width: "100%",
          marginLeft: 0,
          borderRadius: 0,
        },
        drawerInactiveBackgroundColor: Colors.white,
        drawerActiveBackgroundColor: Colors.lightGreen,
        drawerActiveTintColor: Colors.green,
      })}
    >
      <Drawer.Screen
        name="Home"
        component={AppStackNavigator}
        options={{
          title: "Home",
          drawerIcon: ({ focused, size }) => (
            <Icon
              fill="none"
              width="24"
              height="24"
              name={focused ? "Home_active" : "Home"}
              style={{ marginRight: -20 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Subscription"
        component={SubscriptionNavigator}
        options={{
          title: "Subscription",
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Icon
              fill="none"
              width="24"
              height="24"
              name={focused ? "Categories_active" : "Categories"}
              style={{ marginRight: -20 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="SignIn"
        component={SignInNavigator}
        options={{
          title: "SignIn",
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Icon
              fill="none"
              width="24"
              height="24"
              name={focused ? "Categories_active" : "Categories"}
              style={{ marginRight: -20 }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
