//  change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
        ('window-scroll', window.scrollY > 0)

})



//show hide faq answer 

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {

    faq.addEventListener('click', () => {

        faq.classList.toggle('open');


    })

})


// show hide nav menu

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");



menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})


// close the navbar

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end + start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

const obj = document.getElementById("value");
animateValue(obj, 350, 0, 1000);

const obj1 = document.getElementById("value1");
animateValue(obj1, 50, 0, 1000)

const obj2 = document.getElementById("value2");
animateValue(obj2, 15, 0, 1000)