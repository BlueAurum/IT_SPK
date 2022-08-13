const burgerBtn = document.querySelector('.burger__btn');
const mobileNav = document.querySelector('.header__nav');
const body = document.body;

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active')
    mobileNav.classList.toggle('active')
    body.classList.toggle('active')
})