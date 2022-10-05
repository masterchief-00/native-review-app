import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: "#333",
    marginStart: 20,
  },
  paragraph: {
    fontSize: 18,
    marginVertical: 4,
    lineHeight: 20,
    marginStart: 20,
  },
  words: {
    fontSize: 15,
    marginVertical: 4,
  },
  button: {
    margin: 20,
  },
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  reviewContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 5,
  },
});

export const images = {
  rating: {
    1: require("../assets/rating-1.png"),
    2: require("../assets/rating-2.png"),
    3: require("../assets/rating-3.png"),
    4: require("../assets/rating-4.png"),
    5: require("../assets/rating-5.png"),
  },
};
