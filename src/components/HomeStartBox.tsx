import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { HomeStyles as styles } from "../styles/styles";
import {
  useFonts,
  AveriaSerifLibre_700Bold,
  AveriaSerifLibre_400Regular,
} from "@expo-google-fonts/averia-serif-libre";

const StartBox = () => {
  useFonts({
    AveriaSerifLibre_700Bold,
    AveriaSerifLibre_400Regular,
  });
  return (
    <View style={styles().startBoxContainer}>
      <ImageBackground
        style={styles().startBoxBg}
        resizeMode="contain"
        source={require("../../assets/images/start_box.png")}
      >
        <Text
          style={[
            styles().startBoxTitle,
            { fontFamily: "AveriaSerifLibre_700Bold" },
          ]}
        >
          Hey, Josh!
        </Text>
        <Text
          style={[
            styles().startBoxText,
            { fontFamily: "AveriaSerifLibre_400Regular" },
          ]}
        >
          How's the moment going?{"\n"}
          Tell me everything and I'll help you{"\n"}
          to make the most of it!{"\n"}
        </Text>

        <TouchableOpacity style={styles().startBoxBtn}>
          <View>
            <Text
              style={[
                styles().startBoxBtnTxt,
                { fontFamily: "AveriaSerifLibre_400Regular" },
              ]}
            >
              Start{" "}
              <Image
                source={require("../../assets/images/start_arrow.png")}
                width={6}
                height={6}
              />
            </Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default StartBox;
