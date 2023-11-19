import { db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

interface Props {
  collectionName: string;
  docName: string;
}

const getTheDoc = async ({ collectionName, docName }: Props) => {
  const docRef = doc(db, collectionName, docName);
  const docData = await getDoc(docRef);

  if (docData.exists()) {
    return docData.data()
  } else {
    console.log('no such a doc exists')
    return;
  }
}

export default getTheDoc;