import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Dimensions
} from "react-native";
import React from "react";
import { m, h, v } from "../../utils/scale";
import { useNavigation } from "@react-navigation/core";
import { navigate } from "../../types/navigate";

interface Props {
  date: string;
  image: any;
  title: string;
  isGrid: boolean;
}

const MemoryListSlide = ({ date, image, title, isGrid }: Props) => {
  const { navigate } = useNavigation<navigate>();
  return (
    <Pressable
      style={styles(isGrid).mainContainer}
      onPress={() => navigate("HomeStack", { screen: "Memory" })}
    >
      {isGrid ? null : (
        <View style={styles().dateContainer}>
          <Text style={styles().date}>{date}</Text>
        </View>
      )}

      <View style={styles(isGrid).innerContainer}>
        <Image 
          source={image} 
          style={styles(isGrid).thumbnail} 
          resizeMode={isGrid ? "cover" : "contain"}
        />

        <View style={styles().titleContainer}>
          <Text style={styles(isGrid).title} numberOfLines={isGrid ? 1 : 2} >{title}</Text>
        </View>

        {!isGrid && (
          <View style={styles().arrowContainer}>
            <TouchableOpacity
              onPress={() => navigate("HomeStack", { screen: "Memory" })}
            >
              <Image
                source={require("../../../assets/images/start_arrow.png")}
                width={6}
                height={6}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Pressable>
  );
};

const borderRed = {
  borderWidth: 3,
  borderColor: 'red'
}
const styles = (isGrid?: boolean) => StyleSheet.create({
  mainContainer: {
    width: isGrid ? '32%' : "100%",
    flexDirection: "row",
    paddingTop: isGrid ? 0 : v(55),
    paddingLeft: isGrid ? 0 : h(15),
    paddingRight: isGrid ? 0 : h(15),
  },
  dateContainer: {
    paddingRight: h(16),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: v(35),
  },
  date: {
    color: "#036BBF",
    fontFamily: "AveriaSerifLibre_400Regular",
    fontSize: m(18),
  },
  innerContainer: {
    width: isGrid ? '100%' : undefined,
    flexDirection:  isGrid ? "column" : "row",
    paddingBottom: v(35),
    paddingLeft: isGrid ? 0 : h(31),
    justifyContent: "center",
    borderBottomWidth: isGrid ? 0 : 1,
    borderBottomColor: "#25252550",
  },
  thumbnail: {
    width: isGrid ? '100%' : h(78),
    height: isGrid ? v(110) : v(78),
    flex: isGrid ? 1 : undefined,
  },
  titleContainer: {
    justifyContent: "center",
  },
  title: {
    fontSize: isGrid ? m(18) : m(32),
    fontFamily: "AveriaSerifLibre_700Bold",
    color: "#252525",
    paddingHorizontal: isGrid ? 0 : h(10),
    textAlign: isGrid ? "left" : "center",
    maxWidth: isGrid ? undefined : h(140),
    minWidth: isGrid ? undefined : v(140),
    marginTop: isGrid ? v(20) : undefined,
  },
  arrowContainer: {
    justifyContent: "center",
  },
});

export default MemoryListSlide;
