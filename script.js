'use strict';
const whoseMove = document.querySelector('#whose-move');
const blockItems = document.querySelectorAll('.block-item');
const winnerSpan = document.querySelector('#who-winner');
const btn = document.querySelector('.btn-new-game');
const blockArea = document.querySelector('.block-area');
const blockWinner = document.querySelector('.block-winner');

let step = '';
let counter = 0;
let winner = '';

function getWhoseMove() {
    if (step == 'circle') {
        step = 'krest';
        whoseMove.innerText = 'Крестики';
    } else {
        step = 'circle';
        whoseMove.innerText = 'Нолики';
    }
};
getWhoseMove();



blockItems.forEach((item) => {
    item.addEventListener('click', () => {
        if (!item.classList.contains('circle') && !item.classList.contains('krest')) {
            item.classList.add(step);
            if (step == 'krest') {
                item.innerText = 'X';
            }
            if (step == 'circle') {
                item.innerText = '0';
            }
        }
        counter++;
        getWhoseMove();
        checkCircleWin();
        checkKrestWin();
        checkDraw();
    })
})

let win =
    [
        [0, 1, 2],
        [0, 4, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ];

function checkCircleWin() {
    for (let i = 0; i < win.length; i++) {
        if (
            blockItems[win[i][0]].classList.contains('circle') &&
            blockItems[win[i][1]].classList.contains('circle') &&
            blockItems[win[i][2]].classList.contains('circle')
        ) {
            blockItems[win[i][0]].classList.add('win-color');
            blockItems[win[i][1]].classList.add('win-color');
            blockItems[win[i][2]].classList.add('win-color');

            winner = 'Нолики';
            endGame(winner);
            return 1;
        }

    }
}


function checkKrestWin() {
    for (let i = 0; i < win.length; i++) {
        if (
            blockItems[win[i][0]].classList.contains('krest') &&
            blockItems[win[i][1]].classList.contains('krest') &&
            blockItems[win[i][2]].classList.contains('krest')
        ) {
            blockItems[win[i][0]].classList.add('win-color');
            blockItems[win[i][1]].classList.add('win-color');
            blockItems[win[i][2]].classList.add('win-color');

            winner = 'Крестики';
            endGame(winner);
            return 1;
        }

    }
}

function checkDraw() {
    if (!checkKrestWin() && !checkCircleWin() && (counter >= 9)) {
        winner = 'Ничья';
        endGame(winner);
    }
}

function endGame(winner) {
    blockArea.style.pointerEvents = 'none';
    blockWinner.style.display = 'flex';
    winnerSpan.innerText = winner;
}

btn.addEventListener('click', () => {
    document.location.reload();
})