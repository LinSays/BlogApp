import { StyleSheet } from "react-native";

import { Colors, Font, Layout } from "style";

const styles = StyleSheet.create({
  container: {
    ...Layout.containerWithGradient,
  },
  linearGradient: {
    height: "100%",
    width: 120,
    position: "absolute",
    alignSelf: "flex-end",
    zIndex: 0,
  },
  header: {
    marginBottom: 42,
    marginTop: 56,
  },
  headerTtle: {
    marginTop: 33,
    textAlign: "left",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 27,
    color: Colors.blackGrey,
  },
  headerDesc: {
    marginTop: 15,
  },
  inputTitle: {
    marginBottom: 10,
    color: Colors.darkGrey,
  },
  forgotPass: {
    marginTop: 20,
    textAlign: "right",
    marginBottom: 25,
  },
  mainBtn: {
    color: Colors.white,
    width: "100%",
    paddingVertical: 13,
    backgroundColor: Colors.darkGreen,
    textAlign: "center",
    borderRadius: 30,
    marginBottom: 0,
  },
  signinGroup: {
    marginVertical: 20,
  },
  signInGoogle: {
    width: "100%",
    paddingVertical: 13,
    backgroundColor: Colors.transparent,
    borderRadius: 30,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#BFC6D2",
    marginHorizontal: "auto",
    alignSelf: "center",
    alignItems: "center",
  },
  signIn: {
    color: "#62718F",
    textAlignVertical: "center",
    textAlign: "center",
  },
  register: {
    width: "100%",
    backgroundColor: Colors.transparent,
    marginBottom: 15,
    marginHorizontal: "auto",
    alignSelf: "center",
    alignItems: "center",
  },
  registerBtn: {},
});

export default styles;
