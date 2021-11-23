import { StyleSheet } from "react-native";

import { Colors, Font } from "style";

export default StyleSheet.create({
  red: {
    color: Colors.red,
  },
  orange: {
    color: Colors.apricot,
  },
  darkGray: {
    color: Colors.darkGrey,
  },
  lightGray: {
    color: Colors.grey,
  },
  green: {
    color: Colors.green,
  },
  white: {
    color: Colors.white,
  },
  blue50: {
    color: Colors.blue50,
  },
  bold: {
    fontFamily: Font.FontFamily.Poppin,
    fontWeight: "500",
  },
  lightWeightText: {
    fontFamily: Font.FontFamily.Poppin,
    fontWeight: "400",
  },
  center: {
    textAlign: "center",
  },
});
