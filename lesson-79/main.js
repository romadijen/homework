const age = 20

let result = null

if (age >= 18) {
    result = 'Вы совершеннолетний'
    console.log(result)
} else {
    result = 'Вам еще нет 18'
    console.log(result)
}

age >= 18 ? console.log('Вы совершеннолетний') : console.log('Вам еще нет 18')