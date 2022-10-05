import React from "react";
import { Text, View, Button } from "react-native";
import { globalStyles } from "../styles/Global";

export default function ReviewDetails({ navigation, route: { params } }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{params.title}</Text>
      <Text style={globalStyles.paragraph}>{params.body}</Text>
      <Text style={globalStyles.paragraph}>{params.rating}</Text>

    </View>
  );
}
