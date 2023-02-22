function sayHi () {
    console.log("Hi. This is normal function.")
}

const sayHiVariable = function (){
    console.log("Hi. This is Variable Version Function.")
}

const fatArrow = () => {
    console.log("Hi. This is fatArrow Version Function.")
}

sayHi();
sayHiVariable();
fatArrow();

//Output: 
/* Hi. This is normal function.
Hi. This is Variable Version Function.
Hi. This is fatArrow Version Function. */

// if a function has not parametres, we can write the code arrow function as follows : 

const fatArrow2 = _ => {
    console.log("Hi. i have not a parametres. My name is fatArrow2 function")
}

const fatArrow3Parametres = (numberr) => {
    return numberr * numberr * numberr;
}

fatArrow2();
console.log(fatArrow3Parametres(3));

/* Output : 
Hi. i have not a parametres. My name is fatArrow2 function
27
 */
