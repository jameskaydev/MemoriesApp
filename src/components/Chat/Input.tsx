import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image
} from "react-native";
import * as ImagePicker from 'expo-image-picker'
import { Camera } from 'expo-camera'

import ChatSendIcon from "../svg/ChatSendIcon";
import FilePickerIcon from "../svg/FilePickerIcon";
import setStateType from "../../types/setState";


interface Props {
  options?: string[] | null;
  sendMessage: (message: string, sender: string) => void;
  setImage: setStateType<any>
  // input?: boolean;
  // type: string;
  // sendEventHandler: (property: string, value: string) => void;
}

const UserInput = ({ options, sendMessage, setImage }: Props) => {
  const [inputValue, setInputValue] = useState<any>("");

  const handleOpenMedia = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if ( permission.granted === false ) {
      alert("permission required!")
      return
    }
    const result = await ImagePicker.launchImageLibraryAsync()
    if ( result.canceled ) {
      return
    } else {
      setImage(result.assets[0].uri)
    }
  }

  const handleOpenCamera = async () => {
    const permission = await Camera.requestCameraPermissionsAsync();
    if (permission.granted === false) {
      alert("permission required")
      return
    }
    const result = await ImagePicker.launchCameraAsync()
    if ( result.canceled ) {
      return
    }
    setImage(result.assets[0].uri)
    console.log(result.assets[0].uri)

  }

  if (options) {
    return (
      <View style={styles.textInputContainer}>
        <FlatList
          data={options}
          contentContainerStyle={styles.optionsContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                }}
                style={styles.optionBtn}
              >
                <Text style={styles.optionBtnTxt}>{item}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }

  return (
    <View style={styles.textInputContainer}>
      <View style={styles.textInputInnerContainer}>
        <TextInput
          placeholder="Message"
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
                  sendMessage(inputValue.trim(), 'user')
                  setInputValue("");
                })()
              : null;
          }}
          activeOpacity={1}
          style={styles.sendIcon}
        >
          <ChatSendIcon width="65" height="72" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.fileIcon}
          onPress={handleOpenCamera}
        >
          <Image source={require('../../../assets/images/file_icon.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    paddingHorizontal: 15,
    width: "100%",
  },
  textInputInnerContainer: {
    position: "relative",
    marginVertical: 10
  },
  optionsContainer: {
    flexDirection: "row",
    paddingBottom: 25,
  },
  optionBtn: {
    borderWidth: 1,
    borderColor: "#252525",
    borderRadius: 30,
    paddingHorizontal: 26,
    paddingVertical: 10,
    marginRight: 10,
  },
  optionBtnTxt: {
    fontSize: 20,
    fontFamily: "AveriaSerifLibre_400Regular",
  },
  textInput: {
    borderWidth: 1.5,
    borderColor: "#000",
    borderRadius: 50,
    paddingBottom: 27,
    paddingTop: 23,
    paddingLeft: 60,
    paddingRight: 80,
    fontSize: 20,
    lineHeight: 20,
    fontFamily: "AveriaSerifLibre_400Regular",
  },
  sendIcon: {
    position: "absolute",
    right: 8,
    bottom: 5,
  },
  fileIcon: {
    position: 'absolute',
    bottom: 30,
    left: 22
  }
});

export default UserInput;
