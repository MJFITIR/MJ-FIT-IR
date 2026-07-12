document.addEventListener("DOMContentLoaded", function(){


const elements = document.querySelectorAll(".glass");


elements.forEach((element, index)=>{


element.style.opacity = "0";

element.style.transform = "translateY(40px)";


setTimeout(()=>{


element.style.transition = "all 0.8s ease";

element.style.opacity = "1";

element.style.transform = "translateY(0)";


}, index * 200);



});



});
