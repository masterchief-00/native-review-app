import React, { useState } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/Global";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of fresh air",
      rating: 5,
      body: "lorem ipsum",
      key: 1,
    },
    {
      title: "Gotta catch them all",
      rating: 4,
      body: "lorem ipsum",
      key: 2,
    },
    {
      title: 'Not so "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: 3,
    },
  ]);
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Review details", item)}
          >
            <View style={globalStyles.reviewContainer}>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
