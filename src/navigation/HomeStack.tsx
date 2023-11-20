import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Components
import OnboardingChat from "../screens/OnboardingChat";
import Home from "../screens/Home";
import Memories from "../screens/Memories";
import Onboarding from "../screens/Onboarding";
import Exit from "../Popups/Exit";
import DrawerContent from "../components/DrawerContent";
import { createDrawerNavigator } from '@react-navigation/drawer';


const HomeStack = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerType: 'front',
        drawerStyle: {
          backgroundColor: '#252525'
        },
      }}
      drawerContent={() => <DrawerContent />}
    >
      <Drawer.Screen name="Home" component={Home} options={{ drawerLabel: () => null }} />
      <Drawer.Screen name="Memories" component={Memories} />
      <Drawer.Screen name="Onboarding" component={Onboarding} />
      <Drawer.Screen name="OnboardingChat" component={OnboardingChat} />
      <Drawer.Screen name="Exit" component={Exit} />
    </Drawer.Navigator>
  );
};

export default HomeStack;
