/******* VALUES AND VARIABLES
let js = 'amazing';
//if(js === 'amazing') alert('JavaScript is FUN!');
console.log(40 + 8 + 23 - 10);

console.log("Fábio");
console.log(23);

let firstName = "Matilda";
let first = 'Fábio';


//camelCase ou snake_case são permitidos
let firstName = "Matilda";
let first = 'Fábio';
let firstNamePerson
let first_name_person;
//dolar sign também é permitido
let $function = 22;

//proibido esse tipo de convenção de nome de variáveis
let 4years = 3;
let Jonas&Matilda;

//não usar algumas palavras que já são reservadas para a linguagem
//(convenção) não devemos começar variáveis com letras maíusculas

//palavras totalmente em uppercase são reservadas para constantes
let PI = 3.1415;

let person = "Fábio";
let PI = 3.1415;

let myFirstJob = 'Apps Developer';
let myCurrentJob = 'Apps Developer';

console.log(firstName);
console.log(firstName);
console.log(myFirstJob);
*/

/******** Data Types
 * There are 7 primitive data types: string, number, bigint, boolean, null, undefined, and symbol.
 

let JavaScriptisFun = true;
// console.log(JavaScriptisFun);

// console.log(typeof(true));
console.log(typeof(JavaScriptisFun));
// console.log(typeof(23));
// console.log(typeof('Fábio'));

 JavaScriptisFun = 'YES!'
console.log(typeof(JavaScriptisFun));

let year;
console.log(year);
console.log(typeof(year));
year = 1998;
console.log(year);
console.log(typeof(year));

//bug not corrected because of legacy code.
console.log(typeof(null));
*/


/******** Let, Cons and Var Declaration
 * By default, use const always. Only use let when you are really sure that variable
 * needs to change at some point in the future.
 * Changing variables introduces a potential to create bugs.
 * var should be completely avoided
 * 
let age = 30;
age = 31;

//impossible to reassign value
const birthYear = 1998;
// birthYear = 1999;

//missing initial declaration
//const job;

//var is the old way of defining variables prior to ES6, same as let.
var job = 'programer';
console.log(job);
job = 'teacher';
console.log(job);

//we didn't use let nor const nor var to declare this in this case variable, but it creates a property in global escope.
lastName = 'Rosa';
console.log(lastName);
//always declare a variable.
* */

/********  Basic Operations
//Math operators
const now = 2037;
const ageFabio = now - 1998;
const ageSarah = now - 2020;
//log multiple values
console.log(ageFabio, ageSarah);

//log different values on the same log
// 2**3 = 2^3;
console.log(ageFabio * 2, ageFabio / 10, 2 ** 3);

//concatenate strings:
const firstName = 'Fabio';
const Lastname = 'da Rosa';
console.log(firstName + Lastname);
//concatenate with space
console.log(firstName + " " + Lastname);

//Assignment operators
let x = 10 + 5; //x = 15 based on precedence
console.log(x);
x += 10; // x = x + 10
x *= 4; // x = x * 4;
x++;
x--;
x--;
console.log(x);

//Comparison operators
console.log(ageFabio > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log("isFullAge: ", isFullAge);

console.log("now - 1991 > now - 2018", now - 1991 > now - 2018);
*/

/******** Operators precedence
 * mdn operators precedence
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

const now = 2037;
const ageFabio = now - 1998;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);
console.log(25 - 10 - 5);
    
//assingment is executed last, because of precedence
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageFabio + ageSarah) / 2;
console.log(ageFabio, ageSarah, averageAge);
*/

/******** Strings and Template Literals
 * 
 * 
const firstName = "Fábio";
const job = "App Developer";
const birthYear = 1998;
const year = 2037;

const fabio = "I'm " + firstName + ', a ' + (year - birthYear) + " years old " + job + "!";
console.log(fabio);

//literal - template string always use backsticks ``
const fabioNew = `I'm ${firstName}, a ${(year - birthYear)} years old ${job}!`;
console.log(fabioNew);

//we can write any regular string with backsticks
console.log('any string!');

//multiline string before ESXi
console.log('String with \n\
multiple \n\
lines');
//multiline is easier with backsticks
console.log(`String
Multiple
Lines`);
*/

/******** Taking Decisions: if / else Statements
 * 

const age = 16;

//control structure
if(age >= 18)
{
    console.log(`People CAN start driving license 😃
    🚗`);
} 
else
{
    const yearLeft = 18 - age;
    console.log(`People is too young. Wait another ${yearLeft} years! :D`)
}

const birthYear = 1991;
let century;

if(birthYear <= 200) 
{
    century = 20;
} 
else {
    century = 21;
}
console.log(century);
* /


/******** Type Conversion and Coercion
 * Type Conversion -> Manually convert from one type to another.
 * Type Coercion -> JavaScript Hiddenly converts automatically for us.
 * 
 * 
// Type conversion
    //String 199118, years is a string in this case
    const inputYear = '1991';
    console.log(inputYear + 18);

    console.log(Number(inputYear)+18);

    //Convert something impossible to convert results in NaN (Not a Number)
    console.log(Number('Fábio'));
    //NaN is a number, impossible to represent.
    console.log(typeof NaN);

    console.log(String(23));

    //We cannot convert something to undefinedn or NaN

// Type Coercion
    // Transform in a string automatically.
    console.log('I am ' + 24 + 'Year Old');
    // Type coercion to numbers
    console.log('23' - '18' - 3);
    //division as number again
    console.log('23' / '2');
    //converted to numbers if we use decision-making statements
    console.log('23' > '18');
    // Only if we use plus, we concatenate as strings. BUUUG
    console.log('23' + '18' + 3);    

    let n = '1' + 1; // '11'
    n = n - 1; // 11 - 1 = 10
    console.log(n); // = 10
*/

/******** Truthy and Falsy Values
 * Values that are not initially false, but they will become when converted to a boolean. Every other value will become true value, so called truthy values.
 * Not used in practice, only for knowledge
 * 5 falsy values: 0, '', undefined, null, NaN;
 * 
 * 
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Fábio'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money)
{
    console.log("Don't spend it all ;)");
}
else
{
    console.log('You should get a job!')
}

//test if something exist or not, using undefined.
let height;
if(height)
{
    console.log("yay, height is defined!");
}
else
{
    console.log("height is UNDEFINED");
}
*/

/******** Equality Operators
 * 
 * 
const age = '18';
if(age === 18) console.log("You just became an adult!");
//triple equal operator doesn't perform type coercion.
if(age == 18) console.log("You just became an adult!");

//prompt get value from user, but receive it as a string.
const favourite = Number(prompt("What's your favorite number?"));
console.log(typeof(favourite));
console.log(favourite);

if(favourite === 23) console.log("Cool! 23 is an amazing number!");
else if(favourite === 7) console.log(`7 is a cool number!`);
else if(favourite === 9) console.log(`9 is a cool number!`);
else console.log(`number is not 23 or 7 or 9`);

//stric version with two equals
if(favourite !== 23) console.log("Why not 23?");
*/

/******** Boolean Logic/Logic Operators
 *  NOT operator has proceedings over the AND/OR operators.
 * 
const hasDriversLicense = true; // A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(hasDriversLicense && !hasGoodVision);

// if(hasDriversLicense && hasGoodVision) console.log("Sarah is able to drive!");
// else console.log("Someone else should drive!");

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired) console.log("Sarah is able to drive!");
else console.log("Someone else should drive!");
*/

/******** Switch Statement
 * 
 * 

const day = 'tuesday';

//used for equality, not comparison.
switch(day)
{
    case 'monday': // day == 'monday'
        console.log('Plan course Structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Plan course Structure');
        break;
    //trick to have two cases doing the same thing
    case 'wednesday':
    case 'thursday':
        console.log('Write code exmaples');
        break;
    case 'friday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day');
        break;
}

//version with if-else
if(day === 'monday')
{
    console.log('Plan course Structure');
    console.log('Go to coding meetup');
}
else if(day === 'tuesday')
{
    console.log('Plan course Structure');
}
else if(day === 'wednesday' || day === 'thursday')
{
    console.log('Write code exmaples');
}
else if(day == 'friday' || day === 'friday')
{
    console.log('Enjoy the weekend');
}
else
{
    console.log('Not a valid day');
}
*/

/******** Statements and Expressions
 * Statements -> full sentences that translate our actions.
 * Expressions -> produces values.
 * 

//${2037 - 1991} expression
console.log (`I'm ${2037 - 1991}`)
*/

/******** Conditional Operator - Ternary Operator 
 * is an expression.
 * */
const age = 19;
age >= 18 ? console.log('You are an adult!') : console.log("You are an adolescent!");

const check = age >= 18 ? true : false;
console.log(check);

console.log(`I like to drink ${age >= 18 ? 'Wine' : 'Water'}`);