var time = document.querySelector('.time')
var start = document.querySelector('.start')
var pause = document.querySelector('.pause')
var reset = document.querySelector('.reset')

var ms =0, s = 0, m = 0;
var count;

start.addEventListener('click', function(){
    if (!counter){
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