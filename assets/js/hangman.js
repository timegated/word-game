const hangManGame = {
    jsConcepts: [
        {
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
    guesses: [],
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



const generateRandomWord = (str) => {
    for (let value in str) {
        str[value] = "_"
    }
    return str;
};


// Remove duplicates from userGuess array



const checkForMatch = (word, wholeWord, guess, letter) => {
    let foundLetter = false;
    // console.log('[the whole word]', wholeWord)
    // console.log('[user\'s guess]', guess)
    // console.log('[splitWord inside checkForMatch]', word)
    const splitWholeWord = wholeWord.toLowerCase().split('')

    // If any of the values match in splitWholeWord, replace the blanks with the correct letter

    console.log('[splitting the whole word]', splitWholeWord)
    for (let value in splitWholeWord) {
        if (letter === splitWholeWord[value]) {
            userGuess[value] = letter
            console.log('[correct letter found in splitWholeWord]')
            foundLetter = true;
            console.log(foundLetter)
        };
    };
    if (!foundLetter) {
        if (!userGuess.includes(letter)) {
            userGuess.push(event.key)
            userGuess = checkForDuplicateGuesses(userGuess)
            USER_GUESSES.innerText = userGuess.join('')
            REMAINING_GUESSES.innerText--
        };
    };
    
};

// console.log('[splitWord outside of function]', splitWord)
// WINS.innerText = wins;
// LOSSES.innerText = losses;
// REMAINING_GUESSES.innerText = remainingGuesses;
// RANDOM_WORD.innerText = generateRandomWord(splitWord)
// document.addEventListener('keyup', listenForUserActions);