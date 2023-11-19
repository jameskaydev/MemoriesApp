import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../../firebaseConfig";
import { homeStyles as styles } from "../styles/styles"; // styles

// Components
import HomeMemories from "../components/HomeMemories";
import HomeStartBox from "../components/HomeStartBox";

const Home = () => {
  const { navigate } = useNavigation()
  useEffect(() => {
    // if ( !auth.currentUser ) {
    //   // @ts-expect-error
    //   navigate("AuthStack", { screen: "Enterance"});
    // }
  }, [])
  
  return (
    <SafeAreaView style={styles().container}>
      <HomeMemories />
      <HomeStartBox />
    </SafeAreaView>
  );
};

export default Home;