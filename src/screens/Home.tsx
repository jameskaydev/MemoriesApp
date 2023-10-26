import { SafeAreaView } from 'react-native-safe-area-context'
import HomeMemories from '../components/HomeMemories';
import HomeStartBox from '../components/HomeStartBox';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
      <HomeMemories />
      <HomeStartBox />
    </SafeAreaView>
  )
}

export default Home