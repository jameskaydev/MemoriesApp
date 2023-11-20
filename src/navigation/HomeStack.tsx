import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Components
import OnboardingChat from "../screens/OnboardingChat";
import Home from "../screens/Home";
import Memories from "../screens/Memories";
import Onboarding from "../screens/Onboarding";

const HomeStack = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator
      initialRouteName="Memories"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Memories" component={Memories} />
      <Screen name="Onboarding" component={Onboarding} />
      <Screen name="OnboardingChat" component={OnboardingChat} />
    </Navigator>
  );
};

export default HomeStack;
