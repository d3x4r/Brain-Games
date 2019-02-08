import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const attempts = 3;

export const greeting = (gameDescription) => {
  console.log('Welcome to the Brain Games!');
  if (gameDescription) {
    console.log(`${gameDescription} \n`);
  }
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);
  return userName;
};

export const createGame = (gameDescription, data) => {
  const userName = greeting(gameDescription);

  const play = (attempt) => {
    if (attempt === attempts) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const gameData = data();
    const question = car(gameData);
    const answer = cdr(gameData);
    const userAnswer = readlineSync.question(`Question: ${question} `);

    if (+userAnswer === answer || userAnswer === answer) {
      console.log('Correct!');
      play(attempt + 1);
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${userName}!`);
    }
  };

  play(0);
};
