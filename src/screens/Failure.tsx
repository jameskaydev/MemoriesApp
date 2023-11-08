import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";
import styles from '../styles/failureStyles';

const Failure = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={[styles().main]}>
      <View style={styles().titleContainer}>
        <Text
          style={styles().title}
        >
          Something{"\n"}
          went wrong
        </Text>
        <Image
          source={require("../../assets/images/failure_emoji.png")}
          style={styles().image}
        />
        <Text style={styles().desc}>
          Try to create an account again...
        </Text>
      </View>

      <View
        style={styles().btnContainer}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Enterance" as never)}
        >
          <View style={styles().tryBtn}>
            <Text
              style={styles().tryBtnTxt}
            >
              Try again!
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Signup" as never)}
        >
          <View style={styles().backBtn}>
            <Text
              style={styles().backBtnTxt}
            >
              Back
            </Text>
          </View>
        </TouchableOpacity>

        <Image
          source={require("../../assets/images/bottom_colos.png")}
          style={styles().footerImage}
        />
      </View>

    </SafeAreaView>
  );
};

export default Failure;
