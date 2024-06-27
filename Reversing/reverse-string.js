//Solution1
function reverseString(word) {
    let temp = "";
    for (let i = word.length; i > 0; i--) {
        temp += word[i-1]
    }
    return temp
}

console.log(reverseString("Hello"));


//Solution 2
function reverse(str) {
    let reversed = '';
    
    for (let char of str) {
        reversed = char + reversed;
    }
    
    return reversed;
}

console.log(reverse('CodingMoney'));


//Solution 3

function reverseStr(string) {
    const strToArray = str.split("");
    strToArray.reverse();
    return strToArray.join("")

}

//Solution 3 Oneliner

function reverseStr2(string) {
    return string.split("").reverse().join("")
}