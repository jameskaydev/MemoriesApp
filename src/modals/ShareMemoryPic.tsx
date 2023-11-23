import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  Button,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoSmall from "../components/svg/LogoSmall";
import BackArrow from "../components/svg/BackArrow";
import { useNavigation } from "@react-navigation/core";
import LogoMain from "../components/svg/LogoMain";
import { shareAsync } from "expo-sharing";
import * as FileSystem from "expo-file-system";
import { Video, ResizeMode } from "expo-av";
import { useRef, useState } from "react";
import Slider from "@react-native-community/slider";

const borderRed = {
  borderColor: "red",
  borderWidth: 2,
};
const borderGreen = {
  borderColor: "green",
  borderWidth: 2,
};

const ShareMemoryPic = ({ route }: any) => {
  const { type } = route.params;
  console.log(type);
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

  const handleImageShare = async () => {
    try {
      const { uri: localUri } = await FileSystem.downloadAsync(
        Image.resolveAssetSource(require("../../assets/images/memory_3.png"))
          .uri,
        FileSystem.documentDirectory + "memory_3.png"
      );
      await shareAsync(localUri);
    } catch (e) {
      console.log(e);
    }
  };

  const handleVideoShare = async () => {
    try {
      const localUri = FileSystem.documentDirectory + "memory_video.mp4";
      await FileSystem.downloadAsync(
        require("../../assets/videos/memory_video.mp4"),
        localUri
      );
      await shareAsync(localUri);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.topbarContainer}>
          <TouchableOpacity onPress={goBack}>
            <BackArrow width={35} height={25} />
          </TouchableOpacity>
          <LogoSmall width={41} height={41} view="0 -2 40 50" />
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.cardInfoRow}>
            <Text style={styles.cardDate}>May 25th{"\n"}2023</Text>
            <Text style={styles.cardTitle}>Meeting</Text>
          </View>

          {/* video ---> */}
          {type === "video" && (
            <Pressable onPress={handleVideoPress} style={styles.videoContainer}>
              <Video
                ref={video}
                style={{
                  alignSelf: "center",
                  width: "100%",
                  aspectRatio: 16 / 9,
                }}
                source={{
                  uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                }}
                useNativeControls={false}
                resizeMode={ResizeMode.CONTAIN}
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
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
                  <TouchableOpacity
                    onPress={handlePlayButtonPress}
                    activeOpacity={1}
                  >
                    <Image source={require("../../assets/images/Play.png")} />
                  </TouchableOpacity>
                )}
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "rgba(0,0,0,0.6)",
                }}
              >
                <Text>
                  {status.positionMillis
                    ? `${Math.round(status.positionMillis / 1000)} s`
                    : ""}
                </Text>
                <Slider
                  style={{ flex: 1 }}
                  value={status.positionMillis || 0}
                  maximumValue={status.durationMillis || 0}
                  onSlidingComplete={(value: any) => {
                    video.current.setPositionAsync(value);
                  }}
                  minimumTrackTintColor="#FFF"
                  maximumTrackTintColor="#FFFFFF60"
                  thumbTintColor="transparent"
                />
                <Text>
                  {status.durationMillis
                    ? `${Math.round(status.durationMillis / 1000)} s`
                    : ""}
                </Text>
              </View>
            </Pressable>
          )}
          {/* ---> Video */}

          {
            type === 'pic' && (
              <Image
                source={require("../../assets/images/memory_3.png")}
                style={styles.thumbnail}
                resizeMode="cover"
              />
            )
          }

          <View style={styles.cardInfoRow}>
            <Text style={styles.cardUsername}>Josh Murrey</Text>
            <LogoMain width={48} height={45} />
          </View>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={type === "video" ? handleVideoShare : handleImageShare}
          >
            <Image
              source={require("../../assets/images/Fire.png")}
              style={styles.btnImage}
            />
            <Text style={styles.btnTxt}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Image
        source={require("../../assets/images/bottom_colos.png")}
        style={styles.bottomColors}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
  },
  topbarContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    gap: 15,
    marginTop: 65,
    marginBottom: 22,
  },
  contentContainer: {
    flex: 1,
  },
  cardContainer: {
    borderWidth: 1,
    borderColor: "#252525",
    borderRadius: 20,
    paddingVertical: 20,
    marginHorizontal: 15,
  },
  cardInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 23,
  },
  cardDate: {
    fontSize: 18,
    color: "#036BBF",
    fontFamily: "AveriaSerifLibre_400Regular",
  },
  cardTitle: {
    fontSize: 32,
    fontFamily: "AveriaSerifLibre_700Bold",
  },
  videoContainer: {
    marginVertical: 15
  },
  thumbnail: {
    width: "100%",
    marginVertical: 15,
    borderRadius: 20,
  },
  cardUsername: {
    fontSize: 20,
    fontFamily: "AveriaSerifLibre_400Regular",
  },
  cardThumbnail: {},
  cardBtn: {},
  cardBtnTxt: {},
  bottomColors: {
    // position: 'absolute',
    // bottom: 0,
    width: Dimensions.get("window").width,
    alignSelf: "flex-end",
  },
  btnContainer: {
    width: "100%",
    paddingHorizontal: 15,
    marginTop: 30,
    position: "absolute",
    bottom: 22,
  },
  btn: {
    borderWidth: 1,
    borderColor: "#252525",
    borderRadius: 30,
    width: "100%",
    paddingVertical: 10,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btnTxt: {
    fontFamily: "AveriaSerifLibre_400Regular",
    fontSize: 20,
    textAlign: "center",
  },
  btnImage: {
    marginRight: 10,
  },
  playBtn: {
    position: "absolute",
    top: "40%",
  },
});

export default ShareMemoryPic;
