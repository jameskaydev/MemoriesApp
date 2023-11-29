import { Animated, Text, StyleSheet, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState, useEffect } from 'react'

interface Props {
  index: number;
  prevIndex: number;
}

const { width } = Dimensions.get("window")

const MemoryOverviewText = ({ index }: Props) => {
  const [slideInAnimation] = useState<Animated.Value>(new Animated.Value(0))
  const [slideOutAnimation] = useState<Animated.Value>(new Animated.Value(0))

  useEffect(() => {
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
  }, [index])

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Animated.Text style={[styles.txt, {
        transform: [
          {
            translateX: slideOutAnimation.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0, 500, -1000],
            }),
          },
          {
            translateX: slideInAnimation.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [1000, 0, -500],
            }),
          },
        ],
      }]}>
        Remember this night as a time{"\n"}
        when you were surrounded by{"\n"}
        love and laughter. Cherish the{"\n"}
        memories you made with your{"\n"}
        friends, and know that you are{"\n"}
        always loved and supported.
      </Animated.Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    width: width,
    height: '100%',
    justifyContent: 'flex-end',
    paddingLeft: 15,
  },
  txt: {
    fontFamily: 'AveriaSerifLibre_400Regular',
    fontSize: 20,
    lineHeight: 24,
    bottom: 150,
  }
})

export default MemoryOverviewText