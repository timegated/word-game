(function init() {
    function WordGameArr() {
        this.wordArr = []
        this.randomWord = '';
        this.correctArr = [];
        this.guessArr = [];
        this.userGuess = [];
        this.wins = 0;
        this.losses = 0;
        this.remainingGuesses = 10;
    }

    const wordGame = new WordGameArr();

    WordGameArr.prototype.getWords = function () {
        fetch('../../wordData.json')
            .then(res => res.json())
            .then(data => {
                const { words } = data
                words.forEach(word => {
                    this.wordArr.push(word)
                })
            });
    };

    WordGameArr.prototype.getRandomWord = function () {
        return this.wordArr[Math.floor(Math.random() * this.wordArr.length - 1)]
    };

    wordGame.getWords();
    console.log(wordGame);
    
})();
