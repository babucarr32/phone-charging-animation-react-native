import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import AnimateBullet from "./animate-bullet";
import { usePowerState, getBatteryLevelAsync } from "expo-battery";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const WIDTH = 300;
const HEIGHT = 300;

const PINK = "#9F33C3";
const CYAN = "#2052A8";

const HomeScreenContent = () => {
  const { batteryState } = usePowerState();
  const [batterPercentage, setBatteryPercentage] = useState(0);

  useEffect(() => {
    setInterval(() => {
      getBatteryLevelAsync().then((result) => {
        setBatteryPercentage(Math.floor(result * 100));
      });
    }, 1000);
  }, []);

  const animate = useAnimatedStyle(() => ({
    opacity: withTiming(batteryState === 2 ? 1 : 0),
  }));

  return (
    <View style={styles.container}>
      {batteryState === 2 ? (
        <>
          <Animated.View style={[styles.circleContainer, animate]}>
            <LinearGradient
              colors={[PINK, CYAN]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.linearGradient}
            >
              <View
                style={[
                  styles.circle,
                  {
                    width: WIDTH - 5,
                    height: HEIGHT - 5,
                    borderRadius: 200,
                  },
                ]}
              >
                <LinearGradient
                  colors={[PINK, CYAN]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={[
                    styles.linearGradient,
                    { width: WIDTH - 15, height: HEIGHT - 15 },
                  ]}
                >
                  <View
                    style={[
                      styles.circle,
                      {
                        width: WIDTH - 20,
                        height: HEIGHT - 20,
                        borderRadius: 200,
                      },
                    ]}
                  >
                    <LinearGradient
                      colors={[PINK, CYAN]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      style={[
                        styles.linearGradient,
                        { width: WIDTH - 30, height: HEIGHT - 30 },
                      ]}
                    >
                      <View
                        style={[
                          styles.circle,
                          {
                            width: WIDTH - 35,
                            height: HEIGHT - 35,
                            borderRadius: 200,
                          },
                        ]}
                      >
                        <LinearGradient
                          colors={[PINK, CYAN]}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 0, y: 1 }}
                          style={[
                            styles.linearGradient,
                            { width: WIDTH - 80, height: HEIGHT - 80 },
                          ]}
                        >
                          <View
                            style={[
                              styles.circle,
                              {
                                width: WIDTH - 130,
                                height: HEIGHT - 130,
                                borderRadius: 200,
                              },
                            ]}
                          >
                            <View style={styles.infoContainer}>
                              <Text style={{ color: "white", fontSize: 50 }}>
                                {batterPercentage}
                                <Text style={{ fontSize: 16 }}>%</Text>
                              </Text>
                              <Text style={{ color: "white" }}>Charging</Text>
                            </View>
                          </View>
                        </LinearGradient>
                      </View>
                    </LinearGradient>
                  </View>
                </LinearGradient>
              </View>
            </LinearGradient>
          </Animated.View>

          <View style={styles.bulletContainer}>
            {Array.from({ length: 5 }).map((_, i) => (
              <AnimateBullet key={i} index={i} />
            ))}
          </View>
        </>
      ) : (
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Hello World
        </Text>
      )}
    </View>
  );
};

export default HomeScreenContent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
  },
  bulletContainer: {
    flexDirection: "row",
    gap: 3,
  },
  linearGradient: {
    borderRadius: WIDTH / 2,
    height: HEIGHT,
    width: WIDTH,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  circleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
