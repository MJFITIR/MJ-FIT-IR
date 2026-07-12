
// MJ FIT Website Effects

document.addEventListener("DOMContentLoaded", () => {


const items = document.querySelectorAll(".glass");


items.forEach((item) => {

item.style.opacity = "0";

item.style.transform = "translateY(30px)";


setTimeout(() => {

item.style.transition = "0.8s ease";

item.style.opacity = "1";

item.style.transform = "translateY(0)";


},300);


});



});
