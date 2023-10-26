import Svg, { Path } from "react-native-svg";

interface StartArrowProps {
  width: string;
  height: string;
}

const StartArrow = ({ width, height }: StartArrowProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 16" fill="#000">
      <Path
        d="M14 1.5L1 14.5"
        stroke="#252525"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 10.4375V1.5H4.25"
        stroke="#252525"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default StartArrow;
