import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Icon, Text, TextInput } from "components";
import { Colors, Font } from "style";

import navigationOptions from "./SignInScreen.navigationOptions";
import styles from "./SignInScreen.styles";

const SignInScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  const [userName, setUserName] = useState<string>("");

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
          <Text.Header style={styles.headerTtle}>{"Login Account"}</Text.Header>
          <Text.Primary style={styles.headerDesc}>
            {"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
          </Text.Primary>
        </View>
        <Text.Primary style={styles.inputTitle}>{"Username"}</Text.Primary>
        <View style={{ marginBottom: 20 }}>
          <TextInput
            placeholder={"Enter your username"}
            isOptional={false}
            title={""}
            value={""}
            background={Colors.transparent}
            borderColor={Colors.grey}
          />
        </View>
        <Text.Primary style={styles.inputTitle}>{"Password"}</Text.Primary>
        <View>
          <TextInput
            placeholder={"Enter your password"}
            isOptional={false}
            title={""}
            value={""}
            background={Colors.transparent}
            borderColor={Colors.grey}
          />
          <TouchableOpacity style={{ position: "absolute", top: 17, right: 16 }}>
            <Ionicons name="eye-outline" size={24} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text.Primary style={styles.forgotPass}>{"Forgot your password?"}</Text.Primary>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginBottom: 25 }}>
          <Text.Primary style={styles.mainBtn}>{"Login"}</Text.Primary>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1, height: 1, backgroundColor: "#EBEBEB" }} />
          <View>
            <Text.Primary style={{ width: 50, textAlign: "center" }}>Or</Text.Primary>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: "#EBEBEB" }} />
        </View>
        <View style={styles.signinGroup}>
          <TouchableOpacity style={styles.signInGoogle}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Icon name="Apple" width="24" height="24" style={{ marginRight: 14 }} />
              <Text.Primary style={styles.signIn}>{"Login with Apple ID"}</Text.Primary>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signInGoogle}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Icon name="Facebook" width="24" height="24" style={{ marginRight: 14 }} />
              <Text.Primary style={styles.signIn}>{"Login with Facebook"}</Text.Primary>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signInGoogle}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Icon name="Google" width="24" height="24" style={{ marginRight: 14 }} />
              <Text.Primary style={styles.signIn}>{"Login with Google"}</Text.Primary>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.register}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text.Primary style={{ marginRight: 5 }}>{"Don???t have an account?"}</Text.Primary>
            <TouchableOpacity onPress={() => navigator.openSignUp()}>
              <Text.Primary style={{ color: Colors.darkGreen }}>{"Register"}</Text.Primary>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

SignInScreen.navigationOptions = navigationOptions();

export default SignInScreen;
