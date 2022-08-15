const colors = ['green', 'yellow','blue',
'pink','red','white','purple',"grey", "cyan",
"violet", "orange", "brown", 
]
document.querySelector(".change").addEventListener('click', function(){
    bg = (Math.floor(Math.random() * colors.length))
    document.querySelector(".color").textContent=colors[bg] 
    document.body.style.backgroundColor = colors[bg]
})


