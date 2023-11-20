import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import BackArrow from '../svg/BackArrow'
import LogoSmall from '../svg/LogoSmall'
import { MemoriesTopBarStyles as styles } from '../../styles/styles'; // styles

const MemoriesTopBar = () => {
  const { width } = Dimensions.get("window")
  return (
    <View>
      <View style={styles().innerContainer}>
        <View style={styles().backArrowContainer}>

        <TouchableOpacity>
          <BackArrow width={40} height={40} />
        </TouchableOpacity>
          </View>
        
        <Text style={styles().title}>
          Your <LogoSmall width={50} height={50} view='0 -4 50 40' />{"\n"}
          Memories
        </Text>
      </View>

      <View>
        <Image source={require('../../../assets/images/home_colors.png')} 
          style={{
            width: width - 90
          }}
        />
      </View>
    </View>
  )
}

export default MemoriesTopBar