import { SafeAreaView } from "react-native-safe-area-context";
import { homeStyles as styles } from "../styles/styles";
import { auth } from "../../firebaseConfig";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/core";

import HomeMemories from "../components/HomeMemories";
import HomeStartBox from "../components/HomeStartBox";

const Home = () => {
  const navigation = useNavigation()
  useEffect(() => {
    const user = auth.currentUser;
    if ( !user ) {
      navigation.navigate("Enterance" as never);
    }
  }, [])
  return (
    <SafeAreaView style={styles().container}>
      <HomeMemories />
      <HomeStartBox />
    </SafeAreaView>
  );
};

export default Home;