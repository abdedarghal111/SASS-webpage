const messages = [
    "Soy programador full-stack.",
    "También me gusta programar videojuegos.",
    "Y sobre todo disfruto programando y aprendiendo cosas nuevas."
]

const textElement = document.querySelector("#functionalCodeBlock .dinamicText")
const waitEverySentence = 2 * 1000;
const waitEveryWord = 0.1 * 1000;
const waitEveryDeletedWord = 0.08 * 1000;
const waitEveryDeletedSentence = 0.5 * 1000;
const startingWords = "";

let currentSentence = 0;
let currentWord = 0;
let writing = true;

function writeWord(){
    textElement.innerText += messages[currentSentence].charAt(currentWord);
    currentWord++;
    setTimeout(recursiveUpdate,waitEveryWord);
}

function deleteWord(){
    textElement.innerText = textElement.innerText.substr(0,currentWord);
    currentWord--;
    setTimeout(recursiveUpdate,waitEveryDeletedWord);
}

function sentenceWritingComplete(){
    setTimeout(recursiveUpdate,waitEverySentence);
}

function sentenceDeletingComplete(){
    currentSentence++;
    if(currentSentence == messages.length){
        currentSentence = 0;
    }
    setTimeout(recursiveUpdate,waitEveryDeletedSentence);
}

function recursiveUpdate() {
    if(writing){//write mode
        //no words left to write
        if(currentWord >= messages[currentSentence].length){
            writing = false;
            sentenceWritingComplete();
        }else{// continue writing
            writeWord(currentWord);
        }


    }else{// erase mode
        if(currentWord < 0){// no words left to delete
            writing = true;
            sentenceDeletingComplete();
        }else{// continue deleting
            deleteWord();
        }
    }
}

recursiveUpdate();

