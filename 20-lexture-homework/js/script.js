const tabs = document.querySelectorAll('.tabs__tab');
const forms = document.querySelectorAll('.popup__form');

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function () {
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.toggle('active');
            forms[i].classList.toggle('active');
        }
    })
}

