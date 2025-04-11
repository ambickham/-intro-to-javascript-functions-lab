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

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

// 1. Define the function, and it will take name and domain parameters.
/* Issue Fixed 
1) Added equal between generateEmail = (name, domain)
2) Remove ('name', 'domain') to (name, domain)
3) added ; end of line 85 and 86 */

const generateEmail = (name, domain) => {
    return `${name}@${domain}`;  
};

// 2. Call the function
/* Issue Fixed
1) Added a call function, needed this second step since I was only defining it. 
2) Repalced the reference name and domain with the specific values. 
3) Created a variable const email, which is holding the result of the function call which I have created. */
const email = generateEmail('johnsmith', 'example.com');
console.log(email);
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

