import readlineSync from 'readline-sync';
import randomNumber from '../utils';

export const calcGameDescription = 'What is the result of the expression?';

const minValueQestion = 1;
const maxValueQuestion = 10;

const questionOperators = '+-*';

const getOperator = (operators) => {
  const numberOfOperation = randomNumber(0, operators.length - 1);
  return operators[numberOfOperation];
};

const calcAnswer = (firstNumber, secondNumber, operator) => {
  if (operator === '+') {
    return firstNumber + secondNumber;
  } if (operator === '-') {
    return firstNumber - secondNumber;
  }
  return firstNumber * secondNumber;
};

export const calcGameplay = () => {
  const firstValue = randomNumber(minValueQestion, maxValueQuestion);
  const secondValue = randomNumber(minValueQestion, maxValueQuestion);
  const operator = getOperator(questionOperators);
  const question = `${firstValue} ${operator} ${secondValue}`;

  const answer = readlineSync.question(`Question: ${question} `);
  const correctAnswer = calcAnswer(firstValue, secondValue, operator);

  if (+answer === correctAnswer) {
    return true;
  }

  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return false;
};
