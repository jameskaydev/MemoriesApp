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

const ChatAI = () => {
  const [messages, setMessages] = useState([
    {
      sender: "assistant",
      message: "some tandomo efa 1",
    },
    {
      sender: "user",
      message: "some tandomo efa",
    },
  ]);
  const m = [
    {
      sender: "assistant",
      message: "some tandomo efa 1",
    },
    {
      sender: "user",
      message: "some tandomo efa",
    },
  ];
  const [image, setImage] = useState<any>(null);

  const sendMessage = (message: string, sender: string) => {
    const newMessage = {
      sender: sender,
      message: message,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

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
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
            {messages.map((message, index) => (
              <MessageBox
                sender={message.sender}
                message={message.message}
                key={index}
              />
            ))}
            {image ? (
              <Image
                source={{ uri: image }}
                style={{ width: 300, height: 300 }}
              />
            ) : null}
            </View>
          </ScrollView>
        </View>

        <View>
          <Input sendMessage={sendMessage} setImage={setImage} />
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
});

export default ChatAI;
