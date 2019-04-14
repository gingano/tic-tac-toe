'use strict';

const ticTac = () => {
    let p = document.getElementById('status');
    let field = document.querySelector('.field');
    let one = document.getElementById('one');
    let two = document.getElementById('two');
    let three = document.getElementById('three');
    let four = document.getElementById('four');
    let five = document.getElementById('five');
    let six = document.getElementById('six');
    let seven = document.getElementById('seven');
    let eight = document.getElementById('eight');
    let nine = document.getElementById('nine');
    let refresh = document.getElementById('button');

    alert('Hi, this is a tic-tac-toe game. You play for "O"');


    one.textContent = 'X';
    one.classList.add('X');

    let call = 1;

    let click = (event) => {
        let target = event.target;
        if (target.className === 'X') {

        } else {
            target.textContent = 'O';
        }

        if (target.className === 'X') {

        } else if(call === 1) {
            target.classList.add('zero1');
            firstMove();
            call++;
        } else if (call === 2) {
            if (target.className === 'zero1') {

            } else {
                target.classList.add('zero2');
                if (two.className === 'zero1') {
                    secondMove2();
                }
                if (three.className === 'zero1') {
                    secondMove3();
                }
                if (four.className === 'zero1') {
                    secondMove4();
                }
                if (five.className === 'zero1') {
                    secondMove5();
                }
                if (six.className === 'zero1') {
                    secondMove6();
                }
                if (seven.className === 'zero1') {
                    secondMove7();
                }
                if (eight.className === 'zero1') {
                    secondMove8();
                }
                if (nine.className === 'zero1') {
                    secondMove9();
                }
                call++;
            }
        } else if (call === 3) {
            if (target.className === 'zero1' ||
                target.className === 'zero2') {

            } else {
                target.classList.add('zero3');
                thirdMove();
                call++;
            }
        } else if (call === 4) {
            if (target.className === 'zero1' ||
                target.className === 'zero2' ||
                target.className === 'zero3'){
                call--;
            } else {
                target.classList.add('zero4');
                fourthMove();
            }
        }
    };
    field.addEventListener('click', click);
    refresh.addEventListener('click', function (event) {
        call = 1;
        p.textContent = 'Tic Tac Toe';
        two.textContent = '';
        three.textContent = '';
        four.textContent = '';
        five.textContent = '';
        six.textContent = '';
        seven.textContent = '';
        eight.textContent = '';
        nine.textContent = '';
        two.classList.remove('X', 'zero1', 'zero2', 'zero3', 'zero4');
        three.classList.remove('X', 'zero1', 'zero2', 'zero3', 'zero4');
        four.classList.remove('X', 'zero1', 'zero2', 'zero3', 'zero4');
        five.classList.remove('X', 'zero1', 'zero2', 'zero3', 'zero4');
        six.classList.remove('X', 'zero1', 'zero2', 'zero3', 'zero4');
        seven.classList.remove('X', 'zero1', 'zero2', 'zero3', 'zero4');
        eight.classList.remove('X', 'zero1', 'zero2', 'zero3', 'zero4');
        nine.classList.remove('X', 'zero1', 'zero2', 'zero3', 'zero4');
    });

    let firstMove = () => {
        if (two.className === 'zero1') {
            nine.textContent = 'X';
            nine.classList.add('X')
        } else if (three.className === 'zero1') {
            seven.textContent = 'X';
            seven.classList.add('X')
        } else if (four.className === 'zero1') {
            nine.textContent = 'X';
            nine.classList.add('X')
        } else if (five.className === 'zero1') {
            nine.textContent = 'X';
            nine.classList.add('X')
        } else if (six.className === 'zero1') {
            nine.textContent = 'X';
            nine.classList.add('X')
        } else if (seven.className === 'zero1') {
            nine.textContent = 'X';
            nine.classList.add('X')
        } else if (eight.className === 'zero1') {
            nine.textContent = 'X';
            nine.classList.add('X')
        } else if (nine.className === 'zero1') {
            three.textContent = 'X';
            three.classList.add('X')
        }
    };
    let secondMove2 = () => {
        if (two.className === 'zero2') {
            two.textContent = 'O';
            two.classList.add('zero1')
        } else if (three.className === 'zero2') {
            five.textContent = 'X';
            five.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (four.className === 'zero2') {
            five.textContent = 'X';
            five.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (five.className === 'zero2') {
            eight.textContent = 'X';
            eight.classList.add('X')
        } else if (six.className === 'zero2') {
            five.textContent = 'X';
            five.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (seven.className === 'zero2') {
            five.textContent = 'X';
            five.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';;
        } else if (nine.className === 'zero2') {
            five.textContent = 'X';
            five.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
    };
    let secondMove3 = () => {
        if (two.className === 'zero2') {
            four.textContent = 'X';
            four.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (three.className === 'zero2') {
            seven.textContent = 'O';
            seven.classList.add('zero1')
        } else if (four.className === 'zero2') {
            nine.textContent = 'X';
            nine.classList.add('X')
        } else if (five.className === 'zero2') {
            four.textContent = 'X';
            four.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (six.className === 'zero2') {
            four.textContent = 'X';
            four.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (seven.className === 'zero2') {
            four.textContent = 'X';
            four.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (eight.className === 'zero2') {
            four.textContent = 'X';
            four.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (nine.className === 'zero2') {
            four.textContent = 'X';
            four.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
    };
    let secondMove4 = () => {
        if (two.className === 'zero2') {
            five.textContent = 'X';
            five.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (three.className === 'zero2') {
            five.textContent = 'X';
            five.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (four.className === 'zero2') {
            three.textContent = 'X';
            three.classList.add('X')
        } else if (five.className === 'zero2') {
            six.textContent = 'X';
            six.classList.add('X')
        } else if (six.className === 'zero2') {
            five.textContent = 'X';
            five.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (seven.className === 'zero2') {
            five.textContent = 'X';
            five.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (eight.className === 'zero2') {
            three.textContent = 'X';
            three.classList.add('X');
        } else if (nine.className === 'zero2') {
            nine.textContent = 'X';
            nine.classList.add('zero1')
        }
    };
    let secondMove5 = () => {
        if (two.className === 'zero2') {
            eight.textContent = 'X';
            eight.classList.add('X')
        } else if (three.className === 'zero2') {
            seven.textContent = 'X';
            seven.classList.add('X');
        } else if (four.className === 'zero2') {
            six.textContent = 'X';
            six.classList.add('X');
        } else if (five.className === 'zero2') {
            five.textContent = 'O';
            five.classList.add('zero1');
        } else if (six.className === 'zero2') {
            four.textContent = 'X';
            four.classList.add('X');
        } else if (seven.className === 'zero2') {
            three.textContent = 'X';
            three.classList.add('X');
        } else if (eight.className === 'zero2') {
            two.textContent = 'X';
            two.classList.add('X');
        } else if (nine.className === 'zero2') {
            nine.textContent = 'X';
            nine.classList.add('X');
        }
    };
    let secondMove6 = () => {
        if (two.className === 'zero2') {
            seven.textContent = 'X';
            seven.classList.add('X')
        } else if (three.className === 'zero2') {
            seven.textContent = 'X';
            seven.classList.add('X');
        } else if (four.className === 'zero2') {
            five.textContent = 'X';
            five.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (five.className === 'zero2') {
            four.textContent = 'X';
            four.classList.add('X');
        } else if (six.className === 'zero2') {
            four.textContent = 'X';
            four.classList.add('X');
        } else if (seven.className === 'zero2') {
            five.textContent = 'X';
            five.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (eight.className === 'zero2') {
            five.textContent = 'X';
            five.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (nine.className === 'zero2') {
            nine.textContent = 'O';
            nine.classList.add('zero1');
        }
    };
    let secondMove7 = () => {
        if (two.className === 'zero2') {
            five.textContent = 'X';
            five.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (three.className === 'zero2') {
            five.textContent = 'X';
            five.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (four.className === 'zero2') {
            five.textContent = 'X';
            five.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (five.className === 'zero2') {
            three.textContent = 'X';
            three.classList.add('X');
        } else if (six.className === 'zero2') {
            five.textContent = 'X';
            five.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (seven.className === 'zero2') {
            seven.textContent = 'O';
            seven.classList.add('zero1');
        } else if (eight.className === 'zero2') {
            five.textContent = 'X';
            five.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (nine.className === 'zero2') {
            nine.textContent = 'O';
            nine.classList.add('zero1');
        }
    };
    let secondMove8 = () => {
        if (two.className === 'zero2') {
            five.textContent = 'X';
            five.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (three.className === 'zero2') {
            five.textContent = 'X';
            five.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (four.className === 'zero2') {
            five.textContent = 'X';
            five.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (five.className === 'zero2') {
            two.textContent = 'X';
            two.classList.add('X');
        } else if (six.className === 'zero2') {
            five.textContent = 'X';
            five.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (seven.className === 'zero2') {
            five.textContent = 'X';
            five.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (eight.className === 'zero2') {
            eight.textContent = 'O';
            eight.classList.add('zero1');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (nine.className === 'zero2') {
            nine.textContent = 'X';
            nine.classList.add('X');
        }
    };
    let secondMove9 = () => {
        if (two.className === 'zero2') {
            seven.textContent = 'X';
            seven.classList.add('X');
        } else if (three.className === 'zero2') {
            three.textContent = 'X';
            three.classList.add('X');
        } else if (four.className === 'zero2') {
            two.textContent = 'X';
            two.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (five.className === 'zero2') {
            two.textContent = 'X';
            two.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (six.className === 'zero2') {
            two.textContent = 'X';
            two.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (seven.className === 'zero2') {
            two.textContent = 'X';
            two.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (eight.className === 'zero2') {
            two.textContent = 'X';
            two.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        } else if (nine.className === 'zero2') {
            nine.textContent = 'O';
            nine.classList.add('zero1');
        }
    };
    let thirdMove = () => {
        if (two.className === 'zero1' &&
            five.className === 'zero2' &&
            seven.className === 'zero3') {

            three.textContent = 'X';
            three.classList.add('X');
        }
        if (two.className === 'zero1' &&
            five.className === 'zero2' &&
            three.className === 'zero3') {

            seven.textContent = 'X';
            seven.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (two.className === 'zero1' &&
            five.className === 'zero2' &&
            six.className === 'zero3') {

            seven.textContent = 'X';
            seven.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (two.className === 'zero1' &&
            five.className === 'zero2' &&
            four.className === 'zero3') {

            seven.textContent = 'X';
            seven.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (three.className === 'zero1' &&
            four.className === 'zero2' &&
            eight.className === 'zero3') {

            five.textContent = 'X';
            five.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (three.className === 'zero1' &&
            four.className === 'zero2' &&
            five.className === 'zero3') {

            eight.textContent = 'X';
            eight.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (three.className === 'zero1' &&
            four.className === 'zero2' &&
            six.className === 'zero3') {

            eight.textContent = 'X';
            eight.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (three.className === 'zero1' &&
            four.className === 'zero2' &&
            two.className === 'zero3') {

            eight.textContent = 'X';
            eight.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (four.className === 'zero1' &&
            five.className === 'zero2' &&
            three.className === 'zero3') {

            seven.textContent = 'X';
            seven.classList.add('X');
        }
        if (four.className === 'zero1' &&
            five.className === 'zero2' &&
            eight.className === 'zero3') {

            three.textContent = 'X';
            three.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (four.className === 'zero1' &&
            five.className === 'zero2' &&
            two.className === 'zero3') {

            three.textContent = 'X';
            three.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (four.className === 'zero1' &&
            five.className === 'zero2' &&
            seven.className === 'zero3') {

            three.textContent = 'X';
            three.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (five.className === 'zero1' &&
            two.className === 'zero2' &&
            seven.className === 'zero3') {

            three.textContent = 'X';
            three.classList.add('X');
        }
        if (five.className === 'zero1' &&
            three.className === 'zero2' &&
            four.className === 'zero3') {

            eight.textContent = 'X';
            eight.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (five.className === 'zero1' &&
            three.className === 'zero2' &&
            eight.className === 'zero3') {

            four.textContent = 'X';
            four.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (five.className === 'zero1' &&
            three.className === 'zero2' &&
            six.className === 'zero3') {

            eight.textContent = 'X';
            eight.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (five.className === 'zero1' &&
            seven.className === 'zero2' &&
            eight.className === 'zero3') {

            two.textContent = 'X';
            two.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (five.className === 'zero1' &&
            seven.className === 'zero2' &&
            four.className === 'zero3') {

            two.textContent = 'X';
            two.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (five.className === 'zero1' &&
            three.className === 'zero2' &&
            two.className === 'zero3') {

            eight.textContent = 'X';
            eight.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (five.className === 'zero1' &&
            two.className === 'zero2' &&
            three.className === 'zero3') {

            seven.textContent = 'X';
            seven.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (five.className === 'zero1' &&
            two.className === 'zero2' &&
            six.className === 'zero3') {

            seven.textContent = 'X';
            seven.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (five.className === 'zero1' &&
            two.className === 'zero2' &&
            four.className === 'zero3') {

            seven.textContent = 'X';
            seven.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (five.className === 'zero1' &&
            four.className === 'zero2' &&
            eight.className === 'zero3') {

            three.textContent = 'X';
            three.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (five.className === 'zero1' &&
            four.className === 'zero2' &&
            two.className === 'zero3') {

            three.textContent = 'X';
            three.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (five.className === 'zero1' &&
            four.className === 'zero2' &&
            seven.className === 'zero3') {

            three.textContent = 'X';
            three.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (five.className === 'zero1' &&
            six.className === 'zero2' &&
            three.className === 'zero3') {

            seven.textContent = 'X';
            seven.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (five.className === 'zero1' &&
            six.className === 'zero2' &&
            two.className === 'zero3') {

            seven.textContent = 'X';
            seven.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (five.className === 'zero1' &&
            six.className === 'zero2' &&
            eight.className === 'zero3') {

            seven.textContent = 'X';
            seven.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (five.className === 'zero1' &&
            eight.className === 'zero2' &&
            four.className === 'zero3') {

            three.textContent = 'X';
            three.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (five.className === 'zero1' &&
            eight.className === 'zero2' &&
            six.className === 'zero3') {

            three.textContent = 'X';
            three.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (five.className === 'zero1' &&
            eight.className === 'zero2' &&
            seven.className === 'zero3') {

            three.textContent = 'X';
            three.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (five.className === 'zero1' &&
            four.className === 'zero2' &&
            three.className === 'zero3') {

            seven.textContent = 'X';
            seven.classList.add('X');
        }
        if (five.className === 'zero1' &&
            six.className === 'zero2' &&
            seven.className === 'zero3') {

            three.textContent = 'X';
            three.classList.add('X');
        }
        if (five.className === 'zero1' &&
            seven.className === 'zero2' &&
            two.className === 'zero3') {

            six.textContent = 'X';
            six.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (five.className === 'zero1' &&
            seven.className === 'zero2' &&
            six.className === 'zero3') {

            two.textContent = 'X';
            two.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (six.className === 'zero1' &&
            five.className === 'zero2' &&
            seven.className === 'zero3') {

            three.textContent = 'X';
            three.classList.add('X');
        }
        if (six.className === 'zero1' &&
            five.className === 'zero2' &&
            two.className === 'zero3') {

            seven.textContent = 'X';
            seven.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (six.className === 'zero1' &&
            five.className === 'zero2' &&
            three.className === 'zero3') {

            seven.textContent = 'X';
            seven.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (six.className === 'zero1' &&
            five.className === 'zero2' &&
            eight.className === 'zero3') {

            seven.textContent = 'X';
            seven.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (seven.className === 'zero1' &&
            five.className === 'zero2' &&
            two.className === 'zero3') {

            six.textContent = 'X';
            six.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (seven.className === 'zero1' &&
            five.className === 'zero2' &&
            four.className === 'zero3') {

            two.textContent = 'X';
            two.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (seven.className === 'zero1' &&
            five.className === 'zero2' &&
            eight.className === 'zero3') {

            two.textContent = 'X';
            two.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (seven.className === 'zero1' &&
            five.className === 'zero2' &&
            six.className === 'zero3') {

            two.textContent = 'X';
            two.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (eight.className === 'zero1' &&
            five.className === 'zero2' &&
            three.className === 'zero3') {

            seven.textContent = 'X';
            seven.classList.add('X');
        }
        if (eight.className === 'zero1' &&
            five.className === 'zero2' &&
            four.className === 'zero3') {

            three.textContent = 'X';
            three.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (eight.className === 'zero1' &&
            five.className === 'zero2' &&
            six.className === 'zero3') {

            three.textContent = 'X';
            three.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (eight.className === 'zero1' &&
            five.className === 'zero2' &&
            seven.className === 'zero3') {

            three.textContent = 'X';
            three.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (nine.className === 'zero1' &&
            two.className === 'zero2' &&
            four.className === 'zero3') {

            five.textContent = 'X';
            five.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (nine.className === 'zero1' &&
            two.className === 'zero2' &&
            five.className === 'zero3') {

            four.textContent = 'X';
            four.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (nine.className === 'zero1' &&
            two.className === 'zero2' &&
            six.className === 'zero3') {

            four.textContent = 'X';
            four.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (nine.className === 'zero1' &&
            two.className === 'zero2' &&
            eight.className === 'zero3') {

            four.textContent = 'X';
            four.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
    };
    let fourthMove = () => {
        if (two.className === 'zero1' &&
            five.className === 'zero2' &&
            seven.className === 'zero3' &&
            four.className === 'zero4') {

            six.textContent = 'X';
            six.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (two.className === 'zero1' &&
            five.className === 'zero2' &&
            seven.className === 'zero3' &&
            six.className === 'zero4') {

            four.textContent = 'X';
            four.classList.add('X');
            p.textContent = 'Draw';
        }
        if (four.className === 'zero1' &&
            five.className === 'zero2' &&
            three.className === 'zero3' &&
            two.className === 'zero4') {

            eight.textContent = 'X';
            eight.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (four.className === 'zero1' &&
            five.className === 'zero2' &&
            three.className === 'zero3' &&
            eight.className === 'zero4') {

            two.textContent = 'X';
            two.classList.add('X');
            p.textContent = 'Draw';
        }
        if (five.className === 'zero1' &&
            six.className === 'zero2' &&
            seven.className === 'zero3' &&
            eight.className === 'zero4') {

            two.textContent = 'X';
            two.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (five.className === 'zero1' &&
            six.className === 'zero2' &&
            seven.className === 'zero3' &&
            two.className === 'zero4') {

            eight.textContent = 'X';
            eight.classList.add('X');
            p.textContent = 'Draw';
        }
        if (six.className === 'zero1' &&
            five.className === 'zero2' &&
            seven.className === 'zero3' &&
            eight.className === 'zero4') {

            two.textContent = 'X';
            two.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (six.className === 'zero1' &&
            five.className === 'zero2' &&
            seven.className === 'zero3' &&
            two.className === 'zero4') {

            eight.textContent = 'X';
            eight.classList.add('X');
            p.textContent = 'Draw';
        }
        if (eight.className === 'zero1' &&
            five.className === 'zero2' &&
            three.className === 'zero3' &&
            six.className === 'zero4') {

            two.textContent = 'X';
            two.classList.add('X');
            p.textContent = 'Unfortunately, you lost :(';
        }
        if (eight.className === 'zero1' &&
            five.className === 'zero2' &&
            three.className === 'zero3' &&
            four.className === 'zero4') {

            six.textContent = 'X';
            six.classList.add('X');
            p.textContent = 'Draw';
        }
    };
};

ticTac();