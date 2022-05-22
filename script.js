const slides = document.querySelectorAll('.slide');

slides.forEach((el) => {
    el.addEventListener('click',() => {
        clearActiveSlides()
        el.classList.add('active')
    })
});

function clearActiveSlides() {
    slides.forEach((el) => {
        el.classList.remove('active');
    })
}