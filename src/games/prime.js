import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';
import createGame from '..';

const minQuestionValue = 1;
const maxQuestionValue = 100;

const primeGameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  const iter = (startDivisor) => {
    if (startDivisor > number / 2) {
      return true;
    }
    if (number % startDivisor === 0) {
      return false;
    }
    return iter(startDivisor + 1);
  };
  return iter(2);
};

const gameData = () => {
  const question = randomNumber(minQuestionValue, maxQuestionValue);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => createGame(primeGameDescription, gameData);
