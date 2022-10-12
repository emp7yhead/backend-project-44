import numGenerator from '../utils.js';

import gameGenerator from '../engine.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const gcd = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }
  return gcd(secondNumber, firstNumber % secondNumber);
};

const gcdGame = () => {
  const firstNumber = numGenerator(1, 100);
  const secondNumber = numGenerator(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = gcd(firstNumber, secondNumber);
  return [String(correctAnswer), question];
};

export default gameGenerator(gcdGame, gameRules);
