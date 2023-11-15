import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer'
import OnboardingChat from "../screens/OnboardingChat";

import Home from '../screens/Home';
import Onboarding from "../screens/Onboarding";

import Enterance from "../screens/Enterance";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import Success from "../screens/Success";
import Failure from "../screens/Failure";

const Drawer = createDrawerNavigator();
const HomeStack = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="OnboardingChat" component={OnboardingChat} />
      <HomeStack.Screen name="Onboarding" component={Onboarding} />
      <HomeStack.Screen name="Home" component={Home}/>
      <HomeStack.Screen name="Signup" component={Signup} />
      <HomeStack.Screen name="Signin" component={Signin} />
      <HomeStack.Screen name="Enterance" component={Enterance} />
      <HomeStack.Screen name="Success" component={Success} />
      <HomeStack.Screen name="Failure" component={Failure} />
    </HomeStack.Navigator>
  );
};

export default HomeStack;