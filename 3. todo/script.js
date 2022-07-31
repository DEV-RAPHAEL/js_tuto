const form = document.querySelector("form")
const input = document.querySelector("input")
const list = document.querySelector(".list")

form.addEventListener("submit", function(e){
e.preventDefault();
toDo();
input.value = ""
})
function toDo(){
    if(input.value === ''){
        alert('Please add a task')
    }
    else{
        const value = input.value
        const newList = document.createElement("li")
        newList.textContent = value;
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = "Delete";
        list.append(newList)
        newList.append('  ', deleteBtn)
    }
}