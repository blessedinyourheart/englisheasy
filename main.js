// ПЕРЕВЕРТАННЯ КАРТОЧОК

var choseSide = 1;
var mainWindow = document.getElementById('main-word');
mainWindow.onclick = function () {
    changeSideOfTheCard();
}

mainWindow.onmouseleave = function () {
    if (choseSide == 0) {
        choseSide = 1;
        document.getElementById('front').style.transform = "perspective( 700px ) rotateY( 0deg )";
        document.getElementById('back').style.transform = "perspective( 700px ) rotateY( 180deg )";
    }
}

function changeSideOfTheCard() {
    if (choseSide == 1) {
        choseSide = 0;
        document.getElementById('front').style.transform = "perspective( 700px ) rotateY( -180deg )";
        document.getElementById('back').style.transform = "perspective( 700px ) rotateY( 0deg )";
    } else {
        choseSide = 1;
        document.getElementById('front').style.transform = "perspective( 700px ) rotateY( 0deg )";
        document.getElementById('back').style.transform = "perspective( 700px ) rotateY( 180deg )";
    }
}

// ПЕРЕВЕРТАННЯ КАРТОЧОК

// АКТИВНИЙ ФУТЕР

const list = document.querySelectorAll(".list");

function activeLink(){
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
}

list.forEach((item) => 
item.addEventListener('click', activeLink));

// АКТИВНИЙ ФУТЕР

//ВИБІР РЕЖИМУ ТЕСТУВАННЯ

var testMode = 0;
document.getElementById("mode_test").onclick = function(){
    if(testMode !== 1){
        setTimeout(function () {
            choseMode(1);
            nextWord();
            createVariantsForTest();
        }, 600);
    }
}
document.getElementById("mode_couple").onclick = function(){
    if(testMode !== 2){
        setTimeout(function () {
            choseMode(2);
        }, 600);
    }
}
document.getElementById("mode_input").onclick = function(){
    if(testMode !== 3){
        setTimeout(function () {
            choseMode(3);
        }, 600);
    }
}
document.getElementById("learn_word").onclick = function(){
    if(testMode !== 4){
        setTimeout(function () {
            choseMode(4);
        }, 600);
    }
}
document.getElementById("setting_btn").onclick = function(){
    if(testMode !== 5){
        setTimeout(function () {
            choseMode(5);
        }, 600);
    }
}

function choseMode(current){
    if (current == 1) {
        if (testMode == 0) {
            document.getElementById("next-word").classList.add("hidden");
            testMode = 1;
            document.getElementById("canvas_test").classList.remove("hidden");
        } else if (testMode == 1){
        } else if (testMode == 2){
            document.getElementById("canvas_test_couple").classList.add("hidden");
            testMode = 1;
            document.getElementById("canvas_test").classList.remove("hidden");
        } else if (testMode == 3){
            document.getElementById("canvas_test_input").classList.add("hidden");
            testMode = 1;
            document.getElementById("canvas_test").classList.remove("hidden");
        } else if (testMode == 4){
            document.getElementById("next-word").classList.add("hidden");
            testMode = 1;
            document.getElementById("canvas_test").classList.remove("hidden");
        } else {
            document.getElementById("setting_menu").classList.add("hidden");
            testMode = 1;
            document.getElementById("canvas_test").classList.remove("hidden");
        }
    } else if (current == 2){
        if (testMode == 0) {
            document.getElementById("next-word").classList.add("hidden");
            testMode = 2;
            document.getElementById("canvas_test_couple").classList.remove("hidden");
        } else if (testMode == 1){
            document.getElementById("canvas_test").classList.add("hidden");
            testMode = 2;
            document.getElementById("canvas_test_couple").classList.remove("hidden");
        } else if (testMode == 2){
        } else if (testMode == 3){
            document.getElementById("canvas_test_input").classList.add("hidden");
            testMode = 2;
            document.getElementById("canvas_test_couple").classList.remove("hidden");
        } else if (testMode == 4){
            document.getElementById("next-word").classList.add("hidden");
            testMode = 2;
            document.getElementById("canvas_test_couple").classList.remove("hidden");
        } else {
            document.getElementById("setting_menu").classList.add("hidden");
            testMode = 2;
            document.getElementById("canvas_test_couple").classList.remove("hidden");
        }
    } else if (current == 3){
        if (testMode == 0) {
            document.getElementById("next-word").classList.add("hidden");
            testMode = 3;
            document.getElementById("canvas_test_input").classList.remove("hidden");
        } else if (testMode == 1){
            document.getElementById("canvas_test").classList.add("hidden");
            testMode = 3;
            document.getElementById("canvas_test_input").classList.remove("hidden");
        } else if (testMode == 2){
            document.getElementById("canvas_test_couple").classList.add("hidden");
            testMode = 3;
            document.getElementById("canvas_test_input").classList.remove("hidden");
        } else if (testMode == 3){
        } else if (testMode == 4){
            document.getElementById("next-word").classList.add("hidden");
            testMode = 3;
            document.getElementById("canvas_test_input").classList.remove("hidden");
        } else {
            document.getElementById("setting_menu").classList.add("hidden");
            testMode = 3;
            document.getElementById("canvas_test_input").classList.remove("hidden");
        }
    } else if (current == 4) {
        if (testMode == 0) {
            document.getElementById("next-word").classList.remove("hidden");
            testMode = 4;
        } else if (testMode == 1){
            document.getElementById("canvas_test").classList.add("hidden");
            testMode = 4;
            document.getElementById("next-word").classList.remove("hidden");
        } else if (testMode == 2){
            document.getElementById("canvas_test_couple").classList.add("hidden");
            testMode = 4;
            document.getElementById("next-word").classList.remove("hidden");
        } else if (testMode == 3){
            document.getElementById("canvas_test_input").classList.add("hidden");
            testMode = 4;
        } else if (testMode == 4){
        } else {
            document.getElementById("setting_menu").classList.add("hidden");
            testMode = 4;
            document.getElementById("next-word").classList.remove("hidden");
        }
    } else if (current == 5){
        if (testMode == 0) {
            document.getElementById("next-word").classList.remove("hidden");
            testMode = 5;
            document.getElementById("setting_menu").classList.remove("hidden");
        } else if (testMode == 1){
            document.getElementById("canvas_test").classList.add("hidden");
            testMode = 5;
            document.getElementById("setting_menu").classList.remove("hidden");
        } else if (testMode == 2){
            document.getElementById("canvas_test_couple").classList.add("hidden");
            testMode = 5;
            document.getElementById("setting_menu").classList.remove("hidden");
        } else if (testMode == 3){
            document.getElementById("canvas_test_input").classList.add("hidden");
            testMode = 5;
            document.getElementById("setting_menu").classList.remove("hidden");
        } else if (testMode == 4){
            document.getElementById("next-word").classList.add("hidden");
            testMode = 5;
            document.getElementById("setting_menu").classList.remove("hidden");
        } else {
        }
    }
}

//ВИБІР РЕЖИМУ ТЕСТУВАННЯ


var dictionary = {
    "apple": ["['æpl]", ["яблуко"]],
    "will": ["[wIl]", ["воля", "бажання", "твердий намір"]],
    "execute": ["['eksIkju:t]", ["виповнити", "стратити", "оформити"]],
    "existence": ["[Ig'zIstəns]", ["життя", "існування", "наявність"]],
    "curtain": ["['kɜ:tən]", ["штора"]],
    "once": ["", ["одного разу"]],
    "there was": ["", ["був", "була", "було"]],
    "lovely": ["", ["мила"]],
    "princess": ["", ["принцеса"]],
    "enchantment": ["", ["зачарування"]],
    "fearful": ["", ["жахливий"]],
    "sort": ["", ["вид", "сорт"]],
    "which": ["", ["котрий", "який"]],
    "kiss": ["", ["поцілунок"]],
    "broken": ["", ["зламаний", "розбитий"]],
    "locked": ["", ["заблокований"]],
    "locked away": ["", ["замкнений"]],
    "castle": ["", ["замок", "фортеця"]],
    "guarded": ["", ["охороняється"]],
    "guard": ["", ["варта", "охорона"]],
    "terrible": ["", ["страшний"]],
    "fire-breathing": ["", ["вогнедишний"]],
    "dragon": ["", ["дракон"]],
    "brave": ["", ["хоробрий"]],
    "knight": ["", ["лицар", "рицар"]],
    "attempt": ["", ["спроба"]],
    "attempted": ["", ["намагався"]],
    "to free": ["", ["звільнити"]],
    "dreadful": ["", ["жахливий", "огидний"]],
    "prison": ["", ["в'язниця", "тюрма", "ув'язнювати"]],
    "none prevailed": ["", ["жоден не переміг"]],
    "dragon's keep": ["", ["фортеця дракона"]],
    "waited": ["", ["чекав"]],
    "highest": ["", ["найвищий"]],
    "tallest": ["", ["найвищий"]],
    "like": ["", ["любити", " подібний", "хожий", "ніби", "немов"]],
    "a load of": ["", ["навантаження"]],
    "get": ["", ["отримати", "зрозуміти"]],
    "hold on" : ["", ["зачекай"]],
    "grind" : ["", ["дрібнити", "молоти", "терти"]],
    "bread": ["", ["хліб"]],
    "actually": ["", ["насправді"]],
    "giant": ["", ["гігант", "велетень"]],
    "ogres": ["", ["огри"]],
    "worse": ["", ["гірше"]],
    "suit": ["", ["костюм"]],
    "fresh": ["", ["свіжий", "натуральний"]]
}
var mainWord = "";
var mainTranscription = "";
var mainTranslate = "";
let idVariants = ["var_one","var_two","var_three","var_four"];

document.getElementById("next-word").onclick = function () {
    document.getElementById("next-word").style.backgroundColor = "#42703C";
    setTimeout(function () {
        document.getElementById("next-word").style.backgroundColor = "var(--green-bgc)";
    }, 300);
    nextWord();
}

function nextWord() {
    if (Object.entries(dictionary).length !== 0) {
        words = Object.keys(dictionary);
        let randomIndex = Math.floor(Math.random() * words.length);
        randomWord = words[randomIndex];
        document.getElementById("word").innerHTML = randomWord.toUpperCase();

        document.getElementById("transcription").innerHTML = dictionary[randomWord][0];
        let translate = "";
        for (i = 0; i < dictionary[randomWord][1].length; i++) {
            translate += dictionary[randomWord][1][i] + "<br>";
        }
        document.getElementById("word-translate").innerHTML = translate.toUpperCase();
        mainWord = randomWord;
        mainTranscription = dictionary[randomWord][0];
        mainTranslate = dictionary[randomWord][1];
    } else {
        document.getElementById("word").innerHTML = "Congratulation!";
        document.getElementById("transcription").innerHTML = "you learned all words in this page";
        document.getElementById("word-translate").innerHTML = "Вітаємо, ви вивчили всі слова";
    }
}

let selectedVariant = '';

var options = document.getElementsByClassName("option");
for (var i = 0; i < options.length; i++) {
  options[i].addEventListener("click", handleOptionClick);
  options[i].style.backgroundColor = "var(--bgc_card)";
}

function handleOptionClick(event) {
    var selectedOption = event.target;
    // Если выбранный вариант уже имеет выделение (фоновый цвет), снимаем его
    if (selectedOption.style.backgroundColor === "lightblue") {
      selectedOption.style.backgroundColor = "var(--bgc_card)";
      selectedVariant = '';
      return; // Прерываем выполнение функции, чтобы не устанавливать новое выделение
    }
    // Сбросить стили всех вариантов ответа
    for (var i = 0; i < options.length; i++) {
      options[i].style.backgroundColor = "var(--bgc_card)";
    }
    // Изменить стиль выбранного варианта ответа
    var selectedOption = event.target;
    selectedOption.style.backgroundColor = "lightblue";
    selectedVariant = selectedOption;
  }

function createVariantsForTest(){
    let choseId = Math.floor(Math.random() * idVariants.length);
    document.getElementById(idVariants[choseId]).innerHTML = mainTranslate[Math.floor(Math.random() * mainTranslate.length)];
    for (let i = 0; i < idVariants.length; i++){
        if (i == choseId){
            document.getElementById(idVariants[choseId]).innerHTML = mainTranslate[Math.floor(Math.random() * mainTranslate.length)];
        } else {
            document.getElementById(idVariants[i]).innerHTML = dictionary[Object.keys(dictionary)[Math.floor(Math.random() * Object.keys(dictionary).length)]][1][Math.floor(Math.random() * this.length)];
        }
    }
}

document.getElementById("apply_variants").onclick = function () {
    checkVariant();
}

function checkVariant(){
    if (selectedVariant == 0 || selectedVariant == ''){
        console.log("Виберіть варінт для відповіді");
    } else {
        if (dictionary[mainWord][1].includes(selectedVariant.textContent)){
            document.getElementById(selectedVariant.id).classList.add('div-glow-true');
            setTimeout(function () {
                document.getElementById(selectedVariant.id).style.backgroundColor = "var(--bgc_card)";
                document.getElementById(selectedVariant.id).classList.remove('div-glow-true');
            }, 500);
            setTimeout(function () {
                nextWord();
                createVariantsForTest();
                selectedVariant = '';
            },500);
        } else {
            document.getElementById(selectedVariant.id).classList.add('div-glow-wrong');
            setTimeout(function () {
                document.getElementById(selectedVariant.id).style.backgroundColor = "var(--bgc_card)";
                document.getElementById(selectedVariant.id).classList.remove('div-glow-wrong');
                selectedVariant = '';
            }, 500);
        }
    }
}


