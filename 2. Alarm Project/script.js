var alarm = document.querySelector(".alarm") 
var time = document.querySelector(".time") 
var set_time = document.querySelector(".set_time") 


var a_hour = window.prompt("Set alarm hour")
var a_minutes = window.prompt("Set alarm minutes")
var a_seconds = window.prompt("Set alarm seconds")

function current_time(){
    const date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    time.textContent = hours +  ':' + minute + ':' +seconds
    set_time.textContent = a_hour +  ':' + a_minutes + ':' + a_seconds
    if ((hours == a_hour) && (minute == a_minutes) && (seconds == a_seconds)){
        alarm.textContent = "Ding! Ding!! Dong!!!"
    }
    setTimeout(current_time, 1000)
}

current_time()