import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [longPress, setLongPress] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handleLongPress = () => {
    setLongPress(true);
    Animated.spring(scaleAnim, {
      toValue: 1.2,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      setLongPress(false);
      navigation.navigate('Game');
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.startButton, { transform: [{ scale: scaleAnim }] }]}>
        <TouchableOpacity
          style={styles.startButtonInner}
          onPress={() => {}}
          onLongPress={handleLongPress}
        >
          <Text style={styles.startText}>Start Game!</Text>
        </TouchableOpacity>
      </Animated.View>
      {longPress && <Text>Keep pressing to start the game...</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  startButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#8a2be2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButtonInner: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  startText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
