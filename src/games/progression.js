import generateNum from '../utils.js';

import generateGame from '../engine.js';

const gameRules = 'What number is missing in the progression?';

const getProgression = (length, step) => {
  const question = [];
  const firstNum = generateNum(5, 50);

  for (let i = 0; i < length; i += 1) {
    const num = firstNum + step * i;
    question.push(num);
  }
  return question;
};

const generateProgressionGameRound = () => {
  const length = generateNum(5, 10);
  const step = generateNum(2, 20);
  const question = getProgression(length, step);
  const randomIndex = generateNum(0, question.length - 1);
  const answer = question.splice(randomIndex, 1, '..');
  return [answer.join(), question.join(' ')];
};

export default () => {
  generateGame(generateProgressionGameRound, gameRules);
};
