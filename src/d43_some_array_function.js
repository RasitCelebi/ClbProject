let nameList = ["ahmet", "burak", "cansu"];

console.log(nameList.toString());

// Output :
// ahmet,burak,cansu                -->it puts ',' to between 2 index 

console.log(nameList.join(" ** "));

// Output :
// ahmet ** burak ** cansu               -->it puts what is written in the parameter, between 2 index 

let newSizeList = nameList.push("doğan");
console.log("new size list: " + newSizeList + " new list: " +  nameList.toString());

// Output :
// new size list: 4 new list: ahmet,burak,cansu,doğan     // it added new member to list and return new list size.

let deletedMember = nameList.pop();
console.log("deleted member " + deletedMember + " ------- new list: " +  nameList.toString());

// Output :
// deleted member doğan new list: ahmet,burak,cansu     // it deleted last member to list and return the value of deleted index.

let deletedFirstMember = nameList.shift();
console.log("deleted first member " + deletedFirstMember + " ------- new list: " +  nameList.toString());

// Output :
// deleted first member ahmet ------- new list: burak,cansu     // it deleted first member to list and return the value of deleted index.

let nextListSize = nameList.unshift("atalay");
console.log(" list size after insert " + nextListSize + " ------- new list: " +  nameList.toString());

// Output :
// list size after insert 3 ------- new list: atalay,burak,cansu     // it added first member to list and return the new size list.
