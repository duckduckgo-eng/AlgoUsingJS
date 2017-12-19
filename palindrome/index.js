// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//
//
// for(let pal=0;pal<=str.length-1;pal++){
//   if(str[pal] == str[str.length-pal-1]){
//       return true
//   }
//   else {
//     return false
//   }
// }
//
// }

function palindrome(str) {
return  str.split('').every((char,i)=>{
    return char === str[str.length-i-1]
  }
  )
}

module.exports = palindrome;
