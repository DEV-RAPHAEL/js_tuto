let time = document.querySelector('.time')
let start = document.querySelector('.start')
let pause = document.querySelector('.pause')
let reset = document.querySelector('.reset')

let ms =0, s = 0, m = 0;
let count;

start.addEventListener('click', function(){
    if (!count){
    count = setInterval(run_seconds, 10)
}
    function run_seconds(){
        time.textContent = m + ':' + s + ':' + ms
        ms ++ 
        if (ms == 100 ){
            ms = 0, s++
           }
       if (s == 60){
        s = 0, m++
       }
       
     }
    
})
pause.addEventListener('click', function(){
    clearInterval(count)
    count = false
})
reset.addEventListener('click', function(){
    clearInterval(count)
    count = false
    m =0, s = 0, ms=0
    time.textContent = m + ':' + s + ':' + ms
})
