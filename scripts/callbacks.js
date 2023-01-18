// alert('CALLBACKS.JS!');

// Where will this output?
console.log('Hello, World!');

function sayHello(name = 'World') {
    console.log(`Hello, ${name}!`);
    return `Hello, ${name}!`;
}

// Say hello after 2 seconds.
setTimeout(sayHello, 2000);

setTimeout(function() {
    console.log('Hey, we waited 3 seconds this time.');
    sayHello('Jessica');
}, 3000);

// Find the addition button...
const additionButton = document.querySelector('#addition-button');
console.log('additionButton:', additionButton);

function additionButtonClicked() {
    console.log('Button clicked!');

    const answer = 567 + 34;
    console.log('567 + 34 =', answer);

    additionButton.textContent = answer;
}

additionButton.addEventListener('click', additionButtonClicked);

// Seconds counter button...

const secondsCounterButton = document.querySelector('#seconds-counter-button');
console.log('secondsCounterButton:', secondsCounterButton);

secondsCounterButton.addEventListener('click', function() {
    console.log('secondsCounterButton Clicked!');
    secondsCounterButton.setAttribute('disabled', true);

    let secondsCounted = 0;

    setInterval(function() {
        secondsCounted = secondsCounted + 1;
        console.log('secondsCounted:', secondsCounted);
        secondsCounterButton.textContent = `${secondsCounted} seconds have passed.`;
    }, 1000);
});

// Text field experiments

const textField = document.querySelector('#text-field'); // $('#text-field')
console.log('textField:', textField);

textField.addEventListener('focus', () => {
    textField.style.border = '2px solid green';
});

textField.addEventListener('keyup', () => {
    console.log('textField contains:', textField.value);
});

// Stopwatch output...

const stopwatch = document.getElementById('stopwatch');
console.log('stopwatch:', stopwatch);

let stopwatchInterval = null;

stopwatch.addEventListener('click', () => {
    stopwatch.textContent = '00:00';

    if (stopwatchInterval) {
        clearInterval(stopwatchInterval);
    }

    let timeElapsed = 0;
    stopwatchInterval = setInterval(function() {
        timeElapsed++;

        let seconds = Math.floor(timeElapsed % 60);
        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        let minutes = Math.floor(timeElapsed / 60);
        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        stopwatch.textContent = `${minutes}:${seconds}`;

    }, 1000);
});
