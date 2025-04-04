// 1

// function showNames(name) {
//     return 'Hello ' + name
// }

// const result = showNames('Roma')
// console.log(result)

// ===============================================================================

// 2

// const numbers = [4, 7, 9, 13, 17, 19]

// function checkNumbers(array, item) {

//     for (let i = 0; i < array.length; i++) {

//         if (item > 10 & array[i]===item) {

//             return item
//         }
//     }

//     return null

// }

// console.log(checkNumbers(numbers, 17))

// ================================================================================

// 3

function calculator (firstNumber, secondNumber, sign) {
    if (sign == 'minus') {
        return firstNumber - secondNumber
    } else if (sign == 'plus') {
        return firstNumber + secondNumber
    } else if (sign == 'multiply') {
        return firstNumber * secondNumber
    } else if (sign == 'divide') {
        return firstNumber / secondNumber
    }
    return null
}
const result = calculator(10,5,'divide')
console.log(result)
