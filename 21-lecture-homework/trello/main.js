const board = document.querySelector('.board');
const columns = document.querySelectorAll('.column');
const cards = document.querySelectorAll('.card');
let draggedCard;
const columnAddBnt = document.querySelector('.board__add-column');
const cardAddBtns = document.querySelectorAll('.column__add-card');
const emptyColumn = `<div class="board__column column">
                        <div class="column__name" contenteditable="true"></div>
                    </div>`

const emptyCard = `<div class="column__card card" draggable="true">
                        <div class="card__name" contenteditable="true"></div>
                        <div class="card__descr" contenteditable="true"></div>
                        <select class="card__priority">
                            <option value="low">Low</option>
                            <option value="medium" selected>Medium</option>
                            <option value="High">High</option>
                            <option value="Critical">Critical</option>
                        </select>
                    </div>`

columnAddBnt.addEventListener('click', addColumn);

for (let i = 0; i < cardAddBtns.length; i++) {
    cardAddBtns[i].addEventListener('click', addCard);
}

function addColumn() {
    this.insertAdjacentHTML('beforebegin', emptyColumn);
    const btn = document.createElement('button');
    btn.innerText = '+';
    btn.classList.add('column__add-card');
    btn.addEventListener('click', addCard);
    this.previousSibling.appendChild(btn);
    this.previousSibling.addEventListener('dragover', function (e) {
        e.preventDefault();
    })
    this.previousSibling.addEventListener('drop', function () {
        this.appendChild(draggedCard);
    })
}

function addCard() {
    this.insertAdjacentHTML('beforebegin', emptyCard);
    this.previousSibling.addEventListener('dragstart', function (e) {
        draggedCard = e.target;
    })
}

board.addEventListener('wheel', function (e) { //add horizontal scrolling
    e.preventDefault();
    board.scrollLeft += e.deltaY;
})

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('dragstart', function (e) {
        draggedCard = e.target;
    })
}

for (let i = 0; i < columns.length; i++) {
    columns[i].addEventListener('dragover', function (e) {
        e.preventDefault();
    })
    columns[i].addEventListener('drop', function () {
        this.appendChild(draggedCard);
    })
}