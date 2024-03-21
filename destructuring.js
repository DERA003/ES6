// dextructuring object
let personalInfo = {
    firstName: "Chidera",
    lastName: "Umejuru",
    Age: 30,
    PassWord:123456,
    City: "Portharcourt"
}

const {Age,City} = personalInfo
console.log(`${Age}
${City}`);

let details = {
    "id": 1,
    "first_name": "Johnath",
    "last_name": "Bounde",
    "email": "jbounde0@github.io",
    "gender": "Female"
}
const {gender, id} = details
console.log(`${gender} ${id}`);

// destructuring array
const [Country, state, localgovt] = ["Nigeria","RiversState","Onelga"]

console.log(state);