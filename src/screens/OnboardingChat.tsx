import { db } from "../../firebaseConfig";
import { doc, getDoc, collection, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatMessages from "../components/ChatMessages";
import UserInput from "../components/onboarding/UserInput";
import parseJsonArray from "../utils/parseArrayofJson";
import dividePrompts from "../utils/dividePrompts";
import Datepicker from "../components/onboarding/Datepicker";
import { useNavigation } from "@react-navigation/core";

interface ArrayProps {
  hidden?: boolean;
  id?: string;
  message: string;
  sender: string;
  type?: string;
  properties?: string[] | null;
}

interface UserDataProps {
  name: string;
  nick_name: string;
  dob: string;
  pronouns: string;
  is_onboarding_complete: boolean;
}

const OnboardingChat = () => {
  const [data, setData] = useState<ArrayProps[][]>([]);
  const [dividedData, setDividedData] = useState<ArrayProps[][]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentData, setCurrentData] = useState<ArrayProps[]>([]);
  const [mainMessages, setMainMessages] = useState<ArrayProps[]>([])
  const [userData, setUserData] = useState<UserDataProps>({
    name: '',
    nick_name: '',
    dob: '',
    is_onboarding_complete: false,
    pronouns: ''
  });

  const updateUserData = ( property: string, value: string ) => {
    const updatedUserData = { ...userData };
    switch ( property ) {
      case "name":
        updatedUserData.name = value;
      case "nick_name":
        updatedUserData.nick_name = value;
      case "dob":
        updatedUserData.dob = value;
      case "pronouns":
        updatedUserData.pronouns = value;
      default:
        updatedUserData.is_onboarding_complete = true;
    }

    setUserData(updatedUserData);
  }

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
        setCurrentData([...(divided[0] as any)]);
        setMainMessages(divided[0].reverse())
        // setMainMessages(divided[0])
        setCurrentIndex(currentIndex + 1);
        console.log(mainMessages)
      } else {
        console.log("no such a doc exists");
      }
    };

    getPrompts();
  }, []);

  const manageFlows = () => {
    setData([...data, dividedData[currentIndex as any]]);
    setCurrentData([...dividedData[currentIndex as any]]);
    setCurrentIndex(currentIndex + 1);
  };
  
  const navigation = useNavigation()
  
  const sendEventHandler = ( property: string, value: string) => {
    if ( property !== 'links' ) {
      updateUserData( property, value )
      manageFlows()
      setMainMessages([
        ...dividedData[currentIndex].reverse(), 
        {message: value, sender: 'user'}, 
        ...mainMessages, 
      ])
    } else {
      navigation.navigate('Home' as never);
    }
    console.log(mainMessages)
  }

  const inputGenerator = () => {
    switch ( currentData[(currentData.length - 1) as any].type ) {
      case "INPUT":
        return <UserInput 
        input={true} 
        sendEventHandler={sendEventHandler} 
        type="name"
        />
      case "INPUT_OPTIONS":
        return <UserInput 
        options={["name1", "name2", "name3", "name4"]} 
        input={true}
        sendEventHandler={sendEventHandler} 
        type="nick_name"
        />
        case "DATE_PICKER":
          return <Datepicker 
            sendEventHandler={sendEventHandler} 
            type="dob"
        />
      case "PRONOUNCE_OPTIONS":
        return <UserInput 
        options={['he/him', 'she/her', 'they/them']}
        sendEventHandler={sendEventHandler}
        type="pronouns"
        />
      case "FINAL_OPTIONS":
        return <UserInput 
          options={["Yes! Let's Go", "Take me to home"]}
          sendEventHandler={sendEventHandler}
          type="links"
        />
    }
  }


  return (
    <SafeAreaView
      style={{
        height: "100%",
        paddingBottom: 150,
      }}
    >
      <ChatMessages messages={mainMessages as any} />
      {currentData[(currentData.length - 1) as any]
        ? inputGenerator() : null}
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
