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
            {
                startMessage: document.querySelector('.message')
            }
        ];
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
    const { elements } = uiElements;
    const [randomWord, randomLink, startMessage] = elements;

    document.addEventListener('keyup', function (e) {
        startMessage.startMessage.style = 'display: none';

        newGame.getWordsFromJson('/wordData.json').then(function (res) {
            newGame.words = res.words;
            const singleWord = Array.from(newGame.getRandomWords(newGame.words));
            
        });
    });
    
})();