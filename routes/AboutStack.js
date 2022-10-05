import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";

const Stack = createStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "false",
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
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}
