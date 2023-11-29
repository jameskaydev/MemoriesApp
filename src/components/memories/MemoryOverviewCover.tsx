import { View, Text, Image, StyleSheet, Animated, Easing } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoMain from "../svg/LogoMain";

interface Props {
  index: number;
  prevIndex: number;
}

const MemoryOverviewCover = ({index, prevIndex}: Props) => {
  const [scrollXAnimation, setScrollXAnimation] = useState(
    new Animated.Value(0)
  );
  const [scrollYAnimation, setScrollYAnimation] = useState(
    new Animated.Value(0)
  );
  const [scaleXAnimation, setScaleXAnimation] = useState(new Animated.Value(0));
  const [scaleYAnimation, setScaleYAnimation] = useState(new Animated.Value(0));
  const [slideInAnimation] = useState<Animated.Value>(new Animated.Value(0))
  const [slideOutAnimation] = useState<Animated.Value>(new Animated.Value(0))
  const [done, setDone] = useState(false);

  useEffect(() => {
    const handleAnim = (i:number) => {
      // if ( [0,1].includes(i) ) {
        Animated.parallel([
          Animated.timing(scrollXAnimation, {
            toValue: i,
            duration: 800,
            easing: Easing.ease,
            useNativeDriver: true,
          }),
          Animated.timing(scrollYAnimation, {
            toValue: i,
            duration: 800,
            easing: Easing.ease,
            useNativeDriver: true,
          }),
          Animated.timing(scaleXAnimation, {
            toValue: i,
            duration: 800,
            easing: Easing.ease,
            useNativeDriver: true,
          }),
          Animated.timing(scaleYAnimation, {
            toValue: i,
            duration: 800,
            easing: Easing.ease,
            useNativeDriver: true,
          }),
        ]).start(() => {
          setDone(!done);
        });
      }

      Animated.parallel([
        Animated.timing(slideInAnimation, {
          toValue: index,
          duration: 800,
          useNativeDriver: false,
        }),
        // Animated.timing(slideOutAnimation, {
        //   toValue: index - 1,
        //   duration: 800,
        //   useNativeDriver: false,
        // }),
      ]).start();
    // };

    if ( [0,1].includes(index) ) {
      handleAnim(index)
    }
  }, [index])
  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* <TouchableOpacity onPress={handleAnim}>
        <Text>test</Text>
      </TouchableOpacity> */}
      <Animated.View style={[styles.infoContainer, {
        transform: [
          // {
          //   translateX: slideOutAnimation.interpolate({
          //     inputRange: [index - 1, index, index + 1],
          //     outputRange: [500, 1, -500],
          //   }),
          // },
          {
            translateX: slideInAnimation.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0, 0, -500],
            }),
          },
        ],
      }]}>
        <Text style={styles.title}>
          A Night Out{"\n"}
          with Friends
        </Text>

        <View style={styles.dateContainer}>
          <LogoMain width={44} height={41} />
          <Text style={styles.date}>
            Wednesday{"\n"}
            23rd June{"\n"}
            2023
          </Text>
        </View>
      </Animated.View>

      <Animated.View
        style={[
          styles.thumbContainer,
          {
            transform: [
              {
                translateX: scrollXAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 400],
                }),
              },
              {
                translateY: scrollYAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, -250],
                }),
              },
            ],
            zIndex: 99999999,
          },
        ]}
      >
        <Animated.Image
          source={require("../../../assets/images/memory_1.png")}
          style={[
            styles.thumb1,
            {
              transform: [
                {
                  scaleX: scaleXAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 2.1],
                  }),
                },
                {
                  scaleY: scaleYAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 2.2],
                  }),
                },
                {
                  translateX: scrollXAnimation.interpolate({
                    inputRange: [0,1],
                    outputRange: [1, 30]
                  })
                }
              ],
            },
          ]}
        />
        <Animated.Image
          source={require("../../../assets/images/memory_2.png")}
          style={[styles.thumb2, {
            transform: [
              {
                translateX: scrollXAnimation.interpolate({
                  inputRange: [0,1],
                  outputRange: [1, 110]
                })
              }
            ]
          }]}
        />
        <Animated.Image
          source={require("../../../assets/images/memory_1.png")}
          style={[
            styles.thumb3,
            {
              transform: [
                {
                  scaleX: scaleXAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0.4],
                  }),
                },
                {
                  scaleY: scaleYAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0.4],
                  }),
                },
                {
                  translateX: scrollXAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 160]
                  })
                }
              ],
            },
          ]}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingLeft: 15,
  },
  infoContainer: {
    paddingTop: 170,
  },
  title: {
    fontFamily: "AveriaSerifLibre_700Bold",
    fontSize: 48,
    lineHeight: 45,
    marginBottom: 30,
  },
  dateContainer: {
    flexDirection: "row",
    gap: 17,
  },
  date: {
    fontFamily: "AveriaSerifLibre_400Regular",
    fontSize: 20,
    lineHeight: 24,
  },
  thumbContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 60,
  },
  thumb1: {
    width: 90,
    height: 110,
  },
  thumb2: {
    width: 144,
    height: 180,
  },
  thumb3: {
    width: 143,
    height: 250,
  },
});

export default MemoryOverviewCover;
