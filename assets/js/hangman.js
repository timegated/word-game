(function () {
    // Game Constructor

    function WordGame() {
        this.totalGuesses = 10;
        this.wins = 0;
        this.losses = 0;
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

    WordGame.prototype.getRandomWords = function (arr) {
        return arr[Math.floor(Math.random() * arr.length)].word;
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
        losses
    } = uiElements;

    document.addEventListener('keyup', function (e) {
        startMessage.style = 'display: none';

        newGame.getWordsFromJson('/wordData.json').then(function (res) {
            newGame.words = res.words;
            const singleWord = Array.from(newGame.getRandomWords(newGame.words));
            const wordBlanks = singleWord.map(function (letter) {
                return "_"
            });
            randomWord.textContent = wordBlanks;
            
        });
    });
})();