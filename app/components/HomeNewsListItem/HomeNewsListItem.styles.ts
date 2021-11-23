import { StyleSheet } from "react-native";

import { Layout, Colors, Font } from "style";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 15,
    marginRight: 20,
  },
  title: {
    fontFamily: Font.FontFamily.Poppin,
    fontWeight: "500",
    fontSize: Font.FontSize.Primary,
    lineHeight: 22,
    color: Colors.blackGrey,
    marginBottom: 10,
  },
  otherInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  author: {
    paddingRight: 15,
    borderRightColor: "#EBEBEB",
    borderRightWidth: 1,
    fontFamily: Font.FontFamily.Poppin,
    fontWeight: "400",
    fontSize: Font.FontSize.Secondary,
    lineHeight: 18,
    color: Colors.blackGrey,
  },
  publish: {
    paddingLeft: 15,
    borderRightColor: "#EBEBEB",
    fontFamily: Font.FontFamily.Poppin,
    fontWeight: "400",
    fontSize: Font.FontSize.Secondary,
    lineHeight: 18,
    color: Colors.blackGrey,
  },
});
