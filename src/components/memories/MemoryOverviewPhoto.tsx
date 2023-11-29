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
        height: height,
        borderWidth: 2,
        borderColor: 'red'
      }}
    >
      <Pressable
        onPress={handleVideoPress}
        style={{
          width: width,
          height: height,
          borderWidth: 2,
          borderColor: 'green'
        }}
      >
        <Image 
          source={require('../../../assets/images/picpic.png')} 
          style={{
            width: '100%',
            height: '100%'
          }}
          resizeMode="cover"
        />
      </Pressable>
    </SafeAreaView>
  );
};

export default MemoryOverviewPhoto;
