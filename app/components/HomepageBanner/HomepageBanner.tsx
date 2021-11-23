import React from "react";
import { Image, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import imagesPath from "../../constant/imagePath";
import styles from "./HomepageBanner.styles";

interface Props {
  uri: string;
  title: string;
  date: string;
}

const HomepageBanner: React.FC<Props> = ({ uri, title, date }) => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <View style={styles.container}>
        <Image source={imagesPath[uri]} style={styles.image} />
        <LinearGradient
          colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.5)"]}
          style={styles.overlay}
        ></LinearGradient>

        <View style={styles.bannerContainer}>
          <Text style={styles.bannerTitle}>{title}</Text>
          <Text style={styles.bannerDate}>
            <MaterialCommunityIcons
              name="clock-time-four-outline"
              size={16}
              color="white"
              style={{ letterSpacing: 15 }}
            />
            {date}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HomepageBanner;
