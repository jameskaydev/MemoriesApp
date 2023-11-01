import { Svg, Circle, Path } from "react-native-svg";

interface Props {
  width: string;
  height: string;
}

const ChatSendIcon = ({ width, height }: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 57 57" fill="none">
      <Circle cx="28.5" cy="28.5" r="28.5" fill="#252525" />
      <Path
        d="M39 19L28 30"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M39 19L32 39L28 30L19 26L39 19Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default ChatSendIcon;
