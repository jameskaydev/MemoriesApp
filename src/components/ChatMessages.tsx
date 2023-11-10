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
  index?: number;
  sent?: boolean;
}

interface MessagesProps {
  setSentTrue: (index:number) => void;
  messages: ArrayProps[];
  inverted: boolean;
}

const ChatMessages = ({ messages, setSentTrue, inverted }: MessagesProps) => {  
  return (
    <View
      style={{
        height: "100%",
        paddingBottom: 160,
        flexDirection: 'column-reverse'
      }}
    >
      <FlatList
        data={messages.reverse()}
        keyExtractor={(_, index) => index.toString()}
        inverted={inverted}
        renderItem={({ item, index }) => {
            return (
            <MessageBox 
              message={item.message} 
              sender={item.sender} 
              index={item.index as any}
              sent={item.sent as any}
              mainIndex={index}
              setSentTrue={setSentTrue}
            />
          )
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChatMessages;
