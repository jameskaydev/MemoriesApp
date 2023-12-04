import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
  Easing,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackArrow from "../svg/BackArrow";
import LogoSmall from "../svg/LogoSmall";
import DirectSend from "../svg/DirectSend";
import { useNavigation } from "@react-navigation/core";
import StartArrow from "../svg/StartArrow";
import { navigate } from "../../types/navigate";

const Memory = () => {
  const [shareEnabled, setShareEnabled] = useState<boolean>(false);
  const [thumbnailAnimValue, setThumbnailAnimValue] = useState<Animated.Value>(new Animated.Value(0));
  const [infoAnimValue, setInfoAnimValue] = useState<Animated.Value>(new Animated.Value(0));
  const [thumbnailDimensions, setThumbnailDimensions] = useState<{width: number, height: number}>({width: 0, height: 0})
  const [isThumbnailScaled, setIsThumbnailScaled] = useState<boolean>(false);
  const [isInfoMoved, setIsInfoMoved] = useState<boolean>(false);

  const { goBack } = useNavigation();
  const { navigate } = useNavigation<navigate>();

  const handleThumbnailAnim = () => {
    Animated.timing(thumbnailAnimValue, {
      toValue: isThumbnailScaled ? 0 : 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true
    }).start(() => {
      setIsThumbnailScaled(!isThumbnailScaled)
    })
  }

  const handleInfoAnim = () => {
    Animated.timing(infoAnimValue, {
      toValue: isInfoMoved ? 0 : 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true
    }).start(() => {
      setIsInfoMoved(!isInfoMoved);
    })
  }

  const handleAllAnimations = () => {
    setTimeout(() => {
      setShareEnabled(!shareEnabled)
    }, 150)
    handleThumbnailAnim()
    handleInfoAnim()
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.topbarContainer}>
          <TouchableOpacity onPress={() => {
            shareEnabled ? handleAllAnimations() : navigate("HomeStack", {screen: "Memories"})
          }}>
            <BackArrow width={35} height={25} />
          </TouchableOpacity>
          <LogoSmall width={41} height={41} view="0 -2 40 50" />
          {!shareEnabled && (
            <TouchableOpacity onPress={handleAllAnimations}>
              <DirectSend width={34} height={34} />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.thumbnailContainer}>
          <Animated.Image
            source={require("../../../assets/images/memory_3.png")}
            onLayout={(event) => {
              const { width, height } = event.nativeEvent.layout;
              setThumbnailDimensions({width, height})
            }}
            style={[styles.thumbnail,
              {
                translateX: thumbnailAnimValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -0.1 * thumbnailDimensions.width]
                })
              },
              {
                translateY: thumbnailAnimValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -0.1 * thumbnailDimensions.height]
                })
              },
              {
                scaleX: thumbnailAnimValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.8]
                })
              },
              {
                scaleY: thumbnailAnimValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.8]
                })
              }
            ]}
          />
        </View>

        <Animated.View style={[styles.infoContainer, {
          transform: [
            {
              translateY: infoAnimValue.interpolate({
                inputRange: [0, 1],
                outputRange: [1, -70]
              })
            }
          ]
        }]}>
          <Text style={styles.title}>Meeting</Text>
          <Text style={styles.desc}>
            Lorem ipsum dolor sit amet{"\n"}
            consectetur. Aliquet{"\n"}
            dignissim orci in arcu vitae{"\n"}
            volutpat sed tellus. Vitae.
          </Text>
        </Animated.View>

        <View style={styles.btnContainer}>
          {
            !shareEnabled ? (
              <TouchableOpacity style={styles.btn} 
                onPress={() => navigate("HomeStack", {screen: 'MemoryOverview'})}
              >
                <Text style={styles.btnTxt}>
                  Dive In! {"\t"}
                </Text>
                <StartArrow width={13} height={13} />
              </TouchableOpacity>
            ) : (
              <>
                <TouchableOpacity style={styles.btn} onPress={() => navigate("Modals", 
                  {screen: "ShareMemoryPic", params: { type: "pic"}})}>
                  <Image 
                    source={require('../../../assets/images/camera.png')} 
                    style={styles.btnImage} 
                  />
                  <Text style={styles.btnTxt}>
                    Share as a picture
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => navigate("Modals", 
                  {screen: "ShareMemoryPic", params: { type: "video"}
                  })
                  }>
                <Image 
                    source={require('../../../assets/images/movie_camera.png')} 
                    style={styles.btnImage} 
                  />
                  <Text style={styles.btnTxt}>
                    Generate a video
                  </Text>
                </TouchableOpacity>
              </>
            )
          }
        </View>
      </View>

      <Image 
        source={require('../../../assets/images/bottom_colos.png')} 
        style={styles.bottomColors}
      />
    </SafeAreaView>
  );
};
// AveriaSerifLibre_400Regular,
// AveriaSerifLibre_700Bold,
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
  },
  contentContainer: {
    flex: 1,
    flexDirection: "column",
    position: 'relative'
  },
  thumbnailContainer: {
    paddingLeft: 15,
    paddingRight: 70,
    marginTop: 22,
    marginBottom: 10,
  },
  thumbnail: {
    width: "100%",
  },
  infoContainer: {
    paddingHorizontal: 15,
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "AveriaSerifLibre_700Bold",
    fontSize: 48,
    marginBottom: 20,
  },
  desc: {
    fontFamily: "AveriaSerifLibre_400Regular",
    fontSize: 20,
    textAlign: "right",
  },
  btnContainer: {
    width: "100%",
    paddingHorizontal: 15,
    marginTop: 30,
    position: 'absolute',
    bottom: 22
  },
  btn: {
    borderWidth: 1,
    borderColor: "#252525",
    borderRadius: 30,
    width: "100%",
    paddingVertical: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTxt: {
    fontFamily: "AveriaSerifLibre_400Regular",
    fontSize: 20,
    textAlign: "center",
  },
  btnImage: {
    marginRight: 10
  },
  bottomColors: {
    // position: 'absolute',
    // bottom: 0,
    width: Dimensions.get("window").width,
    alignSelf: 'flex-end'
  }
});

export default Memory;
