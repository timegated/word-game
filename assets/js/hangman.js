function WordGameArr(wordArr, correctArr, guessArr, userGuessArr) {
    this.wordArr = wordArr;
    this.correctArr = correctArr;
    this.guessArr = guessArr;
    this.userGuess = userGuessArr;
}

const wordGameArrays = new WordGameArr([],[],[],[])


const { wordArr } = wordGameArrays;

WordGameArr.prototype.getWords = function () {
    fetch('../../wordData.json')
        .then(res => res.json())
        .then(data => {
            const { words } = data
            words.forEach(word => {
                wordArr.push(word)
            })
        });    
}

console.log(WordGameArr.prototype)
wordGameArrays.getWords();

