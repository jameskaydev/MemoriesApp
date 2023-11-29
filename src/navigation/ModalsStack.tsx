import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Components
import ShareMemoryPic from "../modals/ShareMemoryPic";
import VideoPlayer from "../modals/VideoPlayer";

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
      <Screen name="VideoPlayer" component={VideoPlayer} />
    </Navigator>
  );
};

export default ModalsStack;
