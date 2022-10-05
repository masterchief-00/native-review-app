import React, { useState } from "react";
import { Text, View, FlatList, TouchableOpacity, Modal } from "react-native";
import { globalStyles } from "../styles/Global";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
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
      <Modal visible={modalOpen} animationType='slide'>
        <View style={globalStyles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            style={{...globalStyles.modalToggle,...globalStyles.modalClose}}
            onPress={() => {
              setModalOpen(false);
            }}
          />

          <Text>Hello!</Text>
        </View>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        style={globalStyles.modalToggle}
        onPress={() => {
          setModalOpen(true);
        }}
      />

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
