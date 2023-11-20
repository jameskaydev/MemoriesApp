import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  useFonts,
  AveriaSerifLibre_400Regular,
  AveriaSerifLibre_700Bold,
  AveriaSerifLibre_300Light,
} from "@expo-google-fonts/averia-serif-libre";
import "react-native-gesture-handler";
import { auth } from "./firebaseConfig";

//Stacks
import HomeStack from "./src/navigation/HomeStack";
import AuthStack from "./src/navigation/AuthStack";
import SplashScreen from "./src/components/AppLoading";


export default function App() {
  const { Navigator, Screen } = createNativeStackNavigator();
  const [fontsLoaded] = useFonts({
    AveriaSerifLibre_400Regular,
    AveriaSerifLibre_700Bold,
    AveriaSerifLibre_300Light,
  });

  if (!fontsLoaded) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Navigator
        // initialRouteName={auth.currentUser ? "HomeStack" : "AuthStack"}
        initialRouteName="HomeStack"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="HomeStack" component={HomeStack} />
        <Screen name="AuthStack" component={AuthStack} />
      </Navigator>
    </NavigationContainer>
  );
}
