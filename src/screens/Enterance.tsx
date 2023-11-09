import { useEffect } from "react";
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
import { useIdTokenAuthRequest as useGoogleIdTokenAuthRequest } from "expo-auth-session/providers/google";
import { doc, getDoc  } from "firebase/firestore";
import { OAuthProvider, signInWithCredential, GoogleAuthProvider } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import * as AppleAuth from 'expo-apple-authentication';
import * as Crypto from 'expo-crypto';

// Components
import SvgButton from "../components/SvgButton";
import LogoMain from "../components/svg/LogoMain";
import Button from "../components/Button";
import LinkButton from "../components/LinkButton";

// utils
import { vScale, mScale, hScale } from "../utils/scale";

import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest, ResponseType } from 'expo-auth-session';
import { FacebookAuthProvider } from "firebase/auth";

WebBrowser.maybeCompleteAuthSession();
const discovery = {
  authorizationEndpoint: 'https://www.facebook.com/v13.0/dialog/oauth',
  tokenEndpoint: 'https://graph.facebook.com/v13.0/oauth/access_token',
  revocationEndpoint: 'https://graph.facebook.com/v13.0/me/permissions',
};

const Enterance = () => {
  const navigation = useNavigation();

  // Facebook Auth
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '1061944271657858',
      scopes: ['public_profile', 'email'],
      // For usage in managed apps using the proxy
      redirectUri: makeRedirectUri({
        // For usage in bare and standalone
        native: 'fb1061944271657858://authorize',
        // useProxy: Platform.select({ web: false, default: true }),
      }),
      responseType: ResponseType.Token,
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { access_token } = response.params;
  
      const credential = FacebookAuthProvider.credential(access_token);
  
      signInWithCredential(auth, credential)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
    }
  }, [response]);
  // End of Facebook Auth

  // Google Auth
  const [, googleResponse, promptAsyncGoogle] = useGoogleIdTokenAuthRequest({
    selectAccount: true,
    androidClientId:
      "971105754461-4p7js4aad277l08rdi6suj93naje3j9f.apps.googleusercontent.com",
    iosClientId:
      "971105754461-i0aat3glikc5gthq1jgeena8li9ht50h.apps.googleusercontent.com",
    expoClientId:
      "971105754461-8rss9eqbc6vm45fccrvmpcsl4itqulob.apps.googleusercontent.com"
  });

  const handleLoginGoogle = async () => {
    await promptAsyncGoogle();
  };

  useEffect(() => {
    const handleCominggoogleCreds = async () => {
      if (googleResponse?.type === "success") {
        const credentials = GoogleAuthProvider.credential(
          googleResponse.params.id_token
        );
        await signInWithCredential(auth, credentials)
        .then(async user => {
          const uid = user.user.uid
          const docRef = doc(db, "users", uid);
          const docc = await getDoc(docRef);
          if ( docc.data()?.is_onboarding_complete ) {
            navigation.navigate("Home" as never);
          } else {
            navigation.navigate("Onboarding" as never);
          }
        })
      }
    };

    handleCominggoogleCreds();
  }, [googleResponse]);
  // End of Google Auth

  // Apple Auth
  const signInWithApple = () => {
    const nonce = Math.random().toString(36).substring(2, 10);

    return Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, nonce)
    .then((hashedNonce) => {
      AppleAuth.signInAsync({
        requestedScopes: [
          AppleAuth.AppleAuthenticationScope.FULL_NAME,
          AppleAuth.AppleAuthenticationScope.EMAIL
        ],
        nonce: hashedNonce
      })
      .then((appleCreds) => {
        const { identityToken } = appleCreds;
        const provider = new OAuthProvider('apple.com')
        const creds = provider.credential({
          idToken: identityToken as any,
          rawNonce: nonce
        })
        signInWithCredential(auth, creds).then(async (user) => {
          const uid = user.user.uid;
          const docRef = doc(db, "users", uid as never);
          const docc = await getDoc(docRef);
          if ( docc.data()?.is_onboarding_complete ) {
            navigation.navigate("Home" as never);
          } else {
            navigation.navigate("Onboarding" as never);
          }
        }).catch(e => {
          // console.log(e)
        })
      })
      .catch(e => {
        // console.log('errrr')
      })
    })
    .catch(e => {
      // console.log(e)
    })
  }
  // End of Apple Auth

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
            <TouchableOpacity
            onPress={() => signInWithApple()}
            >
              <SvgButton company="apple" width={mScale(60)} height={mScale(60)} />
            </TouchableOpacity>
          )}

          <TouchableOpacity
          onPress={() => handleLoginGoogle()}
          >
            <SvgButton company="google" width={mScale(60)} height={mScale(60)} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              promptAsync()
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
