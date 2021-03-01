// console.log('hi')
//
// const student = {
//     name: "Bob",
//     age: 23,
//     friends: ['Alex', 'Valera', 'John'],
//     isStudent: true
// }
//
// const newStudent = student
// // newStudent.name = 'Helga'
// // console.log(student.name)
//
//
// const copyStudent = {...student}
// copyStudent.name = "Mike"
// console.log(copyStudent)
// console.log(student)
//
// student.friends.push('Helga')
// console.log(student.friends)
// console.log(copyStudent.friends)
//
// const deepCopyStudent = {...student, friends: [...student.friends]}
// console.log(deepCopyStudent)
// deepCopyStudent.name = "Donald"
// deepCopyStudent.friends.pop()
// console.log(deepCopyStudent)
//
// // map
//
// const students = [
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85
//     },
//     {
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
//     {
//         name: "John",
//         age: 19,
//         isMarried: false,
//         scores: 100
//     }
// ];
//
//
// const studentsName = (students.map(student => {
//     return student.name
// }))
// console.log(studentsName)
//
// function sum(c, d) {
//     return c + d
// }
//
// sum(2, 4)
//
// console.log(students.map(st => ({...st, scores: st.scores + 10})))
//
// console.log(students.map(item => {
//     if (item.name === "Bob" || item.name === "Alex") {
//         return result = {...item, scores: item.scores + 10}
//     }
//     return item
// }))


const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

const test = () => 'test'

function itMap(arr, callbackFn) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = callbackFn(arr[i])
    }
    return newArr
}
// function itMap(arr, callbackFn) {
//     const newArr = []
//     arr.forEach((item, i ) => {
//         newArr[i] = callbackFn(item[i])
//     })
//     return newArr
// }

const incAge = st => ({...st, age: st.age + 1})

const newSts = itMap(students, incAge)
console.log(newSts === students)
students.map(st => ({...st, age: st.age + 1}))

students.map(incAge)


function itFilter(arr, callbackFn) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (callbackFn(arr[i]) === true){
            newArr.push(arr[i])
        }
    }
    return newArr
}

// function isMarried(st) {
//     if (st.isMarried === true){
//         return true
//     } else {
//         return false
//     }
// }

const isMarried= st => st.isMarried

console.log(itFilter(students, st => st.isMarried))


function itFind(arr, callbackFn){
    for (let i = 0; i < arr.length; i++) {
        if (callbackFn(arr[i]) === true){
            return arr[i]
        }
    }
}

console.log(students.find(st => st.name === "Alex"))
const names = students.map(st => st.name)

console.log(names.includes("Alex"))




















