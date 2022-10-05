import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutStack from "./AboutStack";
import HomeStack from "./HomeStack";

const rootDrawerNavigator = createDrawerNavigator();

export default function Drawer() {
  return (
    <rootDrawerNavigator.Navigator
      useLegacyImplementation
      initialRouteName="Home"
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
      <rootDrawerNavigator.Screen name="GameZone" component={HomeStack} />
      <rootDrawerNavigator.Screen name="About GameZone" component={AboutStack} />
    </rootDrawerNavigator.Navigator>
  );
}
