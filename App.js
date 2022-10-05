import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import React, { useState, useEffect, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";
import { globalStyles } from "./styles/Global";
import HomeStack from "./routes/HomeStack";
import Drawer from "./routes/Drawer";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function prepareFonts() {
      try {
        await Font.loadAsync({
          "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
          "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
        });
      } catch (e) {
        console.log(e);
      } finally {
        setFontsLoaded(true);
      }
    }

    prepareFonts();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={globalStyles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </View>
  );
}
