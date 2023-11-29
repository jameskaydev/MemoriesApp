import { Text, StyleSheet, Dimensions, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  index: number;
  prevIndex: number;
}

const { width } = Dimensions.get("window");

const MemoryOverviewPhotoText = ({ index }: Props) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{
        marginBottom: 26,
        alignSelf: 'flex-end',
      }}>
        <Image
          source={require("../../../assets/images/picpic.png")}
          style={{
            maxWidth: 284,
            maxHeight: 305,
          }}
          resizeMode="cover"
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignSelf: 'flex-start'
        }}
      >
        <Image source={require("../../../assets/images/comma.png")} style={{
          marginTop: -10
        }} />

        <Text style={styles.txt}>
          Remember this night as a time{"\n"}
          when you were surrounded by{"\n"}
          love and laughter. Cherish the{"\n"}
          memories you made with your{"\n"}
          friends, and know that you are{"\n"}
          always loved and supported.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: width,
    justifyContent: "center",
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  txt: {
    fontFamily: "AveriaSerifLibre_400Regular",
    fontSize: 20,
    lineHeight: 24,
    color: "#FFF",
    marginLeft: 10
    // bottom: 150,
  },
});

export default MemoryOverviewPhotoText;
