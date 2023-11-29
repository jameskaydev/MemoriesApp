import { View, FlatList, Image, ImageBackground } from "react-native";
import { useState } from "react";
import HomeTopBar from "./HomeTopBar";
import HomeMemoryCard from "./HomeMemoryCard";
import { Svg, Rect } from "react-native-svg";

const HomeMemories = () => {
  const [memories] = useState(["some", "ss", "sds"]);
  return (
    <View>
      <HomeTopBar memories={memories} />
      {memories.length === 1 && (
        <View style={{ flexDirection: "row", paddingLeft: 15 }}>
          <HomeMemoryCard />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              padding: 0,
            }}
          >
            <Colors />
          </View>
        </View>
      )}
      {memories.length >= 2 && (
        <View style={{ position: "relative" }}>
          <FlatList
            data={memories}
            renderItem={() => <HomeMemoryCard />}
            showsHorizontalScrollIndicator={false}
            horizontal
            ItemSeparatorComponent={Separator}
            contentContainerStyle={{
              paddingHorizontal: 15
            }}
          />
        </View>
      )}
    </View>
  );
};

const Colors = () => {
  return (
    <Svg width="100%" height={48} viewBox="0 0 108 42" fill="none">
      <Rect width={24} height={48} fill="#E9AF00" />
      <Rect x={22} width={24} height={42} fill="#BF271F" />
      <Rect x={46} width={24} height={42} fill="#EC8002" />
      <Rect x={70} width={24} height={42} fill="#6EAC3D" />
      <Rect x={94} width={26} height={42} fill="#036BBF" />
    </Svg>
  );
};

const Separator = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/f2f2f2.png')}
      style={{
        paddingVertical: 1,
        marginHorizontal: -20,
        zIndex: -1
      }}
    >
      <Image 
        source={require('../../assets/images/home_separator.png')} 
        style={{
          width: 60,
          flex: 1
        }}
      />
    </ImageBackground>
  );
};
export default HomeMemories;
