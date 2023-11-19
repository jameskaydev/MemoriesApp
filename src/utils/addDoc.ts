import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

interface Props {
  collectionName: string;
  data: any
}

const handleAddDoc = ({ collectionName, data }: Props) => {
  const collectionRef = collection(db, collectionName);
  addDoc(collectionRef, { ...data })
    .then(() => {
      console.log("added successfuly");
    })
    .catch((e) => {
      console.log(e);
    });
};

export default handleAddDoc;
