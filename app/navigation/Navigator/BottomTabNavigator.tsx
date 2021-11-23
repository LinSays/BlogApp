/* eslint-disable prettier/prettier */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { t } from "utils";
import { Colors, Font } from "style";
import { Icon } from "components";

import HomeNavigator from "./BottomTab/HomeNavigator";
import SettingsNavigator from "./BottomTab/SettingsNavigator";
import CategoriesNavigator from "./BottomTab/CategoriesNavigator";
import SaveNavigator from "./BottomTab/SaveNavigator";
import NotificationNavigator from "./BottomTab/NotficationNavigator";


const BottomTab = createBottomTabNavigator();

const HomeOptions = {
  tabBarLabel: t("HOME_SCREEN_TAB_NAME"),
  tabBarIcon: ({ focused }) => <Icon fill="none" width="24" height="24"  name={focused ? "Home_active" : "Home"} />,
};

const CategoriesOptions = {
  tabBarLabel: t("CATEGORY_NAVIGATION_TITLE"),
  tabBarIcon: ({ focused }) => <Icon fill="none" width="24" height="24"  name={focused ? "Categories_active" : "Categories"}/>,
};

const SaveOptions = {
  tabBarLabel: "Save",
  tabBarIcon: ({ focused }) => <Icon fill="none" width="24" height="24"  name={focused ? "Save_active" : "Save"} />,
};

const NotificationOptions = {
  tabBarLabel: "Notification",
  tabBarIcon: ({ focused }) => <Icon fill="none" width="24" height="24"  name={focused ? "Notification_active" : "Notification"} />,
};

const SettingsOptions = {
  tabBarLabel: "Setting",
  tabBarIcon: ({ focused }) => <Icon fill="none" width="24" height="24"  name={focused ? "Settings_active" : "Settings"} />,
};



const BottomTabNavigator = (): React.ReactElement => {
  const { bottom } = useSafeAreaInsets();
  return (
      <BottomTab.Navigator
      initialRouteName={"HomeNavigator"}
      
      tabBarOptions={{
        activeTintColor: Colors.active,
        inactiveTintColor: Colors.inactive,
        keyboardHidesTabBar: true,
        style: {
          backgroundColor:Colors.white,
          borderTopWidth: 0,
          shadowColor:"rgba(200, 206, 220, 0.15)",
          shadowOffset:{width:0, height:-10},
          shadowRadius:50,
          elevation:3,
          padding:0,
          height:70
        },
        labelStyle:{
          fontFamily: Font.FontFamily.Poppin,
          fontSize: Font.FontSize.Small+2,
          lineHeight: Font.FontLineHeight.Secondary,
          fontWeight: "500",
          position:"relative",
        },
        iconStyle:{
          marginTop:10
        },
        tabStyle:{
          paddingVertical:10
        }
      }}
      >
        <BottomTab.Screen name="HomeNavigator" options={HomeOptions} component={HomeNavigator} />

        <BottomTab.Screen name="CategoriesNavigator" options={CategoriesOptions} component={CategoriesNavigator}/>

        <BottomTab.Screen name="SaveNavigator"  options={SaveOptions}  component={SaveNavigator}/>

        <BottomTab.Screen name="Notification" options={NotificationOptions} component={NotificationNavigator} />

        <BottomTab.Screen name="SettingsNavigator"  options={SettingsOptions}  component={SettingsNavigator}/>
        
      </BottomTab.Navigator>
    
    
  );
};

export default BottomTabNavigator;
