import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from '../screens/Home';
import Onboarding from "../screens/Onboarding";

const Drawer = createDrawerNavigator();
const HomeStack = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
        // drawerPosition: 'right',
        // drawerStyle: {
        //   backgroundColor: '#252525'
        // }
      }}
    >
      <HomeStack.Screen name="Onboarding" component={Onboarding} />
      <HomeStack.Screen name="Home" component={Home}/>
    </HomeStack.Navigator>
  );
};

export default HomeStack;