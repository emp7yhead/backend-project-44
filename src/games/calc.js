import numGenerator from '../utils.js';

import gameGenerator from '../engine.js';

const gameRules = 'What is the result of the expression?';

const variants = ['+', '-', '*'];

const makeChoice = (operands) => {
  const index = Math.floor(Math.random() * operands.length);
  return operands[index];
};

const makeAnswer = (firstNum, secondNum, operand) => {
  if (operand === '+') {
    return firstNum + secondNum;
  }
  if (operand === '-') {
    return firstNum - secondNum;
  }
  return firstNum * secondNum;
};

const calcGame = () => {
  const firstNumber = numGenerator(1, 100);
  const secondNumber = numGenerator(1, 100);
  const operation = makeChoice(variants);
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const correctAnswer = makeAnswer(firstNumber, secondNumber, operation);
  return [String(correctAnswer), question];
};

export default gameGenerator(calcGame, gameRules);
