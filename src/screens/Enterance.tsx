import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthStyles as styles } from "../styles/styles";
import { useNavigation } from "@react-navigation/core";

// Components
import SvgButton from "../components/SvgButton";
import LogoMain from "../components/svg/LogoMain";
import Button from "../components/Button";
import LinkButton from "../components/LinkButton";

// utils
import { vScale, mScale, hScale } from "../utils/scale";

const Enterance = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View style={styles().enteranceTitleContainer}>

        <Text
          style={styles().enteranceTitle}
        >
          Make{"\n"}
          Each <LogoMain width={hScale(65)} height={vScale(60)} /> {"\n"}
          Moment{"\n"}
          Count.
        </Text>

        <Text
          style={styles().enteranceDesc}
        >
          Capture it All,{"\n"}
          Miss Nothing ,{"\n"}
          The Moments That Make You,{"\n"}
          You
        </Text>

        <View style={styles().enteranceBtnContainer}>

          {Platform.OS === "ios" && (
            <TouchableOpacity>
              <SvgButton company="apple" width={mScale(60)} height={mScale(60)} />
            </TouchableOpacity>
          )}

          <TouchableOpacity>
            <SvgButton company="google" width={mScale(60)} height={mScale(60)} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // signInWithFB()
            }}
          >
            <SvgButton company="facebook" width={mScale(60)} height={mScale(60)} />
          </TouchableOpacity>

          <Button
            text="Sign Up"
            onpress={() => navigation.navigate("Signup" as never)}
            navigation={navigation}
          />

        </View>

        <View style={{ marginTop: vScale(40) }}>

          <Text style={styles().enteranceFooterTxt}>
            Do you already have an account?
          </Text>
          <LinkButton
            text="Sign In"
            onpress={() => navigation.navigate("Signin" as never)}
          />

        </View>

      </View>

      <Image
        source={require("../../assets/images/bottom_colos.png")}
        style={styles().enteranceFooterImage}
      />

    </SafeAreaView>
  );
};

export default Enterance;
