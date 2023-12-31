import { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { db, auth } from "../../firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import { onboardingChatStyles as styles } from "../styles/styles"; // styles
import { LinearGradient } from "expo-linear-gradient";

// Components
import ChatMessages from "../components/onboarding/ChatMessages";
import UserInput from "../components/onboarding/UserInput";
import Datepicker from "../components/onboarding/Datepicker";

// utils
import parseJsonArray from "../utils/parseArrayofJson";
import dividePrompts from "../utils/dividePrompts";

// interfaces
interface Message {
  hidden?: boolean;
  id?: string;
  message: string;
  sender: string;
  type?: string;
  properties?: string[] | null;
  sent?: boolean;
  index?: number;
}

interface UserDataProps {
  name: string;
  nick_name: string;
  dob: string;
  pronouns: string;
  is_onboarding_complete: boolean;
}

const OnboardingChat = () => {
  const [data, setData] = useState<Message[][]>([]);
  const [dividedData, setDividedData] = useState<Message[][]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentData, setCurrentData] = useState<Message[]>([]);
  const [mainMessages, setMainMessages] = useState<Message[]>([]);
  const [userData, setUserData] = useState<UserDataProps>({
    name: "",
    nick_name: "",
    dob: "",
    is_onboarding_complete: false,
    pronouns: "",
  });
  const [showInput, setShowInput] = useState<boolean>(false);

  const navigation = useNavigation();

  const updateUserData = (property: string, value: string) => {
    const updatedUserData = { ...userData };
    switch (property) {
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
  };

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
        setMainMessages(divided[0]);
        setCurrentIndex(currentIndex + 1);
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

  const handleAddDoc = () => {
    const userid = auth.currentUser?.uid;
    const docRef = doc(db, "users", userid as never);
    setDoc(docRef, userData)
      .then(() => {
        navigation.navigate("Home" as never);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const sendEventHandler = (property: string, value: string) => {
    setShowInput(false)
    if (property !== "links") {
      updateUserData(property, value);
      manageFlows();
      dividedData[currentIndex].forEach((item) => {
        if (item.message.includes("{user.name}") && property === "name") {
          item.message = item.message.replace("{user.name}", value);
        } else if (
          item.message.includes("{user.nick_name}") &&
          property === "nick_name"
        ) {
          item.message = item.message.replace("{user.nick_name}", value);
        }
      });
      setMainMessages([
        ...mainMessages,
        { message: value, sender: "user", sent: true },
      ]);
      setMainMessages([
        ...mainMessages,
        { message: value, sender: "user", sent: true },
        ...dividedData[currentIndex],
      ]);
    } else {
      handleAddDoc();
    }
  };

  const inputGenerator = (properties?: string[] | null) => {
    switch (currentData[(currentData.length - 1) as any].type) {
      case "INPUT":
        return (
          <UserInput
            input={true}
            sendEventHandler={sendEventHandler}
            type="name"
          />
        );
      case "INPUT_OPTIONS":
        return (
          <UserInput
            options={[
              `${userData.name} 1`,
              `${userData.name} 2`,
              `${userData.name} 3`,
            ]}
            input={true}
            sendEventHandler={sendEventHandler}
            type="nick_name"
          />
        );
      case "DATE_PICKER":
        return <Datepicker sendEventHandler={sendEventHandler} type="dob" />;
      case "PRONOUNCE_OPTIONS":
        return (
          <UserInput
            options={properties}
            sendEventHandler={sendEventHandler}
            type="pronouns"
          />
        );
      case "FINAL_OPTIONS":
        return (
          <UserInput
            options={properties}
            sendEventHandler={sendEventHandler}
            type="links"
          />
        );
    }
  };

  const setSentTrue = (index: number) => {
    const newMainMessages = mainMessages;
    newMainMessages[index].sent = true;
    if (index === mainMessages.length - 1) {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <SafeAreaView style={[styles().container]}>
        <ChatMessages
          messages={mainMessages as any}
          setSentTrue={setSentTrue}
        />
        {currentData[(currentData.length - 1) as any] &&
          showInput &&
          inputGenerator(currentData[currentData.length - 1]?.properties)}
        <LinearGradient
          style={styles().gradient}
          colors={["#FFFFFF", "#FFFFFFD8", "#FFFFFF00"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.6 }}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default OnboardingChat;
