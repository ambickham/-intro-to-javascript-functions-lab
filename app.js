/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:


const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
 -- Exercise demo */


// Select + Command / to comment out a large block of code 

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/


// const isAdult = (age) => {
//     if (age >= 21) {
//         return "Adult";
//     } else { 
//      return "Minor, Not of legal drinking age."; 
//     };
// }
//     console.log('Exercise 2 Result:', isAdult(21));
//     console.log('Exercise 2 Result:', isAdult(18));
// Complete, java printed successfully! 

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

// const isCharAVowel = (char) => {
//     return ['a', 'e', 'i', 'o','u'].includes(char.toLowerCase());
// };
// console.log('Exercise 3 Result:', isCharAVowel("a"));

/*------------------------------------------------
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

// Complete the exercise in the space below:
1. Define the function, and it will take name and domain parameters.
 /* Issue Fixed : 1) Added equal between generateEmail = (name, domain) 2) Remove ('name', 'domain') to (name, domain) 3) added ; end of line 85 and 86 */

// const generateEmail = (name, domain) => {
//     return `${name}@${domain}`;  
// };

// // 2. Call the function
// /* Issue Fixed: 1) Added a call function, needed this second step since I was only defining it. 2) Repalced the reference name and domain with the specific values. 3) Created a variable const email, which is holding the result of the function call which I have created. */

// const email = generateEmail('johnsmith', 'example.com');
// console.log(email);
// console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));


/*
-----------------------------
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/
//1) Defining Function 
// const greetUser = (user,timeOfDay) => {
//     return `Good ${timeOfDay}, ${user}`
//     }
// //  2) Calling function 
// const mornGreet = greetUser('Meeta', 'morning');
// const aftGreet = greetUser('Meeta', 'afternoon');
// const nightGreet = greetUser('Meeta', 'night');

// // 3) Printing Funciton 
// console.log(mornGreet);
// console.log(aftGreet);
// console.log(nightGreet);
// console.log('Exercise 5 Result:', greetUser("Meeta", "morning"));

// /* Issues found and resolved: Need to pay attention to th back ticks, especially in the #1 Definging a function. Remeber to call a function. Remember to console.log using the new variable that is set. 

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

// Complete the exercise in the space below:
// */

// const maxOfThree = (num1, num2, num3) => {
//     return Math.max(num1, num2, num3);
// };
// console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/
// Note: Great job on knowing to use key words bill and tip percentage, go me! 
// 1) Define function 
const calculateTip = (bill, tipPercent) => {
    return bill*(tipPercent)/100 // Issue here was the equation needs to be a mathematical equation, not a template literal that I originally used. 
}
// 2. Calling the Function (Don't forget to call the function, Here calling is to set what the bill is and the percent. Which I did, but I don't need the quotes.
const amountTip = calculateTip(50.00, 20);

//3. Consol log function 
console.log('Exercise 7 Result:', calculateTip(50, 20)); 

/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

//1 Define Function
// Error here was that, instead of setting C and and F in (Ct, c, f) the C and F are "scale"
//Yay the const format and characters are all in the correct position. 
const convertTemperature = (currentTemp, scale) => {
    if (scale === 'C') {
        return currentTemp * 9/5 + 32; // This will convert to F
    }   else if (scale === 'F') {
            return (currentTemp - 32) * 5/9; // Converts to C
    } else {
            return 'Invalid scale'
    }
}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));
// Issues corrected: Theres no ; after if or else if condition. Pay attention to spellings. 
