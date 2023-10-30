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

import LinkButton from "../components/LinkButton";
import LogoMain from "../components/svg/LogoMain";
import Visibility from "../components/svg/Visibility";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [mainPass, setMainPass] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [isMainPassVisibile, setIsMainPassVisible] = useState(false);
  const [isRepeatPassVisibile, setIsRepeatPassVisible] = useState(false);

  const {width, height} = Dimensions.get("window")
  const navigation = useNavigation();

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, mainPass)
    .then(userCreds => {
      const user = userCreds.user;
      console.log(user.email)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <SafeAreaView style={{height: height}}>
      <View>
        <Text
          style={[styles().title, { fontFamily: "AveriaSerifLibre_700Bold" }]}
        >
          Sign Up <LogoMain width="54" height="50" />
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

        <View style={styles().passContainer}>
          <TextInput
            placeholder="Repeat password"
            placeholderTextColor="rgba(37, 37, 37, 0.5)"
            value={repeatPass}
            onChangeText={(txt) => setRepeatPass(txt.toString())}
            secureTextEntry={!isRepeatPassVisibile}
            style={[
              styles(50).input,
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
            onPress={() => setIsRepeatPassVisible(!isRepeatPassVisibile)}
          >
            <Visibility width={25} height={25} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={handleSignup}
        >
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

      <View style={{ marginTop: 90 }}>
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
        <LinkButton
          text="Sign In"
          onpress={() => navigation.navigate("Signin" as never)}
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

export default Signup;
