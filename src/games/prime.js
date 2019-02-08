import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';
import { createGame } from '..';

const minQuestionValue = 1;
const maxQuestionValue = 100;

const primeGameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNatural = (number) => {
  const iter = (startDivisor) => {
    if (startDivisor > number / 2) {
      return 'yes';
    }
    if (number % startDivisor === 0) {
      return 'no';
    }
    return iter(startDivisor + 1);
  };
  return iter(2);
};

const gameData = () => {
  const question = randomNumber(minQuestionValue, maxQuestionValue);
  const answer = isNatural(question);
  return cons(question, answer);
};

export default () => createGame(primeGameDescription, gameData);
