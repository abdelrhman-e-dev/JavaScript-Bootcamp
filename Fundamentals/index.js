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
if(shouldDo) console.log('you are able to do ');
else console.log('you are not able to do ');



