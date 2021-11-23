import * as React from "react";
import { ScrollView, View, TouchableOpacity, TextInput, Dimensions } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-carousel-control";

import { Text, HomepageBanner, HomeNewsListItem, Icon } from "components";
import { t } from "utils";
import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Colors } from "style";

import styles from "./HomeScreen.styles";
import navigationOptions from "./HomeScreen.navigationOptions";

const SLIDER_WIDTH = Dimensions.get("window").width;

const HomeScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const navItems = [
    {
      title: t("All_NEWS"),
      onPress: navigator.openPostList,
    },
    {
      title: t("BUSINESS"),
      onPress: navigator.openPostList,
    },
    {
      title: t("POLITICS"),
      onPress: navigator.openPostList,
    },
    {
      title: t("TECH"),
      onPress: navigator.openPostList,
    },
    {
      title: t("AUTOMOTIVE"),
      onPress: navigator.openPostList,
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

  // const [search, setSearch] = React.useState("");
  // const updateSearch = (search) => {
  //   setSearch(search);
  // };

  const [search, setSearch] = React.useState("");

  const filterList = (list) => {
    return list.filter((listItem) => listItem.title.toLowerCase().includes(search.toLowerCase()));
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <LinearGradient
        colors={["#F3F9F3", "#FFFFFF"]}
        style={styles.linearGradient}
      ></LinearGradient>
      <ScrollView style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ marginTop: 56, marginBottom: 24 }}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <Icon fill="none" width="24" height="24" name={"Menu"} />
        </TouchableOpacity>
        <Text.Header style={{ marginBottom: 4 }}>Discover</Text.Header>
        <Text.Primary>News from all over the world</Text.Primary>
        <View style={styles.SearchbarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder={"Search news.."}
            onChangeText={(search) => setSearch(search)}
          />
          <Icon
            fill="none"
            width="18"
            height="18"
            name="Search"
            style={{ position: "absolute", right: 16, top: 15 }}
          />
        </View>

        <ScrollView
          style={styles.categories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {navItems.map((l, i) => (
            <TouchableOpacity key={i} onPress={l.onPress}>
              <Text.Primary center bold style={styles.categories}>
                {l.title}
              </Text.Primary>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text.Secondary style={styles.recentPost}>Recent Post</Text.Secondary>
        <View style={{ marginLeft: -20 }}>
          <Carousel
            pageStyle={{
              backgroundColor: Colors.transparent,
            }}
            pageWidth={SLIDER_WIDTH}
          >
            <HomepageBanner
              uri={"homeBanner"}
              title={"Top News: Football is now the world's top sport"}
              date={"March 19, 2021"}
            />
            <HomepageBanner
              uri={"homeBanner"}
              title={"Top News: Football is now the world's top sport"}
              date={"March 19, 2021"}
            />
            <HomepageBanner
              uri={"homeBanner"}
              title={"Top News: Football is now the world's top sport"}
              date={"March 19, 2021"}
            />
          </Carousel>
        </View>
        <View>
          {filterList(newslist).map((listItem, index) => (
            <HomeNewsListItem
              key={index}
              uri={listItem.imgName}
              title={listItem.title}
              author={listItem.author}
              publish={listItem.publish}
            ></HomeNewsListItem>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

HomeScreen.navigationOptions = navigationOptions();

export default HomeScreen;
