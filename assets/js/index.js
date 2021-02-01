/*---------------Global variables-------------*/
var i = 0;
var j = 0;
var nextLevel=false;
var start=true;
var delay = 1000;
var playerArray = [];
var crestArray = [];
var winningCrest = "";
let crests = ['g', 's', 'h', 'r'];

/*$(document).ready(function() {*/

    /*---------------Begin the Game----------------*/
    $('#play').click(function playGame() {
        $("#play").hide();
               if (nextLevel && !start){
            let x = i++;
        } else if (!nextLevel && start) {
            i = 0;
            x=0;
        }

        let crest = crests[Math.floor(Math.random() * crests.length)];
        crestArray.push(crest);

        console.log(crest);
        console.log(crestArray);

        lightUp(crest);  
    });



    /*---------reset to begin the game again -------*/
    $('#message-board').click(function start(){
        $('#message-board').hide();
        var message = document.getElementsByClassName('lost')
        message.remove();
        $('#play').show();
        nextLevel=false;
        start=true;
        playGane();
});

    /*-----Load playerArray for validation-------*/
    $('.gryffindor').click(function gryffindor() {
        playerArray.push('g');
        validation();
    });

    $('.slytherin').click(function slytherin() {
        playerArray.push('s');
        validation();
    });

    $('.hufflepuff').click(function hufflepuff() {
        playerArray.push('h');
        validation();
    });

    $('.ravenclaw').click(function ravenclaw() {
        playerArray.push('r');
        validation();
    });
  /*  function play() {
 
    };*/
    function validation() {
        console.log(j);
        console.log('playerArray[j]:', playerArray[j]);
        console.log('crestArray[j]:', crestArray[j]);
        if (playerArray[j] !== crestArray[j]) {
            winningCrest = crestArray[j];
            houseMessage();
        } else {
            if (j === i &
                playerArray.length === crestArray.length){
                winnerMessage();
            }
        };
        j++;
    };

/*------function to light up a house crest----------*/
    function lightUp(crest) {   
        switch (crest) {
            case 'g':
                var element = document.getElementById("gryffindor");
                element.classList.add("gryffindor-red")
                setTimeout(function () {
                    element = document.getElementById("gryffindor");
                    element.classList.remove("gryffindor-red")
                }, delay);
                break;
            case 's':
                element = document.getElementById("slytherin");
                element.classList.add("slytherin-green");
                setTimeout(function () {
                    element = document.getElementById("slytherin");
                    element.classList.remove("slytherin-green")
                }, delay);
                break;
            case 'h':
                element = document.getElementById("hufflepuff");
                element.classList.add("hufflepuff-yellow");
                setTimeout(function () {
                    element = document.getElementById("hufflepuff");
                    element.classList.remove("hufflepuff-yellow")
                }, delay);
                break;
            case 'r':
                element = document.getElementById("ravenclaw");
                element.classList.add("ravenclaw-blue");
                setTimeout(function () {
                    element = document.getElementById("ravenclaw");
                    element.classList.remove("ravenclaw-blue")
                }, delay);
                break;
            default:
                break;
        }
    };

/*------function to determine which house won--------*/
    function houseMessage() {
        crestArray[j];
        $('#message-board').show();
        switch (winningCrest) {
            case 'g':
                $('section>div>div>div:last').append(`<p class="lost">Gryffindor's bravery is bountious</p>`);
                break;
            case 's':
                $('section>div>div>div:last').append(`<p class="lost">Slytherin's cunning conquers all</p>`);
                break;
            case 'h':
                $('section>div>div>div:last').append(`<p class="lost">Hufflepuff's patience prevails</p>`);
                break;
            case 'r':
                $('section>div>div>div:last').append(`<p class="lost">Ravenclaw's wisdom wins</p>`);
                break;
            default:
                break;
        };

    };
/*------function to let the player know they have won--*/
    function winnerMessage(){
        $('#gryffindor, #hufflepuff, #slytherin, #ravenclaw, .title').hide();
        $('#dobby').show();
        $('section>div').append(`<p class="win">Dobby thinks you are very clever</p>`);
    };


/*
});*/

    /*------ reset for next level of game -----------*/ 
    /*$(document).ready(function(){
    $('#dobby').click(function nextLevel(){*/
        function nextLevel() {
        $('#gryffindor, #hufflepuff, #slytherin, #ravenclaw, .title').show();
        $('#dobby').hide();
        var message = document.getElementsByClassName(".win");
        message.remove();
        nextLevel=true;
        start=false;
        playGame();
    };
    document.getElementById('play').addEventListener('click', nextLevel);
    document.getElementById('dobby').addEventListener('click', playGame);
    
    document.getElementById('message-board').addEventListener('click', start);
   /* document.getElementById('dobby').addEventListener('click', nextLevel);
    document.getElementById('dobby').addEventListener('click', nextLevel);
    document.getElementById('dobby').addEventListener('click', nextLevel);
    document.getElementById('dobby').addEventListener('click', nextLevel);*/