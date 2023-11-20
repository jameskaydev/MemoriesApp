import { TouchableOpacity, Text, View, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { m, h, v } from "../utils/scale";

const DrawerContent = () => {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.upperContainer}>
          <TouchableOpacity style={styles.menuIcon}>
            <Image source={require('../../assets/images/rotated_menu_bar.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.upperLinkContainer}>
            <Text style={styles.upperLinkTxt}>
              Profile {'\t'}
              <Image
                source={require('../../assets/images/start_arrow_w.png')}
                style={styles.linkArrow}
              />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.upperLinkContainer}>
            <Text style={styles.upperLinkTxt}>
              Nudges {'\t'}
              <Image
                source={require('../../assets/images/start_arrow_w.png')}
                style={styles.linkArrow}
              />
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lowerContainer}>
          <TouchableOpacity style={styles.lowerLinkContainer}>
            <Text style={styles.lowerLinkTxt}>
              Log Out {'\t'}
              <Image
                source={require('../../assets/images/start_arrow_w.png')}
                style={styles.linkArrow}
              />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.lowerLinkContainer}>
            <Text style={styles.lowerLinkTxt}>
              Delete My Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    justifyContent: 'space-between',
    // paddingHorizontal: h
  },
  menuIcon: {
    alignSelf: 'flex-end',
    marginRight: h(10),
    marginTop: v(55),
    marginBottom: v(80)
  },
  upperContainer: {},
  lowerContainer: {
    paddingBottom: v(50)
  },
  upperLinkContainer: {
    paddingHorizontal: h(22),
    marginBottom: v(10)
  },
  upperLinkTxt: {
    fontFamily: 'AveriaSerifLibre_400Regular',
    fontSize: m(20),
    color: '#FFF',
    paddingVertical: v(10),
    paddingHorizontal: h(20),
    borderBottomWidth: 1,
    borderColor: '#FFF'
  },
  lowerLinkContainer: {
    paddingVertical: v(10),
    marginHorizontal: h(22),
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 30,
    marginTop: v(10),
    paddingLeft: 20
  },
  lowerLinkTxt: {
    fontFamily: 'AveriaSerifLibre_400Regular',
    fontSize: m(20),
    color: '#FFF',
  },
  linkArrow: {
    marginLeft: h(30)
  }
})

export default DrawerContent