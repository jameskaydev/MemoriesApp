import Svg, { Path } from "react-native-svg";

interface Props {
  height: number;
  width: number;
}

const BackArrow = ({ height, width }: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 39 29"
      fill="none"
    >
      <Path
        d="M14.5 2L2 14.5L14.5 27"
        stroke="#252525"
        strokeWidth="2.5"
      />
      <Path
        d="M37.0079 14.5H2.34969"
        stroke="#252525"
        strokeWidth="2.5"
      />
    </Svg>
  );
};

export default BackArrow;
