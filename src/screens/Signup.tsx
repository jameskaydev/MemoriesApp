import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import { SignupStyles as styles } from "../styles/styles";
import { useNavigation } from "@react-navigation/core";
import { createUserWithEmailAndPassword, AuthErrorCodes } from "firebase/auth";
import { auth } from "../../firebaseConfig";

// Components
import LinkButton from "../components/LinkButton";
import LogoMain from "../components/svg/LogoMain";
import Visibility from "../components/svg/Visibility";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [mainPass, setMainPass] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [isMainPassVisibile, setIsMainPassVisible] = useState(false);
  const [isRepeatPassVisibile, setIsRepeatPassVisible] = useState(false);
  const [error, setError] = useState({ error: false, message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const { width } = Dimensions.get("window")
  const navigation = useNavigation();

  const handleSignup = () => {
    if ([email.trim(), mainPass.trim(), repeatPass.trim()].includes('')) {
      setError({ error: true, message: 'Please fill all blanks!' });
    } else if (mainPass !== repeatPass) {
      setError({ error: true, message: "Passwords don't match!" });
    } else {
      setIsLoading(true)
      createUserWithEmailAndPassword(auth, email, mainPass)
        .then(userCreds => {
          const user = userCreds.user;
          console.log(user.email);
          navigation.navigate("Success" as never);
        })
        .catch(err => {
          setIsLoading(false)
          console.log(err.code)
          switch (err.code) {
            case AuthErrorCodes.EMAIL_EXISTS:
              setError({ error: true, message: "Email already exists!" })
            case AuthErrorCodes.INVALID_EMAIL:
              setError({ error: true, message: "Invalid email address!" })
            default:
              navigation.navigate("Failure" as never)
          }
        })
    }
  }

  return (
    <SafeAreaView style={{ height: '100%' }}>
      <View>
        <Text
          style={[styles({}).title, { fontFamily: "AveriaSerifLibre_700Bold" }]}
        >
          Sign Up <LogoMain width="54" height="50" />
        </Text>
      </View>

      <View style={styles({}).formContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="rgba(37, 37, 37, 0.5)"
          value={email}
          onChangeText={(txt) => setEmail(txt.toString())}
          style={[
            styles({ margin: 35, error: error, isBlank: (email == '' && error.message !== ''), isPass: false }).input,
            {
              fontFamily: "AveriaSerifLibre_700Bold",
            },
          ]}
        />

        <View style={styles({}).passContainer}>
          <TextInput
            placeholder="Create password"
            placeholderTextColor="rgba(37, 37, 37, 0.5)"
            value={mainPass}
            onChangeText={(txt) => setMainPass(txt.toString())}
            secureTextEntry={!isMainPassVisibile}
            style={[
              styles({ margin: 35, error: error, isBlank: (mainPass === '' && error.message !== ''), isPass: true }).input,
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

        <View style={styles({}).passContainer}>
          <TextInput
            placeholder="Repeat password"
            placeholderTextColor="rgba(37, 37, 37, 0.5)"
            value={repeatPass}
            onChangeText={(txt) => setRepeatPass(txt.toString())}
            secureTextEntry={!isRepeatPassVisibile}
            style={[
              styles({ margin: error.error ? 10 : 50, error: error, isBlank: (repeatPass == '' && error.message !== ''), isPass: true }).input,
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
        {error.error ? <Text style={{ marginBottom: 40, paddingLeft: 15, color: 'red' }}>{error.message}</Text> : null}

        <TouchableOpacity
          onPress={() => handleSignup()}
          disabled={isLoading}
        >
          <View style={styles({btnPadding: isLoading ? 21 : 20}).formBtn}>
            {isLoading ? (
              <ActivityIndicator size='small' color='#FFF' />
            ) : (
              <Text
                style={[
                  styles({}).formBtnTxt,
                  {
                    fontFamily: "AveriaSerifLibre_400Regular",
                  },
                ]}
              >
                Get Started
              </Text>
            )}
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 60 }}>
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
