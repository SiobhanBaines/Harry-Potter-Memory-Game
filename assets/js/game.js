/*------function to load crestArray with a new house crest code ----------*/
function playGame() {

    let crest = crests[Math.floor(Math.random() * crests.length)];
    crestArray.push(crest);
    i = crestArray.length - 1;


    var timer = setInterval(lightOn, 1000);
    /* var offTimer = setInterval(lightOff, 2000);*/
   /* $('.game-btn').removeClass('lightUp');*/
    function lightOn() {
        if (x < crestArray.length) {
            $('.game-btn').removeClass('lightUp');
            $('.game-btn').css('filter','');
            let crest = crestArray[x];
            let crestId = '#' + crest;
            $(crestId).addClass('lightUp');
            x++;
        } else {
            $('.game-btn').removeClass('lightUp')
           $('.game-btn').css('filter','');
            clearInterval(timer);
        }
        /* $(crestId).removeClass('lightUp')*/
    }
    /*  do {*/
    /*  lightOn(x);
      /*   lightOff();*/
    /*  x++;
  } while (x < crestArray.length);*/

}

/*function lightOn() {
    if (x < crestArray.length) {
        let crest = crestArray[x];
        let crestId = '#' + crest;
        $(crestId).addClass('lightUp');
        x++;
    } else {
        clearInterval(timer);
    }
    $(crestId).removeClass('lightUp')
}

/*function lightOff(number) {
    if (x < crestArray.length) {
        let crest = crestArray[x];
        let crestId = '#' + crest;
        var onTimer = setInterval(function () {
            $(crestId).removeClass('lightUp');
        }, 1000);
        x++;
    }
}

/*function lightOff() {
           let crest = crestArray[x];
        let crestId = '#' + crest;
    var onTimer = setInterval(function(){
        $(crestId).removeClass('lightUp');
    }, 5000);
}*/
//debugger;
/*  function lightOn(number) {
 
      setTimeout(function () {
         /* alert('x = '+ x);*/
/*       if (x < crestArray.length) {
           let crest = crestArray[x];
         /*  alert('crestArray[x] = '+ crestArray[x]);*/
/*          let crestId = '#' + crest;
          x++;
         /* $(crestId).addClass('lightUp');*/

/*          $(crestId).css('filter', 'brightness(5)').css('display', 'block');
          lightOn(x);
       }
   }, 2000);
}
 
 
/*   lightOn(x);
       /*------function to dim crests stored in crestArray---------*/
/* function lightOff(number) {
     setTimeout(function () {*/
/*  alert('y = '+y);*/
/*        
        if (y < crestArray.length) {
            let crest = crestArray[y];*/
/*    alert('crestArray[y] = '+crestArray[y]);*/
/*         let crestId = '#' + crest;
         y++;*/
/*$(crestId).removeClass('lightUp');*/

/*         $(crestId).css('filter', 'brightness(1)');
         lightOff(y);
     }
 }, 2000);
}
lightOff(y);
 
 
}
/*------function to light up crests stored in crestArray---------*/

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
/*------function to determine which house won-------*/
function houseMessage() {

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
        nextLevel = false;
        start = true;
        location.reload();
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
        playerArray.push(this.id);

        if (crestArray.length === playerArray.length) {
            j = playerArray.length - 1;
            validation();
        }
    });
    $('.hogwarts-crest').hover(function () {
        $(this).css('filter', 'brightness(2)');
    }, function () {
        $(this).css('filter', 'brightness(1)');
    });
    $('.gryffindor').hover(function () {
        $(this).css('filter', 'brightness(2)');
    }, function () {
        $(this).css('filter', 'brightness(1)');
    });
    $('.slytherin').hover(function () {
        $(this).css('filter', 'brightness(2)');
    }, function () {
        $(this).css('filter', 'brightness(1)');
    });
    $('.hufflepuff').hover(function () {
        $(this).css('filter', 'brightness(2)');
    }, function () {
        $(this).css('filter', 'brightness(1)');
    });
    $('.ravenclaw').hover(function () {
        $(this).css('filter', 'brightness(2)');
    }, function () {
        $(this).css('filter', 'brightness(1)');
    });
});

/*---------------Global variables-------------*/
let i = 0;
let j = 0;

var x = 0;
var y = 0;
let nextLevel = false;
let start = true;
let playerArray = [];
let crestArray = [];
let winningCrest = "";
let crests = ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];