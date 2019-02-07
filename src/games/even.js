import readlineSync from 'readline-sync';
import getRandomNumber from '../utils';

export const evenGameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

export const evenGamePlay = () => {
  const question = getRandomNumber(1, 100);
  const answer = readlineSync.question(`Question: ${question} `);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  if (answer === correctAnswer) {
    return true;
  }

  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return false;
};
