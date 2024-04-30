/**Write a program that takes a positive integer from user &
display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */

var number = 39.5;
document.write(`<h2>Original number ${number}` + '<br>');
var value = Math.round(number);
document.write(`<h2>Round value is ${value}` + '<br>');
var valueB = Math.floor(number)
document.write(`<h2>Floor value is ${valueB} round down the value` + '<br>');
var valueC = Math.ceil(number)
document.write(`<h2>Ceil value is ${valueC}` + '<br>');

document.write('<br>')
document.write('<br>')
document.write('<br>')
/**Write a program that takes a negative floating point
number from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */

var number = -2.673;
document.write(`<h2>Original number ${number}` + '<br>');
var value = Math.round(number);
document.write(`<h2>Round value is ${value}` + '<br>');
var valueB = Math.floor(number)
document.write(`<h2>Floor value is ${valueB} ` + '<br>');
var valueC = Math.ceil(number)
document.write(`<h2>Ceil value is ${valueC}` + '<br>' + '<br>');

/**Write a program that displays the absolute value of a
number.
E.g. absolute value of -4 is 4 & absolute value of 5 is 5 */

var number = -4;
// var number2 = 5
var abs = Math.abs(number);
document.write(`The absoulte value of -4 is ${abs}`);


/**Write a program that simulates a dice using random()
method of JS Math class. Display the value of dice in your
browser.: */
let diceNum = Math.floor(Math.random() * 6) + 1;
document.write(`<h2>Random dice value is : ${diceNum}`);


/**Write a program that simulates a coin toss using random()
method of JS Math class. Display the value of coin in your
browser */
let Random = Math.random();
let convert = Math.round(Random) + 1;

if (convert == 2) {
    document.write('<h1>Head');
} else {
    document.write("<h1>Tail");
};
/**Write a program that shows a random number between 1
and 100 in your browser. */

let num3 = Math.floor(Math.random() * 100);
document.write(`<h2>Random numbers b/w 1 - 100: ${num3}`);

/**Write a program that asks the user about his weight. Parse
the user input and display his weight in your browser.
Possible user inputs can be: */


let userWeight = prompt("Enter your weight");
Math.round(alert(`The weight of user is ${parseInt(userWeight)} kg `));

/**Write a program that stores a random secret number from
1 to 10 in a variable. Ask the user to input a number
between 1 and 10. If the user input equals the secret
number, congratulate the user. */

let secretNum = Math.floor((Math.random() * 9)) + 2;
let userGuess = parseInt(prompt("Enter your number"));
if (secretNum == userGuess) {
    alert(`You win ${secretNum} = ${userGuess}`)
} else {
    alert(`Better luck next time ${userGuess} != ${secretNum}`)
}
