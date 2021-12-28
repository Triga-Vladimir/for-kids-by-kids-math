const a = document.querySelector('.a');
const b = document.querySelector('.b');
const operator = document.querySelector('.operator');
const equals = document.querySelector('.equals');
const button = document.querySelector('.button');
const result = document.querySelector('.result');
const body = document.querySelector('.body');
const good = document.querySelector('.resultGood');
const lost = document.querySelector('.resultLost');
const confeti = document.querySelector('#world');



// Генератор Оператора для операндов

const months = ["+", "-"];

let random = 0;
function generationOperator() {
    random = Math.floor(Math.random() * months.length);
    operator.textContent = months[random];
}
// Генератор рандомного числа

let nuberOne = 0;
let nuberTwo = 0;

function randomNuber() {
    return Math.round(Math.random(1) * 20);
}

// РОТАЦИЯ Чисел от большего к меньшему
function rotation() {
    nuberOne = randomNuber();
    nuberTwo = randomNuber();

    if (nuberOne > nuberTwo) {
        a.textContent = nuberOne;
        b.textContent = nuberTwo;
        result.focus();
        return
    }

    a.textContent = nuberTwo;
    b.textContent = nuberOne;
    result.focus();

}

rotation();
generationOperator();


// ЗВУКИ
let resultGood = 0;
let resultLost = 0;
function goodSound() {
    new Audio('../sound/aplo.mp3').play();
    new Audio('../sound/yoohoo.mp3').play();
}

const lostSound = new Audio('../sound/lost.mp3');

// Обработчик style Результата

function resultGoodEvent() {
    result.value = ' ';

    confeti.classList.remove('is-hidden');
    setTimeout(() => {
        confeti.classList.add('is-hidden');
        resultGood += 1;
        good.textContent = `Правильно Выполнено Заданий: ${resultGood}`;
    }, 1500);
}

function resultLostEvent() {
    result.value = ' ';
    body.classList.add('is-hidden');
    body.classList.add('failure');

    setTimeout(() => {
        body.classList.remove('is-hidden');
        body.classList.remove('failure');
        resultLost += 1;
        lost.textContent = `Не Правильно Выполнено Заданий: ${resultLost}`;

    }, 800);
}



// Таски и обработчики событий


button.addEventListener('click', taks);
result.addEventListener('keydown', (e) => e.code == 'NumpadEnter' && taks());

function taks() {
    let num = Math.floor(result.value);
    if (random == 0) {

        if (+(nuberOne + nuberTwo) == num) {
            rotation();
            generationOperator();
            goodSound();
            resultGoodEvent();
        } else {
            lostSound.play();
            result.focus();
            resultLostEvent();
        }
    } else {

        if (nuberOne > nuberTwo) {
            if ((nuberOne - nuberTwo) == num) {
                rotation();
                generationOperator();
                goodSound();
                resultGoodEvent();
            } else {
                lostSound.play();
                result.focus();
                resultLostEvent();
            }
        } else {
            if ((nuberTwo - nuberOne) == num) {
                rotation();
                generationOperator();
                goodSound();
                resultGoodEvent();
            } else {
                lostSound.play();
                result.focus();
                resultLostEvent();
            }
        }
    }


}

