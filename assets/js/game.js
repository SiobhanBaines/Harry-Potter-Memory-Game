/*------function to load crestArray with a new house crest code ----------*/
function playGame() {

    let crest = crests[Math.floor(Math.random() * crests.length)];
    crestArray.push(crest);
  /*  i = crestArray.length - 1;*/

    var timer = setInterval(lightOn, 1000);
    var sameTimer = setInterval(lightOff, 0);
    /*------function to light up crests stored in crestArray---------*/
    function lightOn() {

        if (x < crestArray.length) {
            if ((crestArray.length > 1) &&
                (crestArray[x] === crestArray[x + 1])) {
                sameTimer = setInterval(lightOff, 500);
            }
            $('.game-btn').removeClass('lightUp');
            let crest = crestArray[x];
            let crestId = '#' + crest;
            $(crestId).addClass('lightUp');
            x++;
        } else {
            $('.game-btn').removeClass('lightUp')
            clearInterval(timer);
        }
    }
    /*------function to remove the lightUp class on a special interval when the same 
                crest is being lit up next---------*/
    function lightOff() {

        $('.game-btn').removeClass('lightUp');
        clearInterval(sameTimer);
    }
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
        winningCrest = crestArray[p];
        houseMessage();
    }
}
/*------function to determine which house won-------*/
function houseMessage() {
    $('h1').hide();
    $('#gryffindor, #hufflepuff, #slytherin, #ravenclaw, .title').hide();
    $('#message-board').show();
    switch (winningCrest) {
        case 'gryffindor':
            $('section>div>div:last>div').append(`<p class="lost">Gryffindor's bravery is bountious</p>`);
            break;
        case 'slytherin':
            $('section>div>div:last>div').append(`<p class="lost">Slytherin's cunning conquers all</p>`);
            break;
        case 'hufflepuff':
            $('section>div>div:last>div').append(`<p class="lost">Hufflepuff's patience prevails</p>`);
            break;
        case 'ravenclaw':
            $('section>div>div:last>div').append(`<p class="lost">Ravenclaw's wisdom wins</p>`);
            break;
        default:
            break;
    }
    playerArray.length = 0;
    crestArray.length = 0;
    x = 0;
    y = 0;
}
/*---function to let the player know they have won--*/
function winnerMessage() {
    $('h1').hide();
    $('#gryffindor, #hufflepuff, #slytherin, #ravenclaw, .title').hide();
    $('#dobby').show();
    $('section>div>div:last>div:first').append(`<p class="win">Dobby thinks you are very clever</p>`);
    playerArray.length = 0;
    x = 0;
    y = 0;
}

$(document).ready(function () {

/*---------------Begin the Game---------------------*/
    $('#play').click(function start() {
        $("#play").hide();
        if (!nextLevel && start) {
            p = 0;
          /*  j = 0;*/
        }
        playGame();
    });
/*---------reset to begin the game again ----------*/
    $(document).on('click', '.lost', function reStart() {
        $('h1').show();
        $('#message-board').hide();
        let message = document.getElementsByTagName('p')[0];
        message.remove();
        nextLevel = false;
        start = true;
        location.reload();
    });
/*------play next level of game -------------------*/
    $(document).on('click', '#dobby', function levelUp() {
        $('h1').show();
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
        playerArray.push(this.id);

        if (crestArray.length === playerArray.length) {
            p = playerArray.length - 1;
            validation();
        }
    });
/*-_--hover brightness----*/
    $('.hogwarts-crest').hover(function () {
        $(this).css('filter', 'brightness(2)');
    }, function () {
        $(this).css('filter', '');
    });
    $('.gryffindor').hover(function () {
        $(this).css('filter', 'brightness(2)');
    }, function () {
        $(this).css('filter', '');
    });
    $('.slytherin').hover(function () {
        $(this).css('filter', 'brightness(2)');
    }, function () {
        $(this).css('filter', '');
    });
    $('.hufflepuff').hover(function () {
        $(this).css('filter', 'brightness(2)');
    }, function () {
        $(this).css('filter', '');
    });
    $('.ravenclaw').hover(function () {
        $(this).css('filter', 'brightness(2)');
    }, function () {
        $(this).css('filter', '');
    });
});

/*---------------Global variables-------------*/
let p = 0;
let x = 0;
let y = 0;
let nextLevel = false;
let start = true;
let playerArray = [];
let crestArray = [];
let winningCrest = "";
let crests = ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];