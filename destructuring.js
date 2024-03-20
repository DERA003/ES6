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

// destructuring array
const [Country, state, localgovt] = ["Nigeria","RiversState","Onelga"]

console.log(state);