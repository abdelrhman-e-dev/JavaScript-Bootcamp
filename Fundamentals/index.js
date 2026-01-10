const age = 18
if (age === 18) console.log('you just became an adult');
if (age === '18')
  console.log('you just became an adult');
else
  console.log('you are not adult yet');

/**
= assign value 
== compare value  '18' == 18 -> true 
=== compare value and data type  '18' === 18 -> false
*/

console.log("--------------------------------------");

/***************************************************/
// Boolean logic
/**
  AND:
    true - true   -> true
    false - true  -> false
    false - false  -> false
  OR:
    true - true   -> true
    false - true  -> true
    false - false  -> false
*/
// Example:
const val1 = true
const val2 = false
console.log(val1 && val2); // false 
console.log(val1 || val2); // true
console.log(!val2); // true
const shouldDo = val1 && val2
if (shouldDo) console.log('you are able to do ');
else console.log('you are not able to do ');

console.log("--------------------------------------");
/***************************************************/

// Switch statement
const day = 'monday'
switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
    default:
    console.log('Not a valid day!');
}

console.log("--------------------------------------");
/***************************************************/
// Ternary operator
const personAge = 32;
personAge >= 18 ? console.log('you are allowed to enter') : console.log('you are not allowed to enter');

const bill = 275;
const tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
