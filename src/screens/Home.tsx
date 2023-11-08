import { SafeAreaView } from "react-native-safe-area-context";
import { homeStyles as styles } from "../styles/styles";

import HomeMemories from "../components/HomeMemories";
import HomeStartBox from "../components/HomeStartBox";

const Home = () => {
  return (
    <SafeAreaView style={styles().container}>
      <HomeMemories />
      <HomeStartBox />
    </SafeAreaView>
  );
};

export default Home;