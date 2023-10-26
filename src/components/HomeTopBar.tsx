import { View, Text, TouchableOpacity, Image } from "react-native";
import { HomeStyles as styles } from "../styles/styles";
import LogoSmall from "./svg/LogoSmall";
import ManuBar from "./svg/MenuBar";

interface HomeTopBarProps {
  empty: boolean;
}

const HomeTopBar = ({ empty }: HomeTopBarProps) => {
  return (
    <View style={{ paddingBottom: 24 }}>
      <View style={styles().menuBarContainer}>
        <TouchableOpacity>
          <ManuBar width="50" height="50" />
        </TouchableOpacity>
      </View>

      <View>
        {empty ? <EmptyContent /> : <NotEmptyContent />}

        {!empty && (
          <TouchableOpacity style={styles().homeSeeAllContainer}>
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
        Create <LogoSmall width="50" height="50" />
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
      Your <LogoSmall width="50" height="50" />
      {"\n"}Memories
    </Text>
  );
};

export default HomeTopBar;
