import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import ToggleSwitch from "toggle-switch-react-native";

import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Text } from "components";
import { Colors } from "style";

import navigationOptions from "./CustomizeNotificationScreen.navigationOptions";
import styles from "./CustomizeNotificationScreen.styles";

const CustomizeNotificationScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const [isOnOffers, setIsOnOffers] = useState(true);
  const [isOnNewArrivals, setIsOnNewArrivals] = useState(true);
  const [isOnCoupons, setIsOnCoupons] = useState(false);
  const [isOnOurNews, setIsOnOurNews] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: Colors.mainBackground }}>
      <LinearGradient
        colors={["#F3F9F3", "#FFFFFF"]}
        style={styles.linearGradient}
      ></LinearGradient>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text.Header style={styles.headerTtle}>{"Customize notification"}</Text.Header>
          <TouchableOpacity style={styles.back_btn}>
            <Ionicons
              name="chevron-back-outline"
              size={20}
              color={Colors.blackGrey}
              onPress={() => navigator.goBack()}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.receiveOn}>
          <View style={styles.settingSwitch}>
            <Text.Primary style={styles.newScreenBtn}>{"Web push notification"}</Text.Primary>
            <ToggleSwitch
              isOn={isOnOffers}
              onColor={Colors.green}
              offColor={Colors.inactive}
              size="default"
              onToggle={(isOnOffers) => {
                setIsOnOffers(isOnOffers);
              }}
              style={styles.switch}
            />
          </View>
          <View style={styles.settingSwitch}>
            <Text.Primary style={styles.newScreenBtn}>{"Mobile push notification"}</Text.Primary>
            <ToggleSwitch
              isOn={isOnNewArrivals}
              onColor={Colors.green}
              offColor={Colors.inactive}
              size="default"
              onToggle={(isOnNewArrivals) => {
                setIsOnNewArrivals(isOnNewArrivals);
              }}
              style={styles.switch}
            />
          </View>
          <View style={styles.settingSwitch}>
            <Text.Primary style={styles.newScreenBtn}>{"Facebook messenger"}</Text.Primary>
            <ToggleSwitch
              isOn={isOnCoupons}
              onColor={Colors.green}
              offColor={Colors.inactive}
              size="default"
              onToggle={(isOnCoupons) => {
                setIsOnCoupons(isOnCoupons);
              }}
              style={styles.switch}
            />
          </View>
          <View style={styles.settingSwitch}>
            <Text.Primary style={styles.newScreenBtn}>{"Email"}</Text.Primary>
            <ToggleSwitch
              isOn={isOnOurNews}
              onColor={Colors.green}
              offColor={Colors.inactive}
              size="default"
              onToggle={(isOnOurNews) => {
                setIsOnOurNews(isOnOurNews);
              }}
              style={styles.switch}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <Text.Primary style={styles.mainBtn}>{"Save Changes"}</Text.Primary>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

CustomizeNotificationScreen.navigationOptions = navigationOptions();

export default CustomizeNotificationScreen;
