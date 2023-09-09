let bt1 = document.querySelector(".bt1")
let bt2 = document.querySelector(".bt2")
function acender(){
   let on = document.querySelector("img") 
   on.src ="./assets/lampada-acesa.png"
   document.body.style.backgroundColor="white"
   bt1.style.backgroundColor = "green"
   bt2.style.backgroundColor = "white"

}

function apagar(){
    let on = document.querySelector("img") 
    on.src ="./assets/lampada.png"
    document.body.style.backgroundColor="rgb(117, 118, 118)"
    bt2.style.backgroundColor = "red"
    bt1.style.backgroundColor = "white"

 }
