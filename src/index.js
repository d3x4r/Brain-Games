import readlineSync from 'readline-sync';
import { evenGamePlay, evenGameDescription } from './games/even';
import { calcGameplay, calcGameDescription } from './games/calc';

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

const createGame = (gameDescription, game) => {
  const userName = greeting(gameDescription);

  const play = (attempt) => {
    if (attempt === attempts) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const gameResult = game();
    if (gameResult) {
      console.log('Correct!');
      play(attempt + 1);
    } else {
      console.log(`Let's try again, ${userName}!`);
    }
  };

  play(0);
};

export const evenGame = () => {
  createGame(evenGameDescription, evenGamePlay);
};

export const calcGame = () => {
  createGame(calcGameDescription, calcGameplay);
};
