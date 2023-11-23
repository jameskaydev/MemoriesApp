import { View, StyleSheet, ScrollView, VirtualizedList, Text, TouchableOpacity } from "react-native";
import MessageBox from "./MessageBox";
import { useRef } from "react";

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
}

const ChatMessages = ({ messages, setSentTrue }: MessagesProps) => {  
  const ref = useRef<any>()
  return (
    <View
      style={{
        height: "100%",
        paddingBottom: 160,
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flex: 1
      }}
    >
      <VirtualizedList
        data={messages}
        inverted={true}
        keyExtractor={(item) => item.id}
        getItemCount={(data) => data.length}
        getItem={(data, index) => data[index]}
        renderItem={({item, index}: {item:any, index: number}) => {
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
        contentContainerStyle={{
          flexDirection: 'column-reverse',
          justifyContent: 'flex-end'
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChatMessages;
