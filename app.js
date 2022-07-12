//Function #1: Array Slice

const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];

let modifiedFoods = [];

function slice(array, idx1, idx2) {
    for (let index = idx1; index < idx2; index++) {
        modifiedFoods.push(array[index]);
    }
}

slice(foods, 1, foods.length - 1);
console.log(modifiedFoods);

//Function #2: Array Splice

modifiedFoods = [...foods];
modifiedFoods.splice(3, 0, 'noodles', 'icecream');
console.log(modifiedFoods);

//Function #3: Filter

const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
let modifiedArray = []

function isEven(array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 == 0)
            modifiedArray.push(array[index]);
    }
}

isEven(numberArray);
console.log(modifiedArray);

//using filter() method

let evenNum = (num) => !(num % 2)

let array = numberArray.filter(evenNum);
console.log(array);

modifiedArray = []

function isPrime(array) {
    for (let index = 0; index < array.length; index++) {
        let cnt = 0;
        for (let num = 2; num <= Math.sqrt(array[index]); num++) {
            if (array[index] % num == 0) {
                cnt = 1;
                break;
            }
        }
        if (cnt != 1)
            modifiedArray.push(array[index]);
    }
}

isPrime(numberArray);
console.log(modifiedArray);

//using filter() method

let primeCheck = (num) => {
    let cnt = 0;
    for (let idx = 2; idx <= Math.sqrt(num); idx++) {
        if (num % idx == 0) {
            cnt = 1;
            break;
        }
    }
    if (cnt != 1)
        return num;
}

let prime = numberArray.filter(primeCheck);
console.log(prime);


//Function #4: Reject

modifiedArray = []

function nonPrime(array) {
    for (let index = 0; index < array.length; index++) {
        let cnt = 0;
        for (let num = 2; num <= Math.sqrt(array[index]); num++) {
            if (array[index] % num == 0) {
                cnt = 1;
                break;
            }
        }
        if (cnt == 1)
            modifiedArray.push(array[index]);
    }
}

nonPrime(numberArray);
console.log(modifiedArray);

//Function #5: Lambda

modifiedArray = [];
let is_Even = (num) => !(num % 2);

modifiedArray = numberArray.filter(is_Even);

console.log(modifiedArray);

//Function #6: Map

const myArray = [11, 34, 20, 5, 53, 16];
let findSquareOfNumbers = (num) => num * num;

let modifiedMyArray = myArray.map(findSquareOfNumbers);

console.log(modifiedMyArray);

//Function #7: Reduce

const myArr = [2, 3, 5, 10];
let pro = 1;
let multiply = (pro, ele) => pro * ele;

let product = myArr.reduce(multiply);
console.log("product = " + product);


//Implementing Map With Reduce

modifiedMyArray = [];

myArray.reduce((ele) => {
    return ele * ele;
}, modifiedArray);

console.log(modifiedArray);