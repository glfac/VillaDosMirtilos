document.addEventListener("DOMContentLoaded", function () {
    let button = document.querySelector(".btn");
    button.addEventListener("click", function () {
        alert("Entre em contato conosco para comprar os melhores mirtilos!");
    });
});

const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
