import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";
import {
  AveriaSerifLibre_400Regular,
  useFonts,
} from "@expo-google-fonts/averia-serif-libre";
import { useState, useEffect } from "react";

import ChatSendIcon from "../svg/ChatSendIcon";

// interface Props {
//   pushToMessages: ({
//     message,
//     sender,
//   }: {
//     message: string;
//     sender: string;
//   }) => void;
// }

interface Props {
  options?: string[];
}

const UserInput = ({ options }: Props) => {
  const [inputValue, setInputValue] = useState<any>("");
  useFonts({ AveriaSerifLibre_400Regular });
  return (
    <View style={styles.textInputContainer}>
      {options && (
          <FlatList
            data={options}
            contentContainerStyle={styles.optionsContainer}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity key={index} onPress={() => setInputValue(item)} style={styles.optionBtn}>
                <Text style={styles.optionBtnTxt}>{item}</Text>
              </TouchableOpacity>
              )
            }}
          />
   
      )}
      <View style={styles.textInputInnerContainer}>
        <TextInput
          placeholder="Your Name"
          placeholderTextColor="rgba(37, 37, 37, 0.4)"
          style={[
            styles.textInput,
            {
              fontFamily: "AveriaSerifLibre_400Regular",
            },
          ]}
          value={inputValue}
          onChangeText={(txt) => setInputValue(txt)}
        />
        <TouchableOpacity
          onPress={() => {
            inputValue.trim()
              ? (() => {
                  // pushToMessages({ message: inputValue, sender: 'user'})
                  setInputValue("");
                })()
              : null;
          }}
          activeOpacity={1}
          style={styles.sendIcon}
        >
          <ChatSendIcon width="65" height="72" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    position: "absolute",
    bottom: 15,
    paddingHorizontal: 15,
    width: "100%",
  },
  textInputInnerContainer: {
    position: "relative",
    // borderWidth: 3,
    // borderColor: "green",
  },
  optionsContainer: {
    flexDirection: "row",
    // borderWidth: 2,
    // borderColor: "red",
    paddingBottom: 25
  },
  optionBtn: {
    borderWidth: 1,
    borderColor: '#252525',
    borderRadius: 30,
    paddingHorizontal: 26,
    paddingVertical: 10,
    marginRight: 10
  },
  optionBtnTxt: {
    fontSize: 20
  },
  textInput: {
    borderWidth: 1.5,
    borderColor: "#000",
    borderRadius: 50,
    paddingBottom: 27,
    paddingTop: 23,
    paddingLeft: 30,
    fontSize: 20,
    lineHeight: 20,
  },
  sendIcon: {
    position: "absolute",
    right: 8,
    top: 4,
  },
});

export default UserInput;
