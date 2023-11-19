import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";
import styles from '../styles/success' // styles

// types
import { navigate } from "../types/navigate";

const Success = () => {
  const { navigate } = useNavigation<navigate>()
  return (
    <SafeAreaView style={styles.main}>
      <View>
        <Text
          style={styles.title}
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
        style={styles.btnsContainer}
      >
        <TouchableOpacity onPress={() => navigate("AuthStack", {screen: "Signin"})}>
          <View style={styles.formBtn}>
            <Text
              style={styles.formBtnTxt}
            >
              Get Started
            </Text>
          </View>
        </TouchableOpacity>
        <Image
          source={require("../../assets/images/bottom_colos.png")}
          style={styles.bottomImage}
        />
      </View>
    </SafeAreaView>
  );
};

export default Success;
