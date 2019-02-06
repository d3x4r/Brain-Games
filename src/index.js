import readlineSync from 'readline-sync';
import { evenGamePlay, evenGameDescription } from './brain-games-even';

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

    const gameResult = game(userName);
    if (gameResult) {
      play(attempt + 1);
    }
  };

  play(0);
};

export const evenGame = () => {
  createGame(evenGameDescription, evenGamePlay);
};
