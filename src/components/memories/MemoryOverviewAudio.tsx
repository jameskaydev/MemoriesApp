import { View, Text, StyleSheet, Dimensions, Image, Animated } from 'react-native'
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

interface Props {
  index: number;
  prevIndex: number;
}

const { width, height } = Dimensions.get("window")

const MemoryOverviewAudio = ({ index }: Props) => {
  const [slideInAnimation] = useState<Animated.Value>(new Animated.Value(0))
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
      <Animated.View style={{
        transform: [
          // {
          //   translateX: slideOutAnimation.interpolate({
          //     inputRange: [index - 1, index, index + 1],
          //     outputRange: [0, 500, -1000],
          //   }),
          // },
          // {
          //   translateX: slideInAnimation.interpolate({
          //     inputRange: [index - 1, index, index + 1],
          //     outputRange: [1000, 0, -500],
          //   }),
          // },
        ],
      }}>
 
      <Text style={[styles.title]}>
        Close your eyes and{"\n"}
        lets first take you back{"\n"}
        to that moment{"\n"}
      </Text>

      <Image 
        source={require("../../../assets/images/audio_placeholder.png")} 
        style={styles.img}
        />
        </Animated.View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    width: width,
    height: '100%',
    paddingLeft: 15,
    backgroundColor: '#6EAC3D'
  },
  title: {
    fontSize: 32,
    fontFamily: 'AveriaSerifLibre_700Bold',
    lineHeight: 35,
    marginTop: 170
  },
  img: {
    marginTop: 80
  }
})

export default MemoryOverviewAudio