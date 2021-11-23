import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Text } from "components";
import { t } from "utils";
import { Colors } from "style";
import Post from "components/Post";

import navigationOptions from "./PostListScreen.navigationOptions";
import styles from "./PostListScreen.styles";

const PostListScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  const route = useRoute();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const category_name = route.params?.category;

  const posts = [
    {
      postId: 1,
      isSaved: true,
      img_uri: "1",
      title: "Baby splash mat with stacking rings",
      publishDate: "March 19, 2021",
      recommend: "100K",
    },
    {
      postId: 2,
      isSaved: true,
      img_uri: "2",
      title: "Kids fun time at play time park with 50% Off",
      publishDate: "March 19, 2021",
      recommend: "100K",
    },
    {
      postId: 3,
      isSaved: true,
      img_uri: "3",
      title: "Your Guide to the Perfect Toddler Car Seat",
      publishDate: "March 19, 2021",
      recommend: "100K",
    },
    {
      postId: 4,
      isSaved: true,
      img_uri: null,
      title: "Your Guide to the Perfect Toddler Car Seat",
      publishDate: "March 19, 2021",
      recommend: "100K",
    },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <LinearGradient
        colors={["#F3F9F3", "#FFFFFF"]}
        style={styles.linearGradient}
      ></LinearGradient>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text.Header style={styles.category_name}>{category_name}</Text.Header>
          <TouchableOpacity style={styles.back_btn}>
            <Ionicons
              name="chevron-back-outline"
              size={20}
              color={Colors.darkGrey}
              onPress={() => navigator.goBack()}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text.Secondary>{t("TODAY")}</Text.Secondary>
          {posts.map((post, index) => (
            <Post
              key={index}
              postId={post.postId}
              isSaved={post.isSaved}
              img_uri={post.img_uri}
              title={post.title}
              publishDate={post.publishDate}
              onPress={() => navigator.openPostDetail({ post })}
              recommend={post.recommend}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

PostListScreen.navigationOptions = navigationOptions();

export default PostListScreen;
