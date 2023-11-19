import * as AppleAuth from "expo-apple-authentication";
import * as Crypto from "expo-crypto";
import { OAuthProvider, signInWithCredential } from "firebase/auth";
import { auth, db } from "../../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

// types
import { navigateFunc } from "../../types/navigate";
import setStateType from "../../types/setState";

const signInWithApple = (setIsLoading: setStateType<boolean>, navigate: navigateFunc) => {
  const nonce = Math.random().toString(36).substring(2, 10);

  return Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, nonce)
    .then((hashedNonce) => {
      AppleAuth.signInAsync({
        requestedScopes: [
          AppleAuth.AppleAuthenticationScope.FULL_NAME,
          AppleAuth.AppleAuthenticationScope.EMAIL,
        ],
        nonce: hashedNonce,
      })
        .then((appleCreds) => {
          setIsLoading(true);
          const { identityToken } = appleCreds;
          const provider = new OAuthProvider("apple.com");
          const creds = provider.credential({
            idToken: identityToken as any,
            rawNonce: nonce,
          });
          signInWithCredential(auth, creds)
            .then(async (user) => {
              const uid = user.user.uid;
              const docRef = doc(db, "users", uid as never);
              const docc = await getDoc(docRef);
              if (docc.data()?.is_onboarding_complete) {
                navigate("HomeStack", { screen: "Home" });
              } else {
                navigate("HomeStack", { screen: "Onboarding" });
              }
            })
            .catch(() => {
              setIsLoading(false);
            });
        })
        .catch(() => {
          setIsLoading(false);
        });
    })
    .catch((e) => {
      console.log(e);
    });
};

export default signInWithApple;
