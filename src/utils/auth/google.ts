import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../firebaseConfig";
import { navigateFunc } from "../../types/navigate";
import setStateType from "../../types/setState";

interface Props {
  googleResponse: any;
  navigate: navigateFunc;
  setIsLoading: setStateType<boolean>;
}

const handleComingGoogleCreds = async ({
  googleResponse,
  navigate,
  setIsLoading,
}: Props) => {
  if (googleResponse?.type === "success") {
    const credentials = GoogleAuthProvider.credential(
      googleResponse.params.id_token
    );
    await signInWithCredential(auth, credentials)
      .then(async (user) => {
        setIsLoading(true);
        const uid = user.user.uid;
        const docRef = doc(db, "users", uid);
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
  }
};

export default handleComingGoogleCreds;