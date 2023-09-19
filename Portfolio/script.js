const backToTopBtn = document.querySelector('#backToTop');
const hamburger = document.querySelector('.mobile');

const header = document.querySelector('header');
const menuItems = document.querySelectorAll('nav ul li a');
const nav = document.querySelector('nav ul');

const getToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const mobMenu = () => {
    /* closes the menu when clicked */
    for (const item of menuItems) {
        item.addEventListener('click', mobMenu);
    }
    // toggle showing mobile menu when clicking hamburger icon
    nav.classList.toggle('responsive');
}

const scrollFunc = (e) => {
    // add background color to header after scrolling
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        header.classList.add('bg');
    } else {
        header.classList.remove('bg');
    }

    // show back to top button after a short scroll
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

backToTopBtn.addEventListener('click', getToTop);
hamburger.addEventListener('click', mobMenu);
window.addEventListener('scroll', scrollFunc);
