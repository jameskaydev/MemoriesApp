import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get("window")

const styles = () => StyleSheet.create({
  main: {
    justifyContent: "center",
    width: width,
    height: height,
  },
  titleContainer: {
    position: "relative",
    paddingBottom: 60
  },
  title: {
    fontSize: 48,
    lineHeight: 45,
    marginLeft: 15,
    marginBottom: 25,
    fontFamily: "AveriaSerifLibre_400Regular",
  },
  image: {
    position: "absolute",
    right: 20,
    top: 10,
  },
  desc: {
    fontSize: 20,
    color: '#252525',
    marginLeft: 15,
    fontFamily: 'AveriaSerifLibre_400Regular'
  },
  tryBtn: {
    backgroundColor: "#252525",
    borderRadius: 30,
    justifyContent: "center",
    marginHorizontal: 15,
    marginBottom: 10,
    paddingVertical: 15,
  },
  tryBtnTxt: {
    textAlign: "center",
    fontFamily: "AveriaSerifLibre_400Regular",
    color: "#FFF",
    fontSize: 20,
  },
  backBtn: {
    borderRadius: 30,
    justifyContent: "center",
    marginHorizontal: 15,
    marginBottom: 10,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#252525'
  },
  backBtnTxt: {
    textAlign: "center",
    fontFamily: "AveriaSerifLibre_400Regular",
    color: "#252525",
    fontSize: 20,
  },
  footerImage: {
    width: width,
    marginTop: 10
  },
  btnContainer: {
    position: "absolute",
    bottom: 0,
  }
});

export default styles;