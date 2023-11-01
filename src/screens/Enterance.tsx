import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import signInWithFB from "../utils/signinWithFacebook";

import { AuthStyles as styles } from "../styles/styles";

// Components
import SvgButton from "../components/SvgButton";
import LogoMain from "../components/svg/LogoMain";
import Button from "../components/Button";
import LinkButton from "../components/LinkButton";
import { useNavigation } from "@react-navigation/core";

const Enterance = () => {
  const { width, height } = Dimensions.get("window");
  
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ height: '100%' }}>
      <View style={styles().enteranceTitleContainer}>
        <Text
          style={[
            styles().enteranceTitle,
            { fontFamily: "AveriaSerifLibre_700Bold" },
          ]}
        >
          Make{"\n"}Each <LogoMain width="65" height="60" />
          {"\n"}Moment{"\n"}Count.
        </Text>

        <Text
          style={[
            styles().enteranceDesc,
            { fontFamily: "AveriaSerifLibre_400Regular" },
          ]}
        >
          Capture it All,
          {"\n"}Miss Nothing ,{"\n"}The Moments That Make You,
          {"\n"}You
        </Text>

        <View style={{ flexDirection: "row", marginRight: 15, marginTop: 50 }}>
          <TouchableOpacity>
            <SvgButton company="apple" width={60} height={60} />
          </TouchableOpacity>

          <TouchableOpacity>
            <SvgButton company="google" width={60} height={60} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => signInWithFB()}>
            <SvgButton company="facebook" width={60} height={60} />
          </TouchableOpacity>
          
          <Button
            text="Sign Up"
            onpress={() => navigation.navigate("Signup" as never)}
            navigation={navigation}
          />

        </View>

        <View style={{ marginTop: 40 }}>
          <Text
            style={{
              fontFamily: "AveriaSerifLibre_400Regular",
              fontSize: 20,
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            Do you already have an account?
          </Text>
          <LinkButton text="Sign In" onpress={() => navigation.navigate("Signin" as never)} />
        </View>
      </View>
      <Image
        source={require("../../assets/images/bottom_colos.png")}
        style={{
          width: width,
          position: "absolute",
          bottom: 0,
        }}
      />
    </SafeAreaView>
  );
};

export default Enterance;
