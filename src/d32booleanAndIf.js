let a=3 ,b=2, c=3;

c= (a>b) ? a+b : a-b
console.log(c);

c= (a<b) ? a+b : a-b
console.log(c);

// output 
//5
//1
let msg; 
if(false){
    msg = ("This is a true message")
}else{
    msg = ("This is a false message")
}
console.log(msg);
// output : false


let name = "rasit";
if(name){
    console.log("variable of name is a full")
}else{
    console.log("variable of name is a empty")
};
console.log("Code is here");
// output : full


name = null;
// or name ="" nume=undefined;
if(name){
    console.log("variable of name is a full")
}else{
    console.log("variable of name is a empty")
}
// output : empty


let age = 0;
if(age){
    console.log("variable of name is a full")
}else{
    console.log("variable of name is a empty")
};
// output : empty


age = 1;
if(age){
    console.log("variable of name is a full")
}else{
    console.log("variable of name is a empty")
}
// output : full


age = 5;
if(age){
    console.log("variable of name is a full")
}else{
    console.log("variable of name is a empty")
}
// output : full
