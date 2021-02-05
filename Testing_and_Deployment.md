# Testing of Siobhan-Baines-MS2_HP-Game

## Testing During Development
### Issues with Font in the style of Harry Potter
I want the text in the game to be in the same style as is used for the Harry Potter films. Google do not have a font so I searched the internet to find a suitable font and instructions how to add the font to my website. 
[image]
The font I have decided to use is ParryHotter created by Anke Arnold in Germany. I added it to my CSS stylesheet at the top using the font-face rule 
<!--@font-face {
    font-family: 'ParryHotter';
    src: url('assets/fonts/ParryHotter.ttf');
    font-weight: normal;
    font-style: normal;
} -->
The error I was given was 'GET https://8000-deb9f02d-9615-41c1-acd8-e40a6c9e3634.ws-eu03.gitpod.io/assets/css/assets/fonts/ParryHotter.ttf net::ERR_ABORTED 404'. I could not understand why it was looking in assets/css/assets/fonts so tried other fonts. all gave the same error. Eventually I decided to move the fonts folder into the css folder and the font worked.
[image]

### Issues with keeping house crests grouped in a square in the centre
I started with only using col-3 for all sizes but this gave meant the crests reduced in size to being not visible on mobile devices.
[image] col-3-text
[image]col-3
I then changed the column classes for large, medium and small to gradually replace the sides to becoming part of the middle
[image] col-lg text
[image] col-lg
I then added some media query statements which made the crests appear correctly for medium sized decives.
[image] col-md
I then changed the order round of the col classes and adjusted the media queries which appears to have created the image I desire. All four crests together in the centre.
[image] col-swap
### Issue with switch clause for user selection
When testing the game I found that everything appeared to work for the first round of the game where only 1 crest needed to be selected. I had a function which contained a switch clause. I tried using a for loop to only load the id for the crest that had been selected. Instead, in the second round, it loaded the id for the first click twice before I had clicked on the second crest which I found out by using multiple console logs.
[image] switch
With the help of tutor support I found the fix was to call the function using jquery in the same way as I had for Dobby and Messageboard. [$(document).on('click', '.game-btn', function selectHouse() {] instead of [$('.game-btn').click(function selectHouse() {]
### The crests all stay lit at the same time
When the game lights up the crests, it should switch on and then switch off the crest light up after a pause before lighting up the next crest.
Using [setTimeout(() =>{$('.game-btn').removeClass("lightUp");},delay);] or [setInterval(() =>{$('.game-btn').removeClass("lightUp");},delay);] work in that they cause the crest to be lit up for a period of time so the player can see it light up but then they stay lit when the next one lights up so that more than one crest is lit at the same time.
Using google I found [a sleep function](https://www.sitepoint.com/delay-sleep-pause-wait/)
I ended up talking to tutor support.

### The menu jumps to the left when expanding

## User Story One Testing
The memory test is covered by the patterns created that the player needs to replicate.
The menu gives easy access to the instructions on the 'How to play' page. - ask Ciara and Fiona to check the instructions are correct and make sense
The menu gives easy access to some information about the theme, 'Harry Potter'.

## User Story Two Testing

## Performance Testing using Lighthouse

