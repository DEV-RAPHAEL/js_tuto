/* Events.html begins */
var btn1 =  document.querySelector('#one')
var btn2 =  document.querySelector('#two')
var btn3 =  document.querySelector('#three')
var btn4 =  document.querySelector('#four')

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