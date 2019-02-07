export default (minNumber, maxNumber) => {
  let randomNumber = minNumber - 0.5 + Math.random() * (maxNumber - minNumber + 1);
  randomNumber = Math.round(randomNumber);
  return Math.abs(randomNumber);
};
