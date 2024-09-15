import React, { useEffect } from "react";
import Bullet from "./bullet";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const DELAY = [200, 400, 600, 0, 900];

const AnimateBullet = ({ index }: { index: number }) => {
  const translateY = useSharedValue(420);
  useEffect(() => {
    translateY.value = withRepeat(
      withDelay(DELAY[index], withTiming(-150, { duration: 1000 })),
      -1,
      false
    );
  }, []);

  const animate = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: translateY.value,
      },
    ],
    zIndex: -30,
  }));

  return (
    <Animated.View style={animate}>
      <Bullet />
    </Animated.View>
  );
};

export default AnimateBullet;
