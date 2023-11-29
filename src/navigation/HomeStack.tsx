import { createDrawerNavigator } from '@react-navigation/drawer';

// Components
import OnboardingChat from "../screens/OnboardingChat";
import Home from "../screens/Home";
import Memories from "../screens/Memories";
import Onboarding from "../screens/Onboarding";
import Exit from "../modals/Exit";
import DrawerContent from "../components/DrawerContent";
import Memory from "../components/memories/Memory";
import MemoryOverview from '../screens/MemoryOverview';

const HomeStack = () => {
  const { Navigator, Screen } = createDrawerNavigator();
  return (
    <Navigator
      initialRouteName="Memories"
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
      <Screen name="Home" component={Home} options={{ drawerLabel: () => null }} />
      <Screen name="Memories" component={Memories} />
      <Screen name="Onboarding" component={Onboarding} />
      <Screen name="OnboardingChat" component={OnboardingChat} />
      <Screen name="Memory" component={Memory} />
      <Screen name="MemoryOverview" component={MemoryOverview} />
      <Screen name="Exit" component={Exit} />
    </Navigator>
  );
};

export default HomeStack;
