function addNumbers() {
  let first = Number(document.getElementById("num1").value)
  let sec =  Number(document.getElementById("num2").value)

  if(isNaN(first) || isNaN(sec)){
    alert("please enter a valid number")
  }
  

  let total = first + sec
  let result = document.getElementById("result").textContent = `The result is: ` + total
  return result

  

}
