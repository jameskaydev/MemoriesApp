import { View, Text, Image, ImageBackground, Pressable } from 'react-native'
import { HomeStyles as styles } from '../styles/styles'
import { navigate } from "../types/navigate";
import { useNavigation } from '@react-navigation/core';

const HomeMemoryCard = () => {
  const { navigate } = useNavigation<navigate>();
  return (
    <Pressable 
      style={styles().memoryCard} 
      onPress={() => navigate("HomeStack", { screen: "Memory" })}
    >
      <Image 
        source={require('../../assets/images/memory_1.png')} 
        resizeMode="contain"
        style={[styles().memoryCardImage]}
      />
        <ImageBackground source={require('../../assets/images/blur_back.png')} resizeMode='contain' style={styles().memoryCardInfoContainer}>
          <Text style={styles().memoryCardInfoText}>Friends</Text>
          <Text style={styles().memoryCardInfoText}>May 25th 2022</Text>
        </ImageBackground>
    </Pressable>
  )
} 

export default HomeMemoryCard