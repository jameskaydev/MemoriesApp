import Svg, { Path } from "react-native-svg";

interface Props {
  width: number;
  height: number;
  view?: string;
}

const DirectSend = ({ width, height, view }: Props) => {
  return (
    <Svg width={width} height={height} viewBox={view ? view : "0 0 34 35"} fill="none">
      <Path
        d="M17.0078 13.2502V3.3335L14.1744 6.16683"
        stroke="#252525"
        strokeWidth="2"
      />
      <Path
        d="M17.0078 3.3335L19.8411 6.16683"
        stroke="#252525"
        strokeWidth="2"
      />
      <Path
        d="M2.81287 18.9165H9.06037C9.5987 18.9165 10.0804 19.214 10.3212 19.6957L11.9787 23.0107C12.4604 23.974 13.4379 24.5832 14.5145 24.5832H19.5154C20.592 24.5832 21.5695 23.974 22.0512 23.0107L23.7087 19.6957C23.9495 19.214 24.4454 18.9165 24.9695 18.9165H31.1462"
        stroke="#252525"
        strokeWidth="2"
      />
      <Path
        d="M9.92452 7.76758C4.90952 8.50424 2.84119 11.4509 2.84119 17.5001V21.7501C2.84119 28.8334 5.67452 31.6667 12.7579 31.6667H21.2579C28.3412 31.6667 31.1745 28.8334 31.1745 21.7501V17.5001C31.1745 11.4509 29.1062 8.50424 24.0912 7.76758"
        stroke="#252525"
        strokeWidth="2"
      />
    </Svg>
  );
};

export default DirectSend;
