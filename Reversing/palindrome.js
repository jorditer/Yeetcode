// Solution 1 
function isPalindrome(word) {
    let reversed = word.split("").reverse().join("");
    if (reversed === word) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("kayak"));

// Solution 2 .forEach()
function isPalindrome2(word) {
    const chars = word.split('');
    return chars.every((char, index) => {
        return char === chars[chars.length - 1 - index];
    });
}

console.log(isPalindrome2("kayak"));