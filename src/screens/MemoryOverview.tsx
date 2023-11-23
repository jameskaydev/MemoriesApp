import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";
import BackArrow from "../components/svg/BackArrow";
import LogoSmall from "../components/svg/LogoSmall";
import DirectSend from "../components/svg/DirectSend";

const MemoryOverview = () => {
  const { goBack } = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.topbarContainer}>
        <TouchableOpacity onPress={goBack}>
          <BackArrow width={35} height={25} />
        </TouchableOpacity>
        <LogoSmall width={41} height={41} view="0 -2 40 50" />
        {/* <TouchableOpacity onPress={() => {}}>
          <DirectSend width={34} height={34} />
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topbarContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    gap: 15,
    marginTop: 65,
  },
});

export default MemoryOverview;
