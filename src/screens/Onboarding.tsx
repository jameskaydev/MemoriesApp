import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import { onboardingList } from "../constants/onboardingList";
import OnboardingSlide from "../components/onboarding/OnboardingSlide";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useRef, useEffect, useState } from "react";

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList | null>(null);

  // auto Scroll
  useEffect(() => {
    const autoScrollInterval = setInterval(() => {
      const nextIndex = currentIndex + 1;

      if (nextIndex < 5) {
        setCurrentIndex(nextIndex);
        if (flatListRef.current) {
          flatListRef.current.scrollToIndex({
            animated: true,
            index: nextIndex,
          });
        }
      } else {
        clearInterval(autoScrollInterval);
      }
    }, 4000);

    return () => {
      clearInterval(autoScrollInterval);
    };
  }, [currentIndex]); // auto scroll

  return (
    <SafeAreaProvider>
      <FlatList
        ref={flatListRef}
        data={onboardingList}
        renderItem={({ item }) => <OnboardingSlide {...item} />}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
      />
    </SafeAreaProvider>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
