import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Components
import ShareMemoryPic from "../modals/ShareMemoryPic";

const ModalsStack = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator
      initialRouteName="ShareMemoryPic"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="ShareMemoryPic" component={ShareMemoryPic} />
    </Navigator>
  );
};

export default ModalsStack;
