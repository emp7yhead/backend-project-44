import numGenerator from '../utils.js';

import gameGenerator from '../engine.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if ((number === 0) || (number === 1)) {
    return false;
  }
  for (let i = 2; i < Math.round(number) + 1; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = () => {
  const question = numGenerator(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [correctAnswer, question];
};

export default gameGenerator(primeGame, gameRules);
