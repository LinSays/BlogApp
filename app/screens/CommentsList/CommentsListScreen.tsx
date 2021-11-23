import React from "react";
import { ScrollView, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Text, Comment } from "components";
import { Colors } from "style";

import navigationOptions from "./CommentsListScreen.navigationOptions";
import styles from "./CommentsListScreen.styles";

const CommentsListScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const comments = [
    {
      commentId: 1,
      userId: "Leslie Alexander",
      avatarUri: "useravatar2",
      comment: "This article was very helpful for my advice. keep it up for the next article!",
      publishDate: "1 Days ago",
    },
    {
      commentId: 2,
      userId: "Jenny Wilson",
      avatarUri: "useravatar3",
      comment: "This article was very helpful for my advice. keep it up for the next article!",
      publishDate: "3 Days ago",
    },
    {
      commentId: 3,
      userId: "Guy Hawkins",
      avatarUri: "useravatar2",
      comment: "This article was very helpful for my advice. keep it up for the next article!",
      publishDate: "1 Days ago",
    },
    {
      commentId: 4,
      userId: "Wade Warren",
      avatarUri: "useravatar3",
      comment: "This article was very helpful for my advice. keep it up for the next article!",
      publishDate: "3 Days ago",
    },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <LinearGradient
        colors={["#F3F9F3", "#FFFFFF"]}
        style={styles.linearGradient}
      ></LinearGradient>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text.Header
              style={{ textAlign: "center", fontSize: 18, fontWeight: "500", lineHeight: 27 }}
            >
              {"Comments"}
            </Text.Header>
            <TouchableOpacity style={{ position: "absolute", left: 20 }}>
              <Ionicons
                name="chevron-back-outline"
                size={20}
                color={Colors.darkGrey}
                onPress={() => navigator.goBack()}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <View style={styles.comments}>
              <View style={{ paddingHorizontal: 25, marginBottom: 14 }}>
                {comments.map((comment, index) => (
                  <Comment
                    key={index}
                    commentId={comment.commentId}
                    userId={comment.userId}
                    avatarUri={comment.avatarUri}
                    comment={comment.comment}
                    publishDate={comment.publishDate}
                  />
                ))}
              </View>
              <View style={styles.newComment}>
                <TextInput placeholder={"Add a comment"} style={{ padding: 25 }} />
                <TouchableOpacity style={{ position: "absolute", right: 20, top: 16 }}>
                  <Text.Primary style={styles.postComment}>{"Post"}</Text.Primary>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

CommentsListScreen.navigationOptions = navigationOptions();

export default CommentsListScreen;
