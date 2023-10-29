import Svg, { Path, Defs, ClipPath, Rect } from "react-native-svg";

interface AppleLogoProps {
  width: number;
  height: number;
}

const GoogleLogo = ({ width, height }: AppleLogoProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 26 26" fill="none">
      <Defs>
        <ClipPath id="clip0_205_2039">
          <Rect width={width} height={height} fill="white" />
        </ClipPath>
      </Defs>
      <Path
        fill="white"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.2469 7.09341C16.9047 5.81324 15.1134 5.11583 13.26 5.14449C9.86848 5.14449 6.9881 7.43255 5.96108 10.5135C5.41653 12.1281 5.41653 13.8765 5.96107 15.491H5.96584C6.99763 18.5673 9.87325 20.8553 13.2648 20.8553C15.0155 20.8553 16.5184 20.4075 17.6833 19.6166V19.6134C19.0542 18.7058 19.9905 17.2775 20.2819 15.663H13.26V10.6569H25.522C25.6749 11.5263 25.7465 12.4148 25.7465 13.2985C25.7465 17.2525 24.3334 20.5954 21.8747 22.8596L21.8773 22.8616C19.723 24.8487 16.7661 25.9999 13.26 25.9999C8.34468 25.9999 3.84973 23.2294 1.64286 18.8395C-0.200965 15.1662 -0.20096 10.8384 1.64287 7.1651C3.84974 2.77046 8.34468 -0.000100508 13.26 -0.000100508C16.4891 -0.0383147 19.6083 1.17499 21.9585 3.38186L18.2469 7.09341Z"
      />
    </Svg>
  );
};

export default GoogleLogo;
