import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/core'
import { MemoriesTopBarStyles as styles } from '../styles/styles'; // styles
import { useState } from 'react'

// components
import MemoriesTopBar from '../components/memories/MemoriesTopBar'
import MemoriesList from '../components/memories/MemoriesList';

// types
import setStateType from '../types/setState';

const Memories = () => {
  const [isGrid, setIsGrid] = useState<boolean>(false)
  return (
    <SafeAreaView>
      <ScrollView>
        <MemoriesTopBar setIsGrid={setIsGrid} />
        <MemoriesList isGrid={isGrid} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Memories