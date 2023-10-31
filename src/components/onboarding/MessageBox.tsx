import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import LogoMain from '../svg/LogoMain'
import { AveriaSerifLibre_400Regular, useFonts } from '@expo-google-fonts/averia-serif-libre'

interface Props {
  message: JSON;
}

const {width} = Dimensions.get("window")

const MessageBox = ({ message }: Props) => {
  useFonts({AveriaSerifLibre_400Regular})
  return (
    <View style={styles.messageBoxContainer}>
      <LogoMain width='40' height='37' />
      <Text style={[styles.botMessage, styles.message, {
        fontFamily: 'AveriaSerifLibre_400Regular'
      }]}>
        {JSON.parse(message as any).message}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  messageBoxContainer: {
    paddingLeft: 15,
    flexDirection: 'row',
    width: width
  },
  message: {},
  botMessage: {
    fontSize: 18,
    lineHeight: 20,
    paddingLeft: 15,
    paddingBottom: 30,
    paddingRight: 15,
    flex: 1
  },
  userMessage: {}
})

export default MessageBox