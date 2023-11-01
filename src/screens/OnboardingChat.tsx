import { db } from "../../firebaseConfig";
import { doc, getDoc, collection, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatMessages from "../components/ChatMessages";
import UserInput from "../components/onboarding/UserInput";
import parseJsonArray from "../utils/parseArrayofJson";
import dividePrompts from "../utils/dividePrompts";

interface Action {
  properties?: string[];
  type: string;
}

interface ArrayProps {
  action?: Action;
  hidden: boolean;
  id: string;
  message: string;
  sender: string;
  type: string;
}

const OnboardingChat = () => {
  const [data, setData] = useState<ArrayProps[]>([])
  useEffect(() => {
    const getPrompts = async () => {
      const promptsRef = doc(db, "prompts", "OnBoarding");
      const prompts = await getDoc(promptsRef);
      if (prompts.exists()) {
        const jsonData = await prompts.data().messages;
        const final = parseJsonArray(jsonData); 
        setData(final)
        const divided = dividePrompts(final)
        setData(divided[0])
        console.log(divided) 
      } else {
        console.log("no such a doc exists");
      }
    };

    getPrompts();
  }, []);
  
  return (
    <SafeAreaView style={{
       height: '100%',
       paddingBottom: 100
    }}>
      <ChatMessages messages={data} />
      <UserInput />
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