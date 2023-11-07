import { StyleSheet, FlatList, Animated } from "react-native";
import { onboardingList } from "../constants/onboardingList";
import OnboardingSlide from "../components/onboarding/OnboardingSlide";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useRef, useEffect, useState } from "react";
import useColorAnimation from "../hooks/bgAnimation";

const Onboarding = () => {
  const colors = ['#E9AF00', '#036BBF', '#6EAC3D', '#EC8002', '#036BBF'];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [color, setColor] = useState(onboardingList[currentIndex].bgColor);
  const [backgroundColor] = useColorAnimation(color);
  const flatListRef = useRef<FlatList | null>(null);
  const [slideInAnimation] = useState<Animated.Value>(new Animated.Value(0))
  const [slideOutAnimation] = useState<Animated.Value>(new Animated.Value(0))

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideInAnimation, {
        toValue: currentIndex,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(slideOutAnimation, {
        toValue: currentIndex - 1,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  }, [currentIndex])

  const onScroll = (event: any) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
      if ( roundIndex !== currentIndex ) {
        setCurrentIndex(roundIndex);
        setColor(colors[roundIndex]);
      }
  };

  return (
    <SafeAreaProvider>
      <Animated.FlatList
        ref={flatListRef}
        data={onboardingList}
        renderItem={({ item }) => <OnboardingSlide {...item} 
        currentIndex={currentIndex} 
        slideInAnimation={slideInAnimation}
        slideOutAnimation={slideOutAnimation} 
        />}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        onScroll={onScroll}
        style={{
          backgroundColor: backgroundColor as never
        }}
      />
    </SafeAreaProvider>
  );
};

export default Onboarding;