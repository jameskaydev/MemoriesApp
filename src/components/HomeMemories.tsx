import { View } from "react-native";
import { useState } from "react";
import HomeTopBar from "./HomeTopBar";
import HomeMemoryCard from "./HomeMemoryCard";

const HomeMemories = () => {
  const [empty] = useState(false);
  return (
    <View>
      <HomeTopBar empty={empty} />
      {!empty && (
        <View style={{ paddingLeft: 15 }}>
          <HomeMemoryCard />
        </View>
      )}
    </View>
  );
};

export default HomeMemories;
