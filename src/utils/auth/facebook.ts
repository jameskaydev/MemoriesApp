import { useAuthRequest } from "expo-auth-session"
import { FacebookAuthProvider, signInWithCredential } from "firebase/auth";
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from "../../../firebaseConfig";

import { fbKeys } from './../../constants/facebookKeys';
import { discovery } from "../../constants/facebookDiscovery"

import { navigateFunc } from "../../types/navigate";
import setStateType from "../../types/setState";

interface Props {
  response: any;
  navigate: navigateFunc;
  setIsLoading: setStateType<boolean>;
}

export const fbHandleRequest = ({ response, navigate, setIsLoading }: Props) => {
  if (response?.type === "success") {
    const { access_token } = response.params;
    const credential = FacebookAuthProvider.credential(access_token);
    signInWithCredential(auth, credential)
      .then(async (user) => {
        setIsLoading(true);
        const uid = user.user.uid;
        const docRef = doc(db, "users", uid);
        const docc = await getDoc(docRef);
        if (docc.data()?.is_onboarding_complete) {
          navigate("HomeStack", {screen: "Home"});
        } else {
          navigate("HomeStack", {screen: "Onboarding"});
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  }
}

export const fbAuthRequest = () => {
  const [request, response, promptAsync] = useAuthRequest({
    ...fbKeys
  },
  discovery
  )

  return {request, response, promptAsync};
}