/*------function to load crestArray with a new house crest code ----------*/
function playGame() {

    let crest = crests[Math.floor(Math.random() * crests.length)];
    crestArray.push(crest);
    i = crestArray.length - 1;

    console.log(crestArray);

    for (l = 0; l < crestArray.length; l++) {
        let crest = crestArray[l];

        lightUp(crest);
    }
}
/*------function to light up crests stored in crestArray---------*/
function lightUp(crest) {
    debugger;

    switch (crest) {
        case 'g':
            $('#gryffindor').addClass('lightUp');
            setTimeout(function () {
                $('#gryffindor').removeClass('lightUp');
            }, 2000);
            break;
        case 's':
            $('#slytherin').addClass('lightUp');
            setTimeout(function () {
                $('#slytherin').removeClass('lightUp');
            }, 2000);
            break;
        case 'h':
            $('#hufflepuff').addClass('lightUp');
            setTimeout(function () {
                $('#hufflepuff').removeClass('lightUp');
            }, 2000);
            break;
        case 'r':
            $('#ravenclaw').addClass('lightUp');
            setTimeout(function () {
                $('#ravenclaw').removeClass('lightUp');
            }, 2000);
            break;
        default:
            break;
    }
    window.setTimeout(function () { }, 1000);
}

/*------function to compare crestArray with playerArray (game selection with user selection)-----------*/
function validation() {

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
}
/*----------- sleep function --------- */
function sleep(delay) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > delay) {
            var end = new Date().getTime();
            console.log(start);
            console.log(end);
            break;
        }
    }
}
/*------function to determine which house won-------*/
function houseMessage() {
    /* crestArray[j];*/
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
    }
    playerArray.length = 0;
    crestArray.length = 0;
}
/*---function to let the player know they have won--*/
function winnerMessage() {
    $('#gryffindor, #hufflepuff, #slytherin, #ravenclaw, .title').hide();
    $('#dobby').show();
    $('section>div>div:last>div:first').append(`<p class="win">Dobby thinks you are very clever</p>`);
    playerArray.length = 0;
}

$(document).ready(function () {
    /*---------------Begin the Game---------------------*/
    $('#play').click(function start() {
        /*   debugger;*/
        $("#play").hide();
        if (!nextLevel && start) {
            i = 0;
            j = 0;
        }
        playGame();
    });
    /*---------reset to begin the game again ----------*/
    $(document).on('click', '.lost', function reStart() {
        $('#message-board').hide();
        let message = document.getElementsByTagName('p')[0];
        message.remove();
        /*  $('#play').show();*/

        nextLevel = false;
        start = true;
        location.reload();
        /* playGame();*/
    });
    /*------play next level of game -------------------*/
    $(document).on('click', '#dobby', function levelUp() {

        $('#gryffindor, #hufflepuff, #slytherin, #ravenclaw, .title').show();
        $('#dobby').hide();
        let message = document.getElementsByTagName('p')[0];
        message.remove();
        nextLevel = true;
        start = false;

        playGame();
    });
    /*------function to load playerArray with user selected crest---------*/
    $(document).on('click', '.game-btn', function selectHouse() {

        let house = this.id;
        switch (house) {
            case 'gryffindor':
                playerArray.push('g');
                /*  document.getElementById('gryffindor').value = "";*/
                break;
            case 'slytherin':
                playerArray.push('s');
                /*    document.getElementById('slytherin').value = "";*/
                break;
            case 'hufflepuff':
                playerArray.push('h');
                /*     document.getElementById('hufflepuff').value = "";*/
                break;
            case 'ravenclaw':
                playerArray.push('r');
                /*    document.getElementById('ravenclaw').value = ""; */
                break;
            default:
                break;
        }
        console.log('after switch', playerArray);
        if (crestArray.length === playerArray.length) {
            j = playerArray.length - 1;
            validation();
        }
    });
    $('.hogwarts-crest').hover(function () {
        $(this).css('filter', 'brightness(2)');
    }, function(){
        $(this).css('filter', 'brightness(1)');
    });
    $('.gryffindor').hover(function () {
        $(this).css('filter', 'brightness(2)');
    }, function(){
        $(this).css('filter', 'brightness(1)');
    });
    $('.slytherin').hover(function () {
        $(this).css('filter', 'brightness(2)');
    }, function(){
        $(this).css('filter', 'brightness(1)');
    });
    $('.hufflepuff').hover(function () {
        $(this).css('filter', 'brightness(2)');
    }, function(){
        $(this).css('filter', 'brightness(1)');
    });
    $('.ravenclaw').hover(function () {
        $(this).css('filter', 'brightness(2)');
    }, function(){
        $(this).css('filter', 'brightness(1)');
    });
})
/*---------------Global variables-------------*/
let i = 0;
let j = 0;
let l = 0;
let p = 0;
let nextLevel = false;
let start = true;
let playerArray = [];
let crestArray = [];
let winningCrest = "";
let crests = ['g', 's', 'h', 'r'];