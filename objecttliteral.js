function personalData(gender,age,city){
  let newData ={gender,age,city}
 
}
personalData = (`femake`, 30, `houston`)
console.log(newData)

function dateFashion(you,date) {
      if(you >=8 || date >=8){
          return 2
      }
      if (you <=2 || date <= 2) {
          return 0
      }
      else{
          return 1
      }
    }