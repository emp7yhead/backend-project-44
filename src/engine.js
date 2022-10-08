import readlineSync from 'readline-sync';

export default (gameMode, gameRules) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log(gameRules);

  for (let i = 0; i < 3; i += 1) {
    const [correctAnswer, question] = gameMode();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n
        Let's try again, ${name}!`,
      );
      return;
    }
  }
  console.log(`Congratulation, ${name}`);
};
