import { useState } from "react";
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
import { SignupStyles as styles } from "../styles/styles"; //styles
import { useNavigation } from "@react-navigation/core";

import { AuthErrorCodes, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from "../../firebaseConfig";

// Components
import LinkButton from "../components/LinkButton";
import LogoMain from "../components/svg/LogoMain";
import Visibility from "../components/svg/Visibility";
import Invisibility from "../components/svg/Invisibility";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [mainPass, setMainPass] = useState("");
  const [isMainPassVisibile, setIsMainPassVisible] = useState(false);
  const [error, setError] = useState({error: false, message: ''})
  const [isLoading, setIsLoading] = useState(false);

  const { width } = Dimensions.get("window")
  const navigation = useNavigation();

  const handleSignin = () => {
    if (!mainPass.trim() || !email.trim()) {
      setError({error: true, message: 'Please fill all blanks!'});
    } else {
      setIsLoading(true)
      signInWithEmailAndPassword(auth, email, mainPass)
        .then( async () => {
          const user = auth.currentUser
          const docRef = doc(db, "users", user?.uid as never);
          const docc = await getDoc(docRef);
          if ( docc.data()?.is_onboarding_complete ) {
            navigation.navigate("Home" as never);
          } else {
            navigation.navigate("Onboarding" as never);
          }
        })
        .catch((err) => {
          switch (err.code) {
            case AuthErrorCodes.INVALID_EMAIL:
              setError({ error: true, message: "Invalid email address!"})
            case AuthErrorCodes.USER_DELETED:
              setError({ error: true, message: 'User not found!'})
            case AuthErrorCodes.INVALID_PASSWORD:
              setError({ error: true, message: 'Wrong password!'})
            default: 
              setError({ error: true, message: "Something went wrong!"})
          }
          setIsLoading(false)
        })
    }
  }

  return (
    <SafeAreaView style={{ height: '100%' }}>
      <View>
        <Text
          style={[styles({}).title, { fontFamily: "AveriaSerifLibre_700Bold" }]}
        >
          Sign In <LogoMain width="54" height="50" />
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
            placeholder="Enter password"
            placeholderTextColor="rgba(37, 37, 37, 0.5)"
            value={mainPass}
            onChangeText={(txt) => setMainPass(txt.toString())}
            secureTextEntry={!isMainPassVisibile}
            style={[
              styles({ margin: error.error ? 10 : 50 }).input,
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
        {error.error ? <Text style={{ marginBottom: 40, paddingLeft: 15, color: 'red' }}>{error.message}</Text> : null}

        <TouchableOpacity
          onPress={() => handleSignin()}
          disabled={isLoading}
        >
          <View style={styles({btnPadding: isLoading ? 13 : 20}).formBtn}>
            {
              isLoading ? (
                <ActivityIndicator size='large' color='#FFF' />
              ) : (
                <Text
                style={styles({}).formBtnTxt}
                >
              Get Started
            </Text>
              )
            }
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 180 }}>
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