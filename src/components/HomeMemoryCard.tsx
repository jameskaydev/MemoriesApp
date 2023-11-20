import { View, Text, Image, ImageBackground } from 'react-native'
import { HomeStyles as styles } from '../styles/styles'

const HomeMemoryCard = () => {
  return (
    <View style={styles().memoryCard}>
      <Image source={require('../../assets/images/memory_1.png')} resizeMode='cover' 
        style={[styles().memoryCardImage]}
      />
        <ImageBackground source={require('../../assets/images/blur_back.png')} resizeMode='contain' style={styles().memoryCardInfoContainer}>
          <Text style={styles().memoryCardInfoText}>Friends</Text>
          <Text style={styles().memoryCardInfoText}>May 25th 2022</Text>
        </ImageBackground>
    </View>
  )
}

export default HomeMemoryCard