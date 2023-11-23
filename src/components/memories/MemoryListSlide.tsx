import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { m, h, v } from '../../utils/scale';
import { useNavigation } from '@react-navigation/core';
import { navigate } from '../../types/navigate';

interface Props {
  date: string;
  image: any;
  title: string;
}

const MemoryListSlide = ({ date, image, title }: Props) => {
  const { navigate } = useNavigation<navigate>();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>
          {date}
        </Text>
      </View>

      <View style={styles.innerContainer}>
        <Image source={image} width={78} height={78} />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {title}
          </Text>
        </View>

        <View style={styles.arrowContainer}>
          <TouchableOpacity onPress={() => navigate("HomeStack", {screen: "Memory"})}>
            <Image
              source={require("../../../assets/images/start_arrow.png")}
              width={6}
              height={6}
            />
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    paddingTop: v(55),
    paddingLeft: h(15),
    paddingRight: h(15),
  },
  dateContainer: {
    paddingRight: h(16),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: v(35),
  },
  date: {
    color: '#036BBF',
    fontFamily: 'AveriaSerifLibre_400Regular',
    fontSize: m(18)
  },
  innerContainer: {
    flexDirection: 'row',
    paddingBottom: v(35),
    paddingLeft: h(31),
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#25252550'
  },
  titleContainer: {
    justifyContent: 'center'
  },
  title: {
    fontSize: m(32),
    fontFamily: 'AveriaSerifLibre_700Bold',
    color: '#252525',
    paddingHorizontal: h(15),
    textAlign: 'center',
    maxWidth: 160,
    minWidth: 160,
  },
  arrowContainer: {
    justifyContent: 'center'
  }
})

export default MemoryListSlide