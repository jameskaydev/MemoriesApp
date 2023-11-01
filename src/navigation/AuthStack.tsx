import { createNativeStackNavigator } from '@react-navigation/native-stack'

//Components
import Enterance from '../screens/Enterance';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';
import Success from '../screens/Success';
import Failure from '../screens/Failure'

const AuthStack = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator 
      initialRouteName='Enterance'
      screenOptions={{
        headerShown: false
      }}
    >
      <AuthStack.Screen name="Enterance" component={Enterance} />
      <AuthStack.Screen name="Signin" component={Signin} />
      <AuthStack.Screen name="Signup" component={Signup} />
      <AuthStack.Screen name="Success" component={Success} />
      <AuthStack.Screen name="Failure" component={Failure} />
    </AuthStack.Navigator>
  )
}

export default AuthStack