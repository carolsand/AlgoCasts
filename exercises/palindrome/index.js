// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let reversed = '';  //used to staore reversed string
    for(let char of str){
        reversed = char + reversed;
        console.log(reversed);
     }
        if(reversed === str){
            return true;
    }
}

module.exports = palindrome;
