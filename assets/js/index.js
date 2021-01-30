/*---------------Global variables-------------*/
var i = 0;
var j = 0;
var delay = 1000;
var playerArray = [];
var crestArray = [];
var winningCrest = "";

$(document).ready(function () {

    /*---------------Begin the Game----------------*/
    $('#play').click(function playGame() {
        $("#play").hide();

        let crests = ['g', 's', 'h', 'r'];
        let crest = crests[Math.floor(Math.random() * crests.length)];
        crestArray.push(crest);

        console.log(crest);
        console.log(crestArray);

        lightUp(crest);
  
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
        $('#gryffindor, #hufflepuff, #slytherin, #ravenclaw').hide();
        $('#dobby').show();
        $('section>div>div:last>div:first').append(`<p class="win">Dobby this you are very clever</p>`);
    };
});
