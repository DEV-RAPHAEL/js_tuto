/* declare varible */
let firstNumber = window.prompt();
let secondNumber = window.prompt();
let i=0;
let total = 0;

document.querySelector(".secondNumber").textContent = secondNumber
document.querySelector(".firstNumber").textContent = firstNumber

/* For Loop */
/* for(i=0; i<(secondNumber - firstNumber ); i++){
   total++
   document.querySelector('.answer').textContent = total
}
 */
 
/* While Loop */
while (i<(secondNumber - firstNumber)){
    total++
    i++
    document.querySelector('.answer').textContent = total

}