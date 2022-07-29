/* The I Love you Challenge */
document.getElementById('add_love').addEventListener('click', function(){
    document.getElementById('love').textContent = document.getElementById('love').textContent + " I Love You"
})

/* What happend above is just like saying
    youre building a chat bot that t=keeps texting until it gets a reply, hence:
    text = hey how are you
     then upon getting no reply (Button click), it resends theh same message again 
    so hey how are you + hey how are you ...
*/

/* Now lets try something else  "A mockup timer or stopwatch*/


/* by default, start time is ero */
var sec = 0
/* variable for the speed  */
var count;
/* html elements variables */
var start = document.getElementById('start')
var seconds = document.querySelector('.seconds')

/* The button click trigger */
start.addEventListener('click', function(){
/* Using conditional statement (if) to check if the button hasnt been clicked */
   if (!count){
    count = setInterval(run_seconds, 1000);
   }
   /* Main function */
    function run_seconds (){
        seconds.textContent = sec + 1
        sec = sec + 1   
    }
})
