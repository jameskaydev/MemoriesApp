import { View, Text, StyleSheet, Image, Dimensions, Button } from "react-native";
import LogoMain from "../svg/LogoMain";
import { useState, useEffect } from "react";
import LoadingDots from "../LoadingDots";

const { width } = Dimensions.get("window");

interface Props {
  message: string;
  sender: string;
  // index: number;
  // sent: boolean;
  // mainIndex: number;
  // setSentTrue: (index: number) => void,
}

const MessageBox = ({
  message,
  sender,
  // index,
  // sent, 
  // mainIndex,
  // setSentTrue,
}: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [isSent, setIsSent] = useState<boolean>(sent)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(true);
  //   }, 2000*index)

  //   setTimeout(() => {
  //     setIsLoading(false);
  //     setIsSent(true)
  //     setSentTrue(mainIndex)
  //   }, 2000*(index+1))
  // }, []);

  return (
    <View style={styles.messageBoxContainer}>
      {sender === "assistant" ? (
          // isSent ? (
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
              {message}
            </Text>
          </>
          // ) : (
          //   isLoading ? (
          //     <>
          //     <LogoMain width={40} height={37} />
          //     <LoadingDots />
          //   </>
          //   ) : null
          // )
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
          {message}
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
