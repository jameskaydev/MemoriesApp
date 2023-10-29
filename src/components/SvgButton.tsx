import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import AppleLogo from './svg/AppleLogo'
import GoogleLogo from './svg/GoogleLogo'
import FacebookLogo from './svg/FacebookLogo'

interface Logo {
  width: number;
  height: number;
}

// interface AppleLogo extends Logo {}
// interface GoogleLogo extends Logo {}
// interface FacebookLogo extends Logo {}

// type Svg = AppleLogo | GoogleLogo | FacebookLogo;

// interface FinalProps {
//   SvgComponent: Svg;
//   width: number;
//   height: number;
// }

const SvgButton = ({ width, height } : Logo ) => {
  return (
    <TouchableOpacity style={[styles.container, {width: width, height: height}]}>
      <AppleLogo width={26} height={26} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#252525',
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default SvgButton