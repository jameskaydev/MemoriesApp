import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import { Audio } from "expo-av";
import * as VideoThumbnails from "expo-video-thumbnails";

import ChatSendIcon from "../svg/ChatSendIcon";
import { useNavigation } from "@react-navigation/core";
import { navigate } from "../../types/navigate";


interface Message {
  sender: string;
  message: string;
  asset_uri?: string;
  type: string;
}

interface Props {
  options?: string[] | null;
  sendMessage: ({ sender, message, asset_uri }: Message) => void;
}

const UserInput = ({ options, sendMessage }: Props) => {
  const [inputValue, setInputValue] = useState<any>("");
  const [videoUri, setVideoUri] = useState<string>("");
  const [videoThumbnailUri, setVideoThumbnailUri] = useState<string>("");
  const [videoThumbnailSize, setVideoThumbnailSize] = useState<any>({});
  const [imgUri, setImgUri] = useState<string>("");
  const [recording, setRecording] = useState<Audio.Recording>();
  const [recordingStatus, setRecordingStatus] = useState<string>("");
  const [recordingUri, setRecordingUri] = useState<string>("");

  const { navigate } = useNavigation<navigate>();

  const handleSendMessage = () => {
    const newMessage: Message = {
      message: inputValue.trim(),
      sender: "user",
      type: "CHAT",
    };
    if (imgUri) {
      newMessage.type = "IMAGE";
      newMessage.asset_uri = imgUri;
    } else if (videoUri) {
      newMessage.type = "VIDEO";
      newMessage.asset_uri = videoUri;
    }
    console.log(newMessage);
    setInputValue("");
    setImgUri("");
    setVideoThumbnailUri("");
    sendMessage(newMessage);
  };

  const handleVideo = async () => {
    const permission = await Camera.requestCameraPermissionsAsync();
    if (permission.granted === false) {
      alert("permission required");
      return;
    }
    try {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
    });
    
    if (!result.canceled) {
      console.log(result.assets[0].uri)
      console.log(result)
      setVideoUri(result.assets[0].uri);
      const { uri } = await VideoThumbnails.getThumbnailAsync(
        result.assets[0].uri,
        {
          time: 500,
        }
      );
      setVideoThumbnailUri(uri);
    } else {
      console.log('it is canceled')
    }
  } catch(e) {
    console.log(e)
  }
  };

  const handleOpenMedia = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permission.granted === false) {
      alert("permission required!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync();
    if (result.canceled) {
      return;
    } else {
      setImgUri(result.assets[0].uri);
    }
  };

  const handleOpenCamera = async () => {
    const permission = await Camera.requestCameraPermissionsAsync();
    if (permission.granted === false) {
      alert("permission required");
      return;
    }
    const result = await ImagePicker.launchCameraAsync();
    if (result.canceled) {
      return;
    }
    setImgUri(result.assets[0].uri);
  };

  const handleMediaButtonPress = () => {
    Alert.alert(
      "Choose an option",
      "Select a photo/video from the device library or camera",
      [
        {
          text: "Camera",
          onPress: handleOpenCamera,
        },
        {
          text: "Media Library",
          onPress: handleOpenMedia,
        },
      ]
    );
  };

  const handleAudioRecording = async () => {
    const permission = await Audio.requestPermissionsAsync();
    if (permission.granted === false) {
      alert("Permission required");
      return;
    }

    try {
      if (recordingStatus !== "recording") {
        const options = {
          android: {
            extension: ".m4a",
            outputFormat: Audio.AndroidOutputFormat.MPEG_4,
            audioEncoder: Audio.AndroidAudioEncoder.AAC,
            sampleRate: 44100,
            numberOfChannels: 2,
            bitRate: 128000,
          },
          ios: {
            extension: ".caf",
            audioQuality: Audio.IOSAudioQuality.HIGH,
            sampleRate: 44100,
            numberOfChannels: 2,
            bitRate: 128000,
            linearPCMBitDepth: 16,
            linearPCMIsBigEndian: false,
            linearPCMIsFloat: false,
          },
          web: {},
        };

        Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });
        const newRecording = new Audio.Recording();
        await newRecording.prepareToRecordAsync(options);
        await newRecording.startAsync();
        setRecording(newRecording);
        setRecordingStatus("recording");
      } else {
          await recording?.stopAndUnloadAsync();
          const recordingUri = recording?.getURI();
          setRecordingUri(recordingUri || "")
          console.log(recordingUri);
          setRecording(undefined)
      }
    } catch (e) {
      console.log(e);
    }
  };

  const playAudio = async () => {
    try {
      const newAudio = new Audio.Sound();
      await newAudio.loadAsync({
        uri: recordingUri,
      });
      await newAudio.playAsync();
    } catch(e) {
      console.log(e)
    }
  };

  const removeImage = () => {
    setImgUri("");
  };

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
                onPress={() => {}}
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
    <View>
      {imgUri && (
        <View
          style={{
            position: "absolute",
            bottom: "100%",
            left: 40,
            minWidth: 100,
            maxWidth: 100,
            height: "100%",
          }}
        >
          <Image
            source={{ uri: imgUri }}
            resizeMode="contain"
            style={{
              width: 100,
              height: "100%",
              borderRadius: 5,
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#036BBF",
              borderRadius: 40,
              width: 30,
              position: "absolute",
              right: -20,
              top: -20,
            }}
            onPress={removeImage}
          >
            <Text
              style={{
                color: "#FFF",
                width: 30,
                textAlign: "center",
                paddingVertical: 6,
              }}
            >
              ╳
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {videoThumbnailUri && (
        <View
          style={{
            position: "absolute",
            bottom: "100%",
            left: 40,
            minWidth: 100,
            maxWidth: 100,
            height: "100%",
          }}
        >
          <Image
            source={{ uri: videoThumbnailUri }}
            resizeMode="contain"
            style={{
              width: 100,
              height: "100%",
              borderRadius: 5,
            }}
            onLayout={(event) => {
              const { width, height } = event.nativeEvent.layout;
              setVideoThumbnailSize({ width, height });
            }}
          />

          <TouchableOpacity
            style={{
              position: "absolute",
              top: videoThumbnailSize.height
                ? videoThumbnailSize.height / 4
                : 20,
              left: videoThumbnailSize.width
                ? videoThumbnailSize.width / 4
                : 20,
              width: 30,
              height: 30,
            }}
            onPress={() => navigate("Modals", { screen: "VideoPlayer" })}
          >
            <Image
              source={require("../../../assets/images/Play.png")}
              style={{
                width: 50,
                height: 50,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#036BBF",
              borderRadius: 40,
              width: 30,
              position: "absolute",
              right: -20,
              top: -20,
            }}
            onPress={() => setVideoThumbnailUri("")}
          >
            <Text
              style={{
                color: "#FFF",
                width: 30,
                textAlign: "center",
                paddingVertical: 6,
              }}
            >
              ╳
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <View
        style={{
          position: "absolute",
          bottom: 300,
          left: 30,
        }}
      >
        <TouchableOpacity onPress={handleAudioRecording}>
          <Text>Record</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={playAudio}>
          <Text>Play</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.textInputContainer}>
        <View style={styles.textInputInnerContainer}>
          <TextInput
            placeholder={imgUri ? "Caption" : "Message"}
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
                    handleSendMessage();
                  })()
                : null;
            }}
            style={[
              styles.sendIcon,
              {
                opacity: imgUri ? (inputValue ? 1 : 0.8) : 1,
              },
            ]}
            activeOpacity={imgUri ? (inputValue ? 1 : 0.8) : 1}
            // disabled={imgUri ? ( inputValue ? false : true) : true}
          >
            <ChatSendIcon width="65" height="72" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.fileIcon} onPress={handleVideo}>
            <Image source={require("../../../assets/images/file_icon.png")} />
          </TouchableOpacity>
        </View>
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
    marginVertical: 10,
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
    position: "absolute",
    bottom: 30,
    left: 22,
  },
});

export default UserInput;
