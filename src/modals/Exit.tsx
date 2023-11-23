import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { m, h, v } from '../utils/scale'

const borderRed = {
  borderWidth: 2,
  borderColor: 'red'
}
const borderGreen = {
  borderWidth: 2,
  borderColor: 'green'
}

const { width } = Dimensions.get("window")

const Exit = () => {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>

        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Are you sure?
            </Text>
            <Image
              source={require('../../assets/images/failure_emoji.png')}
              style={styles.emoji}
            />
          </View>
          <Text style={styles.desc}>
            All data and memories will be deleted
          </Text>
        </View>

        <View style={styles.btnsContainer}>
          <TouchableOpacity style={[styles.btn, styles.btnY]}>
            <Text style={[styles.btnTxt, styles.btnTxtY]}>
              Yes
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn, styles.btnN]}>
            <Text style={styles.btnTxt}>
              Back
            </Text>
          </TouchableOpacity>
        </View>

      <Image 
        source={require('../../assets/images/bottom_colos.png')}
        style={styles.image}
      />

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: h(15),
    height: '100%',
    justifyContent: 'center'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'AveriaSerifLibre_700Bold',
    fontSize: m(48),
    color: '#252525'
  },
  emoji: {
    width: m(36),
    height: m(36),
    marginLeft: h(15)
  },
  desc: {
    fontFamily: 'AveriaSerifLibre_400Regular',
    fontSize: m(20),
    marginTop: v(15)
  },
  btnsContainer: {
    marginTop: v(100)
  },
  btn: {
    width: '100%',
    borderRadius: 30,
    paddingVertical: 15
  },
  btnTxt: {
    fontSize: m(20),
    fontFamily: 'AveriaSerifLibre_400Regular',
    textAlign: 'center'
  },
  btnY: {
    backgroundColor: '#252525',
  },
  btnTxtY: {
    color: '#fff',
  },
  btnN: {
    borderWidth: 1,
    borderColor: '#252525',
    marginTop: v(10)
  },
  image: {
    position: 'absolute',
    bottom: 0,
    width: width
  }
})

export default Exit