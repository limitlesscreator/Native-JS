console.log('hi')

const student = {
    name: "Bob",
    age: 23,
    friends: ['Alex', 'Valera', 'John'],
    isStudent: true
}

const newStudent = student
// newStudent.name = 'Helga'
// console.log(student.name)


const copyStudent = {...student}
copyStudent.name = "Mike"
console.log(copyStudent)
console.log(student)

student.friends.push('Helga')
console.log(student.friends)
console.log(copyStudent.friends)

const deepCopyStudent = {...student, friends: [...student.friends]}
console.log(deepCopyStudent)
deepCopyStudent.name = "Donald"
deepCopyStudent.friends.pop()
console.log(deepCopyStudent)

// map

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


const studentsName = (students.map(student => {
    return student.name
}))
console.log(studentsName)

function sum(c, d) {
    return c + d
}

sum(2, 4)

console.log(students.map(st => ({...st, scores: st.scores + 10})))

console.log(students.map(item => {
    if (item.name === "Bob" || item.name === "Alex") {
        return result = {...item, scores: item.scores + 10}
    }
    return item
}))