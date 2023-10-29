import { TouchableOpacity, Text, StyleSheet } from 'react-native'

interface ButtonProps {
  text: string;
  // width: number;
}

const Button = ({ text }: ButtonProps ) => {
  return (
    <TouchableOpacity 
    // style={{width: width}}
    style={styles.container}
    >
      <Text style={styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#252525',
    borderRadius: 30,
    // width: 180,
    justifyContent: 'center',
    flex: 1
  },
  text: {
    textAlign: 'center',
    fontFamily: 'AveriaSerifLibre_400Regular',
    color: '#FFF',
    fontSize: 20,
  }
})

export default Button