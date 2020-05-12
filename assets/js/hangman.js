(function () {
    // Game Constructor
    function WordGame() {
        this.totalGuesses = 10;
        this.wins = 0;
        this.losses = 0;
        this.userGuesses = [];
    };

    function Elements() {
        this.randomWord = document.querySelector('.random-word')
        this.randomLink = document.querySelector('.random-link')
        this.startMessage = document.querySelector('.message')
        this.userGuesses = document.querySelector('.guesses')
        this.remainingGuesses = document.querySelector('.remaining-guess')
        this.wins = document.querySelector('.wins')
        this.losses = document.querySelector('.losses')
    };

    // Modifiying prototype of game constructor
    WordGame.prototype.getRandomWord = function (arr) {
        return arr[Math.floor(Math.random() * arr.length)].word.toLowerCase();
    };

    WordGame.prototype.getWordsFromJson = function (url) {
        return fetch(url)
            .then(function (res) {
                return res.json();
            })
            .catch(function (err) {
                console.log(err);
            });
    };

    // Instantiate a new game
    const newGame = new WordGame();
   
    // Instantiate ui
    const uiElements = new Elements();
    const {
        randomWord,
        randomLink,
        remainingGuesses,
        startMessage,
        userGuesses,
        wins,
<<<<<<< HEAD
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
=======
        losses
    } = uiElements;
    
    document.addEventListener('DOMContentLoaded', function (e) {
        console.log('[Load Success]', e.type)
        // Outside of event listener to prevent reloading of random word
        // If all the letters are guessed correctly, the wins increment by 1
        // Page reloads with new random word
        newGame.getWordsFromJson('/wordData.json').then(function (res) {
            remainingGuesses.textContent = 10;
            wins.textContent = 0;
            losses.textContent = 0;
            newGame.words = res.words;
            // Singleword created from random word array
            const singleWord = Array.from(newGame.getRandomWord(newGame.words));
            // Word blanks array created with map
            const wordBlanks = singleWord.map(function (letter) {
                return "_";
            });
            // Blanks displayed in html
            randomWord.textContent = wordBlanks;
             document.addEventListener('keyup', function (e) {
                 startMessage.style.display = 'none';
               
             });
        });
    });
})();
>>>>>>> bcbef8d487ba205fe5f6d0a1a964fe5430dda7a1
