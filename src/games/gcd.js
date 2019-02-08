import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';
import { createGame } from '..';

const gcdGameDescription = 'Find the greatest common divisor of given numbers.';
const minValueQestion = 1;
const maxValueQuestion = 100;

const getSmallestNumber = (a, b) => ((a > b) ? b : a);

const findGcd = (firstNumber, secondNumber) => {
  const possibleDivisor = getSmallestNumber(firstNumber, secondNumber);
  const iter = (divisor) => {
    if (firstNumber % divisor === 0 && secondNumber % divisor === 0) {
      return divisor;
    }
    return iter(divisor - 1);
  };
  return iter(possibleDivisor);
};

const gameData = () => {
  const firstValue = randomNumber(minValueQestion, maxValueQuestion);
  const secondValue = randomNumber(minValueQestion, maxValueQuestion);
  const question = `${firstValue} ${secondValue}`;
  const answer = findGcd(firstValue, secondValue);
  return cons(question, answer);
};

export default () => createGame(gcdGameDescription, gameData);
