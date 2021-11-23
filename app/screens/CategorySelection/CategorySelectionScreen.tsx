import React from "react";
import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import { navigate } from "navigation";
import { Categories, NavStatelessComponent } from "interfaces";
import { Text, Category } from "components";
import { t, ui } from "utils";
import { Colors } from "style";

import { categories } from "./categoryList";
import navigationOptions from "./CategorySelectionScreen.navigationOptions";
import styles from "./CategorySelectionScreen.styles";

const category_list = categories.filter((item) => item.category !== Categories.else);

const CategorySelectionScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const onPress = ({ category }) => {
    navigator.openPostList({ category });
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <LinearGradient
        colors={["#F3F9F3", "#FFFFFF"]}
        style={styles.linearGradient}
      ></LinearGradient>
      <ScrollView style={styles.container}>
        <Text.Header style={styles.header}>{t("CATEGORY_SCREEN_TITLE")}</Text.Header>
        {category_list.map((category, index) => (
          <Category
            key={index}
            text={ui.getTranslationCategory(category.category)}
            onPress={() => onPress(category)}
            uri={category.img_uri}
          />
        ))}
      </ScrollView>
    </View>
  );
};

CategorySelectionScreen.navigationOptions = navigationOptions();

export default CategorySelectionScreen;
