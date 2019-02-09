import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';
import createGame from '..';

const evenGameDescription = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => number % 2 === 0;

const gameData = () => {
  const question = randomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => createGame(evenGameDescription, gameData);
