import {
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const MemoryOverviewPhoto = () => {
  const [showPlayButton, setShowPlayButton] = useState(true);

  const handleVideoPress = () => {
    if (!showPlayButton) {
      setShowPlayButton(true);
      setTimeout(() => {
        setShowPlayButton(false);
      }, 2000);
    } else {
      setShowPlayButton(false);
    }
  };

  return (
    <SafeAreaView
      style={{
        width: width,
      }}
    >
      <Pressable
        onPress={handleVideoPress}
        style={{
          width: width,
          height: height,
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      >
        <Image 
          source={require('../../../assets/images/picpic.png')} 
          style={{
            width: '100%',
            height: '100%',
          }}
          resizeMode="cover"
        />
      </Pressable>
    </SafeAreaView>
  );
};

export default MemoryOverviewPhoto;
