import React from "react";
import { Image, View, Text } from "react-native";
import { ListItem } from "react-native-elements";

import imagesPath from "../../constant/imagePath";
import styles from "./HomeNewsListItem.styles";

interface Props {
  uri: string;
  title: string;
  author: string;
  publish: string;
}

const HomeNewsListItem: React.FC<Props> = ({ uri, title, author, publish }) => {
  return (
    <View style={styles.container}>
      <Image source={imagesPath[uri]} style={styles.image} />
      <View style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.otherInfo}>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.publish}>{publish}</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeNewsListItem;
