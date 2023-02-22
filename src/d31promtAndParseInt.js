let userName = prompt("Please enter your age?");
console.log(userName +25);
//Output: 5525 User entered the 55value

let userNameType = typeof(userName);
console.log(userNameType);
if(userNameType=="String" || userNameType=="string" || userNameType=="STRING"){
    parseInt(userName);
    console.log(userName +25);
    // Output: 5525 .    ( Because, parseInt(username) didn't a variable )

    console.log("userName is a " + typeof(userName));
    //Output: string

    let intVariable = parseInt(userName);
    console.log(intVariable +25);
    // Output: Now parseInt(username) did a variable. This variable name is intVariable.

    console.log(typeof(intVariable));
    // Output: number. Perfect!
    
}
