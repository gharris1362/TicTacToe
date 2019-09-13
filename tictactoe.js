//--------------------------VARIABLES-------------------------------//
let cells = document.querySelectorAll('.cell');
let shape = 'X';
let gameOver = false;
let cpu = document.getElementById('cpu');
let cellCount = 0
let wins = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]]];




//------------------------------FUNCTIONS-----------------------------------------//
for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', clickedCell)
};

function clickedCell(cell) {
    if (cell.target.textContent == '') {
        cell.target.textContent = shape
        checkWin()
        if (shape == 'X') {
            shape = 'O'
        } else {
            shape = 'X'
        };
        if (cpu.innerHTML == 'CPU On') {
            cpuActive()
        }
    };
};
function checkWin() {
    cellCount++
    for (i = 0; i < wins.length; i++) {
        let shapeCount = 0;
        for (j = 0; j < wins[i].length; j++) {
            if (wins[i][j].innerHTML == shape) {
                shapeCount++
            };
            if (shapeCount == 3) {
                alert(shape + ' wins!')
                return;
            }
            if (cellCount == 9 && shapeCount == 3) {
                alert(shape + ' wins!')
                return;
            }
            else if (shapeCount == !3 && cellCount == 9) {
                alert('its a tie!')
                return;
            };
        };
    };
};

function reset() {
    for (i = 0; i < cells.length; i++) {
        cells[i].innerHTML = ''
        shape = 'X'
        cellCount = 0
    }
}

//------------------------------------CPU--------------------------------------//
function cpuOn() {
    if (cpu.innerHTML == 'CPU Off') {
        cpu.innerHTML = 'CPU On'
    }
    else { cpu.innerHTML = 'CPU Off' };
};

function cpuActive() {
    if (cellCount != 9) {
        i = 0
        while (i == 0) {
            let cpuCell = cells[Math.floor(Math.random() * cells.length)]
            if (cpuCell.textContent == '') {
                cpuCell.innerHTML = shape
                checkWin()
                i = 1
                if (shape == 'X') {
                    shape = 'O'
                } else {
                    shape = 'X'
                };
            };
        };
    };
};