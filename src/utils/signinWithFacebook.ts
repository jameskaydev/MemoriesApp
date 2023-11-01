import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { FacebookAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

const signInWithFB = async () => {
  const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  const data = await AccessToken.getCurrentAccessToken();
  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  const facebookAuthProvider = FacebookAuthProvider.credential(data.accessToken);
  signInWithCredential(auth, facebookAuthProvider)
  .then(() => {
    console.log('yah yah yah')
  })
  .catch(error => {
    console.log(error.message);
  });

}

export default signInWithFB