import { View, Text, TouchableOpacity, Image } from "react-native";

interface LinkButtonProps {
  text: string;
  preText?: string;
  onpress: () => void
}

const LinkButton = ({ text, preText, onpress }: LinkButtonProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center"
      }}
    >
      {preText ? <Text
       style={{
        fontFamily: "AveriaSerifLibre_400Regular",
        fontSize: 20,
        textAlign: "center",
        marginRight: 10
      }}
      >{preText}</Text> : null}
      <TouchableOpacity
        style={{
          flexDirection: "row",
        }}
        onPress={onpress}
      >
        <Text
          style={{
            fontFamily: "AveriaSerifLibre_400Regular",
            color: "#000",
            textAlign: "center",
            textDecorationLine: "underline",
            fontSize: 20,
          }}
        >
          {text}
          <Image
            source={require("../../assets/images/start_arrow.png")}
            width={6}
            height={6}
          />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LinkButton;
