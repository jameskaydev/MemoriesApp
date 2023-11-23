import Svg, { Path } from "react-native-svg";

interface StartArrowProps {
  width: number;
  height: number;
}

const StartArrow = ({ width, height }: StartArrowProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 16" fill="none">
      <Path
        d="M14 1.5L1 14.5"
        stroke="#252525"
        strokeWidth="1.5"
      />
      <Path
        d="M14 10.4375V1.5H4.25"
        stroke="#252525"
        strokeWidth="1.5"
      />
    </Svg>
  );
};

export default StartArrow;
