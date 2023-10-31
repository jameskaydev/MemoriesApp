import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";

const { width, height } = Dimensions.get("window");
const Success = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={[styles.main]}>
      <View>
        <Text
          style={[
            styles.title,
            {
              fontFamily: "AveriaSerifLibre_400Regular",
            },
          ]}
        >
          Your account{"\n"}
          has been{"\n"}
          successfully{"\n"}
          created
        </Text>
        <Image
          source={require("../../assets/images/success.png")}
          style={styles.image}
        />
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 0,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Signin" as never)}>
          <View style={styles.formBtn}>
            <Text
              style={[
                styles.formBtnTxt,
                {
                  fontFamily: "AveriaSerifLibre_400Regular",
                },
              ]}
            >
              Get Started
            </Text>
          </View>
        </TouchableOpacity>
        <Image
          source={require("../../assets/images/bottom_colos.png")}
          style={{
            width: width,
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
  title: {
    fontSize: 48,
    lineHeight: 45,
    marginLeft: 15,
    marginBottom: 20,
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
});

export default Success;
