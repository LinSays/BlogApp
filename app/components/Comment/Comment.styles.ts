import { StyleSheet } from "react-native";

import { Layout, Colors, Font } from "style";

export default StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 20,
    borderBottomColor: "#E2E6F1",
    borderBottomWidth: 1,
  },
  user_info: {
    display: "flex",
    flexDirection: "row",
  },
  avatar: {
    marginRight: 14,
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  userId: {
    color: Colors.darkGrey,
    fontWeight: "500",
    fontSize: Font.FontSize.Primary,
    fontFamily: Font.FontFamily.Poppin,
    lineHeight: Font.FontLineHeight.Secondary,
    textAlignVertical: "center",
    width: "100%",
    marginBottom: 4,
  },
  publishDate: {
    display: "flex",
    flexDirection: "row",
  },
  content: {
    fontFamily: Font.FontFamily.Poppin,
    fontWeight: "400",
    fontSize: Font.FontSize.Primary,
    lineHeight: Font.FontLineHeight.Primary,
    color: Colors.grey,
    marginTop: 10,
  },
});
