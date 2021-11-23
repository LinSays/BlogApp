import React, { useState } from "react";
import { TextInput as TextInputRN, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "style";

import Text from "../Text";
import styles from "./TextInput.styles";

interface Props {
  isOptional: boolean;
  placeholder?: string;
  title: string;
  value: string;
  background: string;
  borderColor: string;
}
const TextInput: React.FC<Props> = ({
  isOptional,
  value,
  placeholder,
  title,
  background,
  borderColor,
}) => {
  const [isVisible, setIsVisible] = useState(isOptional ? false : true);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={isOptional ? 0.2 : 1}
        onPress={() => (isOptional ? setIsVisible(!isVisible) : {})}
        style={styles.containerOptionalTitle}
      ></TouchableOpacity>
      {isVisible && (
        <TextInputRN
          placeholder={placeholder}
          style={[styles.input, { backgroundColor: background, borderColor: borderColor }]}
          value={value}
        />
      )}
    </View>
  );
};

export default TextInput;
