import { View, Text, FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import MessageBox from "./onboarding/MessageBox";

interface ArrayProps {
  properties?: string[] | null;
  hidden?: boolean;
  id?: string;
  message: string;
  sender: string;
  type?: string;
}

interface MessagesProps {
  messages: ArrayProps[];
}

const ChatMessages = ({ messages }: any) => {
  // console.log("this is me");
  // console.log(messages.length)
  // console.log(messages);
  return (
    <View
      style={{
        flexDirection: "column",
        height: "100%",
      }}
    >
      <FlatList
        data={messages}
        keyExtractor={(_, index) => index.toString()}
        inverted={true}
        renderItem={({ item }) => {
            return (
            <MessageBox message={item.message} sender={item.sender} />
          )
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChatMessages;
