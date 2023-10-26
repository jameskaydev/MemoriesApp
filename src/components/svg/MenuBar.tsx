import { Svg, Path } from "react-native-svg";

interface MenuBarProps {
  width: string;
  height: string;
}

const ManuBar = ({ width, height }: MenuBarProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 50 20">
      <Path
        d="M5.25 12.75H36.75"
        stroke="#252525"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <Path
        d="M5.25 21.5H36.75"
        stroke="#252525"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <Path
        d="M5.25 30.25H36.75"
        stroke="#252525"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default ManuBar;
