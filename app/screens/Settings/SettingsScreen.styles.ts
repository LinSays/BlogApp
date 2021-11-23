import { StyleSheet } from "react-native";

import { Layout, Colors, Font } from "style";

export default StyleSheet.create({
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
  headerTitle: {
    textAlign: "left",
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 27,
  },
  header: {
    marginBottom: 26,
    marginTop: 56,
    display: "flex",
    flexDirection: "row",
  },
  website: {
    marginBottom: 25,
  },
  about: {
    marginBottom: 20,
  },

  channelContainer: {
    marginBottom: 25,
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
  optionHeader: {
    fontSize: 15,
    lineHeight: Font.FontLineHeight.Primary + 2,
    color: Colors.blackGrey,
    marginBottom: 16,
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
  logout: {
    color: Colors.red,
    textAlignVertical: "center",
    textAlign: "center",
  },
  transparentBtn: {
    color: Colors.inactive,
    width: "100%",
    backgroundColor: Colors.transparent,
    textAlign: "center",
    borderRadius: 30,
    marginBottom: 30,
  },
  logoutBtn: {
    width: "100%",
    paddingVertical: 13,
    backgroundColor: Colors.transparent,
    borderRadius: 30,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: Colors.red,
    marginHorizontal: "auto",
    alignSelf: "center",
    alignItems: "center",
  },
});
