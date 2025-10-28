  const toOpaque = () => {
    Animated.timing(opaqueOpacity, {
      toValue: 1,
      duration: 800,
      easing: Easing.linear,
      useNativeDriver: true, // 关键：在 UI 线程运行，性能好
    }).start();
  };

  const toTransparent = () => {
    Animated.timing(opaqueOpacity, {
      toValue: 0,
      duration: 800,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();