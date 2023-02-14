const fullscreen = document.querySelector('.fullscreen');
const field = document.querySelector('.field');
const leftFrame = document.querySelector('.left-frame');
const rightFrame = document.querySelector('.right-frame');
const ball = document.querySelector('.ball');
const count = document.querySelector('.count');
let countLeft = 0;
let countRight = 0;

fullscreen.addEventListener('click', function () {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
})

field.addEventListener('dragover', prevent);
leftFrame.addEventListener('dragover', prevent);
rightFrame.addEventListener('dragover', prevent);

function prevent(e) {
    e.preventDefault();
}

function leftGoal() {
    countLeft++;
    count.innerHTML = countLeft + ':' + countRight;
    ball.style.left = '50%';
    ball.style.top = '5vmax';
    ball.style.bottom = 'unset';
}

function rightGoal() {
    countRight++;
    count.innerHTML = countLeft + ':' + countRight;
    ball.style.left = '50%';
    ball.style.top = 'unset';
    ball.style.bottom = '0px';
}

field.addEventListener('drop', function (e) {
    if (e.target === leftFrame) {
        leftGoal();
    } else if (e.target === rightFrame) {
        rightGoal();
    } else {
        ball.style.left = e.offsetX / field.offsetWidth * 100 + '%';
        ball.style.top = e.offsetY / field.offsetHeight * 100 + '%';
    }
})
