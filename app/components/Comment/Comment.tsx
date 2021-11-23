import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "react-native/Libraries/NewAppScreen";

import { Icon } from "components";

import imagesPath from "../../constant/imagePath";
import styles from "./Comment.styles";

interface Props {
  commentId: number;
  userId: string;
  avatarUri: string;
  comment: string;
  publishDate: string;
}

const Comment: React.FC<Props> = ({ commentId, userId, avatarUri, comment, publishDate }) => {
  return (
    <View style={styles.container}>
      <View style={styles.user_info}>
        <Image source={imagesPath[avatarUri]} style={styles.avatar} />
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text style={styles.userId}>{userId}</Text>
          <View style={styles.publishDate}>
            <MaterialCommunityIcons
              name="clock-time-four-outline"
              size={14}
              color="#5E667C"
              style={{ textAlignVertical: "center", marginRight: 7 }}
            />
            <Text style={{ color: "#5E667C", fontSize: 12 }}>{publishDate}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.content}>{comment}</Text>
    </View>
  );
};

export default Comment;
