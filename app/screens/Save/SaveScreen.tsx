import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Text } from "components";
import { Colors } from "style";

import navigationOptions from "./SaveScreen.navigationOptions";
import styles from "./SaveScreen.styles";

const SaveScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.mainBackground }}>
      <LinearGradient
        colors={["#F3F9F3", "#FFFFFF"]}
        style={styles.linearGradient}
      ></LinearGradient>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons
              name="chevron-back-outline"
              size={20}
              color={Colors.blackGrey}
              onPress={() => navigator.goBack()}
            />
          </TouchableOpacity>
          <Text.Header style={styles.headerTtle}>{"Save"}</Text.Header>
        </View>
      </ScrollView>
    </View>
  );
};

SaveScreen.navigationOptions = navigationOptions();

export default SaveScreen;
