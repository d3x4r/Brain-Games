import readlineSync from 'readline-sync';
import getRandomNumber from './utils/random-number';
import isEven from './utils/is-even';

const evenGameDescription = 'Answer "yes" if number even otherwise answer "no".';
const attempts = 3;

export default (greetingFunction) => {
  const userName = greetingFunction(evenGameDescription);

  const iter = (acc) => {
    if (acc === attempts) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const question = getRandomNumber(1, 100);
    const answer = readlineSync.question(`Question: ${question} `);
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('Correct!');
      iter(acc + 1);
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
    }
  };
  iter(0);
};
