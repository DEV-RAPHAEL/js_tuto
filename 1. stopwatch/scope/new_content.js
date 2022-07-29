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

/* Now lets try something else */

