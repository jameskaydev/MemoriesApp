import { View, Text, TouchableOpacity, Image } from "react-native";
import { HomeStyles as styles } from "../styles/styles";
import LogoSmall from "./svg/LogoSmall";
import ManuBar from "./svg/MenuBar";
import { useNavigation } from "@react-navigation/core";
import { navigate } from "../types/navigate";

interface HomeTopBarProps {
  memories: string[];
}

const HomeTopBar = ({ memories }: HomeTopBarProps) => {
  const { navigate } = useNavigation<navigate>()
  const { openDrawer } = useNavigation() as any;
  return (
    <View style={{ paddingBottom: 48 }}>
      <View style={styles().menuBarContainer}>
        <TouchableOpacity onPress={() => openDrawer()}>
          <ManuBar width="50" height="50" />
        </TouchableOpacity>
      </View>

      <View>
        {!memories.length ? <EmptyContent /> : <NotEmptyContent />}
        
        {memories.length && (
          <TouchableOpacity 
            style={styles().homeSeeAllContainer}
            onPress={() => navigate("HomeStack", {screen: "Memories"})}
          >
            <Text
              style={[
                styles().homeSeeAllBtn,
                { fontFamily: "AveriaSerifLibre_400Regular" },
              ]}
            >
              See All{" "}
              <Image
                source={require("../../assets/images/start_arrow.png")}
                width={6}
                height={6}
              />
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const EmptyContent = () => {
  return (
    <View>
      <Text
        style={[styles().homeTitle, { fontFamily: "AveriaSerifLibre_700Bold" }]}
      >
        Create <LogoSmall width={50} height={50} />
        {"\n"}Your{"\n"}First Memory
      </Text>
      <Image
        source={require("../../assets/images/home_colors.png")}
        style={styles().homeColors}
      />
    </View>
  );
};

const NotEmptyContent = () => {
  return (
    <Text
      style={[styles().homeTitle, { fontFamily: "AveriaSerifLibre_700Bold" }]}
    >
      Your <LogoSmall width={50} height={50} />
      {"\n"}Memories
    </Text>
  );
};

export default HomeTopBar;
