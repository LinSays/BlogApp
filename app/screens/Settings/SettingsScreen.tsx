import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import ToggleSwitch from "toggle-switch-react-native";
import * as FeatherIcon from "react-native-feather";

import { t } from "utils";
import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Colors } from "style";
import { Icon, Text, TextInput } from "components";

import styles from "./SettingsScreen.styles";
import navigationOptions from "./SettingsScreen.navigationOptions";

const SettingsScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const [isOnNotification, setIsOnNotification] = useState(true);
  const [isOnLocation, setIsOnLocation] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.mainBackground }}>
      <LinearGradient
        colors={["#F3F9F3", "#FFFFFF"]}
        style={styles.linearGradient}
      ></LinearGradient>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={{ marginRight: 16 }}>
            <Icon
              name="Settings_active"
              width={"24"}
              height={"24"}
              fill={"none"}
              onPress={() => navigator.goBack()}
            />
          </TouchableOpacity>
          <Text.Header style={styles.headerTitle}>{"Setting"}</Text.Header>
        </View>
        <View style={styles.website}>
          <Text.Primary style={{ fontSize: 15, color: Colors.blackGrey, marginBottom: 16 }}>
            {"Website"}
          </Text.Primary>
          <View>
            <TextInput
              placeholder={"https://smartiolabs.com"}
              isOptional={false}
              title={""}
              value={""}
              background={Colors.white}
              borderColor={Colors.transparent}
            ></TextInput>
            <TouchableOpacity style={{ position: "absolute", top: 21, right: 16 }}>
              <Icon name="Copy" width="24" height="24" fill="none" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.channelContainer}>
          <Text.Primary style={styles.optionHeader}>{"About"}</Text.Primary>
          <TouchableOpacity style={{ marginBottom: 10 }}>
            <Text.Primary style={styles.newScreenBtn}>{"I’m author and father."}</Text.Primary>
            <Ionicons
              name="chevron-forward-outline"
              size={20}
              color={Colors.blackGrey}
              style={{ position: "absolute", right: 20, top: 14 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text.Primary style={styles.newScreenBtn}>{"Select your language"}</Text.Primary>
            <Ionicons
              name="chevron-forward-outline"
              size={20}
              color={Colors.blackGrey}
              style={{ position: "absolute", right: 20, top: 14 }}
            />
            <Text.Secondary
              style={{ position: "absolute", top: 15, right: 44, color: Colors.inactive }}
            >
              {"English"}
            </Text.Secondary>
          </TouchableOpacity>
          <View style={styles.settingSwitch}>
            <Text.Primary style={styles.newScreenBtn}>{"Notification"}</Text.Primary>
            <ToggleSwitch
              isOn={isOnNotification}
              onColor={Colors.green}
              offColor={Colors.inactive}
              size="default"
              onToggle={(isOnNotification) => {
                setIsOnNotification(isOnNotification);
              }}
              style={styles.switch}
            />
          </View>
          <View style={styles.settingSwitch}>
            <Text.Primary style={styles.newScreenBtn}>{"Location"}</Text.Primary>
            <ToggleSwitch
              isOn={isOnLocation}
              onColor={Colors.green}
              offColor={Colors.inactive}
              size="default"
              onToggle={(isOnLocation) => {
                setIsOnLocation(isOnLocation);
              }}
              style={styles.switch}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.logoutBtn}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <FeatherIcon.LogOut
                width="24"
                height="24"
                color={Colors.red}
                style={{ marginRight: 10 }}
              />
              <Text.Primary style={styles.logout}>{"Log out"}</Text.Primary>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text.Primary style={styles.transparentBtn}>{"Rate App"}</Text.Primary>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text.Primary style={styles.transparentBtn}>{"Privacy policy"}</Text.Primary>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

SettingsScreen.navigationOptions = navigationOptions();

export default SettingsScreen;
