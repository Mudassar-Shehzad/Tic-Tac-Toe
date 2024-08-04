let board = document.getElementById('board')
let boxes = document.querySelectorAll('.boxes')
let winner = document.getElementById('winner')
let playerX = false;

const winingPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [6, 7, 8],
    [3, 4, 5],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7],
]


boxes.forEach((box) => {
    box.addEventListener('click', () => {
        // console.log('box is clicked')
        if (playerX) {
            box.innerHTML = 'X'
            playerX = false
        } else {
            box.innerHTML = 'O'
            playerX = true
        }
        box.disabled = true
        checkWinner()

    })
});

function resetGame() {
    playerX = false;
    winner.innerHTML =''

    enable()

}
function disable() {
    for (let box of boxes) {
        box.disabled = true
    }
}
function enable() {
    for (let box of boxes) {
        box.disabled = false
        box.innerHTML = ''
    }
}

function showWinner(winer) {
    winner.innerHTML = `Player ${winer} wins the game`
    disable()
}

function checkWinner() {
    for (let pattern of winingPatterns) {
        let position1Val1 = boxes[pattern[0]].innerHTML
        let position1Val2 = boxes[pattern[1]].innerHTML
        let position1Val3 = boxes[pattern[2]].innerHTML
        if (position1Val1 != '' && position1Val2 != '' && position1Val3 != '') {
            if (position1Val1 === position1Val2 && position1Val2 === position1Val3) {
                showWinner(position1Val1)
            }
        }
    }

}
let reset = document.getElementById('reset')
reset.addEventListener('click', () => {
    resetGame()
})
