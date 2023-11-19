import { StyleSheet, Dimensions } from "react-native"
import { m, h, v } from "../utils/scale"

const { width } = Dimensions.get("window")

const styles = () => StyleSheet.create({
  mainContainer: {
    height: "100%",
  },
  enteranceTitle: {
    fontSize: m(88),
    lineHeight: 70,
    fontFamily: "AveriaSerifLibre_700Bold"
  },
  enteranceTitleContainer: {
    paddingTop: h(94),
    paddingLeft: v(15),
  },
  enteranceDesc: {
    fontSize: m(20),
    lineHeight: 24,
    marginTop: h(40),
    fontFamily: "AveriaSerifLibre_400Regular"
  },
  enteranceBtnContainer: {
    flexDirection: "row", 
    marginRight: v(15),
    marginTop: h(30)
  },
  enteranceFooterContainer: {
    marginTop: v(40)
  },
  enteranceFooterTxt: {
    fontSize: m(20),
    fontFamily: "AveriaSerifLibre_400Regular",
    marginBottom: h(10),
    textAlign: "center",
  },
  enteranceFooterImage: {
    width: width,
    position: "absolute",
    bottom: 0,
  },
  authLoading: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles