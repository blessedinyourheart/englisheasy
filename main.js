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

function activeLink() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
}

list.forEach((item) =>
    item.addEventListener('click', activeLink));

// АКТИВНИЙ ФУТЕР

//ВИБІР РЕЖИМУ ТЕСТУВАННЯ

var testMode = 0;
document.getElementById("mode_test").onclick = function () {
    if (testMode !== 1) {
        setTimeout(function () {
            choseMode(1);
            nextWord();
            createVariantsForTest();
        }, 600);
    }
}
document.getElementById("mode_couple").onclick = function () {
    if (testMode !== 2) {
        setTimeout(function () {
            choseMode(2);
            placeWordsInBloks();
        }, 600);
    }
}
document.getElementById("mode_input").onclick = function () {
    if (testMode !== 3) {
        setTimeout(function () {
            choseMode(3);
        }, 600);
    }
}
document.getElementById("learn_word").onclick = function () {
    if (testMode !== 4) {
        setTimeout(function () {
            choseMode(4);
        }, 600);
    }
}
document.getElementById("setting_btn").onclick = function () {
    if (testMode !== 5) {
        setTimeout(function () {
            choseMode(5);
        }, 600);
    }
}

function choseMode(current) {
    if (current == 1) {
        if (testMode == 0) {
            document.getElementById("next-word").classList.add("hidden");
            testMode = 1;
            document.getElementById("canvas_test").classList.remove("hidden");
        } else if (testMode == 1) {
        } else if (testMode == 2) {
            document.getElementById("canvas_test_couple").classList.add("hidden");
            testMode = 1;
            document.getElementById("main-word").classList.remove("hidden");
            document.getElementById("canvas_test").classList.remove("hidden");
        } else if (testMode == 3) {
            document.getElementById("canvas_test_input").classList.add("hidden");
            testMode = 1;
            document.getElementById("canvas_test").classList.remove("hidden");
        } else if (testMode == 4) {
            document.getElementById("next-word").classList.add("hidden");
            testMode = 1;
            document.getElementById("canvas_test").classList.remove("hidden");
        } else {
            document.getElementById("setting_menu").classList.add("hidden");
            testMode = 1;
            document.getElementById("canvas_test").classList.remove("hidden");
        }
    } else if (current == 2) {
        if (testMode == 0) {
            document.getElementById("next-word").classList.add("hidden");
            testMode = 2;
            document.getElementById("main-word").classList.add("hidden");
            document.getElementById("canvas_test_couple").classList.remove("hidden");
        } else if (testMode == 1) {
            document.getElementById("canvas_test").classList.add("hidden");
            testMode = 2;
            document.getElementById("main-word").classList.add("hidden");
            document.getElementById("canvas_test_couple").classList.remove("hidden");
        } else if (testMode == 2) {
        } else if (testMode == 3) {
            document.getElementById("canvas_test_input").classList.add("hidden");
            testMode = 2;
            document.getElementById("canvas_test_couple").classList.remove("hidden");
        } else if (testMode == 4) {
            document.getElementById("next-word").classList.add("hidden");
            testMode = 2;
            document.getElementById("main-word").classList.add("hidden");
            document.getElementById("canvas_test_couple").classList.remove("hidden");
        } else {
            document.getElementById("setting_menu").classList.add("hidden");
            testMode = 2;
            document.getElementById("main-word").classList.add("hidden");
            document.getElementById("canvas_test_couple").classList.remove("hidden");
        }
    } else if (current == 3) {
        if (testMode == 0) {
            document.getElementById("next-word").classList.add("hidden");
            testMode = 3;
            document.getElementById("canvas_test_input").classList.remove("hidden");
        } else if (testMode == 1) {
            document.getElementById("canvas_test").classList.add("hidden");
            testMode = 3;
            document.getElementById("canvas_test_input").classList.remove("hidden");
        } else if (testMode == 2) {
            document.getElementById("canvas_test_couple").classList.add("hidden");
            testMode = 3;
            document.getElementById("canvas_test_input").classList.remove("hidden");
        } else if (testMode == 3) {
        } else if (testMode == 4) {
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
        } else if (testMode == 1) {
            document.getElementById("canvas_test").classList.add("hidden");
            testMode = 4;
            document.getElementById("next-word").classList.remove("hidden");
        } else if (testMode == 2) {
            document.getElementById("canvas_test_couple").classList.add("hidden");
            testMode = 4;
            document.getElementById("main-word").classList.remove("hidden");
            document.getElementById("next-word").classList.remove("hidden");
        } else if (testMode == 3) {
            document.getElementById("canvas_test_input").classList.add("hidden");
            testMode = 4;
        } else if (testMode == 4) {
        } else {
            document.getElementById("setting_menu").classList.add("hidden");
            testMode = 4;
            document.getElementById("next-word").classList.remove("hidden");
        }
    } else if (current == 5) {
        if (testMode == 0) {
            document.getElementById("next-word").classList.remove("hidden");
            testMode = 5;
            document.getElementById("setting_menu").classList.remove("hidden");
        } else if (testMode == 1) {
            document.getElementById("canvas_test").classList.add("hidden");
            testMode = 5;
            document.getElementById("setting_menu").classList.remove("hidden");
        } else if (testMode == 2) {
            document.getElementById("canvas_test_couple").classList.add("hidden");
            testMode = 5;
            document.getElementById("setting_menu").classList.remove("hidden");
        } else if (testMode == 3) {
            document.getElementById("canvas_test_input").classList.add("hidden");
            testMode = 5;
            document.getElementById("setting_menu").classList.remove("hidden");
        } else if (testMode == 4) {
            document.getElementById("next-word").classList.add("hidden");
            testMode = 5;
            document.getElementById("setting_menu").classList.remove("hidden");
        } else {
        }
    }
}

//ВИБІР РЕЖИМУ ТЕСТУВАННЯ


var dictionary = {
    "excellent": ["ˈɛksələnt", ["чудовий"]],
    "awful": ["ˈɔːfəl", ["жахливий"]],
    "huge": ["hjuːdʒ", ["величезний"]],
    "tiny": ["ˈtaɪni", ["крихітний"]],
    "exhausted": ["ɪɡˈzɔːstɪd", ["виснажений"]],
    "ecstatic": ["ɪkˈstætɪk", ["у захваті"]],
    "devastated": ["ˈdɛvəsteɪtɪd", ["спустошений"]],
    "furious": ["ˈfjʊəriəs", ["розлючений"]],
    "ravenous": ["ˈrævənəs", ["голодний"]],
    "parched": ["pɑːrtʃt", ["пересохлий"]],
    "spotless": ["ˈspɑːtləs", ["бездоганний"]],
    "filthy": ["ˈfɪlθi", ["брудний"]],
    "scorching": ["ˈskɔːrtʃɪŋ", ["пекучий"]],
    "freezing": ["ˈfriːzɪŋ", ["крижаний"]],
    "brilliant": ["ˈbrɪljənt", ["блискучий"]],
    "idiotic": ["ˌɪdiˈɑːtɪk", ["ідіотський"]],
    "luminous": ["ˈluːmɪnəs", ["сяйливий"]],
    "stygian": ["ˈstɪdʒiən", ["похмурий"]],
    "ancient": ["ˈeɪnʃənt", ["стародавній"]],
    "youthful": ["ˈjuːθfəl", ["юний"]],
    "rapid": ["ˈræpɪd", ["швидкий"]],
    "sluggish": ["ˈslʌɡɪʃ", ["млявий"]],
    "powerful": ["ˈpaʊərfəl", ["могутній"]],
    "feeble": ["ˈfiːbəl", ["кволий"]],
    "effortless": ["ˈɛfərləs", ["легкий"]],
    "arduous": ["ˈɑːrdʒuəs", ["виснажливий"]],
    "gorgeous": ["ˈɡɔːrdʒəs", ["прекрасний"]],
    "hideous": ["ˈhɪdiəs", ["потворний"]],
    "fascinating": ["ˈfæsɪneɪtɪŋ", ["захопливий"]],
    "dull": ["dʌl", ["нудний"]],
    "deafening": ["ˈdɛfənɪŋ", ["оглушливий"]],
    "silent": ["ˈsaɪlənt", ["беззвучний"]],
    "wealthy": ["ˈwɛlθi", ["заможний"]],
    "destitute": ["ˈdɛstɪtuːt", ["злиденний"]],
    "costly": ["ˈkɔstli", ["дорогий"]],
    "inexpensive": ["ˌɪnɪkˈspɛnsɪv", ["недорогий"]],
    "hilarious": ["hɪˈlɛriəs", ["сміховинний"]],
    "solemn": ["ˈsɑːləm", ["урочистий"]],
    "terrified": ["ˈtɛrəfaɪd", ["переляканий"]],
    "courageous": ["kəˈreɪdʒəs", ["сміливий"]],
    "obese": ["oʊˈbiːs", ["огрядний"]],
    "gaunt": ["ɡɔːnt", ["худорлявий"]],
    "swamped": ["swɑːmpt", ["перевантажений"]],
    "courteous": ["ˈkɜːrtiəs", ["ввічливий"]],
    "impolite": ["ˌɪmpəˈlaɪt", ["неввічливий"]],
    "fortunate": ["ˈfɔːrtʃənət", ["везучий"]],
    "unfortunate": ["ʌnˈfɔːrtʃənət", ["невезучий"]],
    "intelligent": ["ɪnˈtɛlɪdʒənt", ["розумний"]],
    "indolent": ["ˈɪndələnt", ["ледачий"]],
    "crucial": ["ˈkruːʃəl", ["вирішальний"]],
    "pungent": ["ˈpʌndʒənt", ["різкий"]],
    "faint": ["feɪnt", ["слабкий"]],
    "sweltering": ["ˈswɛltərɪŋ", ["задушливий"]],
    "frigid": ["ˈfrɪdʒɪd", ["морозний"]],
    "soaked": ["soʊkt", ["промоклий"]],
    "arid": ["ˈærɪd", ["посушливий"]],
    "keen": ["kiːn", ["гострий"]],
    "blunt": ["blʌnt", ["тупий"]],
    "petrified": ["ˈpɛtrɪfaɪd", ["заціпенілий"]],
    "serene": ["səˈriːn", ["спокійний"]],
    "anxious": ["ˈæŋkʃəs", ["тривожний"]],
    "assured": ["əˈʃʊrd", ["впевнений"]],
    "timid": ["ˈtɪmɪd", ["боязкий"]],
    "valiant": ["ˈvæliənt", ["доблесний"]],
    "drowsy": ["ˈdraʊzi", ["сонний"]],
    "irate": ["aɪˈreɪt", ["розгніваний"]],
    "stunning": ["ˈstʌnɪŋ", ["приголомшливий"]],
    "attractive": ["əˈtræktɪv", ["привабливий"]],
    "ingenious": ["ɪnˈdʒiːniəs", ["винахідливий"]],
    "muscular": ["ˈmʌskjələr", ["мускулистий"]],
    "frail": ["freɪl", ["немічний"]],
    "livid": ["ˈlɪvɪd", ["скажений"]],
    "horrified": ["ˈhɔːrɪfaɪd", ["жаханий"]],
    "towering": ["ˈtaʊərɪŋ", ["височенний"]],
    "brief": ["briːf", ["короткий"]],
    "endless": ["ˈɛndləs", ["нескінченний"]],
    "weary": ["ˈwɪri", ["стомлений"]],
    "amiable": ["ˈeɪmiəbl", ["приязний"]],
    "hostile": ["ˈhɑːstaɪl", ["ворожий"]],
    "atrocious": ["əˈtroʊʃəs", ["жахливий"]],
    "virtuous": ["ˈvɜːrtʃuəs", ["доброчесний"]],
    "thunderous": ["ˈθʌndərəs", ["грімкий"]],
    "hushed": ["hʌʃt", ["приглушений"]],
    "chaotic": ["keɪˈɑːtɪk", ["хаотичний"]],
    "immaculate": ["ɪˈmækjələt", ["бездоганний"]],
    "fiery": ["ˈfaɪəri", ["пекучий"]],
    "icy": ["ˈaɪsi", ["крижаний"]],
    "bizarre": ["bɪˈzɑːr", ["химерний"]],
    "mundane": ["mʌnˈdeɪn", ["буденний"]],
    "vital": ["ˈvaɪtl", ["життєво важливий"]],
    "trivial": ["ˈtrɪviəl", ["незначний"]],
    "antique": ["ænˈtiːk", ["антикварний"]],
    "pristine": ["ˈprɪstiːn", ["незаплямований"]],
    "desolate": ["ˈdɛzələt", ["спустілий"]],
    "packed": ["pækt", ["переповнений"]],
    "frightening": ["ˈfraɪtənɪŋ", ["страшний"]],
    "amusing": ["əˈmjuːzɪŋ", ["веселий"]],
    "enraged": ["ɪnˈreɪdʒd", ["розлючений"]],
    "miserable": ["ˈmɪzrəbl", ["нещасний"]],
    "thrilled": ["θrɪld", ["у захваті"]],
    "wizard": ["ˈwɪzərd", ["волшебник"]],
    "witch": ["wɪtʃ", ["ведьма"]],
  "spell": ["spɛl", ["заклинание"]],
  "wand": ["wɒnd", ["волшебная палочка"]],
  "potion": ["ˈpoʊʃən", ["зелье"]],
  "broomstick": ["ˈbrʊm.stɪk", ["метла"]],
  "sorting hat": ["ˈsɔːr.tɪŋ hæt", ["распределяющая шляпа"]],
  "Griffindor": ["ˈɡrɪf.ɪn.dɔːr", ["Гриффиндор"]],
  "Slytherin": ["ˈslɪð.ər.ɪn", ["Слизерин"]],
  "Hufflepuff": ["ˈhʌf.əl.pʌf", ["Пуффендуй"]],
  "Ravenclaw": ["ˈreɪ.vən.klɔː", ["Когтевран"]],
  "dark arts": ["dɑrk ɑrts", ["темные искусства"]],
  "cloak of invisibility": ["kloʊk əv ɪnˌvɪzɪˈbɪlɪti", ["мантия-невидимка"]],
  "house elf": ["haʊs ɛlf", ["домашний эльф"]],
  "half-blood": ["hæf-blʌd", ["полукровка"]],
  "pure-blood": ["pjʊər-blʌd", ["чистокровный"]],
  "death eater": ["dɛθ ˈiː.tər", ["пожиратель смерти"]],
  "dementor": ["dɪˈmɛn.tər", ["дементор"]],
  "prophecy": ["ˈprɒfəsi", ["пророчество"]],
  "parseltongue": ["ˈpɑr.səl.tʌŋ", ["змеиный язык"]],
  "horcrux": ["ˈhɔːr.krʌks", ["кровокрест"]],
  "animagus": ["ˈænɪˌmeɪɡəs", ["анимаг"]],
  "patronus": ["pəˈtroʊnəs", ["патронус"]],
  "restricted section": ["rɪˈstrɪktɪd ˈsɛkʃən", ["запретная секция"]],
  "forbidden forest": ["fərˈbɪdn ˈfɒrɪst", ["запретный лес"]],
  "transfiguration": ["ˌtrænsfɪˌɡjʊˈreɪʃən", ["трансфигурация"]],
  "divination": ["ˌdɪvɪˈneɪʃən", ["гадание"]],
  "apparition": ["ˌæpəˈrɪʃən", ["аппарация"]],
  "occlumency": ["ˈɒkljʊmɛnsi", ["окклюменция"]],
  "legilimency": ["ˈlɛdʒɪlɪmɛnsi", ["легилименция"]],
  "polyjuice potion": ["ˈpɒliˌdʒus ˈpoʊʃən", ["зелье многосущности"]],
  "mirror of erised": ["ˈmɪrər əv ˈɛrɪsɛd", ["зеркало Еиналеж"]],
  "floo powder": ["fluː ˈpaʊ.dər", ["летучий порох"]],
  "shrinking charm": ["ˈʃrɪŋkɪŋ tʃɑrm", ["уменьшающее заклинание"]],
  "boggart": ["ˈbɒɡərt", ["боггарт"]],
  "unforgivable curse": ["ˌʌnfərˈɡɪvəbl kɜrs", ["непростительное заклятие"]],
  "imperius curse": ["ɪmˈpɪəriəs kɜrs", ["заклятие Империус"]],
  "cruciatus curse": ["ˌkruːʃiˈætəs kɜrs", ["заклятие Круциатус"]],
  "avada kedavra": ["əˈvɑːdə kəˈdɑːvrə", ["авада кедавра"]],
  "elder wand": ["ˈɛldər wɒnd", ["бузинная палочка"]],
  "resurrection stone": ["ˌrɛzəˈrɛkʃən stoʊn", ["камень воскрешения"]],
  "invisibility cloak": ["ɪnˌvɪzɪˈbɪlɪti kloʊk", ["мантию-невидимка"]],
  "philosopher's stone": ["fəˈlɒsəfərz stoʊn", ["философский камень"]],
  "sorcerer's stone": ["ˈsɔrsərərz stoʊn", ["камень чародея"]],
  "half-giant": ["hæf-ˈdʒaɪənt", ["полувеликан"]],
  "werewolf": ["ˈwɛrwʊlf", ["оборотень"]],
  "house points": ["haʊs pɔɪnts", ["баллы факультета"]],
  "defense against the dark arts": ["dɪˈfɛns əˈɡɛnst ðə dɑrk ɑrts", ["защита от темных искусств"]],
  "marauder's map": ["məˈrɔːdərz mæp", ["карта мародеров"]],
  "lumos": ["ˈluːmɒs", ["люмос"]],
  "nox": ["nɒks", ["нокс"]],
  "accio": ["ˈæksi.oʊ", ["акцио"]],
  "expelliarmus": ["ɛkˌspɛl.iˈɑːrməs", ["экспеллиармус"]],
  "protego": ["prəˈteɪɡoʊ", ["протего"]],
  "stupefy": ["ˈstjuːpɪfaɪ", ["ступефай"]],
  "leviosa": ["ˌlɛviˈoʊsa", ["левиоса"]],
  "sectumsempra": ["ˌsɛktəmˈsɛmp.rə", ["сектумсемпра"]],
  "obliviate": ["əˈblɪviˌeɪt", ["обливиэйт"]],
  "crystal ball": ["ˈkrɪstl bɔːl", ["хрустальный шар"]],
  "vanishing cabinet": ["ˈvænɪʃɪŋ ˈkæbɪnət", ["шкаф исчезновения"]],
  "howler": ["ˈhaʊlər", ["кричалка"]],
  "patronus charm": ["pəˈtroʊnəs tʃɑrm", ["заклинание патронуса"]],
  "quidditch pitch": ["ˈkwɪdɪtʃ pɪtʃ", ["поле для квиддича"]],
  "common room": ["ˈkɒmən ruːm", ["общая комната"]],
  "headmaster": ["ˈhɛdˌmæstər", ["директор"]],
  "headmistress": ["ˈhɛdˌmɪstrəs", ["директриса"]],
  "phoenix feather": ["ˈfiːnɪks ˈfɛðər", ["перо феникса"]],
  "goblin": ["ˈɡɒblɪn", ["гоблин"]],
  "goblet of fire": ["ˈɡɒblɪt əv ˈfaɪər", ["кубок огня"]],
  "triwizard tournament": ["traɪˈwɪzərd ˈtʊrnəmənt", ["турнир трех волшебников"]],
  "hogsmeade": ["ˈhɔɡzˌmiːd", ["Хогсмид"]],
  "knight bus": ["naɪt bʌs", ["рыцарский автобус"]],
  "butterbeer": ["ˈbʌtər bɪər", ["сливочное пиво"]],
  "sneakoscope": ["ˈsniːkəˌskoʊp", ["скопа"]],
  "gillyweed": ["ˈɡɪl.iˌwiːd", ["гилливейд"]],
  "flesh-eating slug repellent": ["flɛʃ ˈitɪŋ slʌɡ rɪˈpɛlənt", ["репеллент от плотоядных слизней"]],
  "fawkes": ["fɔːks", ["Фоукс"]],
  "room of requirement": ["ruːm əv rɪˈkwaɪrmənt", ["комната по требованию"]],
  "pensieve": ["ˈpɛnˌsiːv", ["думосбор"]],
  "elder wand": ["ˈɛldər wɒnd", ["бузинная палочка"]],
  "quidditch seeker": ["ˈkwɪdɪtʃ ˈsiːkər", ["ловец в квиддиче"]],
  "hogwarts express": ["ˈhɒɡwɔːrts ɪkˈsprɛs", ["Хогвартс-экспресс"]],
  "screaming mandrake": ["ˈskriːmɪŋ ˈmæn.dreɪk", ["кричащая мандрагора"]],
  "felix felicis": ["ˈfiːlɪks fəˈlɪsɪs", ["феликс фелицис"]],
  "polyjuice potion": ["ˈpɒliˌdʒus ˈpoʊʃən", ["зелье многосущности"]],
  "squib": ["skwɪb", ["сквиб"]],
  "blood status": ["blʌd ˈsteɪtəs", ["кровный статус"]],
  "quidditch world cup": ["ˈkwɪdɪtʃ wɜːrld kʌp", ["кубок мира по квиддичу"]],
  "bezoar": ["ˈbiː.zɔːr", ["безоар"]],
  "ravenclaw diadem": ["ˈreɪvənˌklɔː ˈdaɪədɛm", ["диадема Когтеврана"]],
  "scourgify": ["ˈskɜːrdʒɪfaɪ", ["скорджифай"]],
  "slytherin locket": ["ˈslɪðərɪn ˈlɒkɪt", ["медальон Слизерина"]],
  "pensieve memory": ["ˈpɛnˌsiːv ˈmɛməri", ["воспоминание думосбора"]],
  "firebolt broomstick": ["ˈfaɪə.bəʊlt ˈbrʊmˌstɪk", ["метла Огненный Молния"]],
  "maurader's map": ["mɔːˈrɔːdərz mæp", ["карта мародеров"]],
  "potions master": ["ˈpoʊʃənz ˈmæstər", ["мастер зельеварения"]],
  "great hall": ["ɡreɪt hɔːl", ["большой зал"]],
  "owlery": ["ˈaʊləri", ["совятня"]],
  "troll": ["troʊl", ["тролль"]],
  "the dark lord": ["ðə dɑrk lɔrd", ["Темный Лорд"]],
  "hello": ["həˈloʊ", ["привет"]],
  "friend": ["frɛnd", ["друг"]],
  "family": ["ˈfæmɪli", ["семья"]],
  "school": ["skuːl", ["школа"]],
  "class": ["klæs", ["класс"]],
  "teacher": ["ˈtiːtʃər", ["учитель"]],
  "student": ["ˈstuːdənt", ["ученик"]],
  "magic": ["ˈmædʒɪk", ["магия"]],
  "letter": ["ˈlɛtər", ["письмо"]],
  "owl": ["aʊl", ["сова"]],
  "train": ["treɪn", ["поезд"]],
  "hat": ["hæt", ["шляпа"]],
  "stairs": ["stɛrz", ["лестница"]],
  "room": ["ruːm", ["комната"]],
  "book": ["bʊk", ["книга"]],
  "paper": ["ˈpeɪpər", ["бумага"]],
  "pen": ["pɛn", ["ручка"]],
  "pencil": ["ˈpɛnsl", ["карандаш"]],
  "classroom": ["ˈklæsˌruːm", ["классная комната"]],
  "breakfast": ["ˈbrɛkfəst", ["завтрак"]],
  "lunch": ["lʌntʃ", ["обед"]],
  "dinner": ["ˈdɪnər", ["ужин"]],
  "food": ["fuːd", ["еда"]],
  "drink": ["drɪŋk", ["напиток"]],
  "cake": ["keɪk", ["торт"]],
  "juice": ["dʒus", ["сок"]],
  "house": ["haʊs", ["дом"]],
  "garden": ["ˈɡɑrdən", ["сад"]],
  "library": ["ˈlaɪbrɛri", ["библиотека"]],
  "window": ["ˈwɪndoʊ", ["окно"]],
  "door": ["dɔr", ["дверь"]],
  "wall": ["wɔl", ["стена"]],
  "floor": ["flɔr", ["пол"]],
  "night": ["naɪt", ["ночь"]],
  "morning": ["ˈmɔrnɪŋ", ["утро"]],
  "afternoon": ["ˌæftərˈnun", ["день"]],
  "evening": ["ˈivnɪŋ", ["вечер"]],
  "forest": ["ˈfɔrɪst", ["лес"]],
  "lake": ["leɪk", ["озеро"]],
  "castle": ["ˈkæsəl", ["замок"]],
  "roommate": ["ˈrumˌmeɪt", ["сосед по комнате"]],
  "bag": ["bæɡ", ["сумка"]],
  "watch": ["wɑtʃ", ["часы"]],
  "clock": ["klɑk", ["часы (настенные)"]],
  "sleep": ["slip", ["спать"]],
  "bed": ["bɛd", ["кровать"]],
  "dream": ["drim", ["сон"]],
  "nightmare": ["ˈnaɪtˌmɛr", ["кошмар"]],
  "holiday": ["ˈhɑləˌdeɪ", ["праздник"]],
  "birthday": ["ˈbɜrθˌdeɪ", ["день рождения"]],
  "gift": ["ɡɪft", ["подарок"]],
  "toy": ["tɔɪ", ["игрушка"]],
  "cat": ["kæt", ["кот"]],
  "dog": ["dɔɡ", ["собака"]],
  "pet": ["pɛt", ["домашнее животное"]],
  "family tree": ["ˈfæmɪli tri", ["родословное дерево"]],
  "name": ["neɪm", ["имя"]],
  "birthday card": ["ˈbɜrθˌdeɪ kɑrd", ["открытка на день рождения"]],
  "magic trick": ["ˈmædʒɪk trɪk", ["фокус"]],
  "broom": ["brum", ["метла"]],
  "castle hall": ["ˈkæsəl hɔl", ["зал замка"]],
  "bell": ["bɛl", ["колокол"]],
  "fireplace": ["ˈfaɪərˌpleɪs", ["камин"]],
  "mirror": ["ˈmɪrər", ["зеркало"]],
  "bathroom": ["ˈbæθˌrum", ["ванная"]],
  "sink": ["sɪŋk", ["раковина"]],
  "toilet": ["ˈtɔɪlət", ["туалет"]],
  "bath": ["bæθ", ["ванна"]],
  "shower": ["ˈʃaʊər", ["душ"]],
  "soap": ["soʊp", ["мыло"]],
  "towel": ["ˈtaʊəl", ["полотенце"]],
  "wizard school": ["ˈwɪzərd skuːl", ["школа волшебства"]],
  "train station": ["treɪn ˈsteɪʃən", ["вокзал"]],
  "headmaster's office": ["ˈhɛdˌmæstərz ˈɔfəs", ["кабинет директора"]],
  "chocolate frog": ["ˈʧɔklət frɔg", ["шоколадная лягушка"]],
  "school uniform": ["skuːl ˈjunɪˌfɔrm", ["школьная форма"]],
  "potion class": ["ˈpoʊʃən klæs", ["класс зельеварения"]],
  "herbology class": ["hɜːrˈbɑləʤi klæs", ["класс травологии"]],
  "transfiguration class": ["ˌtrænsfɪˌɡjʊˈreɪʃən klæs", ["класс трансфигурации"]],
  "history book": ["ˈhɪstri bʊk", ["историческая книга"]],
  "golden snitch": ["ˈgoʊldən snɪʧ", ["золотой снитч"]],
  "wand box": ["wɒnd bɑks", ["коробка для палочки"]],
  "sorting ceremony": ["ˈsɔrtɪŋ ˈsɛrəˌmoʊni", ["церемония распределения"]],
  "spell book": ["spɛl bʊk", ["книга заклинаний"]],
  "butterfly": ["ˈbʌtərˌflaɪ", ["бабочка"]],
  "crow": ["kroʊ", ["ворон"]],
  "letter box": ["ˈlɛtər bɑks", ["почтовый ящик"]],
  "magic wand": ["ˈmædʒɪk wɒnd", ["волшебная палочка"]],
  "castle tower": ["ˈkæsəl ˈtaʊər", ["башня замка"]],
  "cloak": ["kloʊk", ["мантия"]],
  "secret room": ["ˈsiːkrɪt ruːm", ["секретная комната"]],
  "pot": ["pɑt", ["горшок"]],
  "cauldron": ["ˈkɔːldrən", ["котел"]],
  "glass bottle": ["ɡlæs ˈbɑtl", ["стеклянная бутылка"]],
  "feather": ["ˈfɛðər", ["перо"]],
  "animal": ["ˈænəməl", ["животное"]],
  "lion": ["ˈlaɪən", ["лев"]],
  "snake": ["sneɪk", ["змея"]],
  "rat": ["ræt", ["крыса"]],
  "invisibility": ["ɪnˌvɪzɪˈbɪlɪti", ["невидимость"]],
  "candle": ["ˈkændəl", ["свеча"]],
  "spell class": ["spɛl klæs", ["класс заклинаний"]],
  "magic words": ["ˈmædʒɪk wɜrdz", ["магические слова"]],
  "beard": ["bɪrd", ["борода"]]
}
var mainWord = "";
var mainTranscription = "";
var mainTranslate = "";
let idVariants = ["var_one", "var_two", "var_three", "var_four"];

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
    selectedOption.style.backgroundColor = "lightblue";
    selectedVariant = selectedOption;
}

function createVariantsForTest() {
    let choseId = Math.floor(Math.random() * idVariants.length);
    document.getElementById(idVariants[choseId]).innerHTML = mainTranslate[Math.floor(Math.random() * mainTranslate.length)];
    for (let i = 0; i < idVariants.length; i++) {
        if (i == choseId) {
            document.getElementById(idVariants[choseId]).innerHTML = mainTranslate[Math.floor(Math.random() * mainTranslate.length)];
        } else {
            document.getElementById(idVariants[i]).innerHTML = dictionary[Object.keys(dictionary)[Math.floor(Math.random() * Object.keys(dictionary).length)]][1][Math.floor(Math.random() * this.length)];
        }
    }
}

document.getElementById("apply_variants").onclick = function () {
    checkVariant();
}

function checkVariant() {
    if (selectedVariant == 0 || selectedVariant == '') {
        console.log("Виберіть варінт для відповіді");
    } else {
        if (dictionary[mainWord][1].includes(selectedVariant.textContent)) {
            document.getElementById(selectedVariant.id).classList.add('div-glow-true');
            setTimeout(function () {
                document.getElementById(selectedVariant.id).style.backgroundColor = "var(--bgc_card)";
                document.getElementById(selectedVariant.id).classList.remove('div-glow-true');
            }, 500);
            setTimeout(function () {
                nextWord();
                createVariantsForTest();
                selectedVariant = '';
            }, 500);
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

/* Поиск пары*/

var coupleLeft = document.getElementsByClassName("couple_left");
var coupleRight = document.getElementsByClassName("couple_right");
var selectedLeftBlock = null;
var selectedRightBlock = null;

function handleLeftVariant(event) {
    var selectedLeftVariant = event.target;
    // Если выбранный вариант уже имеет выделение (фоновый цвет), снимаем его
    if (selectedLeftVariant.style.backgroundColor === "lightblue") {
        selectedLeftVariant.style.backgroundColor = "var(--bgc_card)";
        return; // Прерываем выполнение функции, чтобы не устанавливать новое выделение
    }
    // Сбросить стили всех вариантов ответа
    for (var i = 0; i < coupleLeft.length; i++) {
        coupleLeft[i].style.backgroundColor = "var(--bgc_card)";
    }
    // Изменить стиль выбранного варианта ответа
    selectedLeftVariant.style.backgroundColor = "lightblue";
    selectedLeftBlock = selectedLeftVariant;
    if (selectedLeftBlock !== null && selectedRightBlock !== null){
        handler();
    }

}

function handleRightVariant(event) {
    var selectedRightVariant = event.target;
    // Если выбранный вариант уже имеет выделение (фоновый цвет), снимаем его
    if (selectedRightVariant.style.backgroundColor === "lightblue") {
        selectedRightVariant.style.backgroundColor = "var(--bgc_card)";
        return; // Прерываем выполнение функции, чтобы не устанавливать новое выделение
    }
    // Сбросить стили всех вариантов ответа
    for (var i = 0; i < coupleRight.length; i++) {
        coupleRight[i].style.backgroundColor = "var(--bgc_card)";
    }
    // Изменить стиль выбранного варианта ответа
    selectedRightVariant.style.backgroundColor = "lightblue";
    selectedRightBlock = selectedRightVariant;
    if (selectedLeftBlock !== null && selectedRightBlock !== null){
        handler();
    }
}
let selectedCouple = 0;

function handler() {
    if (dictionary[selectedLeftBlock.textContent][1].includes(selectedRightBlock.textContent)) {
        for (let i = 0; i < 5; i++) {
            if (coupleLeft[i].textContent == selectedLeftBlock.textContent) {
                coupleLeft[i].innerHTML = "";
                coupleLeft[i].style.backgroundColor = "var(--bgc_card)";
            }
            if (coupleRight[i].textContent == selectedRightBlock.textContent) {
                coupleRight[i].innerHTML = "";
                coupleRight[i].style.backgroundColor = "var(--bgc_card)";
            }
        }
        selectedCouple += 1;
        if (selectedCouple == 3) {
            checkEmptyBlocks();
            selectedLeftBlock = null;
            selectedRightBlock = null;
        }
    }
}

let listEmptyPositionLeft = [];
let listEmptyPositionRight = [];
let suffledListEmptyPositionRight = [];

function checkEmptyBlocks(){
    selectedCouple = 0;
    listEmptyPositionLeft = [];
    listEmptyPositionRight = [];
    for (var i = 0; i < coupleLeft.length; i++) {
        if (coupleLeft[i].textContent == ""){
            listEmptyPositionLeft.push(i);
        }
    }
    for (var i = 0; i < coupleRight.length; i++) {
        if (coupleRight[i].textContent == ""){
            listEmptyPositionRight.push(i);
        }
    }
    updateBlocks();
}

function updateBlocks(){
    // Обновление блока английских слов (левая колонка)

    // Проверяем какие слова уже есть в левой колонке и записываем их положение в кейсах словаря.
    let positionOfExistingValue = [];
    for (let q = 0; q < coupleLeft.length; q++){
        if (coupleLeft[q].textContent !== ""){
            positionOfExistingValue.push(Object.keys(dictionary).indexOf(coupleLeft[q].textContent));
        }
    }
    // Проверяем есть ли значение в массиве positionOfExistingValue, если нету то добавляем это слово
    for (let i = 0; i < listEmptyPositionLeft.length; i++){
        let key = getRandomNumberNotInArray(positionOfExistingValue, Object.keys(dictionary).length);
        positionOfExistingValue.push(key);
        coupleLeft[listEmptyPositionLeft[i]].innerHTML = Object.keys(dictionary)[key];
    }
    // Запускаем Алгоритм Фишера Йетса для перемешивания массива
    suffledListEmptyPositionRight = shuffle(listEmptyPositionRight);

    // Обновляем украинские слова (в правой колонке).

    for (let j = 0; j < listEmptyPositionRight.length; j++){
        coupleRight[suffledListEmptyPositionRight[j]].innerHTML = dictionary[coupleLeft[listEmptyPositionLeft[j]].textContent][1][Math.floor(Math.random() * dictionary[coupleLeft[listEmptyPositionLeft[j]].textContent][1].length)];
    }
}

function getRandomNumberNotInArray(array, lengthArray) {
    var randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * lengthArray); // Генерация случайного числа от 1 до 10
    } while (array.includes(randomNumber));
  
    return randomNumber;
  }

// Алгоритм Фишера Йетса для перемешивания массива
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

/* Написание алгоритма заполнения слов */

let dictionaryFromFindCouple = {};

function createDictionaryFromFindCouple() {
    // обновляем словарь и список
    let arrayOfRandomIndex = [];
    dictionaryFromFindCouple = {};
    // вибираем рандомно индексы с которых будет браться слова
    while (arrayOfRandomIndex.length < 5) {
        let randomValue = Math.floor(Math.random() * Object.keys(dictionary).length);
        if (!arrayOfRandomIndex.includes(randomValue)) {
            arrayOfRandomIndex.push(randomValue);
        }
    }
    // создаем словарь для поиска пары
    for (var i = 0; i < arrayOfRandomIndex.length; i++) {
        let key = Object.keys(dictionary)[arrayOfRandomIndex[i]];
        dictionaryFromFindCouple[key] = dictionary[key];
    }
}

function placeWordsInBloks() {

    createDictionaryFromFindCouple();

    for (var i = 0; i < coupleLeft.length; i++) {
        coupleLeft[i].addEventListener("click", handleLeftVariant);
        coupleLeft[i].style.backgroundColor = "var(--bgc_card)";
        coupleLeft[i].innerHTML = Object.keys(dictionaryFromFindCouple)[i];
    }

    let randomizeTranslate = [];
    while (randomizeTranslate.length < 5) {
        let randomValue = Math.floor(Math.random() * 5);
        if (!randomizeTranslate.includes(randomValue)) {
            randomizeTranslate.push(randomValue);
        }
    }
    for (var i = 0; i < coupleRight.length; i++) {
        coupleRight[i].addEventListener("click", handleRightVariant);
        coupleRight[i].style.backgroundColor = "var(--bgc_card)";
        coupleRight[i].innerHTML = dictionaryFromFindCouple[Object.keys(dictionaryFromFindCouple)[randomizeTranslate[i]]][1][Math.floor(Math.random() * this.length)];
    }
}

/* Поиск пары*/

