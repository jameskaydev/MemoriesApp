import { StyleSheet, Dimensions } from "react-native"
import { h, m, v } from "../utils/scale";

const { width, height } = Dimensions.get("window")

const styles = () => StyleSheet.create({
  main: {
    justifyContent: "center",
    width: width,
    height: height,
  },
  titleContainer: {
    position: "relative",
    paddingBottom: v(60)
  },
  title: {
    fontSize: m(48),
    lineHeight: v(45),
    marginLeft: h(15),
    marginBottom: v(25),
    fontFamily: "AveriaSerifLibre_400Regular",
  },
  image: {
    position: "absolute",
    right: h(20),
    top: v(10),
  },
  desc: {
    fontSize: m(20),
    color: '#252525',
    marginLeft: h(15),
    fontFamily: 'AveriaSerifLibre_400Regular'
  },
  tryBtn: {
    backgroundColor: "#252525",
    borderRadius: 30,
    justifyContent: "center",
    marginHorizontal: h(15),
    marginBottom: v(10),
    paddingVertical: v(15),
  },
  tryBtnTxt: {
    textAlign: "center",
    fontFamily: "AveriaSerifLibre_400Regular",
    color: "#FFF",
    fontSize: m(20),
  },
  backBtn: {
    borderRadius: 30,
    justifyContent: "center",
    marginHorizontal: h(15),
    marginBottom: v(10),
    paddingVertical: v(15),
    borderWidth: 1,
    borderColor: '#252525'
  },
  backBtnTxt: {
    textAlign: "center",
    fontFamily: "AveriaSerifLibre_400Regular",
    color: "#252525",
    fontSize: m(20),
  },
  footerImage: {
    width: width,
    marginTop: v(10)
  },
  btnContainer: {
    position: "absolute",
    bottom: 0,
  }
});

export default styles;