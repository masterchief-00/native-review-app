import React from "react";
import { Text, View, Image } from "react-native";
import { globalStyles,images } from "../styles/Global";

export default function ReviewDetails({ navigation, route: { params } }) {
    const rate=params.rating
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.reviewContainer}>
        <Text style={globalStyles.titleText}>{params.title}</Text>
        <Text style={globalStyles.paragraph}>{params.body}</Text>
        <View style={globalStyles.rating}>
            <Text style={globalStyles.words}>Rating:</Text>
          <Image source={images.rating[rate]} />
        </View>
      </View>
    </View>
  );
}
