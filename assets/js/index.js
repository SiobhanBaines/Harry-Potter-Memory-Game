/*---------------Global variables-------------*/
var i = 0;
var j = 0;
var delay = 1000;
var playerArray = [];
var crestArray = [];

$(document).ready(function () {

   /*---------------Begin the Game----------------*/
   $('#play').click(function playGame() {
      $("#play").hide();

      let crests = ['g', 's', 'h', 'r'];
      let crest = crests[Math.floor(Math.random() * crests.length)];
      crestArray.push(crest);

      console.log(crest);
      console.log(crestArray);
      /*----------- light up chosen crest----------*/
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
   });

   /*-------------Validate Selected Crest-------------*/
   $('.gryffindor').click(function gryffindor() {
      playerArray.push('g');
      console.log(j);
      console.log('playerArray[j]:', playerArray[j]);
      console.log('crestArray[j]:', crestArray[j]);
      if (playerArray[j] !== crestArray[j]) {
         $(`section`).append(`<p class="lost">Brave Gryffindor has beaten you</p>`);
      };
      j++;
   });

   $('.slytherin').click(function slytherin() {
      playerArray.push('s');
      console.log(j);
      console.log('playerArray[j]:', playerArray[j]);
      console.log('crestArray[j]:', crestArray[j]);
      if (playerArray[j] !== crestArray[j]) {
$(`section`).append(`<p class="lost">You have been conquered by cunning Slytherin</p>`);
      };
      j++;
   });

   $('.hufflepuff').click(function hufflepuff() {
      playerArray.push('h');
      console.log(j);
      console.log('playerArray[j]:', playerArray[j]);
      console.log('crestArray[j]:', crestArray[j]);
      if (playerArray[j] !== crestArray[j]) {
         $(`section`).append(`<p class="lost">Hufflepuff patience presides</p>`);
      };
      j++;
   });

   $('.ravenclaw').click(function ravenclaw() {
      playerArray.push('h');
      console.log(j);
      console.log('playerArray[j]:', playerArray[j]);
      console.log('crestArray[j]:', crestArray[j]);
      if (playerArray[j] !== crestArray[j]) {
        $(`section`).append(`<p class="lost">Ravenclaw's wisdom wins</p>`);
      };
      j++;
   });


});
