
const userWord = prompt("Type your word");
const userWord2 = prompt("Type your word");

function words (word1, word2) {

    if (word1.length === word2.length) {
        console.log ("word 1 e word2 hanno la stessa lunghezza");
        return [word1, word2]
    } else if (word1 > word2) { 
        console.log("word1 è più lunga di word2");
        return [word1];
    } else if (word1 < word2) {
        console.log("word2 è più lunga di word1");
        return [word2];
    }

}

const lunghezza = words(userWord, userWord2);
console.log(lunghezza);

