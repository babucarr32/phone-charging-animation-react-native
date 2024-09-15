import * as React from "react";
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const Bullet = (props: SvgProps) => (
  <Svg width={9} height={147} fill="none" {...props}>
    <G filter="url(#a)">
      <Path
        fill="url(#b)"
        d="M2.044 4.5a2.457 2.457 0 1 1 4.912 0L4.5 144.5 2.044 4.5Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={4.5}
        x2={4.5}
        y1={2}
        y2={144.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.31} stopColor="#3286C3" />
        <Stop offset={1} stopColor="#9520A8" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Bullet;
