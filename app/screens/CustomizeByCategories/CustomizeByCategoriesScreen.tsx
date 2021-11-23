import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import ToggleSwitch from "toggle-switch-react-native";

import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Text } from "components";
import { Colors } from "style";

import navigationOptions from "./CustomizeByCategoriesScreen.navigationOptions";
import styles from "./CustomizeByCategoriesScreen.styles";

const CustomizeByCategoriesScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const [isOnAutomotive, setIsOnAutomotive] = useState(true);
  const [isOnBaby, setIsOnBaby] = useState(true);
  const [isOnFood, setIsOnFood] = useState(false);
  const [isOnSports, setIsOnSports] = useState(false);
  const [isOnTravels, setIsOnTravels] = useState(false);
  const [isOnMusic, setIsOnMusic] = useState(false);
  const [isOnFitness, setIsOnFitness] = useState(false);
  const [isOnMoney, setIsOnMoney] = useState(false);
  const [isOnHealth, setIsOnHealth] = useState(false);
  const [isOnSoftware, setIsOnSoftware] = useState(false);
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
            <Text.Primary style={styles.newScreenBtn}>{"Automotive"}</Text.Primary>
            <ToggleSwitch
              isOn={isOnAutomotive}
              onColor={Colors.green}
              offColor={Colors.inactive}
              size="default"
              onToggle={(isOnAutomotive) => {
                setIsOnAutomotive(isOnAutomotive);
              }}
              style={styles.switch}
            />
          </View>
          <View style={styles.settingSwitch}>
            <Text.Primary style={styles.newScreenBtn}>{"Baby & toddler"}</Text.Primary>
            <ToggleSwitch
              isOn={isOnBaby}
              onColor={Colors.green}
              offColor={Colors.inactive}
              size="default"
              onToggle={(isOnBaby) => {
                setIsOnBaby(isOnBaby);
              }}
              style={styles.switch}
            />
          </View>
          <View style={styles.settingSwitch}>
            <Text.Primary style={styles.newScreenBtn}>{"Foods"}</Text.Primary>
            <ToggleSwitch
              isOn={isOnFood}
              onColor={Colors.green}
              offColor={Colors.inactive}
              size="default"
              onToggle={(isOnFood) => {
                setIsOnFood(isOnFood);
              }}
              style={styles.switch}
            />
          </View>
          <View style={styles.settingSwitch}>
            <Text.Primary style={styles.newScreenBtn}>{"Sport & Outdors"}</Text.Primary>
            <ToggleSwitch
              isOn={isOnSports}
              onColor={Colors.green}
              offColor={Colors.inactive}
              size="default"
              onToggle={(isOnSports) => {
                setIsOnSports(isOnSports);
              }}
              style={styles.switch}
            />
          </View>
          <View style={styles.settingSwitch}>
            <Text.Primary style={styles.newScreenBtn}>{"Travels"}</Text.Primary>
            <ToggleSwitch
              isOn={isOnTravels}
              onColor={Colors.green}
              offColor={Colors.inactive}
              size="default"
              onToggle={(isOnTravels) => {
                setIsOnTravels(isOnTravels);
              }}
              style={styles.switch}
            />
          </View>
          <View style={styles.settingSwitch}>
            <Text.Primary style={styles.newScreenBtn}>{"Music & Entertainment"}</Text.Primary>
            <ToggleSwitch
              isOn={isOnMusic}
              onColor={Colors.green}
              offColor={Colors.inactive}
              size="default"
              onToggle={(isOnMusic) => {
                setIsOnMusic(isOnMusic);
              }}
              style={styles.switch}
            />
          </View>
          <View style={styles.settingSwitch}>
            <Text.Primary style={styles.newScreenBtn}>{"Fitness"}</Text.Primary>
            <ToggleSwitch
              isOn={isOnFitness}
              onColor={Colors.green}
              offColor={Colors.inactive}
              size="default"
              onToggle={(isOnFitness) => {
                setIsOnFitness(isOnFitness);
              }}
              style={styles.switch}
            />
          </View>
          <View style={styles.settingSwitch}>
            <Text.Primary style={styles.newScreenBtn}>{"Money & Finance"}</Text.Primary>
            <ToggleSwitch
              isOn={isOnMoney}
              onColor={Colors.green}
              offColor={Colors.inactive}
              size="default"
              onToggle={(isOnMoney) => {
                setIsOnMoney(isOnMoney);
              }}
              style={styles.switch}
            />
          </View>
          <View style={styles.settingSwitch}>
            <Text.Primary style={styles.newScreenBtn}>{"Health & Beauty"}</Text.Primary>
            <ToggleSwitch
              isOn={isOnHealth}
              onColor={Colors.green}
              offColor={Colors.inactive}
              size="default"
              onToggle={(isOnHealth) => {
                setIsOnHealth(isOnHealth);
              }}
              style={styles.switch}
            />
          </View>
          <View style={styles.settingSwitch}>
            <Text.Primary style={styles.newScreenBtn}>{"Software"}</Text.Primary>
            <ToggleSwitch
              isOn={isOnSoftware}
              onColor={Colors.green}
              offColor={Colors.inactive}
              size="default"
              onToggle={(isOnSoftware) => {
                setIsOnSoftware(isOnSoftware);
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

CustomizeByCategoriesScreen.navigationOptions = navigationOptions();

export default CustomizeByCategoriesScreen;
