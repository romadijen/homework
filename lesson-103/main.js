// 1

// const user = {
//     name: 'Roman',
//     age: 20,
//     hairColor: 'brown',
//     height: 180,
//     eyeColor: 'blue',
//     sayHello(name) {
//         console.log(`Hello ${name}`)
//     }
// }

// console.log(user)
// user.sayHello('Alex')

// ============================================================

// 3

const users = [
    {
        name: 'Alex',
        age: 20,
        isAdmin: true
    },
    {
        name: 'Jake',
        age: 23,
        isAdmin: false
    },
    {
        name: 'Tom',
        age: 21,
        isAdmin: true
    },
    {
        name: 'Max',
        age: 24,
        isAdmin: false
    }
]

const regularUsersCount = 0

for (let i = 0; i<users.length; i++) {
    if (users[i].isAdmin === false) {
        regularUsersCount++;
    }
}

console.log(regularUsersCount)




