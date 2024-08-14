const itemList = document.getElementById("item-list")


let items = []

function addItem(){
    let error = document.getElementById("error")
    const item_input = document.getElementById("item-input")
    const newItem =item_input.value.trim()

    if(newItem){
        error.innerHTML = ""
        items.push(newItem)
        item_input.value = ""
        displayItem()
    }
    else{
        error.innerHTML= "please enter an item"
        error.style.color = "red"
    }
   

}

function displayItem(){
    itemList.textContent = ""
    items.forEach((item,index) => {
        const li = document.createElement("li")
        const span = document.createElement("span")
        span.textContent = item
        
        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete"
        deleteButton.className = "delete"

        const editButton = document.createElement("button")
        editButton.textContent = "Edit"
        editButton.className = "edit"
      
        deleteButton.onclick = function(){
         items.splice(index, 1)
         displayItem()
        }

        const inputField = document.createElement("input")
        inputField.type = "text"
        inputField.value

        editButton.onclick= function(){
            

        }
         li.appendChild(span)
         li.appendChild(deleteButton)
         li.appendChild(editButton)
         itemList.appendChild(li)
    })
    
}