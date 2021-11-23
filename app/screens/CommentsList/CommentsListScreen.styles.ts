import { StyleSheet } from "react-native";
import { fonts } from "react-native-elements/dist/config";
import { white } from "react-native-paper/lib/typescript/styles/colors";

import { Colors, Font, Layout } from "style";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  linearGradient: {
    height: "100%",
    width: 120,
    position: "absolute",
    alignSelf: "flex-end",
    zIndex: 0,
  },
  header: {
    width: "100%",
    marginTop: 56,
    paddingHorizontal: 20,
  },
  content: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: Colors.transparent,
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
  newComment: {
    backgroundColor: Colors.white,
    height: 100,
    display: "flex",
    flexDirection: "row",
    elevation: 1,
  },
  postComment: {
    backgroundColor: Colors.darkGreen,
    color: Colors.white,
    paddingVertical: 5,
    paddingHorizontal: 18,
    borderRadius: 40,
  },
});

export default styles;
