import { StyleSheet } from "react-native";

import { Colors, Font } from "style";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    alignItems: "center",
    borderRadius: 10,
    height: 60,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    textTransform: "capitalize",
    color: Colors.white,
    position: "absolute",
    top: 18,
    left: 18,
    fontFamily: Font.FontFamily.Poppin,
    fontSize: Font.FontSize.Primary,
    fontWeight: "500",
    lineHeight: Font.FontLineHeight.H2,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
  },
  detail: {
    position: "absolute",
    top: 18,
    right: 24,
  },
});
