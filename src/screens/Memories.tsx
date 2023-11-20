import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/core'
import { MemoriesTopBarStyles as styles } from '../styles/styles'; // styles

// components
import MemoriesTopBar from '../components/memories/MemoriesTopBar'
import MemoriesList from '../components/memories/MemoriesList';

// types
import { navigate } from '../types/navigate'

const Memories = () => {
  const { goBack } = useNavigation()
  return (
    <SafeAreaView>
      <ScrollView>
        <MemoriesTopBar />
        <MemoriesList />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Memories