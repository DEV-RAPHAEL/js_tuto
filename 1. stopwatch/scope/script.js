/* // The code below gets element by their classname, just like our CSS
document.querySelector('.class').textContent = 'Hello, I have been Manipulated in Line 2 of script.js file'
//The code below gets element by their id name 
document.querySelector('#id_selector').textContent = 'Hello, I have been Manipulated in Line 4  of script.js file'
//The code below gets element by their id name 
document.getElementById('id').textContent = 'Hello, I have been Manipulated in Line 6 of script.js file'
 */


 // The code below gets element by their classname, just like our CSS
 // declaring variable
let classname = document.querySelector('.class')
// call and use variable
classname.textContent = 'Hello, I have been Manipulated in Line 13 of script.js file using variables'

//The code below gets element by their id name 
//declares variable
let id1 = document.querySelector('#id_selector')
// call and use variable
id1.textContent ='Hello, I have been Manipulated in Line 20 of script.js file using variables'

//The code below gets element by their id name 
//declares variable

let id2 = document.getElementById('id')
id2.textContent = 'Hello, I have been Manipulated in Line 26 of script.js file using variables'

/* End of target_element.html */

