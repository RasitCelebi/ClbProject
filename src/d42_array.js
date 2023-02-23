let carBrands = ["Mercedes", "Audi","Bmw"];
console.log(carBrands);

// Output : 
/* Array(3)            (3) is size to array.
0: "Mercedes"           0 is a index.
1: "Audi"               1 is a index.
2: "Bmw"                2 is a index.
length: 3 */

console.log(carBrands.toString());

// Output :
// Mercedes,Audi,Bmw

console.log(carBrands[0]);   // Output: Mercedes      Comment: 0th index of the array is a Mercedes.

carBrands[2] = "Peugeot";    // 2nd index of the array is now Peugeot. Used to be Bmw.

carBrands[12] = "Honda";

console.log(carBrands);

// Output :     12th index identified. 9 values (11-3+1) between the 3rd and 11th index were passed as blank.
/* Array(13) ['Mercedes', 'Audi', 'Peugeot', empty × 9, 'Honda']
0: "Mercedes"
1: "Audi"
2: "Peugeot"
12: "Honda"
length: 13*/

console.log(carBrands.toString());

// Output : 
// Mercedes,Audi,Peugeot,,,,,,,,,,Honda

for(let elementOfArray of carBrands){
    console.log(elementOfArray);
}

//Output : 

/* Mercedes
 Audi
 Peugeot
 9 undefined
 Honda */


 // We use the diffrent types in same array. Example:

let arrayWithDifferentTypes = [1 , false, "flower" , 7];
 for(let elementOfArray of arrayWithDifferentTypes){
    let type = typeof(elementOfArray);
    console.log(arrayWithDifferentTypes.indexOf(elementOfArray) + ". index : " 
    + elementOfArray + " \t\t\tand type of this index : " + type);
 }

 // Output: 

/*  0. index : 1 			and type of this index : number
    1. index : false 			and type of this index : boolean
    2. index : flower 			and type of this index : string
    3. index : 7 			and type of this index : number
    */
