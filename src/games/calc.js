/* eslint-disable import/extensions */
import generateNum from '../utils.js';

import generateGame from '../engine.js';

const gameRules = 'What is the result of the expression?';

const makeAnswer = (firstNum, secondNum, symbol) => {
  switch (symbol) {
    case ('+'):
      return firstNum + secondNum;
    case ('-'):
      return firstNum - secondNum;
    case ('*'):
      return firstNum * secondNum;
    default:
      throw new Error('Unsupported symbol');
  }
};

const generateCalcGameRound = () => {
  const operands = ['+', '-', '*'];

  const firstNumber = generateNum(1, 100);
  const secondNumber = generateNum(1, 100);

  const operandIndex = generateNum(0, operands.length - 1);
  const question = `${firstNumber} ${operands[operandIndex]} ${secondNumber}`;
  const correctAnswer = makeAnswer(firstNumber, secondNumber, operands[operandIndex]);
  return [String(correctAnswer), question];
};

export default () => {
  generateGame(generateCalcGameRound, gameRules);
};
