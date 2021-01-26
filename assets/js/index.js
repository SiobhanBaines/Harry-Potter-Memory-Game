function playGame(){
   var crests=[g,s,h,r];
   var list=array;
   var crest = crests[Math.floor(Math.random() * crests.length)];
   list.push(crest);
   console.log(crest);
   console.log(list);
   switch (crest) {
      case 'g':
      var element = document.getElementById("gryffindor");
      element.classList.add("gryffindor-red");
      break;
      case 's':
      var element = document.getElementById("slytherin");
      element.classList.add("slytherin-green");
      break;
      case 'h':
      var element = document.getElementById("hufflepuff");
      element.classList.add("hufflepuff-yellow");
      break;
      case 'r':
      var element = document.getElementById("ravenclaw");
      element.classList.add("ravenclaw-blue");
      break;
      default:
      break;

   }
   return`

   `;



}




