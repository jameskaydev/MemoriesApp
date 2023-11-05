import { useCallback } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts, AveriaSerifLibre_400Regular, AveriaSerifLibre_700Bold } from "@expo-google-fonts/averia-serif-libre";
import * as SplashScreen from "expo-splash-screen";
import "react-native-gesture-handler"

//Stacks
import HomeStack from "./src/navigation/HomeStack";
import AuthStack from "./src/navigation/AuthStack";
import AppLoading from "./src/components/AppLoading";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    AveriaSerifLibre_400Regular,
    AveriaSerifLibre_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  // const onLayoutRootView = useCallback(async () => {
    // if (fontsLoaded) {
      // SplashScreen.hideAsync()
    // }
  // }, [fontsLoaded])

  return (
    <NavigationContainer>
      <HomeStack />
      {/* <AuthStack /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
