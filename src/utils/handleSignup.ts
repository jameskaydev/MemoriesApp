import { navigateFunc } from './../types/navigate';
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword, AuthErrorCodes } from "firebase/auth";
import setStateType from "../types/setState";

interface SetStateProps {
  error: boolean;
  message: string;
}

interface Props {
  email: string;
  mainPass: string;
  repeatPass: string;
  setError: setStateType<SetStateProps>;
  setIsLoading: setStateType<boolean>;
  setEmail: setStateType<string>;
  setMainPass: setStateType<string>;
  setRepeatPass: setStateType<string>;
  navigate: navigateFunc;
}

const handleSignup = ({
  email,
  mainPass,
  repeatPass,
  setError,
  setIsLoading,
  setEmail,
  setMainPass,
  setRepeatPass,
  navigate
}: Props) => {
  if ([email.trim(), mainPass.trim(), repeatPass.trim()].includes("")) {
    setError({ error: true, message: "Please fill all blanks!" });
  } else if (mainPass !== repeatPass) {
    setError({ error: true, message: "Passwords don't match!" });
  } else {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, mainPass)
      .then(() => {
        setEmail("");
        setMainPass("");
        setRepeatPass("");
        setError({error: false, message: ""})
        setIsLoading(false);
        navigate("AuthStack", { screen: "Success" });
      })
      .catch((err) => {
        setIsLoading(false);
        switch (err.code) {
          case AuthErrorCodes.EMAIL_EXISTS:
            setError({ error: true, message: "Email already exists!" });
          case AuthErrorCodes.INVALID_EMAIL:
            setError({ error: true, message: "Invalid email address!" });
          case AuthErrorCodes.NETWORK_REQUEST_FAILED:
            setError({ error: true, message: "Network request failed!" });
          case AuthErrorCodes.CREDENTIAL_MISMATCH:
            setError({ error: true, message: "Passwords not match!" });
          default:
            setError({ error: true, message: "Something went wrong!" });
        }
      });
  }
};


export default handleSignup