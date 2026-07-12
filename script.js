// ===================================
// MJ FIT IR
// Elite Fitness Coach
// ===================================

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ===================================
// Header Background on Scroll
// ===================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(0,0,0,.95)";
        header.style.backdropFilter = "blur(15px)";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.4)";

    } else {

        header.style.background = "rgba(0,0,0,.75)";
        header.style.boxShadow = "none";

    }

});

// ===================================
// Fade Animation
// ===================================

const hiddenElements = document.querySelectorAll(

".about
