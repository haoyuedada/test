
      <View style={styles.box}>
        {/* 底层：透明背景（可视为起点） */}
        <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0,122,255,0)' }]} />

        {/* 顶层：不透明背景，通过 opacity 控制淡入/淡出 */}
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: 'rgba(0,122,255,1)', opacity: opaqueOpacity },
          ]}
        />
