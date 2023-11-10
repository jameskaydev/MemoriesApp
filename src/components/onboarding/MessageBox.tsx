import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import {
  AveriaSerifLibre_400Regular,
  useFonts,
} from "@expo-google-fonts/averia-serif-libre";
import LogoMain from "../svg/LogoMain";
import { useState, useEffect } from "react";
import LoadingDots from "../LoadingDots";

const { width } = Dimensions.get("window");

const MessageBox = ({
  message,
  sender,
}: {
  message: string;
  sender: string;
}) => {
  // console.log(message)
  const [fmessage, setFmessage] = useState<string>("");
  useFonts({ AveriaSerifLibre_400Regular });
  useEffect(() => {
    setFmessage(message);
  }, []);

  // useFonts({ AveriaSerifLibre_400Regular });
  return (
    <View style={styles.messageBoxContainer}>
      {sender === "assistant" ? (
        <>
          <LogoMain width={40} height={37} />
          <Text
            style={[
              styles.botMessage,
              styles.message,
              {
                fontFamily: "AveriaSerifLibre_400Regular",
              },
            ]}
          >
            {fmessage ? message : <LoadingDots />}
          </Text>
        </>
      ) : (
        <Text
          style={[
            styles.userMessage,
            styles.message,
            {
              fontFamily: "AveriaSerifLibre_400Regular",
            },
          ]}
        >
          {fmessage ? message : <LoadingDots />}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  messageBoxContainer: {
    paddingLeft: 15,
    flexDirection: "row",
    width: width,
  },
  message: {
    fontSize: 18,
    lineHeight: 20,
    paddingRight: 15,
    paddingBottom: 30,
    flex: 1,
  },
  botMessage: {
    paddingLeft: 15,
  },
  userMessage: {
    color: '#036BBF',
    textAlign: 'right'
  },
});

export default MessageBox;
