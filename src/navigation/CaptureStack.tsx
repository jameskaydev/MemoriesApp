import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Components
import ChatAI from "../screens/ChatAI";

const AuthStack = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator
      initialRouteName="ChatAI"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="ChatAI" component={ChatAI} />
    </Navigator>
  );
};

export default AuthStack;
