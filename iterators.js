console.log("Funcations As Parameters\n")
const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
    let checkA = val + 2
    let checkB = func(val)
    if(checkA === checkB){
      return func(val)
    }
  }
  
  console.log(checkConsistentOutput(addTwo,4));

  console.log("____________________________\n")
  console.log(".forEach() Method\n")

  // .forEach() on an array returns undefined.

  const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

/*
const groceries = ['brown sugar', 'salt','cranberries', 'walnuts']

groceries.forEach(function(groceryItem){
  console.log(' - ' + groceryItem)

(arraow function) - 
groceries.forEach(groceryItem => console.log(groceryItem))

})

• groceries.forEach() calls the forEach method on groceries array
• .forEach() takes an argumemt of callback function 
• .forEach() loops through the array and executes the callback function for each element - during execution the current element is passed as an argument to the callback function
• the return value for .forEach() will always be undefined

*/

fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`))

/*
(standard for..in)

for (const i in fruits) {
  console.log(fruits[i])
}

*/


console.log("____________________________\n")
console.log(".map() Method\n")

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animal => {
  /*
    steps 1: create a variable -> binding then variable name
    step 2: assign array.maps as value
    step 3:  create a function by passing in iterator 
  */
  return animal[0] // loops through and returns the 0 index in animals array
})

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(number =>{
  return number / 100
})

console.log("____________________________\n")
console.log(".filter() Method\n")
/* .filter() returns a new array of fitered elements 
  • should return true or false 

*/
const randomNumbers = [375, 200, 3.14, 7, 13, 852];


// Call .filter() on randomNumbers below
const smallNumbers2 = randomNumbers.filter(num => {
  return num < 250 // .length is not needed when filter numbers
})

console.log(smallNumbers2)


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word =>{
  return word.length > 7 // when filtering strings a .length is needed 
})

console.log(longFavoriteWords)

console.log("____________________________\n")
console.log(".findIndex() Method\n")
/*
  we use the .findindex() method to find the location of an element in an array - returns the index of the firs element that evaluates to true 

*/

const animals2 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals2.findIndex(animal => {
  return animal === "elephant" ? true : false;
  //if statements (? true : false) isn't required 
})

console.log(`elephant is idex: ${foundAnimal}!`)

const startsWithS = animals2.findIndex(animal => {
  return animal[0] === "s" ? true : false
})

console.log(`${startsWithS} animals start with S!`)

console.log("____________________________\n")
console.log(".reduce() Method\n")
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

console.log("____________________________\n")
console.log(".some() Method\n")

//  .some() on an array returns a boolean value based on the condition in the callback function.

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter((word) => {return word.length > 5});


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => {return word.length > 5}));
