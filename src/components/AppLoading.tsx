import { View, Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import React from 'react'

const AppLoading = () => {
  return (
    <SafeAreaView style={{
      height:'100%',
      width: '100%',
      backgroundColor: 'yellow',
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Text style={{textAlign: "center"}}>AppLoading</Text>
    </SafeAreaView>
  )
}

export default AppLoading