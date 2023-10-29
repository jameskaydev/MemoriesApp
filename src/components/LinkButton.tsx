import { View, Text, TouchableOpacity, Image } from "react-native";

interface LinkButtonProps {
  text: string;
  preText?: string;
}

const LinkButton = ({ text, preText }: LinkButtonProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center"
      }}
    >
      {preText ? <Text>{preText}</Text> : null}
      <TouchableOpacity
        style={{
          flexDirection: "row",
        }}
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
