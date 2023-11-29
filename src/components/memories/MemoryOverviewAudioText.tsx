import { Text, StyleSheet, Dimensions, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const MemoryOverviewAudioText = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View
        style={{
          marginBottom: 100,
          alignSelf: "flex-start",
        }}
      >
        <Text
          style={{
            fontSize: 32,
            lineHeight: 35,
            fontFamily: "AveriaSerifLibre_700Bold",
          }}
        >
          Close your eyes and lets first take you back to that moment
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignSelf: "flex-start",
            marginTop: 25,
          }}
        >
          <Image
            source={require("../../../assets/images/commaBlack.png")}
            style={{
              marginTop: -10,
            }}
          />

          <Text style={styles.txt}>
            Remember this night as a time{"\n"}
            when you were surrounded by{"\n"}
            love and laughter. Cherish the{"\n"}
            memories you made with your{"\n"}
            friends, and know that you are{"\n"}
            always loved and supported.
          </Text>
        </View>
      </View>

      <View style={{
        width: '100%'
      }}>
        <Image source={require('../../../assets/images/audio_placeholder.png')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: width,
    justifyContent: "flex-start",
    alignItems: "center",
    // gap: 100,
    paddingTop: 170,
    paddingHorizontal: 15,
  },
  txt: {
    fontFamily: "AveriaSerifLibre_400Regular",
    fontSize: 20,
    lineHeight: 24,
    color: "#000",
    marginLeft: 10,
  },
});

export default MemoryOverviewAudioText;
