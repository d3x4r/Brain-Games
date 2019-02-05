import readlineSync from 'readline-sync';
import getRandomNumber from './random-number';


export default (greetingFunction) => {
  const evenGameDescription = 'Answer "yes" if number even otherwise answer "no".';
  const userName = greetingFunction(evenGameDescription);

  const iter = (acc) => {
    if (acc === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }

    const randomNumber = getRandomNumber(1, 100);
    const answerValue = readlineSync.question(`Question: ${randomNumber} `);
    const evenCheck = randomNumber % 2 === 0;

    if (answerValue === 'yes' && evenCheck) {
      console.log('Correct!');
      return iter(acc + 1);
    } if (answerValue === 'no' && evenCheck === false) {
      console.log('Correct!');
      return iter(acc + 1);
    } const correctAnswer = evenCheck ? 'yes' : 'no';
    console.log(`${answerValue} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
    return false;
  };
  return iter(0);
};
