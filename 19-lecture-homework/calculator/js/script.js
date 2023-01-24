const number = document.querySelectorAll('.number');
const sign = document.querySelectorAll('.sign');
const inp = document.querySelector('.calc__input');
const equals = document.querySelector('.equals');
const display = document.querySelector('.calc__display');
const clear = document.querySelector('.clear');
const undo = document.querySelector('.undo');


for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', drawValue);
}

for (let i = 0; i < sign.length; i++) {
    sign[i].addEventListener('click', drawValue);
}

equals.addEventListener('click', getResult);
clear.addEventListener('click', clearValue);
undo.addEventListener('click', undoValue);
inp.addEventListener('input', resizeInp);

function getResult() {
    display.innerHTML = inp.value;
    inp.value = eval(inp.value);
    resizeInp();
}

function drawValue() {
    if (this.innerText === '÷') {
        inp.value += '/';
    } else if (this.innerText === '×') {
        inp.value += '*';
    } else {
        inp.value += this.innerText;
    }
    resizeInp();
}

function clearValue() {
    inp.value = '';
    display.innerHTML = '';
}
function undoValue() {
    inp.value = inp.value.slice(0, -1);
    resizeInp();
}

function resizeInp() {
    if (inp.value.length <= 9) {
        inp.style.fontSize = "55px";
    } else if (inp.value.length > 9 && inp.value.length <= 17) {
        inp.style.fontSize = "32px";
    } else if (inp.value.length > 17) {
        inp.style.fontSize = "16px";
    }
}