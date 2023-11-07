import { Text, View, Image, TouchableOpacity, Animated, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  AveriaSerifLibre_700Bold,
  AveriaSerifLibre_400Regular,
  AveriaSerifLibre_300Light,
  useFonts,
} from "@expo-google-fonts/averia-serif-libre"; 
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
}

const OnboardingSlide = ( props: SlideProps ) => {
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
  } = props

  useFonts({
    AveriaSerifLibre_700Bold,
    AveriaSerifLibre_400Regular,
    AveriaSerifLibre_300Light
  });

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles({ flexDir }).container}>
      {final ? (
        <TouchableOpacity onPress={() => navigation.navigate("OnboardingChat" as never)} style={styles({}).nextButton}>
          <Text style={[styles({}).nextButtonText, {
            fontFamily: 'AveriaSerifLibre_300Light'
          }]}>Next</Text>
        </TouchableOpacity>
      ) : null} 

      <View style={styles({ txtColor, flexDir, height }).textBox}>
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
      </View>

      <View style={[styles({isImageFullWidth}).imageContainer]}>
        <Image source={image as never} style={styles({isImageFullWidth, imageWidth}).image} />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingSlide;
