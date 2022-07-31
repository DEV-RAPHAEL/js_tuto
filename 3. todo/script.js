
/* Creating a variable for form, input and list using const */
const form = document.querySelector("form")
const input = document.querySelector("input")
const list = document.querySelector(".list")
 /* Creating a function to read when user submits forms
 unlike other projects in this series, this function takes a 
 parameter "e" which auto generates an id for each submit click
 meaning that every list now has an id.
 */
form.addEventListener("submit", function(e){
/* the prevent default function here is self explanatory, 
what it does is to prevent the page from going back to its default state
simply put, it doesn;t allow the page to reload because if it does, 
the lists will be deleted.
*/
e.preventDefault();
/* calling our todo function */
toDo();
/* this clears the input area after the todo function which we'll create soon
is done with its job
 */
input.value = ""
})
/* Now lets build the todo function */
function toDo(){
    /* using conditional statement we check if the input area
    is empty then create a popup to tll the user it is empty */
    if(input.value === ''){
        alert('Please add a task')
    }
    /* if not empty, we proceed here */
    else{
        /* assigning the user input onto a variable */
        const value = input.value
        /* using the createElement function, we can create new elements in html
        from javascript, so we are creating a list item here */
        const newList = document.createElement("li")
        /* we added the textContent for user input (recall that we assigned it to a variable)
         */
        newList.textContent = value;
        /* assigning the create element button for delete button to a varriablr */
        const deleteBtn = document.createElement('button')
        /* Adding text as we have been doing in this series */
        deleteBtn.textContent = "Delete";
        /* Now, its time to show users what we have desisned
        first, we use append function to ADD our new list item(newList)
        to our existing (ul tag(list)) in the html
        */
        list.append(newList)
        /* now we append our  button to the new list item */
        newList.append('  ', deleteBtn)
    }
}

/* for deleting list items the e here(recall or recheck its work) selects the id for 
a specific list item  */
list.addEventListener('click', function(e){
    /* here, we checked if the click that was made inside the ul tag
    is on nodeName in javascript is like element in html and it reads
    uppercases, hence BUTTON = button (in html) */
    if (e.target.nodeName === 'BUTTON'){
        /* then it targets the closest li and remooves it */
e.target.closest('LI').remove();
     }
})
