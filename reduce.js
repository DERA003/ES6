// const num = [5,6,7,8,1,23,45,34,67,77,34,66]

// function sumAll(array){
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//        sum = sum + array[i]
        
//     }
//     return sum
// }

// // console.log(sumAll(num));

// const addAll = num.reduce((acc,curVal)=>acc + curVal,0)
// // console.log(addAll);

// const findMax = num.reduce((max,curVal) => (curVal > max ?curVal:max))
 
// console.log(findMax);

// function getMax(array) {
//     let max = 0
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] > max){
//             max = array[i]
//         }
        
//     }
//     return max
    
// }
// // console.log(getMax(num));

// const numArr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// const flatArr = numArr.reduce((acc,curVal)=>acc.concat(curVal),[])
// console.log(flatArr);

// function oneArr(arr) {
//     let acc = []
//     for (let i = 0; i < arr.length; i++) {
//         let add = arr[i]
//       return acc.concat(add)
        
//     }
    
// }
// console.log(oneArr(numArr));

// const fruits = ["banana", "orange", "pineapple", "apple","orange","orange","banana","banana"]

// const totalFruits = fruits.reduce((acc,eachFruit) => {
//     acc[eachFruit] = (acc[eachFruit] || 0) + 1;
//     // return acc;
// },{})
// // console.log(totalFruits);

const colors = ["pink", "blue","green","pink","green","pink"]
const countColors = colors.reduce((acc,curVal) =>{
    acc[curVal] = (acc[curVal] || 0) + 1
    return acc
}, {})
console.log(countColors);


// const num2 = [1,2,3,4,5,6,3,2,1,5,4,5,6,7,7]
// const removeDup = num2.reduce((acc,curVal)=>{
//     if(!acc.includes(curVal)){
//           acc.push(curVal)
//     }
//     return acc
   
// },[])
// console.log(removeDup);