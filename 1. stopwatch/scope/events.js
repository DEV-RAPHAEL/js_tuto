/* Events.html begins */
/* Assigning all variables  */
let btn1 =  document.querySelector('#one')
let btn2 =  document.querySelector('#two')
let btn3 =  document.querySelector('#three')
let btn4 =  document.querySelector('#four')
  /* Manipulating them with on click function via addEVentListener */
btn1.addEventListener('click', function(){
    document.querySelector('#Text_one').textContent = "Onclick manipulation one"
})
btn2.addEventListener('click', function(){
    document.getElementById('Text_two').textContent = "Onclick manipulation two"
})
btn3.addEventListener('click', function(){
    document.getElementById('Text_three').textContent = "Onclick Manipulation 3"
})

btn4.addEventListener('click', function() { 
    document.querySelector('#Text_one').textContent = "Text One"
    document.getElementById('Text_two').textContent = "Text Two"
    document.getElementById('Text_three').textContent = "Text Three"
}) 
