import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import styles from "../styles/signin"; // styles
import { useNavigation } from "@react-navigation/core";

// Components
import LinkButton from "../components/LinkButton";
import LogoMain from "../components/svg/LogoMain";
import Visibility from "../components/svg/Visibility";
import Invisibility from "../components/svg/Invisibility";

// types
import { navigate } from "../types/navigate";

// utils
import handleSignup from "../utils/handleSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [mainPass, setMainPass] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [isMainPassVisibile, setIsMainPassVisible] = useState(false);
  const [isRepeatPassVisibile, setIsRepeatPassVisible] = useState(false);
  const [error, setError] = useState({ error: false, message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const { navigate } = useNavigation<navigate>();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <SafeAreaView style={styles({}).mainContainer}>
        <View>
          <Text style={styles({}).title}>
            Sign Up <LogoMain width={54} height={50} />
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
              placeholder="Create password"
              placeholderTextColor="rgba(37, 37, 37, 0.5)"
              value={mainPass}
              onChangeText={(txt) => setMainPass(txt.toString())}
              secureTextEntry={!isMainPassVisibile}
              style={
                styles({
                  margin: 35,
                  error: error,
                  isBlank: mainPass === "" && error.message !== "",
                  isPass: true,
                }).input
              }
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

          <View style={styles({}).passContainer}>
            <TextInput
              placeholder="Repeat password"
              placeholderTextColor="rgba(37, 37, 37, 0.5)"
              value={repeatPass}
              onChangeText={(txt) => setRepeatPass(txt.toString())}
              secureTextEntry={!isRepeatPassVisibile}
              style={
                styles({
                  margin: error.error ? 10 : 50,
                  error: error,
                  isBlank: repeatPass == "" && error.message !== "",
                  isPass: true,
                }).input
              }
            />
            <TouchableOpacity
              style={styles({}).visibility}
              onPress={() => setIsRepeatPassVisible(!isRepeatPassVisibile)}
            >
              {isRepeatPassVisibile ? (
                <Invisibility width={25} height={25} />
              ) : (
                <Visibility width={25} height={25} />
              )}
            </TouchableOpacity>
          </View>
          {error.error ? (
            <Text style={styles({}).errorMessage}>{error.message}</Text>
          ) : null}

          <TouchableOpacity
            onPress={() =>
              handleSignup({
                email,
                mainPass,
                repeatPass,
                setError,
                setIsLoading,
                setEmail,
                setMainPass,
                setRepeatPass,
                navigate,
              })
            }
            disabled={isLoading}
          >
            <View style={styles({ btnPadding: isLoading ? 21 : 20 }).formBtn}>
              {isLoading ? (
                <ActivityIndicator size="small" color="#FFF" />
              ) : (
                <Text style={styles({}).formBtnTxt}>Get Started</Text>
              )}
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles({}).footerLinkContainer}>
          <Text style={styles({}).footerLinkTxt}>
            Do you already have an account?
          </Text>
          <LinkButton
            text="Sign In"
            onpress={() => navigate("AuthStack", { screen: "Signin" })}
          />
        </View>

        <Image
          source={require("../../assets/images/bottom_colos.png")}
          style={styles({}).footerImage}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Signup;
