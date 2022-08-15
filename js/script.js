let navbar = document.querySelector('.navbar');
let cartItem = document.querySelector('.cart-items-container');
let searchForm = document.querySelector('.search-form');
let popup = document.querySelector('.popup');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
}

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    cartItem.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    cartItem.classList.remove('active');
    navbar.classList.remove('active');
    popup.classList.remove('active');
}

for (let i = 0; i < document.querySelectorAll('#open-popup-btn').length; i++) {
    document.querySelectorAll('#open-popup-btn')[i].addEventListener("click", () => {
        popup.style.top = `${window.pageYOffset + (screen.availHeight) / 2}` + 'px';
        popup.classList.add("active");
    })
}

document.getElementById('dismiss-popup-btn').addEventListener("click", () => {
    popup.classList.remove("active");
})