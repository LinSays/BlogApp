import { StyleSheet } from "react-native";

import { Layout } from "constant";
import { Colors } from "style";

export default StyleSheet.create({
  container: {},
  input: {
    paddingHorizontal: Layout.PADDING_HORIZONTAL,
    height: 55,
    borderWidth: 1,
    borderRadius: 12,
  },
  containerOptionalTitle: {
    flexDirection: "row",
  },
  icon: {
    alignSelf: "center",
  },
});
