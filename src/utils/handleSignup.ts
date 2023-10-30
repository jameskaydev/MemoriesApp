import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

interface Props {
  email:string;
  pass: string;
}

const handleSignup = ({ email, pass }: Props ) => {
  if ( !email || !pass ) {
    return
  }
  
  createUserWithEmailAndPassword(auth, email, pass)
  .then((userCreds) => {
    const user = userCreds.user;
    return user.email
    
  })
  .catch(err => {
    console.log(err)
    return
  })
}

export default handleSignup;