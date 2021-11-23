import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "react-native/Libraries/NewAppScreen";

import { Icon } from "components";

import imagesPath from "../../constant/imagePath";
import styles from "./Post.styles";

interface Props {
  postId: number;
  isSaved: boolean;
  img_uri: string;
  title: string;
  publishDate: string;
  onPress: () => void;
  recommend: string;
}

const Post: React.FC<Props> = ({
  postId,
  isSaved,
  img_uri,
  title,
  publishDate,
  onPress,
  recommend,
}) => {
  return img_uri !== null ? (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={imagesPath["post" + img_uri]} style={styles.image} />
      <View style={styles.recommend}></View>
      <Icon name="Recommend" fill="none" width="14" height="14" style={styles.recommend_icon} />
      <Text style={styles.recommend_num}>{recommend}</Text>
      <View style={styles.save}></View>
      <MaterialCommunityIcons name="heart" size={20} color="#ED5466" style={styles.heart_icon} />
      <View style={styles.post_info}>
        <Text style={styles.title}>{title}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.subcategory}>Healthcare</Text>
          <View style={styles.publish}>
            <MaterialCommunityIcons
              name="clock-time-four-outline"
              size={14}
              color="#5E667C"
              style={{ letterSpacing: 15 }}
            />
            <Text style={styles.publishDate}>{publishDate}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styles.container_noImg} onPress={onPress}>
      <View style={styles.recommend}></View>
      <Icon name="Recommend" fill="none" width="14" height="14" style={styles.recommend_icon} />
      <Text style={styles.recommend_num}>{recommend}</Text>
      <View style={styles.save_noImg}></View>
      <MaterialCommunityIcons name="heart" size={20} color="#ED5466" style={styles.heart_icon} />
      <View style={styles.post_info_noImg}>
        <Text style={styles.title}>{title}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.subcategory}>Healthcare</Text>
          <View style={styles.publish}>
            <MaterialCommunityIcons
              name="clock-time-four-outline"
              size={14}
              color="#5E667C"
              style={{ letterSpacing: 15 }}
            />
            <Text style={styles.publishDate}>{publishDate}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Post;
