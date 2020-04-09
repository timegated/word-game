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
}

Object.prototype.randomIndex = function () {
    let randomIndex = Math.floor(Math.random() * this.jsConcepts.length)

    function saveIndex() {
        return randomIndex
    }
    return saveIndex();
};

Object.prototype.randomWord = function () {
    return this.jsConcepts[this.randomIndex()]
};

const { targets, correctWord, correctGuesses, userGuess } = wordGame;
const { remainingGuesses, losses, wins, randomWord, guesses } = targets;
// let correctLetters = correctWord.length;
remainingGuesses.textContent = 10
wins.textContent = 0;
losses.textContent = 0;

const createTheBlanks = () => {
    const randomWord = wordGame.randomWord();
    const word = [...randomWord.word];
    const answerArray = () => {
        return word.forEach(letter => {
            correctGuesses.push('_')
            correctWord.push(letter.toLowerCase())
            console.log(correctWord.length)
        })
    }

    return answerArray();
    // console.log(word);
    // console.log(link);
};

const displayTheBlanks = () => {
    randomWord.textContent = wordGame.correctGuesses.join(' ')
};

const logCorrectGuess = (letter, func) => {
    for (let i = 0; i < wordGame.correctWord.length; i++) {
        if (letter === wordGame.correctWord[i]) {
            wordGame.correctGuesses[i] = letter.toLowerCase();
        }
    }
    return func()
};

const displayUserGuesses = (letter) => {
    guesses.innerHTML = `<p>${[...wordGame.userGuess.add(letter)]}<p>`;
    
    if (remainingGuesses.textContent == 0) {
        losses.textContent++;
        initialize()
    }
};

const hideMessage = () => {
    const messageElement = document.querySelector('.message');
    messageElement.classList.add('play-state')
};

document.addEventListener('keyup', (e) => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        hideMessage()
        if (wordGame.correctWord.indexOf(e.key) > -1) {
            logCorrectGuess(e.key, displayTheBlanks)
        } else {
            displayUserGuesses(e.key);
            remainingGuesses.textContent--
            // wordGame.userGuess.push(e.key);
            // userGuessElement.textContent = wordGame.userGuess;
            // remainingGuessesElement.textContent--;
        }
        console.log(e.key);
    }
});

const initialize = () => {
    remainingGuesses.textContent = 10;
    randomWord.textContent = '';
    guesses.textContent = '';
    createTheBlanks();
};

initialize();

console.log(correctWord)
console.log(correctGuesses);
console.log(userGuess);