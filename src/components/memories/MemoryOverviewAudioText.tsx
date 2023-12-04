import { Text, StyleSheet, Dimensions, View, Image, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";

const { width } = Dimensions.get("window");

interface Props {
  index: number;
  prevIndex: number;
}

const MemoryOverviewAudioText = ({ index }: Props) => {
  const [slideInAnimation] = useState<Animated.Value>(new Animated.Value(0))

  useEffect(() => {
    console.log(index)
    Animated.parallel([
      Animated.timing(slideInAnimation, {
        toValue: index === 7 ? 1 : 0,
        duration: 800,
        useNativeDriver: false,
      }),
    ]).start();
  }, [index])

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Animated.View style={{
        opacity: index === 7 ? 1 : 0,
        transform: [
          {
            translateX: slideInAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [-500, 0],
            }),
          },
        ],
      }}>
        <View
          style={{
            marginBottom: 100,
            alignSelf: "flex-start",
          }}
        >
          <Text
            style={{
              fontSize: 32,
              lineHeight: 35,
              fontFamily: "AveriaSerifLibre_700Bold",
            }}
          >
            Close your eyes and lets first take you back to that moment
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignSelf: "flex-start",
              marginTop: 25,
            }}
          >
            <Image
              source={require("../../../assets/images/commaBlack.png")}
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
        </View>

        <View
          style={{
            width: "100%",
          }}
        >
          <Image
            source={require("../../../assets/images/audio_placeholder.png")}
          />
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: width,
    justifyContent: "flex-start",
    alignItems: "center",
    // gap: 100,
    paddingTop: 170,
    paddingHorizontal: 15,
  },
  txt: {
    fontFamily: "AveriaSerifLibre_400Regular",
    fontSize: 20,
    lineHeight: 24,
    color: "#000",
    marginLeft: 10,
  },
});

export default MemoryOverviewAudioText;
