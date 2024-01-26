'use strict';

let button = document.getElementById("but");

button.addEventListener("click",()=>{
    document.querySelector(".backdrop").style.display = "Block"
    document.querySelector(".modal").style.display = "Block"
})

let closeButton = document.querySelector(".close");
let ovelay = document.querySelector(".backdrop");
closeButton.addEventListener("click",closeModal)
ovelay.addEventListener("click",closeModal)
document.addEventListener("keydown",closeModal)

function closeModal (e){
    if(e.key==="Escape" || e.type == "click" ){
        
        document.querySelector(".backdrop").style.display = "none"
        document.querySelector(".modal").style.display = "none"
    }
}
