import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screens/Home';
import Onboarding from "../screens/Onboarding";

const Stack = createNativeStackNavigator();

const StackHome = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default StackHome;