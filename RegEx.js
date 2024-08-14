const findStrInSentence = (str) => {
 let name = /Dera/
 console.log(name.test(str));
}

findStrInSentence("is Dera a girl")

const  findEndStart = (str) => {
    const newWord = /[abc]/
    console.log(newWord.test(str));
}
findEndStart("who is this?")

const checkNumber = (str) => {
    const numberCheck = /\d+/
    console.log(numberCheck.test(str));
}

checkNumber("hello 5 world")

const onlyNumber = (str) => {
    const num = /^\d+$/
    return num.test(str)
}
console.log(onlyNumber("123"))