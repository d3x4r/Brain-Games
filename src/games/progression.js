import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';
import { createGame } from '..';

const progressionGameDescription = 'What number is missing in the progression?';

const progressionMinStartValue = 1;
const progressionMaxStartValue = 50;
const progressionMaxStep = 12;
const progressionLength = 10;

const createProgression = (startNumber, step, hideNumber) => {
  const iter = (progression, currentLength) => {
    if (currentLength === progressionLength) {
      return progression;
    }
    let currentNumber = String(startNumber + step * currentLength);
    if (currentLength === hideNumber) {
      currentNumber = '..';
    }
    return iter(`${progression} ${currentNumber}`, currentLength + 1);
  };
  return iter(startNumber, 1);
};

const gameData = () => {
  const startValue = randomNumber(progressionMinStartValue, progressionMaxStartValue);
  const progressionStep = randomNumber(progressionMinStartValue, progressionMaxStep);
  const chooseHideTarget = randomNumber(progressionMinStartValue, progressionMaxStep);
  const question = createProgression(startValue, progressionStep, chooseHideTarget);
  const answer = progressionStep;
  return cons(question, answer);
};

export default () => createGame(progressionGameDescription, gameData);
