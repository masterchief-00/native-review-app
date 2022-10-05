import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

export default function Header({ navigation, title }) {
  return (
    <ImageBackground
      source={require("../assets/game_bg.png")}
      style={styles.header}
    >
      <Image
        source={require("../assets/heart_logo.png")}
        style={styles.headerImage}
      />
      <Text style={styles.headerText}>{title}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
    marginEnd: 7,
  },
  headerImage: {
    width: 26,
    height: 26,
    marginRight: 5,
  },
});
