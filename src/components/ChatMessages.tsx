import { View, StyleSheet, ScrollView } from "react-native";
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
}

const ChatMessages = ({ messages, setSentTrue }: MessagesProps) => {  
  return (
    <View
      style={{
        height: "100%",
        paddingBottom: 160,
        flexDirection: 'column-reverse'
      }}
    >
      <ScrollView
      style={{
        flexDirection: 'column-reverse'
      }}
      >
        {
          messages.map((item, index) => {
            return (
              <MessageBox 
              message={item.message} 
              sender={item.sender} 
              index={item.index as any}
              sent={item.sent as any}
              mainIndex={index}
              setSentTrue={setSentTrue}
              key={index}
            />
            )
          })
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChatMessages;
