/* Declare Variables */
let mobile = document.querySelector(".mobile")
let links = document.querySelector(".links")
let toggleButton =document.querySelector(".toggleButton")

/* EVent Handler Ignited */
toggleButton.addEventListener("click", function() {
    /* Check for classes in the links(ul) in HTML */
   // console.log(links.classList)
   /* ul class overflow is hidden with 0 height, hence it is automatically hidden
   mobile class has an height of 10 rem, which automatically overwrites the zero */
    if (links.classList.contains("mobile")){
        /* If mobile class exist already remove am  and change nav icon to open*/
        links.classList.remove("mobile")
        toggleButton.src="./assets/icons8-menu-40.png"

    }else{
        /* if not add am and change nav icon to closed */
    links.classList.add("mobile")
    toggleButton.src="./assets/close.png"
}
})