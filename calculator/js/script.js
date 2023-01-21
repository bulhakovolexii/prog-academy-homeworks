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

function getResult() {
    display.innerHTML = inp.value;
    inp.value = eval(inp.value);
}

function drawValue() {
    if (this.innerText === '÷') {
        inp.value += '/';
    } else if (this.innerText === '×') {
        inp.value += '*';
    } else {
        inp.value += this.innerText;
    }
}

function clearValue() {
    inp.value = '';
    display.innerHTML = '';
}
function undoValue() {
    inp.value = inp.value.slice(0, -1);
}