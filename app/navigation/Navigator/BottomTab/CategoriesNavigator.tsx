import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PostListScreen from "../../../screens/PostList";
import CategorySelectionScreen from "../../../screens/CategorySelection";
import PostDetailScreen from "../../../screens/PostDetail";
import CommentsListScreen from "../../../screens/CommentsList";

const Stack = createStackNavigator();

const CategoriesNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="CategorySelection"
      options={CategorySelectionScreen.navigationOptions}
      component={CategorySelectionScreen}
    />
    <Stack.Screen
      name="PostList"
      options={PostListScreen.navigationOptions}
      component={PostListScreen}
    />
    <Stack.Screen
      name="PostDetail"
      options={PostDetailScreen.navigationOptions}
      component={PostDetailScreen}
    />
    <Stack.Screen
      name="CommentsList"
      options={CommentsListScreen.navigationOptions}
      component={CommentsListScreen}
    />
  </Stack.Navigator>
);

export default CategoriesNavigator;
