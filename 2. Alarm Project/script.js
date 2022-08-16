/* Set al variables */
let alarm = document.querySelector(".alarm") 
let time = document.querySelector(".time") 
let set_time = document.querySelector(".set_time") 

/* Set your alarm prompt using windows.prompt function */
let a_hour = window.prompt("Set alarm hour")
let a_minutes = window.prompt("Set alarm minutes")
let a_seconds = window.prompt("Set alarm seconds")

/* The Main FUnction */
function current_time(){
    /* Variable for the new Date() function which checks for date, time, month, year etc */
    const date = new Date();
    /* Variables for getting hours, minutes, seconds */
    let hours = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();

    /* Setting text using document.queryselector as assigned above in a variable */
    time.textContent = hours +  ':' + minute + ':' +seconds
    set_time.textContent = a_hour +  ':' + a_minutes + ':' + a_seconds

    /* Conditional statement for hours, minutes and seconds */
    if ((hours == a_hour) && (minute == a_minutes) && (seconds == a_seconds)){
        alarm.textContent = "Ding! Ding!! Dong!!!"
    }
    /* This makes the time keeps counting */
    setTimeout(current_time, 1000)
}

current_time()