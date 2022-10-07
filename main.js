const add = (firstNumber, secondNumber) => {
  const sum = firstNumber + secondNumber;
  return sum;
};

const subtract = (firstNumber, secondNumber) => {
  const difference = firstNumber - secondNumber;
  return difference;
};

const divide = (firstNumber, secondNumber) => {
  const quotient = firstNumber / secondNumber;
  return quotient;
};

const multiply = (firstNumber, secondNumber) => {
  const product = firstNumber * secondNumber;
  return product;
};

const square = (firstNumber) => {
  const result = firstNumber * firstNumber;
  return result;
};

// let result = square(100);
// console.log(result);

/*A quarter of the animals on a farm have four legs. The remaining three quarters of the animals have two legs. If there are 60 legs overall, how many animals are there on the farm?

60=4(.25x) + 2(.75x)
 */

const animals = multiply(0.25, 4);
const otherAnimals = multiply(0.75, 2);
const totalAnimals = add(animals, otherAnimals);
const realTotalAnimals = divide(60, totalAnimals);
console.log(realTotalAnimals);
