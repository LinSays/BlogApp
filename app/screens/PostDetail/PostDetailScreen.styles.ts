import { StyleSheet } from "react-native";
import { fonts } from "react-native-elements/dist/config";
import { white } from "react-native-paper/lib/typescript/styles/colors";

import { Colors, Font, Layout } from "style";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: Colors.transparent,
  },
  image: {
    width: "100%",
    height: 405,
    position: "absolute",
    top: 0,
    left: 0,
  },
  header: {
    width: "100%",
    marginTop: 56,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  rightActions: { alignSelf: "flex-end", display: "flex", flexDirection: "row" },
  rightAction: { marginLeft: 18 },
  short_info: {
    marginTop: 133,
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  category: {
    color: Colors.white,
    paddingVertical: 5,
    paddingHorizontal: 12,
    backgroundColor: "#1D223480",
    alignSelf: "flex-start",
    borderRadius: 15,
    marginBottom: 12,
  },
  title: {
    paddingHorizontal: 14,
    borderLeftWidth: 3,
    borderLeftColor: Colors.green,
    color: Colors.white,
    fontWeight: "400",
    fontFamily: Font.FontFamily.Poppin,
    paddingVertical: 0,
    fontSize: 24,
    lineHeight: 28,
    textAlign: "auto",
    marginBottom: 11,
  },
  comments_number: {
    display: "flex",
    flexDirection: "row",
    marginRight: 24,
  },
  seen_number: {
    display: "flex",
    flexDirection: "row",
  },
  numberstyle: {
    fontSize: 12,
    color: Colors.white,
    marginLeft: 9,
  },
  content: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: Colors.white,
    padding: 20,
  },
  author_date: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 36,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 10,
  },

  author: {
    paddingRight: 15,
    borderRightColor: "#EBEBEB",
    borderRightWidth: 1,
    height: "auto",
    textAlignVertical: "center",
    fontWeight: "500",
  },
  publish_date: {
    textAlignVertical: "center",
    fontWeight: "400",
  },
  mainContent: {
    display: "flex",
    flexDirection: "column",
  },
  content_initialletter: {
    fontSize: 64,
    lineHeight: 70,
    textAlignVertical: "top",
    paddingTop: 44,
  },
  content_img: {
    borderRadius: 12,
    borderColor: "#E2E6F1",
    borderWidth: 1,
  },
  postImg: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  comments: {
    marginTop: 25,
  },
  comments_header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  viewComments: {
    alignSelf: "flex-end",
    color: Colors.green,
  },
  mainBtn: {
    color: Colors.white,
    width: "100%",
    paddingVertical: 13,
    backgroundColor: Colors.darkGreen,
    textAlign: "center",
    borderRadius: 30,
    marginBottom: 30,
  },
  moreBlogs: {},
});

export default styles;
