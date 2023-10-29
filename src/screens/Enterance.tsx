import { View, Text, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthStyles as styles } from "../styles/styles";

// Components
import SvgButton from "../components/SvgButton";
import LogoMain from "../components/svg/LogoMain";
import Button from "../components/Button";
import LinkButton from "../components/LinkButton";

const Enterance = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <SafeAreaView style={{height: height}}>
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
          <SvgButton width={60} height={60} />
          <SvgButton width={60} height={60} />
          <SvgButton width={60} height={60} />
          <Button text="Sign Up" />
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
          <LinkButton text="Sign In" />
        </View>
      </View>
        <Image
          source={require("../../assets/images/bottom_colos.png")}
          style={{
            width: width,
            position: 'absolute',
            bottom: 0
          }}
        />
    </SafeAreaView>
  );
};

export default Enterance;
