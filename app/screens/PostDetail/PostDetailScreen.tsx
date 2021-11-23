import React from "react";
import { ScrollView, View, Image, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Icon, Text, Comment, HomeNewsListItem } from "components";
import { Colors } from "style";

import imagesPath from "../../constant/imagePath";
import navigationOptions from "./PostDetailScreen.navigationOptions";
import styles from "./PostDetailScreen.styles";

const PostDetailScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  const route = useRoute();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const post = route.params?.post;

  const img_uri = post.img_uri;
  const title = post.title;
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
  ];
  const newslist = [
    {
      title: "Kids fun time at play time park with 50% Off",
      imgName: "news1",
      author: "Taz mania",
      publish: "3 Days ago",
    },
    {
      title: "Baby splash mat with stacking rings",
      imgName: "news2",
      author: "Taz mania",
      publish: "3 Days ago",
    },
  ];
  return (
    <ScrollView>
      <Image source={imagesPath["post" + img_uri]} style={styles.image} />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigator.goBack()}>
            <Ionicons name="chevron-back-outline" size={24} color={Colors.white} />
          </TouchableOpacity>
          <View style={styles.rightActions}>
            <MaterialCommunityIcons
              name="heart"
              size={24}
              color={Colors.white}
              style={styles.rightAction}
            />
            <Icon name="Back" width="24" height="20" fill="none" style={styles.rightAction} />
            <Icon name="Search1" width="30" height="30" fill="none" style={styles.rightAction} />
          </View>
        </View>
        <View style={styles.short_info}>
          <Text.Secondary style={styles.category}>{"Healthcare"}</Text.Secondary>
          <Text.H1 style={styles.title}>{title}</Text.H1>
          <View style={{ display: "flex", flexDirection: "row", paddingLeft: 14 }}>
            <View style={styles.comments_number}>
              <Icon name="Message" fill="none" width="16" height="16" />
              <Text.Tertiary style={styles.numberstyle}>{"32"}</Text.Tertiary>
            </View>
            <View style={styles.seen_number}>
              <Icon name="Eye" fill="none" width="16" height="16" />
              <Text.Tertiary style={styles.numberstyle}>{"32"}</Text.Tertiary>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.author_date}>
            <Image source={imagesPath["useravatar1"]} style={styles.avatar} />
            <Text.Secondary style={styles.author}>{"Anton Child"}</Text.Secondary>
            <MaterialCommunityIcons
              name="clock-time-four-outline"
              size={20}
              color="#5E667C"
              style={{
                textAlignVertical: "center",
                paddingLeft: 15,
                paddingRight: 7,
                fontWeight: "400",
              }}
            />
            <Text.Secondary style={styles.publish_date}>{"3 Days ago"}</Text.Secondary>
          </View>
          <View style={styles.mainContent}>
            <Text.Header style={styles.content_initialletter}>
              {"T"}
              <Text.Primary style={{ lineHeight: 26, textAlignVertical: "auto", paddingLeft: 18 }}>
                {
                  "his article may appear to you like a fiery love story between philosophers and academic movements."
                }
              </Text.Primary>
            </Text.Header>
            <Text.Primary>
              {
                " So let me clarify something: The clashes of ideologies were never by any means romantic, and the figures we mention in this article are but the handful of hieroglyphs carved on the tip of the massive pyramid that is history.\nWhile these great men were indeed the glorious creations of history, at the same time, they were also just flesh-and-bone humans who wouldn’t survive the time. As a not-so-great man who lived in a different time and space, it would be difficult for whatever.\nI make of this big story to not be an oversimplification, so I hope you would always bear that in mind and will, by yourselves, look into these people and concepts in case you want to learn more.\n"
              }
            </Text.Primary>
            <View style={styles.content_img}>
              <Image source={imagesPath["postImg"]} style={styles.postImg} />
              <Text.Primary style={{ fontStyle: "italic", padding: 20, fontSize: 14 }}>
                {"“Don't stop when you are tired. Stop when you are done!”"}
              </Text.Primary>
            </View>
            <Text.Primary>
              {
                "\nThis article may appear to you like a fiery love story between philosophers and academic movements.\n"
              }
            </Text.Primary>
          </View>
          <View style={styles.comments}>
            <View style={styles.comments_header}>
              <Text.Primary style={{ fontSize: 16, alignSelf: "flex-start" }}>
                {"Comments"}
              </Text.Primary>
              <TouchableOpacity>
                <Text.Primary style={styles.viewComments}>{"View all"}</Text.Primary>
              </TouchableOpacity>
            </View>
            <View>
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
            <TouchableOpacity onPress={() => navigator.openCommentDetail()}>
              <Text.Primary style={styles.mainBtn}>{"Add a comment"}</Text.Primary>
            </TouchableOpacity>
          </View>
          <View style={styles.moreBlogs}>
            <Text.Primary style={{ fontSize: 16, color: Colors.darkGrey }}>
              {"More Blog"}
            </Text.Primary>
            <View>
              {newslist.map((listItem, index) => (
                <HomeNewsListItem
                  key={index}
                  uri={listItem.imgName}
                  title={listItem.title}
                  author={listItem.author}
                  publish={listItem.publish}
                ></HomeNewsListItem>
              ))}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

PostDetailScreen.navigationOptions = navigationOptions();

export default PostDetailScreen;
