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


    /*---------------Begin the Game----------------*/
    $('#play').click(function start() {
        $("#play").hide();
         if (!nextLevel && start) {
            i = 0;
            j = 0;
        }
        playGame();
  
    });

    function playGame(){

        let crest = crests[Math.floor(Math.random() * crests.length)];
        crestArray.push(crest);
        i = crestArray.length - 1;

        console.log(crest);
        console.log(crestArray);

        for (i=0; i<crestArray.length; i++){
        lightUp(crest);  
        };    
            
        for (j=0; j<crestArray.length; j++){
/*-----Load playerArray for validation-------*/
            $('.gryffindor').click(function gryffindor() {
                playerArray.push('g');
            });

            $('.slytherin').click(function slytherin() {
                playerArray.push('s');
            });

            $('.hufflepuff').click(function hufflepuff() {
                playerArray.push('h');
            });

            $('.ravenclaw').click(function ravenclaw() {
                playerArray.push('r');  
            });
        };

        validation();

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




    function validation() {
        console.log(j);
        console.log(i);
        console.log('playerArray[j]:', playerArray[j]);
        console.log('crestArray[j]:', crestArray[j]);
        console.log('playerArray:', playerArray);
        console.log('crestArray:', crestArray);
        if (playerArray !== crestArray){
       /* if (playerArray[j] !== crestArray[j]) {*/
            winningCrest = crestArray[j];
            houseMessage();
        } else {
            /*if (j === i &
                playerArray.length === crestArray.length){*/
                winnerMessage();
           /* }*/
        };
       /* j++;*/
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

       /*---------reset to begin the game again -------*/
    $(document).on('click','.board', function reStart(){
        $('#message-board').hide();
        let message = document.getElementsByTagName('p')[0];
        message.remove();
        $('#play').show();
        nextLevel=false;
        start=true;

        playGame();
    });


    $(document).on('click', '#dobby', function nextLevel(){

        $('#gryffindor, #hufflepuff, #slytherin, #ravenclaw, .title').show();
        $('#dobby').hide();
        let message = document.getElementsByTagName('p')[0];
        console.log(message);
        message.remove();
        nextLevel=true;
        start=false;

        playGame();
    });

    




    
   
 