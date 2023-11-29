import { View, StyleSheet, TouchableOpacity } from "react-native";
import LogoSmall from "../svg/LogoSmall";
import BackArrow from "../svg/BackArrow";
import DirectSend from "../svg/DirectSend";
import { useNavigation } from "@react-navigation/core";

const MemoryOverviewTopbar = () => {
  const { goBack } = useNavigation();
  return (
    <View style={styles.topbarContainer}>
      <TouchableOpacity onPress={goBack}>
        <BackArrow width={35} height={25} />
      </TouchableOpacity>
      <LogoSmall width={41} height={41} view="0 -2 40 50" />
      <TouchableOpacity onPress={() => {}}>
        <DirectSend width={34} height={34} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topbarContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    gap: 15,
    top: 75,
    position: "absolute",
    zIndex: 999,
  },
});

export default MemoryOverviewTopbar;
