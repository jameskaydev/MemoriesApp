import { Animated, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRef, useState, useEffect } from "react";
import { ExpandingDot } from "react-native-animated-pagination-dots";
import { dataOverview } from "../constants/memoriesSample";
import MemoryOverviewTopbar from "../components/memories/MemoryOverviewTopbar";
import MemoryOverviewCover from "../components/memories/MemoryOverviewCover";
import useColorAnimation from "../hooks/bgAnimation";

const MemoryOverview = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [prevIndex, setPreviousIndex] = useState<number>(0);
  const [color, setColor] = useState<string>(dataOverview[currentIndex].bgColor);
  const [slideInAnimation] = useState<Animated.Value>(new Animated.Value(0))
  const [slideOutAnimation] = useState<Animated.Value>(new Animated.Value(0))
  const paginationScrollX = useRef(new Animated.Value(0)).current;

  const [backgroundColor] = useColorAnimation(color);
  const PaginationDots = () => {
    return (
      <ExpandingDot
        data={["d", "s", "s", "sf", "sd"]}
        expandingDotWidth={60}
        scrollX={paginationScrollX}
        inActiveDotOpacity={1}
        dotStyle={{
          width: 22,
          height: 5,
          backgroundColor: "#252525",
          borderRadius: 20,
          marginHorizontal: 4,
        }}
        containerStyle={{
          bottom: 70,
        }}
        activeDotColor="#252525"
        inActiveDotColor="#252525"
      />
    );
  };

  const onScroll = (event: any): void => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    if ( roundIndex !== currentIndex ) {
      setPreviousIndex(currentIndex)
      setCurrentIndex(roundIndex);
      setColor(dataOverview[roundIndex].bgColor);

    }
  };

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

  return (
    <SafeAreaView>
      <MemoryOverviewTopbar />
      <Animated.FlatList
        data={dataOverview}
        // keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        style={{
          height: "100%",
          backgroundColor: backgroundColor as any,
        }}
        pagingEnabled
        horizontal
        // @ts-ignore
        slideInAnimation={slideInAnimation}
        slideOutAnimation={slideOutAnimation} 
        renderItem={({ item }) => {
          const Comp = item.comp;
          return <Comp index={currentIndex} prevIndex={prevIndex} />;
        }}
        />
      <PaginationDots />
    </SafeAreaView>
  );
};


export default MemoryOverview;
