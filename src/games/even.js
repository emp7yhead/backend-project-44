/* eslint-disable import/extensions */
import generateNum from '../utils.js';

import generateGame from '../engine.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const generateEvenGameRound = () => {
  const number = generateNum(1, 100);
  const question = String(number);
  const correctAnswer = isEven(number);
  return [correctAnswer, question];
};

export default () => {
  generateGame(generateEvenGameRound, gameRules);
};
