(function init() {
    const wordGame = {
        jsConcepts: [{
                word: 'Closures',
                link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures'
            },
            {
                word: 'Prototype',
                link: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes'
            },
            {
                word: 'Scope',
                link: 'https://developer.mozilla.org/en-US/docs/Glossary/Scope'
            },
            {
                word: 'Object',
                link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object'
            },
            {
                word: 'Function',
                link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function'
            },
            {
                word: 'HTTP',
                link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP'
            },
            {
                word: 'REST',
                link: 'https://developer.mozilla.org/en-US/docs/Glossary/REST'
            },
            {
                word: 'NODEJS',
                link: 'https://developer.mozilla.org/en-US/docs/Glossary/Node.js'
            },
            {
                word: 'IFFE',
                link: 'https://developer.mozilla.org/en-US/docs/Glossary/IIFE'
            }
        ],
        correctWord: [],
        correctGuesses: [],
        userGuess: new Set(),
        targets: {
            losses: document.querySelector('.losses'),
            wins: document.querySelector('.wins'),
            randomWord: document.querySelector('.random-word'),
            guesses: document.querySelector('.guesses'),
            remainingGuesses: document.querySelector('.remaining-guess')
        }
    };

    Object.prototype.randomIndex = function () {
        let randomIndex = Math.floor(Math.random() * this.jsConcepts.length)

        function saveIndex() {
            return randomIndex;
        }
        return saveIndex();
    };

    Object.prototype.randomWord = function () {
        return this.jsConcepts[this.randomIndex()];
    };


    let {
        targets,
        correctWord,
        correctGuesses,
        userGuess
    } = wordGame;
    const {
        remainingGuesses,
        losses,
        wins,
        randomWord,
        guesses
    } = targets;
    let correctLength = correctGuesses.length;
    remainingGuesses.textContent = 10;
    wins.textContent = 0;
    losses.textContent = 0;

    const createTheBlanks = () => {
        const randomWord = wordGame.randomWord();
        const word = [...randomWord.word];

        word.forEach(letter => {
            correctGuesses.push('_')
            correctWord.push(letter.toLowerCase())
        });

    };

    const displayTheBlanks = () => {
        randomWord.textContent = correctGuesses.join(' ');
        return true
    };


    const logCorrectGuess = (letter, func) => {

        for (let i = 0; i < wordGame.correctWord.length; i++) {
            if (letter === wordGame.correctWord[i]) {
                correctGuesses[i] = letter.toLowerCase();
            };
        };
        if (func()) {
            correctLength++
            console.log(correctLength)
            console.log(correctWord.length)
            if (correctLength === correctWord.length) {
                init()
            };
        };
    };

    const displayUserGuesses = (letter) => {
        guesses.innerHTML = `<p>${[...userGuess.add(letter)]}<p>`;

        if (remainingGuesses.textContent == 0) {
            losses.textContent++;
            initialize();
        };
    };

    const hideMessage = () => {
        const messageElement = document.querySelector('.message');
        messageElement.classList.add('play-state');
    };


    const initialize = () => {
        remainingGuesses.textContent = 10;
        randomWord.textContent = '';
        guesses.textContent = '';
        userGuess.clear();
        correctWord = [];
        correctGuess = [];
        createTheBlanks();
    };

    document.addEventListener('DOMContentLoaded', () => {
        createTheBlanks()
        displayTheBlanks()
        document.addEventListener('keyup', (e) => {
            if (e.keyCode >= 65 && e.keyCode <= 90) {
                hideMessage()
                if (correctWord.indexOf(e.key) > -1) {
                    logCorrectGuess(e.key, displayTheBlanks)
                } else {
                    displayUserGuesses(e.key);
                    remainingGuesses.textContent--;
                };
                console.log(e.key);
            };
        });
    });
}());