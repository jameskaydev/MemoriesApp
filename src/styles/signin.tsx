import { StyleSheet, Dimensions } from "react-native";
import { h, m, v } from "../utils/scale";

interface Error {
  error: boolean;
  message: string;
}

interface SignupStyleProps {
  margin?: number;
  error?: Error;
  isBlank?: boolean;
  isPass?: boolean;
  btnPadding?: number;
}

const emailErrors = [
  "Password don't match!",
  "Email alreay exists!",
  "Invalid email address!",
];

const { width } = Dimensions.get("window");

const styles = ({
  margin,
  error,
  isBlank,
  isPass,
  btnPadding,
}: SignupStyleProps) =>
  StyleSheet.create({
    mainContainer: {
      height: "100%",
    },
    title: {
      fontSize: m(48),
      marginTop: v(130),
      marginLeft: h(15),
      fontFamily: "AveriaSerifLibre_700Bold",
    },
    formContainer: {
      marginTop: v(108),
    },
    input: {
      borderBottomColor: isPass
        ? isBlank
          ? "red"
          : error?.message === "Passwords don't match!"
          ? "red"
          : "#252525"
        : isBlank
        ? "red"
        : emailErrors.includes(error?.message as never)
        ? "red"
        : "#252525",
      borderBottomWidth: 1,
      marginHorizontal: h(15),
      paddingBottom: v(3),
      paddingLeft: h(12),
      fontSize: m(20),
      marginBottom: margin,
      fontFamily: "AveriaSerifLibre_700Bold",
    },
    visibility: {
      position: "absolute",
      right: h(25),
    },
    passContainer: {
      position: "relative",
    },
    formBtn: {
      backgroundColor: "#252525",
      borderRadius: 30,
      justifyContent: "center",
      marginHorizontal: h(15),
      paddingVertical: btnPadding,
    },
    formBtnTxt: {
      textAlign: "center",
      fontFamily: "AveriaSerifLibre_400Regular",
      color: "#FFF",
      fontSize: m(20),
    },
    errorMessage: {
      marginBottom: v(40),
      paddingLeft: h(15),
      color: "red",
    },
    footerLink: {
      marginTop: v(150),
    },
    footerImage: {
      width: width,
      position: "absolute",
      bottom: 0,
    },
    // signup
    footerLinkContainer: {
      marginTop: v(45)
    },
    footerLinkTxt: {
      fontFamily: "AveriaSerifLibre_400Regular",
      fontSize: m(20),
      textAlign: "center",
      marginBottom: h(10),
    }
  });

export default styles;
