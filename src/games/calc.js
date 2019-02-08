import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';
import { createGame } from '..';

const calcGameDescription = 'What is the result of the expression?';

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

const gameData = () => {
  const firstValue = randomNumber(minValueQestion, maxValueQuestion);
  const secondValue = randomNumber(minValueQestion, maxValueQuestion);
  const operator = getOperator(questionOperators);
  const question = `${firstValue} ${operator} ${secondValue}`;
  const answer = calcAnswer(firstValue, secondValue, operator);
  return cons(question, answer);
};

export default () => createGame(calcGameDescription, gameData);
