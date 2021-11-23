import { StyleSheet } from "react-native";

import { Layout, Font, Colors } from "style";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithGradient,
  },
  monthlyBudgetButton: {
    marginVertical: 6,
  },
  linearGradient: {
    height: "100%",
    width: 120,
    position: "absolute",
    alignSelf: "flex-end",
    zIndex: 0,
  },
  searchBar: {
    height: 48,
    borderRadius: 12,
    borderColor: "#E5E5E5",
    borderWidth: 1,
    backgroundColor: Colors.white,
    paddingLeft: 24,
    paddingRight: 16,
    fontSize: Font.FontSize.Secondary,
    fontFamily: Font.FontFamily.Poppin,
    color: "#5E667C",
  },
  SearchbarContainer: {
    marginVertical: 20,
  },
  sectionHeader: {
    fontWeight: "800",
    fontSize: 18,
    color: "#f4f4f4",
    marginTop: 20,
    marginBottom: 5,
  },
  categories: {
    display: "flex",
    flexDirection: "row",
    paddingRight: 30,
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 20,
    color: "#13204C",
  },
  recentPost: {
    fontSize: Font.FontSize.H3,
    marginTop: 25,
    marginBottom: 16,
    lineHeight: Font.FontLineHeight.Primary,
  },
});
