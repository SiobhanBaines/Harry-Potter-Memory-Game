/*---------------Global variables-------------*/
let i = 0;
let j = 0;
let l = 0;
let p = 0;
let nextLevel = false;
let start = true;
let increment = 300;
let delay = 0;
let playerArray = [];
let crestArray = [];
let winningCrest = "";
let crests = ['g', 's', 'h', 'r'];


/*---------------Begin the Game---------------------*/
$('#play').click(function start() {
    $("#play").hide();
    if (!nextLevel && start) {
        i = 0;
        j = 0;
    }
    playGame();

});
/*------function to light up a house crest----------*/
function playGame() {

    let crest = crests[Math.floor(Math.random() * crests.length)];
    crestArray.push(crest);
    i = crestArray.length - 1;

    console.log(crest);
    console.log(crestArray);

    lightUp();

    console.log('playerArray', playerArray);

    playerSelect();





};
/*------function to light up a house crest----------*/
function lightUp() {

    for (l = 0; l < crestArray.length; l++) {
        console.log('p', p, 'l', l, 'i', i, 'j', j);
        crest = crestArray[l];
        delay = delay + increment;
        console.log('delay', delay);
        console.log('inc', increment);

        switch (crest) {
            case 'g':
                var element = document.getElementById("gryffindor");
                    element.classList.add("lightUp");
                console.log('delay', delay);
                setTimeout(function () {                
                    element = document.getElementById("gryffindor");
                element.classList.remove("lightUp")
                }, delay);
                break;
            case 's':
                element = document.getElementById("slytherin");
                element.classList.add("lightUp");
                console.log('delay', delay);     
                setTimeout(function () {           
                    element = document.getElementById("slytherin");
                    element.classList.remove("lightUp")
                }, delay);
                break;
            case 'h':
                element = document.getElementById("hufflepuff");
                element.classList.add("lightUp");
                console.log('delay', delay);
                setTimeout(function () {
                    element = document.getElementById("hufflepuff");
                    element.classList.remove("lightUp")
                }, delay);
                break;
            case 'r':
                element = document.getElementById("ravenclaw");
                element.classList.add("lightUp");
                console.log('delay', delay);
                setTimeout(function () {                
                    element = document.getElementById("ravenclaw");
                    element.classList.remove("lightUp")
                }, delay);
                break;
            default:
                break;
        }
    };

};
function playerSelect() {

    $('.game-btn').click(function selectHouse() {
        var house = event.target.id;
        console.log('before if');
        if (house === 'gryffindor'){
            console.log('pA b push g', playerArray);
            playerArray.push('g');
            console.log('pA a push g', playerArray);
        } else if (house === 'slytherin'){
            console.log('pA b push s', playerArray);
            playerArray.push('s');
            console.log('pA a push s', playerArray);
        } else if (house === 'hufflepuff'){
            console.log('pA b push h', playerArray);
            playerArray.push('h');
            console.log('pA a push h', playerArray);
        } else if (house === 'ravenclaw'){
            console.log('pA b push r', playerArray);
            playerArray.push('r');
            console.log('pA a push r', playerArray);
        };
        console.log('after if', playerArray)
        if (crestArray.length === playerArray.length) {
            j = playerArray.length - 1;
            validation();
        };
    });

};

     /*   switch (house) {
            case 'gryffindor':
                console.log('pA b g', playerArray);
                console.log('j',j);
                playerArray.insert(j,'g');
           /*     playerArray.push('g');
                console.log('pA a g', playerArray);*/
          /*      break;
            case 'slytherin':
                console.log('pA b s', playerArray);
                console.log('j',j);
                playerArray.insert(j,'s')
            /*    playerArray.push('s');
                console.log('pA a s', playerArray);*/
       /*         break;
            case 'hufflepuff':
                console.log('pA b h', playerArray);
                console.log('j',j);
                playerArray.insert(j,'h')
             /*   playerArray.push('h');
                console.log('pA a h', playerArray);*/
    /*            break;
            case 'ravenclaw':
                console.log('pA b r', playerArray);
                console.log('j',j);
                playerArray.insert(j,'r')
             /*   playerArray.push('r');
                console.log('pA a r', playerArray);*/
    /*            break;
            default:
                break;
        };*/


/* var myFunction = function () {
     var att = this.getAttribute()
 }
 game_button.addEventListener('click', myFunction(), false);

 /*   for (var p =0; p < crestArray.length; p++){*/
/* console.log('p', p, 'l', l, 'i', i, 'j', j);
 $('#gryffindor').click(function gryffindor() {
     playerArray.push('g');
     console.log('pA len', playerArray.length);
     console.log('cA len', crestArray.length);
     console.log('playerArray:', playerArray);
     console.log('crestArray:', crestArray);
     console.log('p', p, 'l', l, 'i', i, 'j', j);
     if (crestArray.length === playerArray.length) {
         j = playerArray.length - 1;
         validation();
     };
 });

 $('#slytherin').click(function slytherin() {
     playerArray.push('s');
     console.log('pA len', playerArray.length);
     console.log('cA len', crestArray.length);
     console.log('p', p, 'l', l, 'i', i, 'j', j);
     console.log('playerArray:', playerArray);
     console.log('crestArray:', crestArray);
     if (crestArray.length === playerArray.length) {
         j = playerArray.length - 1;
         validation();
     };
 });

 $('#hufflepuff').click(function hufflepuff() {
     playerArray.push('h');
     console.log('pA len', playerArray.length);
     console.log('cA len', crestArray.length);
     console.log('p', p, 'l', l, 'i', i, 'j', j);
     console.log('playerArray:', playerArray);
     console.log('crestArray:', crestArray);
     if (crestArray.length === playerArray.length) {
         j = playerArray.length - 1;
         validation();
     };
 });

 $('#ravenclaw').click(function ravenclaw() {
     playerArray.push('r');
     console.log('pA len', playerArray.length);
     console.log('cA len', crestArray.length);
     console.log('playerArray:', playerArray);
     console.log('crestArray:', crestArray);
     console.log('p', p, 'l', l, 'i', i, 'j', j);
     if (crestArray.length === playerArray.length) {
         j = playerArray.length - 1;
         validation();
     };
 });
 /*};*/
/*};*/

/*------Validate Players Crest Selection -----------*/
function validation() {
    console.log('p', p, 'l', l, 'i', i, 'j', j);
    console.log('playerArray[j]:', playerArray[j]);
    console.log('crestArray[j]:', crestArray[j]);
    console.log('playerArray:', playerArray);
    console.log('crestArray:', crestArray);
    var is_same = (crestArray.length == playerArray.length) && crestArray.every(function (element, index) {
        return element === playerArray[index];
    });
    playerArray = [];
    if (is_same) {
        winnerMessage();
    } else {
        winningCrest = crestArray[j];
        houseMessage();
    }
};

/*------function to determine which house won-------*/
function houseMessage() {
    crestArray[j];
    $('#gryffindor, #hufflepuff, #slytherin, #ravenclaw, .title').hide();
    $('#message-board').show();
    switch (winningCrest) {
        case 'g':
            $('section>div>div:last>div:first').append(`<p class="lost">Gryffindor's bravery is bountious</p>`);
            break;
        case 's':
            $('section>div>div:last>div:first').append(`<p class="lost">Slytherin's cunning conquers all</p>`);
            break;
        case 'h':
            $('section>div>div:last>div:first').append(`<p class="lost">Hufflepuff's patience prevails</p>`);
            break;
        case 'r':
            $('section>div>div:last>div:first').append(`<p class="lost">Ravenclaw's wisdom wins</p>`);
            break;
        default:
            break;
    };
    playerArray.length = 0;
    crestArray.length = 0;
};

/*---function to let the player know they have won--*/
function winnerMessage() {
    $('#gryffindor, #hufflepuff, #slytherin, #ravenclaw, .title').hide();
    $('#dobby').show();
    $('section>div>div:last>div:first').append(`<p class="win">Dobby thinks you are very clever</p>`);
    playerArray.length = 0;
};

/*---------reset to begin the game again ----------*/
$(document).on('click', '.board', function reStart() {
    $('#message-board').hide();
    let message = document.getElementsByTagName('p')[0];
    message.remove();
    $('#play').show();
    nextLevel = false;
    start = true;

    /* playGame();*/
});

/*------play next level of game -------------------*/
$(document).on('click', '#dobby', function nextLevel() {

    $('#gryffindor, #hufflepuff, #slytherin, #ravenclaw, .title').show();
    $('#dobby').hide();
    let message = document.getElementsByTagName('p')[0];
    console.log(message);
    message.remove();
    nextLevel = true;
    start = false;

    playGame();
});











