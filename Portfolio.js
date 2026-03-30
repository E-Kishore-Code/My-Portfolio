const menu = document.getElementById('menu');
const nav = document.getElementById('nav-links');

menu.addEventListener('click', () => {
    nav.classList.toggle('active');
    // Simple toggle logic
    if(nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "80px";
        nav.style.left = "0";
        nav.style.width = "100%";
        nav.style.background = "#011010";
        nav.style.padding = "20px";
    }
});