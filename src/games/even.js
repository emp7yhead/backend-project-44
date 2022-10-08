import numGenerator from '../utils.js';

import gameGenerator from '../engine.js'

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const evenGame = () => {
  const number = numGenerator(1, 100);
  const question = String(number);
  const correctAnswer = isEven(number);
  return [correctAnswer, question];
};

export default gameGenerator(evenGame, gameRules);
