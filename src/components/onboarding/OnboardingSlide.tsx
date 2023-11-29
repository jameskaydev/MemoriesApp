import {
  Text,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { onboardingSlideStyles as styles } from "../../styles/styles";

interface SlideProps {
  title: string;
  description: string;
  image: string;
  dir: string;
  bgColor: string;
  txtColor: string;
  flexDir: string;
  final?: boolean;
  height?: number;
  imageWidth?: number;
  isImageFullWidth?: boolean;
  currentIndex: number;
  slideInAnimation: Animated.Value;
  slideOutAnimation: Animated.Value;
  index: number;
}

const OnboardingSlide = (props: SlideProps) => {
  const {
    title,
    description,
    image, 
    dir,
    bgColor,
    txtColor,
    flexDir,
    final,
    height,
    imageWidth,
    isImageFullWidth,
    currentIndex,
    slideInAnimation,
    slideOutAnimation,
    index,
  } = props;

  const slideInStyle = {
    transform: [
      {
        translateX: slideInAnimation.interpolate({
          inputRange: [currentIndex - 1, currentIndex, currentIndex + 1],
          outputRange: [500, 0, -500],
        }),
      },
    ],
  };

  const slideOutStyle = {
    transform: [
      {
        translateX: slideOutAnimation.interpolate({
          inputRange: [currentIndex - 1, currentIndex, currentIndex + 1],
          outputRange: [0, 100, -100],
        }),
      },
    ],
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles({ flexDir }).container}>
      {currentIndex === index && (
        <>
          {final ? (
            <TouchableOpacity
              onPress={() => navigation.navigate("OnboardingChat" as never)}
              style={styles({}).nextButton}
            >
              <Text
                style={[
                  styles({}).nextButtonText,
                  {
                    fontFamily: "AveriaSerifLibre_300Light",
                  },
                ]}
              >
                Next
              </Text>
            </TouchableOpacity>
          ) : null}

          <Animated.View
            style={[
              styles({ txtColor, flexDir, height }).textBox,
              slideInStyle,
            ]}
          >
            <Text
              style={[
                styles({ txtColor, dir }).title,
                { fontFamily: "AveriaSerifLibre_700Bold" },
              ]}
            >
              {title}
            </Text>
            <Text
              style={[
                styles({ txtColor, dir }).description,
                { fontFamily: "AveriaSerifLibre_400Regular" },
              ]}
            >
              {description}
            </Text>
          </Animated.View>

          <Animated.View
            style={[styles({ isImageFullWidth }).imageContainer, slideOutStyle]}
          >
            <Image
              source={image as never}
              style={styles({ isImageFullWidth, imageWidth }).image}
            />
          </Animated.View>
        </>
      )}
    </SafeAreaView>
  );
};

export default OnboardingSlide;
