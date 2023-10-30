import { StyleSheet, Dimensions } from "react-native"

const {width, height} = Dimensions.get("window")
const redBorder = {
  borderWidth: 4,
  borderColor: 'red'
}
const greenBorder = {
  borderWidth: 4,
  borderColor: 'green'
}
// Onboarding Slide
interface OnboardingSlide {
  txtColor?: string;
  bgColor?: string;
  font?: string;
  dir?: any;
  flexDir?: any;
  height?: number;
  imageWidth?: number;
  isImageFullWidth?: boolean;
}

export const onboardingSlideStyles = ( props: OnboardingSlide ) => StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: props.flexDir,
    height: height,
    width: width,
    backgroundColor: props.bgColor
  },
  textBox: {
    marginLeft: 15,
    marginRight: 15,
    height: props.height ? height*props.height : null,
    marginTop: props.flexDir === 'column' ? 120 : 0,
    textAlign: props.dir,
  },
  title: {
    fontSize: 48,
    marginBottom: 20,
    color: props.txtColor,
    textAlign: props.dir
  },
  description: {
    fontSize: 22,
    lineHeight: 24,
    color: props.txtColor,
    textAlign: props.dir
  },
  imageContainer: {
    width: props.isImageFullWidth ? width : width-30,
    flex: 1,
    justifyContent: 'center',
    alignItems: props.isImageFullWidth ? 'flex-end' : 'flex-start',
    marginLeft: 15,
    marginRight: props.isImageFullWidth ? 0 : 15,
  },
  image: {
    width: props.isImageFullWidth ? (props.imageWidth ? width*props.imageWidth : width
      ) : (
        props.imageWidth ? width*props.imageWidth : width-30
      ),
    height: height,
    resizeMode: 'contain',
  },
  nextButton: {
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 50,
    paddingVertical: 15,
    alignContent: 'center',
    marginHorizontal: 15,
    marginBottom: 60,
    marginTop: 34
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: props.font
  }
})


// Homepage
export const HomeStyles = () => StyleSheet.create({
  homeTitle: {
    fontSize: 48,
    lineHeight: 45,
    paddingLeft: 15
  },
  menuBarContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: width,
    marginTop: 30,
    minHeight: 30,
    marginBottom: 20,
  },
  homeColors: {
    marginTop: 20,
    width: width*0.8
  },
  startBoxContainer: {
    marginBottom: 50
  },
  startBoxBg: {
    height: height*0.30,
    marginLeft: 15,
    marginRight: 15,
    paddingLeft: 25,
  },
  startBoxTitle: {
    fontSize: 32,
    color: '#FFF',
    marginTop: 25,
    marginBottom: 13
  },
  startBoxText: {
    fontSize: 18,
    lineHeight: 20,
    color: '#FFF'
  },
  startBoxBtn: {
    position: 'absolute',
    right: 0,
    bottom: 4,
    paddingVertical: 18,
    left: '65%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 100,
  },
  startBoxBtnTxt: {
    color: '#000',
    textAlign: 'center',
    fontSize: 20
  },
  homeSeeAllContainer: {
    position: 'absolute',
    right: 15,
    bottom: 8
  },
  homeSeeAllBtn: {
    fontSize: 20
  },
  memoryCard: {
    width: width*0.65,
    borderWidth: 3,
    borderColor: '#252525',
    borderRadius: 30,
    marginLeft: 15
  },
  memoryCardImage: {
    width: width*0.65,
    borderRadius: 30,
  },
  memoryCardInfoContainer: {
    position: 'absolute',
    bottom: 11,
    right: 11,
    left: 11,
    borderRadius: 20,
    backgroundColor: 'rgba(37, 37, 37, 0.40)',
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 18 
  },
  memoryCardInfoText: {
    color: '#FFF',
    fontSize: 18
  }
})

// Enterance
export const AuthStyles = () => StyleSheet.create({
  enteranceTitle: {
    fontSize: 88,
    lineHeight: 70,
    // ...greenBorder
  },
  enteranceTitleContainer: {
    paddingTop: 94,
    paddingLeft: 15,
    // ...redBorder
  },
  enteranceDesc: {
    fontSize: 20,
    lineHeight: 24,
    marginTop: 40
  }
})

// Sign Up
export const SignupStyles = (margin?:number) => StyleSheet.create({
  title: {
    fontSize: 48,
    marginTop: 130,
    marginLeft: 15
  },
  formContainer: {
    marginTop: 108
  },
  input: {
    borderBottomColor: '#252525',
    borderBottomWidth: 1,
    marginHorizontal: 15,
    paddingBottom: 3,
    paddingLeft: 12,
    fontSize: 20,
    marginBottom: margin
  },
  passContainer: {
    // ...redBorder,
    position: 'relative'
  },
  formBtn: {
    backgroundColor: "#252525",
    borderRadius: 30,
    justifyContent: "center",
    // flex: 1,
    marginHorizontal: 15,
    paddingVertical: 15
  },
  formBtnTxt: {
    textAlign: "center",
    fontFamily: "AveriaSerifLibre_400Regular",
    color: "#FFF",
    fontSize: 20,
  },
})