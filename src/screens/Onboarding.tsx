import { useRef, useEffect, useState } from "react";
import { FlatList, Animated } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Components
import OnboardingSlide from "../components/onboarding/OnboardingSlide";

// hooks
import useColorAnimation from "../hooks/bgAnimation";

// Constants
import { onboardingList } from "../constants/onboardingList";

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [color, setColor] = useState(onboardingList[currentIndex].bgColor);
  const [slideInAnimation] = useState<Animated.Value>(new Animated.Value(0))
  const [slideOutAnimation] = useState<Animated.Value>(new Animated.Value(0))
  
  const flatListRef = useRef<FlatList | null>(null);

  const [backgroundColor] = useColorAnimation(color);

  useEffect(() => {
    // Slides Animation
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

  const onScroll = (event: any): void => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
      if ( roundIndex !== currentIndex ) {
        setCurrentIndex(roundIndex);
        setColor(onboardingList[roundIndex].bgColor);
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