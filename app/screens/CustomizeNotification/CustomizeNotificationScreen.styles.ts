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
  back_btn: {
    position: "absolute",
  },
  header: {
    marginBottom: 26,
    marginTop: 56,
  },
  headerTtle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 27,
  },
  newScreenBtn: {
    width: "100%",
    color: Colors.grey,
    fontSize: 13,
    paddingVertical: 14,
    paddingHorizontal: 18,
    backgroundColor: Colors.white,
    borderRadius: 12,
  },
  receiveOn: {
    marginBottom: 60,
  },
  settingSwitch: {
    marginBottom: 10,
  },
  switch: {
    position: "absolute",
    top: 15,
    right: 16,
    width: 40,
    height: 24,
    transform: [{ scaleX: 0.9 }, { scaleY: 1.2 }],
  },
  optionHeader: {
    fontSize: 15,
    lineHeight: Font.FontLineHeight.Primary + 2,
    color: Colors.blackGrey,
    marginBottom: 16,
  },
  mainBtn: {
    color: Colors.white,
    width: "100%",
    paddingVertical: 13,
    backgroundColor: Colors.darkGreen,
    textAlign: "center",
    borderRadius: 30,
    marginBottom: 10,
  },
  deleteSubscription: {
    color: Colors.red,
    width: "100%",
    paddingVertical: 13,
    backgroundColor: Colors.white,
    textAlign: "center",
    borderRadius: 30,
    marginBottom: 10,
  },
});

export default styles;
