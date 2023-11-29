import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Button,
} from "react-native";
import LogoMain from "../svg/LogoMain";
import { useState, useEffect } from "react";
import LoadingDots from "../LoadingDots";
import * as VideoThumbnails from "expo-video-thumbnails";

const { width } = Dimensions.get("window");

interface Props {
  message: string;
  sender: string;
  asset_uri?: string;
  type: string;
  // index: number;
  // sent: boolean;
  // mainIndex: number;
  // setSentTrue: (index: number) => void,
}

const MessageBox = ({
  message,
  sender,
  asset_uri,
  type,
}: // index,
// sent,
// mainIndex,
// setSentTrue,
Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [videoThumbnailUri, setVideoThumbnailUri] = useState<string>("");
  // const [isSent, setIsSent] = useState<boolean>(sent)

  useEffect(() => {
    (async () => {
      if (type === "VIDEO" && asset_uri) {
        const { uri } = await VideoThumbnails.getThumbnailAsync(asset_uri, {
          time: 500,
        });
        setVideoThumbnailUri(uri);
      }
    })();
  });

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(true);
  //   }, 2000*index)

  //   setTimeout(() => {
  //     setIsLoading(false);
  //     setIsSent(true)
  //     setSentTrue(mainIndex)
  //   }, 2000*(index+1))
  // }, []);
  // console.log(asset_uri)

  return (
    <View style={styles.messageBoxContainer}>
      {sender === "assistant" ? (
        // isSent ? (
        <View
          style={{
            marginBottom: 30,
            flexDirection: "row",
            width: "100%",
          }}
        >
          <LogoMain width={40} height={37} />
          <Text
            style={[
              styles.botMessage,
              styles.message,
              {
                fontFamily: "AveriaSerifLibre_400Regular",
              },
            ]}
          >
            {message}
          </Text>
        </View>
      ) : (
        // ) : (
        //   isLoading ? (
        //     <>
        //     <LogoMain width={40} height={37} />
        //     <LoadingDots />
        //   </>
        //   ) : null
        // )
        <View
          style={{
            flexDirection: "column",
            width: "100%",
            paddingBottom: 30,
          }}
        >
          <Text
            style={[
              styles.userMessage,
              styles.message,
              {
                fontFamily: "AveriaSerifLibre_400Regular",
              },
            ]}
          >
            {asset_uri ? "Done!" : message}
          </Text>
          {asset_uri && (
            <Image
              source={{ uri: asset_uri }}
              style={{
                minWidth: "50%",
                maxWidth: "50%",
                maxHeight: 400,
                minHeight: 200,
                alignSelf: "flex-end",
                marginTop: 10,
              }}
              resizeMode="contain"
            />
          )}
          {asset_uri && (
            <Text
              style={[
                styles.userMessage,
                styles.message,
                {
                  fontFamily: "AveriaSerifLibre_400Regular",
                },
              ]}
            >
              {asset_uri ? "Hidden caption:\n" + message : null}
            </Text>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  messageBoxContainer: {
    paddingLeft: 15,
    flexDirection: "row",
    width: width,
  },
  message: {
    fontSize: 18,
    lineHeight: 20,
    paddingRight: 15,
    flex: 1,
  },
  botMessage: {
    paddingLeft: 15,
  },
  userMessage: {
    color: "#036BBF",
    textAlign: "right",
  },
});

export default MessageBox;
