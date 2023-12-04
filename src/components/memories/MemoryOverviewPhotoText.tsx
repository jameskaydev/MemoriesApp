import { Text, StyleSheet, Dimensions, View, Image, Animated, Easing } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  index: number;
  prevIndex: number;
}

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const MemoryOverviewPhotoText = ({ index }: Props) => {
  const [scaleXAnim] = useState<Animated.Value>(new Animated.Value(0))
  const [scaleYAnim] = useState<Animated.Value>(new Animated.Value(0))
  const [dimensions, setDimensions] = useState<Animated.ValueXY>(new Animated.ValueXY({x: screenWidth, y: screenHeight}))

  const [isDone, setIsDone] = useState<boolean>(false)

  const anim = () => {
    Animated.parallel([
      Animated.timing(dimensions.x, {
        toValue: isDone ? 0 : 1,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(dimensions.y, {
        toValue: isDone ? 0 : 1,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: true
      })
    ]).start(() => {
      setIsDone(!isDone)
    })
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View
        style={{
          // marginBottom: 26,
          alignSelf: "flex-end",
        }}
      >
        <Animated.Image
          source={require("../../../assets/images/picpic.png")}
          style={{
            // maxWidth: 284,
            // maxHeight: 305,
            maxWidth: screenWidth,
            maxHeight: screenHeight - 200,
            transform: [
              {
                scaleX: dimensions.x.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.65],
                }),
              },
              {
                scaleY: dimensions.y.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.5]
                })
              }
            ]
          }}
          resizeMode="cover"
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignSelf: "flex-start",
        }}
      >
        <Image
          source={require("../../../assets/images/comma.png")}
          style={{ marginTop: -10 }}
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
            <TouchableOpacity onPress={anim} style={{
        // position: 'absolute',
        // top: 400,
        // left: 100,
        zIndex: 100,
        borderWidth: 3,
        borderColor: 'red'
      }}>
        <Text style={{
          color: "#FFF",
          fontSize: 50
        }}>
          Play
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: screenWidth,
    position: 'relative',
    justifyContent: "center",
    alignItems: "center",
    // paddingHorizontal: 15,
  },
  txt: {
    fontFamily: "AveriaSerifLibre_400Regular",
    fontSize: 20,
    lineHeight: 24,
    color: "#FFF",
    marginLeft: 10,
    // bottom: 150,
  },
});

export default MemoryOverviewPhotoText;
