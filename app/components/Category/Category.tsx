import React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "style";

import Text from "../Text";
import styles from "./Category.styles";
import imagesPath from "../../constant/imagePath";

interface Props {
  text: string;
  onPress: () => void;
  uri: string;
}

const Category: React.FC<Props> = ({ text, onPress, uri }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.textContainer}>
        <Image source={imagesPath[uri]} style={styles.image} />
        <Text.Primary style={styles.text}>{text}</Text.Primary>
        <Ionicons name={"chevron-forward"} size={20} color={Colors.white} style={styles.detail} />
      </View>
    </TouchableOpacity>
  );
};

export default Category;
