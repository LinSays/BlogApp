import { StyleSheet } from "react-native";

import { Layout } from "style";

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
  header: { marginBottom: 4, textAlign: "center", fontSize: 18, marginTop: 56 },
  info: {
    paddingTop: 20,
    paddingBottom: 16,
  },
  separator: {
    height: 10,
  },
});

export default styles;
