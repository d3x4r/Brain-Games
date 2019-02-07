import readlineSync from 'readline-sync';
import randomNumber from '../utils';

export const gcdGameDescription = 'Find the greatest common divisor of given numbers.';
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

export const gcdGameplay = () => {
  const firstValue = randomNumber(minValueQestion, maxValueQuestion);
  const secondValue = randomNumber(minValueQestion, maxValueQuestion);

  const question = `${firstValue} ${secondValue}`;

  const answer = readlineSync.question(`Question: ${question} `);
  const correctAnswer = findGcd(firstValue, secondValue);

  if (+answer === correctAnswer) {
    return true;
  }

  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return false;
};
