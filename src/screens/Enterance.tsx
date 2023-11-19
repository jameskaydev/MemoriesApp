import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";

// Auth
import { useIdTokenAuthRequest as useGoogleIdTokenAuthRequest } from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";

import styles from "../styles/enterance"; // styles

// Components
import SvgButton from "../components/SvgButton";
import LogoMain from "../components/svg/LogoMain";
import Button from "../components/Button";
import LinkButton from "../components/LinkButton";

// utils
import { v, m, h } from "../utils/scale";
import signInWithApple from "../utils/auth/apple";
import handleComingGoogleCreds from "../utils/auth/google";
import { fbAuthRequest, fbHandleRequest } from "../utils/auth/facebook";

// Constants
import { googleKeys } from "../constants/googleKeys";

// types
import { navigate } from "../types/navigate";

// WebBrowser.maybeCompleteAuthSession();
const Enterance = () => {
  const { navigate } = useNavigation<navigate>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Auth
  const { response, promptAsync } = fbAuthRequest(); // facebook
  const [, googleResponse, promptAsyncGoogle] =
    useGoogleIdTokenAuthRequest(googleKeys); // google

  useEffect(() => {
    fbHandleRequest({ response, navigate, setIsLoading }); // facebook
    handleComingGoogleCreds({ googleResponse, navigate, setIsLoading }); // google
  }, [response, googleResponse]);

  const handleLoginGoogle = async () => {
    await promptAsyncGoogle();
  };

  return (
    <SafeAreaView style={styles().mainContainer}>
      <View style={styles().enteranceTitleContainer}>
        <Text style={styles().enteranceTitle}>
          Make{"\n"}
          Each <LogoMain width={h(65)} height={v(60)} /> {"\n"}
          Moment{"\n"}
          Count.
        </Text>

        <Text style={styles().enteranceDesc}>
          Capture it All,{"\n"}
          Miss Nothing ,{"\n"}
          The Moments That Make You,{"\n"}
          You
        </Text>

        <View style={styles().enteranceBtnContainer}>
          {Platform.OS === "ios" && (
            <TouchableOpacity
              onPress={() => signInWithApple(setIsLoading, navigate)}
            >
              <SvgButton
                company="apple"
                width={m(60)}
                height={m(60)}
              />
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={() => handleLoginGoogle()}>
            <SvgButton
              company="google"
              width={m(60)}
              height={m(60)}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => promptAsync()}>
            <SvgButton
              company="facebook"
              width={m(60)}
              height={m(60)}
            />
          </TouchableOpacity>

          <Button
            text="Sign Up"
            onpress={() => navigate("AuthStack", { screen: "Signup" })}
          />
        </View>

        <View style={styles().enteranceFooterContainer}>
          <Text style={styles().enteranceFooterTxt}>
            Do you already have an account?
          </Text>
          <LinkButton
            text="Sign In"
            onpress={() => navigate("AuthStack", { screen: "Signin" })}
          />
        </View>
      </View>

      <Image
        source={require("../../assets/images/bottom_colos.png")}
        style={styles().enteranceFooterImage}
      />

      {isLoading && (
        <View style={styles().authLoading}>
          <ActivityIndicator size="large" color="#FFF" />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Enterance;
