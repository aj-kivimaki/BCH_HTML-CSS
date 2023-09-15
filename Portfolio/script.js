const body = document.querySelector('body');
const header = document.querySelector('header');
const headerH2 = document.querySelector('header h2');
const links = document.querySelectorAll('a');

window.addEventListener('scroll', (e) => {
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
    headerH2.style.color = '#333';
    for (const link of links) {
        link.style.color = '#333';
    }
})

const toggleHamburger = () => {
    let x = document.querySelector(".mobile-nav");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}