import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

interface ButtonProps {
  text: string;
  onpress?: () => void;
  navigation?: any;
  // width: number;
}

const Button = ({ text, onpress, navigation }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onpress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#252525",
    borderRadius: 30,
    justifyContent: "center",
    flex: 1,
  },
  text: {
    textAlign: "center",
    fontFamily: "AveriaSerifLibre_400Regular",
    color: "#FFF",
    fontSize: 20,
  },
});

export default Button;
