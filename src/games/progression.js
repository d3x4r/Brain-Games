import readlineSync from 'readline-sync';
import randomNumber from '../utils';

export const progressionGameDescription = 'What number is missing in the progression?';

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

export const progressionGameplay = () => {
  const startValue = randomNumber(progressionMinStartValue, progressionMaxStartValue);
  const progressionStep = randomNumber(progressionMinStartValue, progressionMaxStep);
  const chooseHideTarget = randomNumber(progressionMinStartValue, progressionMaxStep);

  const progression = createProgression(startValue, progressionStep, chooseHideTarget);
  const question = progression;

  const answer = readlineSync.question(`Question: ${question} `);
  const correctAnswer = progressionStep;

  if (+answer === correctAnswer) {
    return true;
  }

  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return false;
};
