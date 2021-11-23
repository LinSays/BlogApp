import { StyleSheet } from "react-native";

import { Layout, Colors, Font } from "style";

export default StyleSheet.create({
  image: {
    borderRadius: 15,
    width: "100%",
  },
  container: {
    paddingHorizontal: 0,
    marginBottom: 10,
  },
  overlay: {
    flex: 1,
    position: "absolute",
    opacity: 0.3,
    backgroundColor: "black",
    width: "100%",
    borderRadius: 15,
    height: "100%",
  },
  bannerContainer: {
    position: "absolute",
    top: "45%",
    left: 20,
    marginRight: 80,
  },

  bannerTitle: {
    color: Colors.white,
    fontWeight: "500",
    fontFamily: Font.FontFamily.Poppin,
    lineHeight: 24,
    marginBottom: 10,
    fontSize: Font.FontSize.H3,
  },
  bannerDate: {
    color: Colors.white,
    fontWeight: "400",
    fontFamily: Font.FontFamily.Poppin,
    lineHeight: 18,
    fontSize: Font.FontSize.Secondary,
  },
});
