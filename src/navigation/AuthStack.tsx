import { createNativeStackNavigator } from '@react-navigation/native-stack'

//Components
import Enterance from '../screens/Enterance';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';

const AuthStack = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator 
      initialRouteName='Signin'
      screenOptions={{
        headerShown: false
      }}
    >
      <AuthStack.Screen name="Enterance" component={Enterance} />
      <AuthStack.Screen name="Signin" component={Signin} />
      <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  )
}

export default AuthStack