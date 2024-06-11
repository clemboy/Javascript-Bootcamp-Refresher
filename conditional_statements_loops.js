//*SECTION 3---Conditional Statements---

//*---Exercise 1: Temperature Check---

//*1---Write a code using if else statements

let temperature = 21;

if (temperature < 0) {
    console.log("I'ts freezing");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("I'ts cold");

} else if (temperature >= 16 && temperature <= 25) {
    console.log("I'ts mild");
} else if (temperature > 25) {
    console.log("Its warm");
};


//*2---Re-write the code using switch statements

function checkTemp (temperature_) {

switch(true) {
case (temperature_ < 0): 
    console.log("I'ts freezing");
    break;

case (temperature_ >= 0 && temperature_ <= 15):
    console.log("I'ts cold");
    break;

case (temperature_ >= 16 && temperature_ <= 25):
    console.log("I'ts mild");
    break;

default:
    console.log("Its warm");
}
};

checkTemp(-5);
checkTemp(10);
checkTemp(20);
checkTemp(30);



//*---Exercise 2: Divisibility Check---

    //*1---Write a code using if else statements to check if a number is divisible by 2, 3, or both

    function checkDivi(number) {
        if (number % 2 === 0 && number % 3 === 0) {
            console.log(number + " divisible by both 2 and 3");
        } else if (number % 2 === 0) {
            console.log(number + " divisible by 2");
        } else if (number % 3 === 0) {
            console.log(number + " divisible by 3");
        } else {
            console.log(number + " not divisible by 2 or 3");
        }
    };

    checkDivi(12);
    checkDivi(10);
    checkDivi(9);
    checkDivi(13);

    //*2---Re-write the code using switch statements

    function checkDivi(number) {
        switch(true) {
          case  (number % 2 === 0 && number % 3 === 0):
            console.log(number + " divisible by both 2 and 3");
            break;

          case  (number % 2 === 0):
            console.log(number + " divisible by 2");
            break;

          case  (number % 3 === 0): 
            console.log(number + " divisible by 3");
            break;

          default:
            console.log(number + " not divisible by 2 or 3");
        }
    };

    checkDivi(12);
    checkDivi(10);
    checkDivi(9);
    checkDivi(13);

//*---Exercise 3: For loops---

   //*1---Print numbers from 1 to 10

for (let i = 1; i < 11; i++) {
    console.log(i)
};
    //*2---Print all even numbers between 1 and 20

for (let i = 1; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }  
};
    //*3---Calculate the sum of all numbers from 1 to 100 and print the result. Hint: ‘+=’

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("The total sum is:",sum);

    //*4---const numbers = [1, 2, 3, 4, 5]. Given the array of numbers, print each element to the console.

const numbers = [1, 2, 3, 4, 5];
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i])
    };

    //*5---const numbers = [3, 7, 2, 5, 10, 6]. Given the array of numbers, find and print the largest number.

const numberS = [3, 7, 2, 5, 10, 6];
let maxNumber = numberS[0];

for (let i = 1; i < numberS.length; i++) {
    if (numberS[i] > maxNumber) {
        maxNumber = numberS[i];
         }
    }

    console.log("Large number is:",maxNumber);


//*---Exercise 4: While loops---

    //*1---Print numbers from 1 to 10.

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
};

    //*2---Print all even numbers between 1 and 20.

    let E = 1;
    while (E <= 20) {
        if (E % 2 === 0) {
            console.log(E);
        }
        E++;
    };

    //*3---Calculate the sum of all numbers from 1 to 100 and print the result.

let sumNum = 0;
let s = 1;
while (s <= 100) {
    sumNum += s;
    s++;
}
console.log("Sum is: " + sumNum);

    //*4---Print all multiples of 5 less than 50.

let mul = 1;
while (mul * 5 < 50) {
    console.log(mul * 5);
    mul++;
 };


//*---Exercise 5: Do While loops---

    //*1---Print numbers from 1 to 10.

let b = 1;
do {
    console.log(b);
    b++;
} while (b <= 10);

    //*2---Calculate the sum of all numbers from 1 to 100 and print the result.

let sumOf = 0;

let number = 1;
do {
    sumOf += number;
    number++;
} while (number <= 100);

console.log("The sum is: " + sumOf);

    //*3---Prompt the user to enter a number greater than 10. Keep asking until they enter a valid number.

let number_;
do {
    number_ = prompt("Please enter a number greater than 10:");
    number_ = parseInt(number_); 
} while (isNaN(number_) || number_ <= 10);

console.log("You entered: " + number_);

    //*4---Create a simple guessing game where the user must guess a number between 1 and 10. The game continues until the user guesses the correct number.


let randNum = Math.floor(Math.random() * 10) + 1;

let guess;
let attempts = 0;
    
do {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));
    attempts++;
    
    if (guess === randNum) {
            console.log("Congratulations! You guessed the correct number in " + attempts + " attempts.");
    } else {
            console.log("Sorry, that's incorrect.");
    }
} while (guess !== randNum);