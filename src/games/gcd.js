import generateNum from '../utils.js';

import generateGame from '../engine.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const findGcd = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }
  return findGcd(secondNumber, firstNumber % secondNumber);
};

const generateGcdGameRound = () => {
  const firstNumber = generateNum(1, 100);
  const secondNumber = generateNum(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = findGcd(firstNumber, secondNumber);
  return [String(correctAnswer), question];
};

export default () => {
  generateGame(generateGcdGameRound, gameRules);
};
