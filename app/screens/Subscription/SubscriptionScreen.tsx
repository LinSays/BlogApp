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

import navigationOptions from "./SubscriptionScreen.navigationOptions";
import styles from "./SubscriptionScreen.styles";

const SubscriptionScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const [isOnWebPushNotification, setIsOnWebPushNotification] = useState(true);
  const [isOnMobilePushNotification, setIsOnMobilePushNotification] = useState(false);
  const [isOnFacebookMessenger, setIsOnFacebookMessenger] = useState(true);
  const [isOnEmail, setIsOnEmail] = useState(true);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.mainBackground }}>
      <LinearGradient
        colors={["#F3F9F3", "#FFFFFF"]}
        style={styles.linearGradient}
      ></LinearGradient>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text.Header style={styles.headerTtle}>{"My Subscription"}</Text.Header>
          <TouchableOpacity style={styles.back_btn}>
            <Ionicons
              name="chevron-back-outline"
              size={20}
              color={Colors.blackGrey}
              onPress={() => navigator.goBack()}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.channelContainer}>
          <Text.Primary style={styles.optionHeader}>{"Channel"}</Text.Primary>
          <TouchableOpacity
            style={{ marginBottom: 10 }}
            onPress={() => navigator.openCustomizeNotification()}
          >
            <Text.Primary style={styles.newScreenBtn}>{"Customize notification"}</Text.Primary>
            <Ionicons
              name="chevron-forward-outline"
              size={20}
              color={Colors.blackGrey}
              style={{ position: "absolute", right: 20, top: 14 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigator.openCustomizeByCategories()}>
            <Text.Primary style={styles.newScreenBtn}>{"Customize by categories"}</Text.Primary>
            <Ionicons
              name="chevron-forward-outline"
              size={20}
              color={Colors.blackGrey}
              style={{ position: "absolute", right: 20, top: 14 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.receiveOn}>
          <Text.Primary style={styles.optionHeader}>{"Receive On"}</Text.Primary>
          <View style={styles.settingSwitch}>
            <Text.Primary style={styles.newScreenBtn}>{"Web push notification"}</Text.Primary>
            <ToggleSwitch
              isOn={isOnWebPushNotification}
              onColor={Colors.green}
              offColor={Colors.inactive}
              size="default"
              onToggle={(isOnWebPushNotification) => {
                setIsOnWebPushNotification(isOnWebPushNotification);
              }}
              style={styles.switch}
            />
          </View>
          <View style={styles.settingSwitch}>
            <Text.Primary style={styles.newScreenBtn}>{"Mobile push notification"}</Text.Primary>
            <ToggleSwitch
              isOn={isOnMobilePushNotification}
              onColor={Colors.green}
              offColor={Colors.inactive}
              size="default"
              onToggle={(isOnMobilePushNotification) => {
                setIsOnMobilePushNotification(isOnMobilePushNotification);
              }}
              style={styles.switch}
            />
          </View>
          <View style={styles.settingSwitch}>
            <Text.Primary style={styles.newScreenBtn}>{"Facebook messenger"}</Text.Primary>
            <ToggleSwitch
              isOn={isOnFacebookMessenger}
              onColor={Colors.green}
              offColor={Colors.inactive}
              size="default"
              onToggle={(isOnFacebookMessenger) => {
                setIsOnFacebookMessenger(isOnFacebookMessenger);
              }}
              style={styles.switch}
            />
          </View>
          <View style={styles.settingSwitch}>
            <Text.Primary style={styles.newScreenBtn}>{"Email"}</Text.Primary>
            <ToggleSwitch
              isOn={isOnEmail}
              onColor={Colors.green}
              offColor={Colors.inactive}
              size="default"
              onToggle={(isOnEmail) => {
                setIsOnEmail(isOnEmail);
              }}
              style={styles.switch}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <Text.Primary style={styles.mainBtn}>{"Save Subscription"}</Text.Primary>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text.Primary style={styles.deleteSubscription}>
              {"Delete my subscription"}
            </Text.Primary>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

SubscriptionScreen.navigationOptions = navigationOptions();

export default SubscriptionScreen;
