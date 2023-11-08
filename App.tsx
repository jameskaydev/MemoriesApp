import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts, AveriaSerifLibre_400Regular, AveriaSerifLibre_700Bold, AveriaSerifLibre_300Light } from "@expo-google-fonts/averia-serif-libre";
import "react-native-gesture-handler"

//Stacks
import HomeStack from "./src/navigation/HomeStack";
import AuthStack from "./src/navigation/AuthStack";
import AppLoading from "./src/components/AppLoading";

// SplashScreen.preventAutoHideAsync();
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Onboarding from "./src/screens/Onboarding";
const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    AveriaSerifLibre_400Regular,
    AveriaSerifLibre_700Bold,
    AveriaSerifLibre_300Light
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      {/* <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
      </Stack.Navigator> */}
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
