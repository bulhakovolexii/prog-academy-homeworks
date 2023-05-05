const openPopup = document.querySelector('.open-popup');
const tabs = document.querySelectorAll('.tabs__btn');
const forms = document.querySelectorAll('.popup__form');
const popup = document.querySelector('.popup');
const popupBg = document.querySelector('.popup__bg');
const inputs = document.querySelectorAll('.fill__inp');

openPopup.addEventListener('click', showPopup);

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', switchTab)
}

function switchTab(event) {
    if (!event.target.classList.contains('active')) {
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.toggle('active');
            forms[i].classList.toggle('active');
        }
    }
}

function showPopup() {
    popup.classList.toggle('active');
    popupBg.classList.toggle('active');
}

document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function () {
        if (this.value !== '') {
            this.previousElementSibling.style.display = 'none';
        } else {
            this.previousElementSibling.style.display = '';
        }
    })
}