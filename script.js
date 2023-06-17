let randomWord;

var dictionary = {
    w1: ["Access", "['æk.ses]", "Доступ"],
    w2: ["Affect", "[ə'fekt]", "Впливати"],
    w3: ["Present", "['prez.ənt]", "Подарунок"],
    w4: ["Effort", "['ef.ɚt]", "Зусилля"],
    w5: ["Impact", "['Im.pækt]", "Вплив"],
    w6: ["Hello", "[hə'loʊ]", "Привіт"],
    w7: ["Goodbye", "[gʊd'baI]", "До зустрічі"],
    w8: ["Thank you", "[θæŋk ju:]", "Дякую"],
    w9: ["Please", "[pli:z]", "Будь ласка"],
    w10: ["Sorry", "['sɔ:ri]", "Вибачте"],
    w11: ["Help", "[hɛlp]", "Допомога"],
    w12: ["Friend", "[frɛnd]", "Друг"],
    w13: ["Family", "['fæməli]", "Сім'я"],
    w14: ["Love", "[lʌv]", "Любов"],
    w15: ["Food", "[fu:d]", "Їжа"],
    w16: ["Water", "['wɔ:tər]", "Вода"],
    w17: ["Book", "[bʊk]", "Книга"],
    w18: ["School", "[sku:l]", "Школа"],
    w19: ["Work", "[wɜ:rk]", "Робота"],
    w20: ["Travel", "['trævəl]", "Подорож"],
    w21: ["Music", "['mju:zIk]", "Музика"],
    w22: ["Movie", "['mu:vi]", "Фільм"],
    w23: ["Time", "[taIm]", "Час"],
    w24: ["Money", "['mʌni]", "Гроші"],
    w25: ["Dream", "[dri:m]", "Мрія"],
}

var leadrnedWords = {};

var words = Object.keys(dictionary);
var choseSide = 1;
var mainWindow = document.getElementById('main-word');
mainWindow.onclick = function(){
    changeSideOfTheCard();
}
mainWindow.onmouseleave = function(){
    if (choseSide == 0){
        choseSide = 1;
        document.getElementById('front').style.transform = "perspective( 700px ) rotateY( 0deg )";
        document.getElementById('back').style.transform = "perspective( 700px ) rotateY( 180deg )";
    }
}

document.getElementById("submit").onclick = function(){
    checkTheCard();
}

function changeSideOfTheCard(){
    if (choseSide == 1){
        choseSide = 0;
        document.getElementById('front').style.transform = "perspective( 700px ) rotateY( -180deg )";
        document.getElementById('back').style.transform = "perspective( 700px ) rotateY( 0deg )";
    } else {
        choseSide = 1;
        document.getElementById('front').style.transform = "perspective( 700px ) rotateY( 0deg )";
        document.getElementById('back').style.transform = "perspective( 700px ) rotateY( 180deg )";
    }
}

function checkTheCard(){
    let input = document.getElementById("input-field").value.toLowerCase().trim();
    let currentWord = dictionary[randomWord][2].toLowerCase().trim();

    if(input == currentWord){
        document.getElementById("input-field").value = "";

        document.getElementById("submit").style.backgroundColor = "#00ff00";
        //document.getElementById("input-field").style.transition = "background-color 0.6s ease";
        setTimeout(function() {
            document.getElementById("submit").style.backgroundColor = "var(--btn-color)";
            document.getElementById("submit").style.color = "var(--bgc-word)";
          }, 300);
        document.getElementById("input-field").focus();
        leadrnedWords[randomWord] = dictionary[randomWord];
        delete dictionary[randomWord];
        let index = words.indexOf(randomWord);
        if(index !== -1){
            words.splice(index, 1);
        }
        nextWord();
    } else {
        document.getElementById("submit").style.backgroundColor = "#ff0000";
        setTimeout(function() {
            document.getElementById("submit").style.backgroundColor = "var(--btn-color)";
            document.getElementById("submit").style.color = "var(--bgc-word)";
          }, 300);
          document.getElementById("input-field").focus();
    }
}

function nextWord(){
    if (Object.entries(dictionary).length !== 0){
        let randomIndex = Math.floor(Math.random() * words.length);
        randomWord = words[randomIndex];
        document.getElementById("word").innerHTML = dictionary[randomWord][0];
        document.getElementById("transcription").innerHTML = dictionary[randomWord][1];
        document.getElementById("word-translate").innerHTML = dictionary[randomWord][2];
        document.getElementById("next-word").style.backgroundColor = "#00ff00";
        //document.getElementById("input-field").style.transition = "background-color 0.6s ease";
        setTimeout(function() {
            document.getElementById("next-word").style.backgroundColor = "var(--btn-color)";
            document.getElementById("next-word").style.color = "var(--bgc-word)";
          }, 300);
    } else {
        document.getElementById("submit").disabled = true;
        document.getElementById("word").innerHTML = "Congratulation!";
        document.getElementById("transcription").innerHTML = "you learned all words in this page";
        document.getElementById("word-translate").innerHTML = "Вітаємо, ви вивчили всі слова";
        document.getElementById("next-word").style.backgroundColor = "#ff0000";
        //document.getElementById("input-field").style.transition = "background-color 0.6s ease";
        setTimeout(function() {
            document.getElementById("next-word").style.backgroundColor = "var(--btn-color)";
            document.getElementById("next-word").style.color = "var(--bgc-word)";
          }, 300);
    }
}

//_____HANDLERS_______

document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowRight') {
        nextWord();
    }
});

document.addEventListener('keydown', (event) => {
    if (Object.entries(dictionary).length !== 0) {
        if (event.code === 'Enter') {
            checkTheCard();
        }
    }
});

document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowUp') {
        changeSideOfTheCard();
    }
});