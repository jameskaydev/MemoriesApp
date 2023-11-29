import {
  Text,
  StyleSheet,
  Dimensions,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useRef, useEffect } from "react";
import { Video, ResizeMode } from "expo-av";
import Slider from "@react-native-community/slider";

interface Props {
  index: number;
  prevIndex: number;
}

const { width, height } = Dimensions.get("window");

const MemoryOverviewVideoText = ({ index }: Props) => {
  const video = useRef<any>(null);
  const [status, setStatus] = useState<any>({});
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [videoDimension, setVideoDimension] = useState<any>({});
  const [formattedTime, setFormattedTime] = useState<string>('')

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

  useEffect(() => {
    const seconds = Math.round(status.durationMillis / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedTime = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    setFormattedTime(formattedTime)
  }, [])

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View
        style={{
          marginBottom: 50,
          alignSelf: "flex-start",
        }}
      >
        <Pressable
          onPress={handleVideoPress}
          style={{
            maxWidth: 315,
            maxHeight: 260,
            minWidth: 315,
            minHeight: 260,
          }}
        >
          <Text
            style={{
              color: "#FFF",
              fontSize: 18,
              fontFamily: "AveriaSerifLibre_400Regular",
              marginBottom: -30,
              paddingLeft: 10,
              zIndex: 9999
            }}
          >
            {formattedTime ?? null}
          </Text>
          <Video
            style={{
              flex: 1,
              maxWidth: 315,
              maxHeight: 260,
              minWidth: 315,
              minHeight: 260,
            }}
            source={{
              uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            }}
            useNativeControls={false}
            resizeMode={ResizeMode.COVER}
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            ref={video}
            onLayout={(event) => {
              const { width, height } = event.nativeEvent.layout;
              setVideoDimension({ width, height });
              // console.log(videoDimension.height - 260)
            }}
          />
          <View
            style={{
              position: "absolute",
              bottom: 10,
              width: "100%",
            }}
          >
            <Slider
              style={{ flex: 1, transform: [{ scaleY: 3 }], width: "100%" }}
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
              <TouchableOpacity
                onPress={handlePlayButtonPress}
                activeOpacity={1}
              >
                <Image source={require("../../../assets/images/Play.png")} />
              </TouchableOpacity>
            )}
          </View>
        </Pressable>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignSelf: "flex-end",
        }}
      >
        <Image
          source={require("../../../assets/images/comma.png")}
          style={{
            marginTop: -10,
          }}
        />

        <Text style={styles.txt}>
          Remember this night as a time{"\n"}
          when you were surrounded by{"\n"}
          love and laughter. Cherish the{"\n"}
          memories you made with your{"\n"}
          friends, and know that you are{"\n"}
          always loved and supported.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  txt: {
    fontFamily: "AveriaSerifLibre_400Regular",
    fontSize: 20,
    lineHeight: 24,
    color: "#FFF",
    marginLeft: 10,
    textAlign: 'right'
    // bottom: 150,
  },
});

export default MemoryOverviewVideoText;
