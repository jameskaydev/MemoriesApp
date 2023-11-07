import { StyleSheet, FlatList, Animated } from "react-native";
import { onboardingList } from "../constants/onboardingList";
import OnboardingSlide from "../components/onboarding/OnboardingSlide";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useRef, useEffect, useState, useCallback } from "react";
import useColorAnimation from "../hooks/bgAnimation";

const Onboarding = () => {
  const colors = ['#E9AF00', '#036BBF', '#6EAC3D', '#EC8002', '#036BBF'];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [color, setColor] = useState(onboardingList[currentIndex].bgColor);
  const [backgroundColor, finished] = useColorAnimation(color);
  const flatListRef = useRef<FlatList | null>(null);

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
        renderItem={({ item }) => <OnboardingSlide {...item} />}
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

const styles = StyleSheet.create({});


  // // auto Scroll
  // useEffect(() => {
  //   const autoScrollInterval = setInterval(() => {
  //     const nextIndex = currentIndex + 1;

  //     if (nextIndex < 5) {
  //       setCurrentIndex(nextIndex);
  //       if (flatListRef.current) {
  //         flatListRef.current.scrollToIndex({
  //           animated: true,
  //           index: nextIndex,
  //         });
  //       }
  //     } else {
  //       clearInterval(autoScrollInterval);
  //     }
  //   }, 4000);

  //   return () => {
  //     clearInterval(autoScrollInterval);
  //   };
  // }, [currentIndex]); // auto scroll