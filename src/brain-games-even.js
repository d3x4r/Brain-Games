import readlineSync from 'readline-sync';
import getRandomNumber from './utils';

export const evenGameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

export const evenGamePlay = (userName) => {
  const question = getRandomNumber(1, 100);
  const answer = readlineSync.question(`Question: ${question} `);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};
