import { View, Text, TouchableOpacity } from 'react-native'
import { db } from '../../firebaseConfig'
import { doc, getDoc, collection, addDoc, CollectionReference } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ChatMessages from '../components/ChatMessages'


const OnboardingChat = () => {
  const [data, setData] = useState<JSON[]>([])
  useEffect(() => {
    const getPrompts = async () => {
      const promptsRef = doc(db, 'prompts', 'OnBoarding');
      const prompts = await getDoc(promptsRef);
      if ( prompts.exists() ) {
        // console.log(JSON.parse((prompts.data().messages))) 
        // console.log(prompts.data().messages)
        const final = await prompts.data().messages
        setData(final)
        // console.log(final)
        // final.forEach((item: any) => {
        //   console.log(JSON.parse(item).id)
        // })
      } else {
        console.log('no such a doc exists')
      }
    }

    getPrompts()
  }, [])

  const handleAddDoc = () => {
    const collectionRef = collection(db, 'users');
    addDoc(collectionRef, {
      is_onboarding_complete: true,
      name: 'james'
    }).then(() => {
      console.log('added successfuly')
    }).catch(e => {
      console.log(e)
    })
  }

  const parseJsonArray = (arr: JSON[]) => {
    const parsedArr = arr.map(item => JSON.parse(item as never))
    return parsedArr;
  }

  return (
    <SafeAreaView>
      <ChatMessages messages={data} />
    </SafeAreaView>
  )
}

export default OnboardingChat