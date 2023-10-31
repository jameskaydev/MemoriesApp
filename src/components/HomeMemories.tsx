import { View, FlatList, Image, ImageBackground, Text } from "react-native";
import { useState } from "react";
import HomeTopBar from "./HomeTopBar";
import HomeMemoryCard from "./HomeMemoryCard";
import { Svg, Rect } from "react-native-svg";

const HomeMemories = () => {
  const [memories] = useState(['some']);
  return (
    <View>
      <HomeTopBar memories={memories} />
      {memories.length === 1 && (
        <View style={{ flexDirection: "row" }}>
          <HomeMemoryCard />
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center", padding: 0 }}>
            <Colors />
          </View>
        </View>
      )}
      {memories.length >= 2 && (
        <View style={{ position: "relative" }}>
          <ImageBackground
            source={require("../../assets/images/memories_colors_back.png")}
            resizeMode="contain"
            // style={{marginLeft: 15}}
          >
            <FlatList
              data={memories}
              renderItem={() => <HomeMemoryCard />}
              showsHorizontalScrollIndicator={false}
              // ItemSeparatorComponent={() => (
              //   <View style={{ paddingLeft: 15 }}></View>
              // )}
              horizontal
            />
          </ImageBackground>
        </View>
      )}
    </View>
  );
};

const Colors = () => {
  return (
    <Svg width='100%' height={48} viewBox="0 0 108 42" fill="none">
      <Rect width={24} height={48} fill="#E9AF00" />
      <Rect x={22} width={24} height={42} fill="#BF271F" />
      <Rect x={46} width={24} height={42} fill="#EC8002" />
      <Rect x={70} width={24} height={42} fill="#6EAC3D" />
      <Rect x={94} width={26} height={42} fill="#036BBF" />
    </Svg>
  );
};
export default HomeMemories;
