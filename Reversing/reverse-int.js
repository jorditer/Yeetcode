//Solution 1 (Doesn't work for negatives)
function reverseInt(num) {
    let out = 0;
    while (num >= 1) {
        out *= 10;
        out += Math.floor(num % 10);
        num /= 10;
    }
    return out
}

console.log(reverseInt(38656));

//Solution 2 (Also works for reverses)
function reverseInt2(num) {
    let out = 0;
    while (num >= 1) {
        out *= 10;
        out += Math.trunc(num % 10);
        num /= 10;
    }
    while (num <= -1) {
        out *= 10;
        out -= Math.trunc(num % 10);
        num /= 10;
    }
    return out
}

console.log(reverseInt2(-38656));

//Solution 3

function reverseInt3(num) {
    const reversed = num.toString().split("").reverse().join("")
    return Math.abs(parseInt(reversed))
}

console.log(reverseInt3(-38656));