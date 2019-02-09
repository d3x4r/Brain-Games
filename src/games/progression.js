import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';
import createGame from '..';

const progressionGameDescription = 'What number is missing in the progression?';

const progressionMinStartValue = 1;
const progressionMaxStartValue = 50;

const progressionMaxStep = 12;
const progressionLength = 10;

const createProgression = (startNumber, step, hideTarget) => {
  const iter = (progression, currentStep) => {
    if (currentStep === progressionLength) {
      return progression;
    }
    if (currentStep === hideTarget) {
      return `${progression} ${iter('..', currentStep + 1)}`;
    }

    return `${progression} ${iter(startNumber + (currentStep * step), currentStep + 1)}`;
  };
  return iter(startNumber, 1);
};

const gameData = () => {
  const startValue = randomNumber(progressionMinStartValue, progressionMaxStartValue);
  const progressionStep = randomNumber(progressionMinStartValue, progressionMaxStep);
  const chooseHideTarget = randomNumber(progressionMinStartValue, progressionLength - 1);
  const question = createProgression(startValue, progressionStep, chooseHideTarget);
  const answer = startValue + (progressionStep * chooseHideTarget);
  return cons(question, answer);
};

export default () => createGame(progressionGameDescription, gameData);
