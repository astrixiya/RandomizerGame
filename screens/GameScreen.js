import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GameScreen = () => {
  const [currentNumber, setCurrentNumber] = useState(generateRandomNumber());
  const [result, setResult] = useState('');

  const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

  const handleGueess = (guess) => {
    const nextNumber = generateRandomNumber();
    if (
      (guess === 'lower' && nextNumber < currentNumber) ||
      (guess === 'higher' && nextNumber > currentNumber)
    ) {
      setResult('Success! You guessed right.');
    } else {
      setResult('Defeat! You guessed wrong.');
    }
    setCurrentNumber(nextNumber);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Current Number: {currentNumber}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Lower" onPress={() => handleGueess('lower')} />
        <Button title="Higher" onPress={() => handleGueess('higher')} />
      </View>
      {result && <Text style={styles.resultText}>{result}</Text>}
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
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
  },
  resultText: {
    fontSize: 20,
    color: result === 'Success! You guessed right.' ? 'green' : 'red',
  },
});

export default GameScreen;
