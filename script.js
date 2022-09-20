let btn = document.querySelector("button");
let body = document.querySelector("body");
let icone = document.querySelector("i");  

let mode = localStorage.getItem("mode");

if(mode==="dark"){
    body.classList.add("dark");
    btn.classList.toggle("butn");
    icone.classList.replace("fa-moon","fa-sun");
}
btn.addEventListener("click",function(){
    body.classList.toggle("dark");
    btn.classList.toggle("butn");
    if(body.classList.contains("dark") && btn.classList.contains("butn")){
        icone.classList.replace("fa-moon","fa-sun");
        localStorage.setItem("mode","dark");
    }else{
        localStorage.setItem("mode","light");
        icone.classList.replace("fa-sun","fa-moon");
    }
    
})

