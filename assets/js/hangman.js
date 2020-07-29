(function () {
    // Game Constructor
    function WordGame() {
        this.totalGuesses = 10;
        this.wins = 0;
        this.losses = 0;
        this.userGuesses = [];
        this.words = [];
        this.blanks = [];
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

    WordGame.prototype.checkGuess = function (key, arr1, arr2, el) {
        for (let i = 0; i < arr1.length; i++) {
            if (key === arr1[i]) {
                console.log(`Key ${key} matched ${arr1[i]}`)
                arr2[i] = key;
            }
        }
        return true
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

            const singleWord = Array.from(newGame.getRandomWord(newGame.words));

            singleWord.forEach(function (letter) {
               return newGame.blanks.push('_');
            });
            
            // Blanks displayed in html
            randomWord.innerHTML = newGame.blanks.join(' ')
            document.addEventListener('keyup', function (e) {
                 startMessage.style.display = 'none';
                newGame.checkGuess(e.key, singleWord, newGame.blanks)
                // console.log(newGame.checkGuess(e.key, singleWord))
             });
        });
    });
})();
