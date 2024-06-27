// Solution 1 (for...in)
function comString(text) {
    const charMap = {};
    for (let char of text) {
        if (charMap[char]) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }
    let used;
    let num = 0;
    for (let char in charMap) {
        if (charMap[char] > num) {
            used = char;
            num = charMap[char];
        }
    }
    return used
}
console.log(comString("po"))

// Solution 2 (Object.entries)
function comString2(text) {
    const charMap = {};
    for (let char of text) {
        if (charMap[char]) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }
    let used;
    let num = 0;
    for (const [key, value] of Object.entries(charMap)) {
        if (value > max) {
            num = value;
            used = key;
        }
    }
    return used
}
console.log(comString2("po"))

// Solution 3 (Object => Array)
