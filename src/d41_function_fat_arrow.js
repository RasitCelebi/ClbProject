// if my function has a line code and a parameter

function findBirth (age){
//Let's return the date of birth with just one line
return (2023-age);
}

console.log("Normal function : You were born in " + findBirth(17));

//We can write the same function as:

const findBirtWithFatArrow = age => (2023-age);

console.log("FatArrow function : You were born in " + findBirtWithFatArrow(17));

// Output: 
// Normal function : You were born in 2006
// FatArrow function : You were born in 2006   ---- If my function has one line of code and one parameter, i can write the code like this;

const calculateAgeTotals = (age1, age2) => (age1+ age2) ;

console.log(calculateAgeTotals(5,10));

// Output: 
// 15
// if my function has one line of code, i can write the code like this. Look, İ didn't write "return" 