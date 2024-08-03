// window.addEventListener('load', bindEvents);

// let buttons, flag = true, count = 0, blocked = false, interval, countDownValue = 5;

// function bindEvents() {
//     buttons = Array.from(document.getElementsByTagName('button'));
//     buttons.forEach(button => button.addEventListener('click', handleButtonClick));
// }

// function isNotBlank(button) {
//     return button.innerText.trim().length > 0;
// }

// function isThreeSame(a, b, c) {
//     return isNotBlank(a) && a.innerText === b.innerText && b.innerText === c.innerText;
// }

// function isGameOver() {
//     const winPatterns = [
//         [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
//         [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
//         [0, 4, 8], [2, 4, 6]             // Diagonals
//     ];
//     return winPatterns.some(pattern => isThreeSame(buttons[pattern[0]], buttons[pattern[1]], buttons[pattern[2]]));
// }

// function reset() {
//     clearInterval(interval);
//     [blocked, flag, count] = [false, true, 0];
//     countDownValue = 5;
//     buttons.forEach(button => button.innerText = '');
//     document.getElementById('output').innerText = '';
// }

// function startCountDown() {
//     interval = setInterval(() => {
//         countDownValue--;
//         document.getElementById('output').innerText = `Game Over. Resetting in ${countDownValue} seconds.`;
//         if (countDownValue === 0) reset();
//     }, 1000);
// }

// function handleButtonClick() {
//     if (blocked || this.innerText.trim().length !== 0) return;

//     this.innerText = flag ? 'X' : '0';
//     flag = !flag;
//     count++;

//     if (count >= 5 && isGameOver()) {
//         blocked = true;
//         document.getElementById('output').innerText = 'Game Over. Resetting in 5 seconds.';
//         startCountDown();
//     }
// }

window.addEventListener('load', bindEvents);

let buttons, flag = true, count = 0, blocked = false, interval, countDownValue = 5;

function bindEvents() {
    buttons = Array.from(document.getElementsByClassName('tic-tac-toe-button'));
    buttons.forEach(button => button.addEventListener('click', handleButtonClick));
}

function isNotBlank(button) {
    return button.innerText.trim().length > 0;
}

function isThreeSame(a, b, c) {
    return isNotBlank(a) && a.innerText === b.innerText && b.innerText === c.innerText;
}

function isGameOver() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    return winPatterns.some(pattern => isThreeSame(buttons[pattern[0]], buttons[pattern[1]], buttons[pattern[2]]));
}

function reset() {
    clearInterval(interval);
    [blocked, flag, count] = [false, true, 0];
    countDownValue = 5;
    buttons.forEach(button => button.innerText = '');
    document.getElementById('output').innerText = '';
}

function startCountDown() {
    interval = setInterval(() => {
        countDownValue--;
        document.getElementById('output').innerText = `Game Over. Resetting in ${countDownValue} seconds.`;
        if (countDownValue === 0) reset();
    }, 1000);
}

function handleButtonClick() {
    if (blocked || this.innerText.trim().length !== 0) return;

    this.innerText = flag ? 'X' : 'O';
    flag = !flag;
    count++;

    if (count >= 5 && isGameOver()) {
        blocked = true;
        document.getElementById('output').innerText = 'Game Over. Resetting in 5 seconds.';
        startCountDown();
    }
}
