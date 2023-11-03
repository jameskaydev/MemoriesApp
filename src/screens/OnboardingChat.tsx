import { db } from "../../firebaseConfig";
import { doc, getDoc, collection, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatMessages from "../components/ChatMessages";
import UserInput from "../components/onboarding/UserInput";
import parseJsonArray from "../utils/parseArrayofJson";
import dividePrompts from "../utils/dividePrompts";
import { TouchableOpacity, Text } from "react-native";

interface ArrayProps {
  hidden?: boolean;
  id?: string;
  message: string;
  sender: string;
  type?: string;
  properties?: string[] | null;
}

const OnboardingChat = () => {
  const [data, setData] = useState<ArrayProps[][]>([]);
  const [dividedData, setDividedData] = useState<ArrayProps[][]>([]);
  const [currentIndex, setCurretIndex] = useState<number>(0);
  const [currentData, setCurrentData] = useState<ArrayProps[]>([]);

  useEffect(() => {
    const getPrompts = async () => {
      const promptsRef = doc(db, "prompts", "OnBoarding");
      const prompts = await getDoc(promptsRef);
      if (prompts.exists()) {
        const jsonData = await prompts.data().messages;
        const parsedArray = parseJsonArray(jsonData);
        const divided = dividePrompts(parsedArray);
        setDividedData(divided);
        setData([divided[0]]);
        // console.log(data)
        setCurrentData([...(divided[0] as any)]);
        // console.log(currentData[currentData.length - 1])
        setCurretIndex(currentIndex + 1);
      } else {
        console.log("no such a doc exists");
      }
    };

    getPrompts();
  }, []);

  const manageFlows = () => {
    setData([...data, dividedData[currentIndex as any]]);
    setCurrentData([...dividedData[currentIndex as any]]);
    setCurretIndex(currentIndex + 1);
  };

  const inputGenerator = () => {
    switch ( currentData[(currentData.length - 1) as any].type ) {
      case "INPUT":
        return <UserInput />
      case "INPUT_OPTIONS":
        return <UserInput options={["name1", "name2", "name3", "name4"]} />
      case "DATE_PICKER":
        // return <Date />
    }
  }

  return (
    <SafeAreaView
      style={{
        height: "100%",
        paddingBottom: 150,
      }}
    >
      <ChatMessages messages={data as any} />
      {currentData[(currentData.length - 1) as any]
        ? inputGenerator() : null}
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 100,
        }}
        onPress={() => manageFlows()}
      >
        <Text>Add</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnboardingChat;

// const handleAddDoc = () => {
//   const collectionRef = collection(db, 'users');
//   addDoc(collectionRef, {
//     is_onboarding_complete: true,
//     name: 'james'
//   }).then(() => {
//     console.log('added successfuly')
//   }).catch(e => {
//     console.log(e)
//   })
// }
