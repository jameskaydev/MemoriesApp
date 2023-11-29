import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import { useRef, useState } from "react";
import { Video, ResizeMode } from "expo-av";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";
import Slider from "@react-native-community/slider";

const { width, height } = Dimensions.get("window");

const MemoryOverviewVideo = () => {
  const { goBack } = useNavigation();
  const video = useRef<any>(null);
  const [status, setStatus] = useState<any>({});
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

  const handlePlayButtonPress = () => {
    setTimeout(() => {
      setShowPlayButton(false);
    }, 2000);
    if (status.isPlaying) {
      video.current.pauseAsync();
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
      <Pressable
        onPress={handleVideoPress}
        style={{
          width: width,
          height: height,
        }}
      >
        <Video
          style={{
            flex: 1,
          }}
          source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
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
          <View style={{
            flexDirection: 'row',
            paddingBottom: 20
          }}>
            <Text style={{color: '#FFF', fontSize: 20, fontFamily: 'AveriaSerifLibre_400Regular'}}>
              {status.positionMillis
                ? `${Math.round(status.positionMillis / 1000).toFixed(2)}`
                : ""} /
            </Text>

            <Text style={{color: '#FFF', fontSize: 20, fontFamily: 'AveriaSerifLibre_400Regular'}}>
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
      </Pressable>
    </SafeAreaView>
  );
};

export default MemoryOverviewVideo;
