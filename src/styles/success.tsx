import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen")

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    width: width,
    height: height,
  },
  title: {
    fontSize: 48,
    lineHeight: 45,
    marginLeft: 15,
    marginBottom: 20,
    fontFamily: "AveriaSerifLibre_400Regular",
  },
  btnsContainer: {
    position: "absolute",
    bottom: 0,
  },
  image: {
    maxWidth: width,
    marginLeft: 15,
    marginBottom: 60
  },
  formBtn: {
    backgroundColor: "#252525",
    borderRadius: 30,
    justifyContent: "center",
    marginHorizontal: 15,
    marginBottom: 20,
    paddingVertical: 15
  },
  formBtnTxt: {
    textAlign: "center",
    fontFamily: "AveriaSerifLibre_400Regular",
    color: "#FFF",
    fontSize: 20,
  },
  bottomImage: {
    width: width
  }
});

export default styles