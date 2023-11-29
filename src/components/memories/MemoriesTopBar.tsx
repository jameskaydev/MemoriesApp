import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import BackArrow from '../svg/BackArrow'
import LogoSmall from '../svg/LogoSmall'
import { MemoriesTopBarStyles as styles } from '../../styles/styles'; // styles
import { useNavigation } from "@react-navigation/core";
import setStateType from '../../types/setState';
import Grid from '../svg/Grid';
import List from '../svg/List';

interface Props {
  setIsGrid: setStateType<boolean>
}

const MemoriesTopBar = ({ setIsGrid }: Props ) => {
  const { goBack } = useNavigation()
  return (
    <View>
      <View style={styles().innerContainer}>
        <View style={styles().backArrowContainer}>

        <TouchableOpacity
          onPress={() => goBack()}
        >
          <BackArrow width={40} height={40} />
        </TouchableOpacity>
          </View>
        
        <Text style={styles().title}>
          Your <LogoSmall width={50} height={50} view='0 -4 50 40' />{"\n"}
          Memories
        </Text>
      </View>

      <View style={styles().imgAndIcons}>
        <Image source={require('../../../assets/images/home_colors.png')} 
          style={styles().colorImgs}
        />
        <View style={styles().iconsContainer}>
          <TouchableOpacity 
            style={styles().gridIcon} 
            activeOpacity={1}
            onPress={() => setIsGrid(true)}
          >
            <Grid />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles().listIcon} 
            activeOpacity={1}
            onPress={() => setIsGrid(false)}
          >
            <List />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default MemoriesTopBar