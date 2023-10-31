import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

interface Props {
    collectionName: string;
}

const handleAddDoc = ({collectionName}: Props ) => {
    const collectionRef = collection(db, collectionName);
    addDoc(collectionRef, {
        is_onboarding_complete: true,
        name: 'james'
    }).then(() => {
        console.log('added successfuly')
    }).catch(e => {
        console.log(e)
    })
}

export default handleAddDoc;