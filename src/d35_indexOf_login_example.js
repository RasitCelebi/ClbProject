//The indexOf() method returns the position of the first occurrence of a value in a string.
//The indexOf() method returns -1 if the value is not found.
//The indexOf() method is case sensitive.


// write a user login control function
// password cannot be less than 8 characters
// password must not contain space (" ")
// password must not contain the username
function isValidPassword (password, userName){

    if(password.length <8) return false;
    if(password.indexOf(" ")!== -1 ) return false;
    if(password.indexOf(userName)!==-1)  return false;
    return true;

}

function controlLogin (password, userName){

    if(password.length <8 || (password.indexOf(" ")!== -1 ) || (password.indexOf(userName)!==-1) ){
        return false;
    } 
    
    return true;
}

function isEntryCorrect (password, userName){


    const tooShort = password.length <8 ;
    const containSpace = password.indexOf(" ")!== -1;
    const containUsername = password.indexOf(userName)!==-1

    if( tooShort || containSpace || containUsername ) return false;

    return true;
}

function isLoginSuccessful (password, userName){


    const tooShort = password.length <8 ;
    const containSpace = password.indexOf(" ")!== -1;
    const containUsername = password.indexOf(userName)!==-1;

    return !tooShort && !containSpace && !containUsername;
}
