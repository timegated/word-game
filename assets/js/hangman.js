const wordGame = {
    jsConcepts:[],
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
const { jsConcepts } = wordGame;
fetch('../../wordData.json')
    .then(res => res.json())
    .then(data => {
        const { words } = data;
        words.forEach(word => {
            jsConcepts.push(word)
        })
    });
    
console.log(jsConcepts)


// Object.prototype.randomIndex = function () {
//     let randomIndex = Math.floor(Math.random() * this.jsConcepts.length)

//     function saveIndex() {
//         return randomIndex;
//     }
//     return saveIndex();
// };

// Object.prototype.randomWord = function () {
//     return this.jsConcepts[this.randomIndex()];
// };


// let { targets, correctWord, correctGuesses, userGuess } = wordGame;
// const { remainingGuesses, losses, wins, randomWord, guesses } = targets;
// let correctLength = correctGuesses.length;
// remainingGuesses.textContent = 10;
// wins.textContent = 0;
// losses.textContent = 0;

// const createTheBlanks = () => {
//     const randomWord = wordGame.randomWord();
//     const word = [...randomWord.word];
    
//     word.forEach(letter => {
//         correctGuesses.push('_')
//         correctWord.push(letter.toLowerCase())
//     });

// };

// const displayTheBlanks = () => {
//     randomWord.textContent = correctGuesses.join(' ');
//     return true
// };


// const logCorrectGuess = (letter, func) => {
    
//     for (let i = 0; i < wordGame.correctWord.length; i++) {
//         if (letter === wordGame.correctWord[i]) {
//             correctGuesses[i] = letter.toLowerCase();
//         };
//     };
//     if (func()) {
//         correctLength++
//         console.log(correctLength)
//         console.log(correctWord.length)
//         if (correctLength === correctWord.length) {
//             console.log(`you won`)
//         };
//     };
// };

// const displayUserGuesses = (letter) => {
//     guesses.innerHTML = `<p>${[...userGuess.add(letter)]}<p>`;
    
//     if (remainingGuesses.textContent == 0) {
//         losses.textContent++;
//         initialize();
//     };
// };

// const hideMessage = () => {
//     const messageElement = document.querySelector('.message');
//     messageElement.classList.add('play-state');
// };


// const initialize = () => {
//     remainingGuesses.textContent = 10;
//     randomWord.textContent = '';
//     guesses.textContent = '';
//     userGuess.clear();
//     correctWord = [];
//     correctGuess = [];
//     createTheBlanks();
// };

// document.addEventListener('DOMContentLoaded', () => {
//     createTheBlanks();
//     displayTheBlanks();
//     console.log(correctWord.length)
//     console.log(correctWord)
//     document.addEventListener('keyup', (e) => {
//         if (e.keyCode >= 65 && e.keyCode <= 90) {
//             hideMessage()
//             if (correctWord.indexOf(e.key) > -1) {
//                 logCorrectGuess(e.key, displayTheBlanks)
//             } else {
//                 displayUserGuesses(e.key);
//                 remainingGuesses.textContent--;
//             };
//             console.log(e.key);
//         };
//     });
// });

