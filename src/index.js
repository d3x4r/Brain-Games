import readlineSync from 'readline-sync';

export default (gameDescription) => {
  console.log('Welcome to the Brain Games!');
  if (gameDescription) {
    console.log(`${gameDescription} \n`);
  }
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);
  return userName;
};
