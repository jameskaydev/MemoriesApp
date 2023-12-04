import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  Pressable,
  Animated
} from "react-native";
import { useRef, useState, useEffect } from "react";
import { Video, ResizeMode } from "expo-av";
import { SafeAreaView } from "react-native-safe-area-context";
import Slider from "@react-native-community/slider";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const { width, height } = Dimensions.get("window");

interface Props {
  index: number;
  prevIndex: number;
}

const MemoryOverviewVideo = ({ index }: Props) => {
  const [status, setStatus] = useState<any>({});
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [slideInAnimation] = useState<Animated.Value>(new Animated.Value(0))
 
  const video = useRef<any>(null);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideInAnimation, {
        toValue: index === 3 ? 1 : 0,
        duration: 800,
        useNativeDriver: false,
      }),
    ]).start();
  }, [index])


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

  const handlePlayButtonPress = () => {
    setTimeout(() => {
      setShowPlayButton(false);
    }, 2000);
    if (status.isPlaying) {
      video.current.pauseAsync();
    } else if (status.didJustFinish) {
      video.current.playFromPositionAsync(0);
    } else {
      video.current.playAsync();
    }
  };

  return (
    <SafeAreaView
      style={{
        width: width,
      }}
    >
      <AnimatedPressable
        onPress={handleVideoPress}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: index === 3 ? 1 : 0,
          transform: [
            {
              translateX: slideInAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [-500, 0],
              }),
            },
          ],
        }}
      >
        <Video
          style={{
            flex: 1,
          }}
          source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          posterSource={require('../../../assets/images/video_poster.png')}
          useNativeControls={false}
          resizeMode={ResizeMode.COVER}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          ref={video}
        />
        <View
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {(showPlayButton || !status.isPlaying) && (
            <TouchableOpacity onPress={handlePlayButtonPress} activeOpacity={1}>
              <Image source={require("../../../assets/images/Play.png")} />
            </TouchableOpacity>
          )}
        </View>

        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            bottom: height * 0.2,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingBottom: 20,
            }}
          >
            <Text
              style={{
                color: "#FFF",
                fontSize: 20,
                fontFamily: "AveriaSerifLibre_400Regular",
              }}
            >
              {status.positionMillis
                ? `${Math.round(status.positionMillis / 1000).toFixed(2)}`
                : "0.00"}{" "}
              /
            </Text>

            <Text
              style={{
                color: "#FFF",
                fontSize: 20,
                fontFamily: "AveriaSerifLibre_400Regular",
              }}
            >
              {status.durationMillis
                ? ` ${Math.round(status.durationMillis / 1000).toFixed(2)}`
                : ""}
            </Text>
          </View>
          <Slider
            style={{ flex: 1, transform: [{ scaleY: 3 }], width: width }}
            value={status.positionMillis || 0}
            maximumValue={status.durationMillis || 0}
            onSlidingComplete={(value: any) => {
              video.current.setPositionAsync(value);
            }}
            minimumTrackTintColor="#FFF"
            maximumTrackTintColor="#FFFFFF60"
            thumbTintColor="transparent"
          />
        </View>
      </AnimatedPressable>
    </SafeAreaView>
  );
};

export default MemoryOverviewVideo;
