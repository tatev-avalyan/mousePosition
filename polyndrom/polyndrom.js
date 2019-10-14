const str1 = 'tatev'
const str2 = 'abba'
const str3 = 'argentinamanitnegra'
const str4 = 'avalyan'
const str5 = 'madam'
let newString = []
let joined = ''

function reverseString(str) {
let reversed = ''
    for (let i = str.length - 1; i >= 0; --i){ 
        reversed += str[i]
    }

    return reversed
}

function isPolyndrom(str) {
    return str === reverseString(str)
}


console.log(str4)
console.warn(isPolyndrom(str4))
// console.warn(reverseString(str2))
// console.warn(reverseString(str3))
