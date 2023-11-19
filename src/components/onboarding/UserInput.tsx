import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

import ChatSendIcon from "../svg/ChatSendIcon";

interface Props {
  options?: string[] | null;
  input?: boolean;
  type: string;
  sendEventHandler: (property: string, value: string) => void;
}

const UserInput = ({ options, input, sendEventHandler, type }: Props) => {
  if (type === 'links') {
    return (
      <View style={styles.textInputContainer}>
        <FlatList
          data={options}
          contentContainerStyle={styles.optionsContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity key={index} onPress={() => {
                sendEventHandler(type, index.toString())
              }}
                style={styles.optionBtn}>
                <Text style={styles.optionBtnTxt}>{item}</Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    )
  }
  const [inputValue, setInputValue] = useState<any>("");
  return (
    <View style={styles.textInputContainer}>
      {options && (
        <FlatList
          data={options}
          contentContainerStyle={styles.optionsContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity key={index} onPress={() => {
                sendEventHandler(type, item)
                setInputValue('')
              }}
              style={styles.optionBtn}>
                <Text style={styles.optionBtnTxt}>{item}</Text>
              </TouchableOpacity>
            )
          }}
          />
          
          )}
      {input && (
        <View style={styles.textInputInnerContainer}>
          <TextInput
            placeholder="Your Name"
            placeholderTextColor="rgba(37, 37, 37, 0.4)"
            style={styles.textInput}
            value={inputValue}
            onChangeText={(txt) => setInputValue(txt)}
            multiline={true}
            />
          <TouchableOpacity
            onPress={() => {
              inputValue.trim()
              ? (() => {
                sendEventHandler(type, inputValue)
                setInputValue('')
                })()
                : null;
            }}
            activeOpacity={1}
            style={styles.sendIcon}
          >
            <ChatSendIcon width="65" height="72" />
          </TouchableOpacity>
        </View>
      )}
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
    paddingBottom: 10
  }, 
  optionsContainer: {
    flexDirection: "row",
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
    fontSize: 20,
    fontFamily: 'AveriaSerifLibre_400Regular'
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
    fontFamily: 'AveriaSerifLibre_400Regular',
  },
  sendIcon: {
    position: "absolute",
    right: 8,
    top: 1,
  },
});

export default UserInput;
