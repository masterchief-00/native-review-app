import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "#444",
        headerStyle: {
          borderBottomWidth: 0.5,
          borderBottomColor: "#333",
          shadowColor: "black",
          shadowRadius: 25,
          shadowOpacity: 1,
          shadowOffset: { width: 6, height: 10 },
          elevation: 8,
        },
      }}
    >
      <Stack.Screen name="GameZone" component={Home} />
      <Stack.Screen name="Review details" component={ReviewDetails} />
    </Stack.Navigator>
  );
}
