import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Animated, Easing } from "react-native";

const defaultColors = ["#E9AF00", "#BF271F", "#6EAC3D", "#036BBF"];

interface Props {
  dots?: number;
  colors?: string[];
  size?: number;
  bounceHeight?: number;
  borderRadius?: number;
}

const LoadingDots = ({
  dots = 4,
  colors = defaultColors,
  size = 20,
  bounceHeight = 10,
  borderRadius,
}: Props ) => {
  const [animations, setAnimations] = useState<any[]>([]);
  const [reverse, setReverse] = useState(false);

  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const dotAnimations = [];
    let animationsAmount = dots;
    for (let i = 0; i < animationsAmount; i++) {
      dotAnimations.push(new Animated.Value(0));
    }
    setAnimations(dotAnimations as never);
  }, []);

  useEffect(() => {
    if (animations.length === 0) return;
    loadingAnimation(animations, reverse);
    appearAnimation();
  }, [animations]);

  const appearAnimation = () => {
    Animated.timing(opacity, {
      toValue: 1,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }

  const floatAnimation = (node: any, reverseY: boolean, delay: number = 0) => {
    const floatSequence = Animated.sequence([
      Animated.timing(node, {
        toValue: reverseY ? bounceHeight : -bounceHeight,
        easing: Easing.bezier(0.41, -0.15, 0.56, 1.21),
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(node, {
        toValue: reverseY ? -bounceHeight : bounceHeight,
        easing: Easing.bezier(0.41, -0.15, 0.56, 1.21),
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(node, {
        toValue: 0,
        delay,
        useNativeDriver: true,
      }),
    ]);
    return floatSequence;
  }

  const loadingAnimation = (nodes: any[], reverseY: boolean = false) => {
    Animated.parallel(
      nodes.map((node, index) => floatAnimation(node, reverseY, index * 100))
    ).start(() => {
      setReverse(!reverse);
    });
  }

  useEffect(() => {
    if (animations.length === 0) return;
    loadingAnimation(animations, reverse);
  }, [reverse, animations]);

  return (
    <Animated.View style={[styles.loading, { opacity, marginLeft: 15 }]}>
      {animations.map((animation, index) =>
        (
          <Animated.View
            key={`loading-anim-${index}`}
            style={[
              {
                width: 10,
                height: 10,
                borderRadius: borderRadius || size / 2,
              },
              { backgroundColor: colors[index] || "#4dabf7" },
              { transform: [{ translateY: animation }] },
            ]}
          />
        )
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  loading: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default LoadingDots;
