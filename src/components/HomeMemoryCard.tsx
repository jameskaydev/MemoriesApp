import { View, Text, Image, ImageBackground } from 'react-native'
import { HomeStyles as styles } from '../styles/styles'
interface CardProps {
  // image: string;
  // title: string;
  // date: string;
}

const HomeMemoryCard = () => {
  return (
    <View style={styles().memoryCard}>
      <Image source={require('../../assets/images/memory_1.png')} resizeMode='cover' 
        style={[styles().memoryCardImage]}
      />
        <ImageBackground source={require('../../assets/images/blur_back.png')} resizeMode='contain' style={styles().memoryCardInfoContainer}>
          <Text style={[styles().memoryCardInfoText, {fontFamily: 'AveriaSerifLibre_400Regular'}]}>Friends</Text>
          <Text style={[styles().memoryCardInfoText, {fontFamily: 'AveriaSerifLibre_400Regular'}]}>May 25th 2022</Text>
        </ImageBackground>
    </View>
  )
}

export default HomeMemoryCard