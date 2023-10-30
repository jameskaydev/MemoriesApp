import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SignupStyles as styles } from "../styles/styles";
import { useState } from "react";
import { useNavigation } from "@react-navigation/core";

// Components
import LinkButton from "../components/LinkButton";
import LogoMain from "../components/svg/LogoMain";
import Visibility from "../components/svg/Visibility";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [mainPass, setMainPass] = useState("");
  const [isMainPassVisibile, setIsMainPassVisible] = useState(false);

  const {width, height} = Dimensions.get("window")
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{height: height}}>
      <View>
        <Text
          style={[styles().title, { fontFamily: "AveriaSerifLibre_700Bold" }]}
        >
          Sign In <LogoMain width="54" height="50" />
        </Text>
      </View>

      <View style={styles().formContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="rgba(37, 37, 37, 0.5)"
          value={email}
          onChangeText={(txt) => setEmail(txt.toString())}
          style={[
            styles(35).input,
            {
              fontFamily: "AveriaSerifLibre_700Bold",
            },
          ]}
        />

        <View style={styles().passContainer}>
          <TextInput
            placeholder="Create password"
            placeholderTextColor="rgba(37, 37, 37, 0.5)"
            value={mainPass}
            onChangeText={(txt) => setMainPass(txt.toString())}
            secureTextEntry={!isMainPassVisibile}
            style={[
              styles(35).input,
              {
                fontFamily: "AveriaSerifLibre_700Bold",
              },
            ]}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 25,
            }}
            onPress={() => setIsMainPassVisible(!isMainPassVisibile)}
          >
            <Visibility width={25} height={25} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <View style={styles().formBtn}>
            <Text
              style={[
                styles().formBtnTxt,
                {
                  fontFamily: "AveriaSerifLibre_400Regular",
                },
              ]}
            >
              Get Started
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 200 }}>
        <LinkButton
          text="Sign Up"
          preText="New here? "
          onpress={() => navigation.navigate("Signup" as never)}
        />
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

export default Signin;