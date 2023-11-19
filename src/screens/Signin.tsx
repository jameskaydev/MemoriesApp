import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/signin"; //styles
import { useNavigation } from "@react-navigation/core";

import { AuthErrorCodes, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";

// Components
import LinkButton from "../components/LinkButton";
import LogoMain from "../components/svg/LogoMain";
import Visibility from "../components/svg/Visibility";
import Invisibility from "../components/svg/Invisibility";

// types
import { navigate } from "../types/navigate";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [mainPass, setMainPass] = useState("");
  const [isMainPassVisibile, setIsMainPassVisible] = useState(false);
  const [error, setError] = useState({ error: false, message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const { navigate } = useNavigation<navigate>();

  const handleSignin = () => {
    if (!mainPass.trim() || !email.trim()) {
      setError({ error: true, message: "Please fill all blanks!" });
    } else {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, mainPass)
        .then(async () => {
          const user = auth.currentUser;
          const docRef = doc(db, "users", user?.uid as never);
          const docc = await getDoc(docRef);
          if (docc.data()?.is_onboarding_complete) {
            navigate("HomeStack", { screen: "Home" });
          } else {
            navigate("HomeStack", { screen: "Onboarding" });
          }
        })
        .catch((err) => {
          switch (err.code) {
            case AuthErrorCodes.INVALID_EMAIL:
              setError({ error: true, message: "Invalid email address!" });
            case AuthErrorCodes.USER_DELETED:
              setError({ error: true, message: "User not found!" });
            case AuthErrorCodes.INVALID_PASSWORD:
              setError({ error: true, message: "Wrong password!" });
            default:
              setError({ error: true, message: "Something went wrong!" });
          }
          setIsLoading(false);
        });
    }
  };

  return (
    <SafeAreaView style={styles({}).mainContainer}>
      <View>
        <Text style={styles({}).title}>
          Sign In <LogoMain width={54} height={50} />
        </Text>
      </View>

      <View style={styles({}).formContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="rgba(37, 37, 37, 0.5)"
          value={email}
          onChangeText={(txt) => setEmail(txt.toString())}
          style={
            styles({
              margin: 35,
              error: error,
              isBlank: email == "" && error.message !== "",
              isPass: false,
            }).input
          }
        />

        <View style={styles({}).passContainer}>
          <TextInput
            placeholder="Enter password"
            placeholderTextColor="rgba(37, 37, 37, 0.5)"
            value={mainPass}
            onChangeText={(txt) => setMainPass(txt.toString())}
            secureTextEntry={!isMainPassVisibile}
            style={styles({ margin: error.error ? 10 : 50 }).input}
          />
          <TouchableOpacity
            style={styles({}).visibility}
            onPress={() => setIsMainPassVisible(!isMainPassVisibile)}
          >
            {isMainPassVisibile ? (
              <Invisibility width={25} height={25} />
            ) : (
              <Visibility width={25} height={25} />
            )}
          </TouchableOpacity>
        </View>
        {error.error ? (
          <Text style={styles({}).errorMessage}>{error.message}</Text>
        ) : null}

        <TouchableOpacity onPress={() => handleSignin()} disabled={isLoading}>
          <View style={styles({ btnPadding: isLoading ? 13 : 20 }).formBtn}>
            {isLoading ? (
              <ActivityIndicator size="large" color="#FFF" />
            ) : (
              <Text style={styles({}).formBtnTxt}>Get Started</Text>
            )}
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles({}).footerLink}>
        <LinkButton
          text="Sign Up"
          preText="New here? "
          onpress={() => navigate("AuthStack", { screen: "Signup" })}
        />
      </View>

      <Image
        source={require("../../assets/images/bottom_colos.png")}
        style={styles({}).footerImage}
      />
    </SafeAreaView>
  );
};

export default Signin;
