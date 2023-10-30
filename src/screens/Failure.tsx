import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");
const Failure = () => {
  return (
    <SafeAreaView style={[styles.main]}>
      <View style={styles.titleContainer}>
        <Text
          style={[
            styles.title,
            {
              fontFamily: "AveriaSerifLibre_400Regular",
            },
          ]}
        >
          Something{"\n"}
          went wrong
        </Text>
        <Image
          source={require("../../assets/images/failure_emoji.png")}
          style={styles.image}
        />
        <Text style={[styles.desc, {
          fontFamily: 'AveriaSerifLibre_400Regular'
        }]}>
          Try to create an account again...
        </Text>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 0,
        }}
      >
        <TouchableOpacity>
          <View style={styles.tryBtn}>
            <Text
              style={[
                styles.tryBtnTxt,
                {
                  fontFamily: "AveriaSerifLibre_400Regular",
                },
              ]}
            >
              Try again!
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.backBtn}>
            <Text
              style={[
                styles.backBtnTxt,
                {
                  fontFamily: "AveriaSerifLibre_400Regular",
                },
              ]}
            >
              Back
            </Text>
          </View>
        </TouchableOpacity>

        <Image
          source={require("../../assets/images/bottom_colos.png")}
          style={{
            width: width,
            marginTop: 10
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  },
  image: {
    position: "absolute",
    right: 20,
    top: 10,
  },
  desc: {
    fontSize: 20,
    color: '#252525',
    marginLeft: 15
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
  }
});

export default Failure;
