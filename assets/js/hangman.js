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
    guesses: [],
    userGuess: [],
    wins: 0,
    losses: 0,
    remainingGuesses: 10,
    targets: {
        losses: document.querySelector('.losses'),
        wins: document.querySelector('.wins'),
        randomWord: document.querySelector('.random-word'),
        guesses: document.querySelector('.guesses'),
        remainingGuesses: document.querySelector('remaining-guess')
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



const createTheBlanks = () => {
    const randomWord = wordGame.randomWord();
    const word = [...randomWord.word];
    const answerArray = () => {
        return word.forEach(letter => {
            wordGame.guesses.push('_')
            wordGame.correctWord.push(letter.toLowerCase())
        })
    }

    return answerArray();
    // console.log(word);
    // console.log(link);
};

const displayTheBlanks = () => {
    const randomWordElement = document.querySelector('.random-word');
    randomWordElement.textContent = wordGame.guesses.join(' ')
};

const logCorrectGuess = (letter, func) => {
    for (let i = 0; i < wordGame.correctWord.length; i++) {
        if (letter.key === wordGame.correctWord[i]) {
            wordGame.guesses[i] = letter.key.toLowerCase();
        }
    }
    return func()
};

document.addEventListener('keyup', (e) => {
    const userGuessElement = document.querySelector('.guesses');
    const winsElement = document.querySelector('.wins');
    const lossesElement = document.querySelector('.losses');
    winsElement.textContent = 0;
    lossesElement.textContent = 0;
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        if (wordGame.correctWord.indexOf(e.key) > -1) {
            logCorrectGuess(e, displayTheBlanks)
            console.log(wordGame.guesses)
            console.log('correct guess');
        } else {
            wordGame.userGuess.push(e.key);
            userGuessElement.textContent = wordGame.userGuess;

        }
        console.log(e.key);
    }
});

createTheBlanks()
displayTheBlanks()
console.log(wordGame.correctWord)
console.log(wordGame.guesses)