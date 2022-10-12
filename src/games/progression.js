import numGenerator from '../utils.js';

import gameGenerator from '../engine.js';

const gameRules = 'What number is missing in the progression?';

const generateArr = (length, step) => {
  const questionArr = [];
  const firstNum = numGenerator(5, 50);

  for (let i = 0; i < length; i += 1) {
    const num = firstNum + step * i;
    questionArr.push(num);
  }
  return questionArr;
};

const progressionGame = () => {
  const arrLength = numGenerator(5, 10);
  const step = numGenerator(2, 20);
  const question = generateArr(arrLength, step);
  const randomIndex = numGenerator(0, question.length);
  const answer = question.splice(randomIndex, 1, '..');
  return [answer.join(), question.join(' ')];
};

export default gameGenerator(progressionGame, gameRules);
