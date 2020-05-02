(function () {
    // Game Constructor

    function WordGame() {
        this.totalGuesses = 10;
        this.wins = 0;
        this.losses = 0;
    };

    function Elements() {
        this.elements = [
            {
                randomWord: document.querySelector('.random-word')
            }, 
            {
                randomLink: document.querySelector('.random-link')
            },
        ]
    };

    // Modifiying prototype of game constructor

    WordGame.prototype.getRandomWords = function (arr) {
        return arr[Math.floor(Math.random() * arr.length) + 1].word;
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

    newGame.getWordsFromJson('/wordData.json').then(function (res) {
        const uiElements = new Elements();
        const { elements } = uiElements;
        const [randomWord, randomLink] = elements;
        newGame.words = res.words;
        randomWord.randomWord.textContent = newGame.getRandomWords(newGame.words);
    });
})();