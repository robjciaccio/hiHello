import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface CalcButtonProps {
  onPress?: () => void;
  title: string;
  color?: string;
}

const Calculator = (): JSX.Element => {
  const [result, setResult] = useState<number>(0);
  const [savedNumber, setSavedNumber] = useState<number>(0);
  const [ArithmeticOp, setArithmeticOp] = useState<string>('');

  const CalcButton = ({title, color, onPress}: CalcButtonProps) => {
    const buttonColor = color || '#696969';
    return (
      <TouchableOpacity
        style={[styles.button, {backgroundColor: buttonColor}]}
        onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };

  const functionalPressed = (type: string) => {
    setSavedNumber(result);
    setArithmeticOp(type);
    setResult(0);
  };

  const showNumbers = (num: number) => {
    if (result === 0) {
      setResult(num);
    } else if (result !== 0) {
      setResult(result * 10 + num);
    }
  };

  const equalPress = () => {
    if (ArithmeticOp === '/') {
      setResult(result / savedNumber);
    } else if (ArithmeticOp === 'X') {
      setResult(result * savedNumber);
    } else if (ArithmeticOp === '-') {
      setResult(result - savedNumber);
    } else if (ArithmeticOp === '+') {
      setResult(result + savedNumber);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <CalcButton
            title="AC"
            color="darkgrey"
            onPress={() => setResult(0)}
          />
          <CalcButton title="" color="darkgrey" />
          <CalcButton title="%" color="darkgrey" />
          <CalcButton
            title="/"
            color="#FF9500"
            onPress={() => functionalPressed('/')}
          />
        </View>
        <View style={styles.buttonRow}>
          <CalcButton title="7" onPress={() => showNumbers(7)} />
          <CalcButton title="8" onPress={() => showNumbers(8)} />
          <CalcButton title="9" onPress={() => showNumbers(9)} />
          <CalcButton
            title="X"
            color="#FF9500"
            onPress={() => functionalPressed('X')}
          />
        </View>
        <View style={styles.buttonRow}>
          <CalcButton title="4" onPress={() => showNumbers(4)} />
          <CalcButton title="5" onPress={() => showNumbers(5)} />
          <CalcButton title="6" onPress={() => showNumbers(6)} />
          <CalcButton
            title="-"
            color="#FF9500"
            onPress={() => functionalPressed('-')}
          />
        </View>
        <View style={styles.buttonRow}>
          <CalcButton title="1" onPress={() => showNumbers(1)} />
          <CalcButton title="2" onPress={() => showNumbers(2)} />
          <CalcButton title="3" onPress={() => showNumbers(3)} />
          <CalcButton
            title="+"
            color="#FF9500"
            onPress={() => functionalPressed('+')}
          />
        </View>
        <View style={styles.buttonRow}>
          <CalcButton title="0" onPress={() => showNumbers(0)} />
          <CalcButton title="" />
          <CalcButton title="" color="#FF9500" />
          <CalcButton title="=" color="#FF9500" onPress={() => equalPress()} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 35,
    paddingBottom: 20,
  },
  resultText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonContainer: {
    paddingBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Calculator;
