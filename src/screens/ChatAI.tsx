import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/Chat/Input";
import { useState } from "react";
import MessageBox from "../components/Chat/MessageBox";
import { LinearGradient } from "expo-linear-gradient";

interface Message {
  sender: string;
  message: string;
  asset_uri?: string;
  type: string;
}

const ChatAI = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "assistant",
      message: "some tandomo efa 1",
      type: "CHAT",
    },
    {
      sender: "user",
      message: "some tandomo efa",
      type: "CHAT",
    },
  ]);

  // const [image, setImage] = useState<any>(null);

  const sendMessage = ({ message, sender, asset_uri, type }: Message) => {
    const newMessage: Message = {
      sender: sender,
      message: message,
      type: type,
    };
    if (asset_uri) {
      newMessage.asset_uri = asset_uri;
    }
    setMessages((prev) => [...prev, newMessage]);
  };

  // console.log(messages)

  // const removeImg = () => {
  //   setImage("")
  // }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <SafeAreaView style={styles.mainContainer}>
        <View
          style={{
            height: "100%",
            alignItems: "flex-end",
            flexDirection: "row",
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <View>
              {messages.map((message, index) => (
                <MessageBox
                  sender={message.sender}
                  message={message.message}
                  type={message.type}
                  asset_uri={message.asset_uri}
                  key={index}
                />
              ))}
            </View>
          </ScrollView>
        </View>
        <LinearGradient
          style={styles.gradient}
          colors={["#FFFFFF", "#FFFFFFD8", "#FFFFFF00"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.6 }}
        />

        <View>
          <Input
            sendMessage={sendMessage}
            // setImage={setImage}
            // imgUri={image}
            // removeImage={removeImg}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
  },
  messagesContainer: {
    flex: 1,
  },
  gradient: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "30%",
  },
});

export default ChatAI;
