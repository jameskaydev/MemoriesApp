import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Components
import Enterance from "../screens/Enterance";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import Success from "../screens/Success";
import Failure from "../screens/Failure";

const AuthStack = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator
      initialRouteName="Enterance"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Enterance" component={Enterance} />
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Signup} />
      <Screen name="Success" component={Success} />
      <Screen name="Failure" component={Failure} />
    </Navigator>
  );
};

export default AuthStack;
