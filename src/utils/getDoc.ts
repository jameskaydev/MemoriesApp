import { db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

interface Props {
  collectionName: string;
  docName: string;
}

const getTheDoc = async ({ collectionName, docName }: Props) => {
  const docRef = doc(db, 'prompts', 'OnBoarding');
  const prompts = await getDoc(docRef);

  if (prompts.exists()) {
    return prompts.data()
  } else {
    console.log('no such a doc exists')
    return;
  }
}

export default getTheDoc;