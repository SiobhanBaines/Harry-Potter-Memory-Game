# Testing of Siobhan-Baines-MS2_HP-Game

## Testing During Development
### Issues with Font in the style of Harry Potter
I want the text in the game to be in the same style as is used for the Harry Potter films. Google do not have a font so I searched the internet to find a suitable font and instructions how to add the font to my website. 

The font I have decided to use is ParryHotter created by Anke Arnold in Germany. I added it to my CSS stylesheet at the top using the font-face rule 
<!--@font-face {
    font-family: 'ParryHotter';
    src: url('assets/fonts/ParryHotter.ttf');
    font-weight: normal;
    font-style: normal;
} -->
The error I was given was 'GET https://8000-deb9f02d-9615-41c1-acd8-e40a6c9e3634.ws-eu03.gitpod.io/assets/css/assets/fonts/ParryHotter.ttf net::ERR_ABORTED 404'. I could not understand why it was looking in assets/css/assets/fonts so tried other fonts. All gave the same error. Eventually I decided to move the fonts folder into the css folder and the font worked.

### Issues with keeping house crests grouped in a square in the centre
I started with only using col-3 for all sizes but this gave meant the crests reduced in size to being not visible on mobile devices.
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/360d1825cd9bcd90d9a500c425ff503ab356e807/reference%20documents/testing%20images/crests-col-3.png)

I then changed the column classes for large, medium and small to gradually replace the sides to becoming part of the middle
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/360d1825cd9bcd90d9a500c425ff503ab356e807/reference%20documents/testing%20images/crests-col-lg.png)

I then added some media query statements which made the crests appear correctly for medium sized decives.
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/360d1825cd9bcd90d9a500c425ff503ab356e807/reference%20documents/testing%20images/crest-col-md.png)

I then changed the order round of the col classes and adjusted the media queries which appears to have created the image I desire. All four crests together in the centre.
 
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/360d1825cd9bcd90d9a500c425ff503ab356e807/reference%20documents/testing%20images/crest-col-swap.png)

### Issue with switch clause for user selection
When testing the game, I found that everything appeared to work for the first round of the game where only one crest needed to be selected. I tried multiple different methods including a switch statement, a for loop and some nested if statements. None worked. In the for loop in the second round, it loaded the id of the first click twice before I had clicked on the second crest which I found out by using multiple console logs.
Below is the result from the for loop. playerArray should be the same as crestArray.
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/360d1825cd9bcd90d9a500c425ff503ab356e807/reference%20documents/testing%20images/switch.png)

With the help of tutor support I found the fix was to call the function using jquery in the same way as I had for Dobby and Messageboard. [$(document).on('click', '.game-btn', function selectHouse() {] instead of [$('.game-btn').click(function selectHouse() {]. Using the 'this' statement which was so much cleaner.

### The crests all stay lit at the same time
When the game lights up the crests, it should switch on and then switch off the crest light up after a pause before lighting up the next crest.
Using [setTimeout(() =>{$('.game-btn').removeClass("lightUp");},delay);] or [setInterval(() =>{$('.game-btn').removeClass("lightUp");},delay);] work in that they cause the crest to be lit up for a period of time so the player can see it light up but then they stay lit when the next one lights up so that more than one crest is lit at the same time.
Using google I found [a sleep function](https://www.sitepoint.com/delay-sleep-pause-wait/)
I ended up talking to tutor support. After much confusion on my part and a great deal of patience from the tutors I finally got the waiting feature to work using setInterval. I added a setInterval to the lighting up of the crests with an if statement to drop out of the setInterval which cleared the interval. The final issue was that if the same crest needed to light up more than once consecutively it looked like the brightness did not change. I needed to add a setInterval to switch the light off after a delay in between the 2 matching crests. 

### The menu jumps to the left when expanding
I eventually realised this was happening because the wording was wider than the hamburger icon. To stop it jumping around I moved the icon to the left. This keeps it out of the way of the game and keeps its positioning in the same place especially on smaller devices.

## User Story One Testing
The memory test is covered by the patterns created that the player needs to replicate.
The menu gives easy access to the instructions on the 'How to play' page. - asked Ciara and Fiona to check the instructions are correct and make sense.
The menu gives easy access to some information about the theme, 'Harry Potter'.

I believe the game hit the mark, at least for my 10-year-old niece who messaged me saying she loved the game.
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/master/reference%20documents/testing%20images/daisy.png).

## Unit Testing
### How to Unit Test
1. Check the basic functionality of this website
    * All menu options take the user to the correct location and all pages * open cleanly.
    * Clicking on the schoolcrest will take the user to the main game page
    * Start the game by clicking on the start button.
    * When one of the crests lights up, click it to make sure Dobby and his message show.
    * When one of the crests lights up, click a different crest to make sure the message from the house relating to the crest that lit up shows on the parchment.
    * Check when more than one light is meant to light they do so separately.
    * Check all crests light up through the game.
    * Check all house messages show on the parchment.
    * Check the wording on the How to play and About pages.
    * Check the alignment of all the features - they should be central to the page.
2. Validate the code
    * Use [validator.w3](https://validator.w3.org/) to check the HTML
    * Use [jigsaw.w3](https://jigsaw.w3.org/css-validator/) to check the CSS
    * Use [JSHint](https://jshint.com/) to check the JavaScript
    * Use [autoprefixer](https://autoprefixer.github.io/) to add in any prefixes needed for other web browsers.
    * Use a documentation application to check the spelling such as word but remember word will not always pick-up incorrect spelling such as thrid instead of third. 
3. In Chrome dev tools use Lighthouse to check the performance of the website

### Functionality Testing
#### Menu
I have made the menu appear differently on the home page to all the other pages because I think there is no need to have a home page menu option when you first get to the website.
  
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/89767e01a22aba418c6e45b7f594a5c2a83a05ab/reference%20documents/testing%20images/home-page-menu.png)

![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/master/reference%20documents/testing%20images/menu.png)

All menu options were tested to ensure they all take the site visitor to the correct destination.

#### Game
The player needs to click on the Hogwarts school crest on the landing page to enter the game.
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/master/reference%20documents/testing%20images/hogwarts.png)

When the game loads there is a play button ![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/8daa2e8399fd3a506042a108513f3a278a1addc8/reference%20documents/testing%20images/play-button.png) 

which the play clicks to start the game. Once the game starts it selects one of the four houses to light up the crest. Either Gryffindor, Slytherin, Hufflepuff or Ravenclaw. 
On this image Gryffindor house crest is lit up.
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/d73d7a420dbaa9c264dfc72d62d50d6618be677a/reference%20documents/testing%20images/game-screen-lit-up-house.png)
If the player clicks on the same house crest Dobby appears telling the player how clever they are.
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/d73d7a420dbaa9c264dfc72d62d50d6618be677a/reference%20documents/testing%20images/dobby-screen.png)

If the player clicks on the wrong house crest Dobby appears giving the player a message from the house which is the last house in the pattern. Below are images of the messages which alter style dependant on the device being used to play the game.
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/d73d7a420dbaa9c264dfc72d62d50d6618be677a/reference%20documents/testing%20images/lost-message-gryfindr.png)
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/d73d7a420dbaa9c264dfc72d62d50d6618be677a/reference%20documents/testing%20images/lost-message-slytherin.png)
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/d73d7a420dbaa9c264dfc72d62d50d6618be677a/reference%20documents/testing%20images/lost-message-hufflepuff.png)
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/d73d7a420dbaa9c264dfc72d62d50d6618be677a/reference%20documents/testing%20images/lost-message-ravenclaw.png)

### Code Validation
#### Validate.w3
The HTML code is valid if the [validator](https://validator.w3.org/) comes back with this image.
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/308fd2e4c087ec043968db194eeb1c0bb14d2678/reference%20documents/testing%20images/html-valid.png)

If there are errors, each one will need investigating. It is a good idea to validate periodically during the development especially if there are any complex issues to deal with.

The CSS code is valid if the [validator](https://jigsaw.w3.org/css-validator/) comes back with this image.
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/308fd2e4c087ec043968db194eeb1c0bb14d2678/reference%20documents/testing%20images/css-valid.png)

If there are any errors, each one will need to be investigated and corrected.

[JSHint](https://jshint.com/) helps to spot anything where the syntax is incorrect such as missing semi-colons or where a variable has been defined but not used. It will not necessarily help with the logic of the Javascript or spelling mistakes.

[autoprefixer](https://autoprefixer.github.io/) Not only adds any prefixes needed but because of the way it adds then, it is easy to spot any prefixes that are not valid.

## Implementation Testing using Lighthouse
I ran Lighthouse over all the pages in both desktop and mobile mode to find out what issues there were with performance, accessibility and SEO. It also helps ensure the code meets best practices requirements.

### Results before any fixes were applied
#### Desktop
##### Home Page
There was no issue in performance on the Home page when run on a desktop so I didn't need to investigate anything.
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/360d1825cd9bcd90d9a500c425ff503ab356e807/reference%20documents/testing%20images/lighthouse/before-changes/index-desk.png)
##### Game Page
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/360d1825cd9bcd90d9a500c425ff503ab356e807/reference%20documents/testing%20images/lighthouse/before-changes/game-desk-1.png)

1. There was not meta description. After speaking to tutor support I added the meta="description" and content="Siobhan Baines | Software Developer | Leeds, UK" which made the score increase and turn green.
##### Help Page  
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/360d1825cd9bcd90d9a500c425ff503ab356e807/reference%20documents/testing%20images/lighthouse/before-changes/help-desk-1.png)

Issue 1. The same issue as for the game page.
#### About Page
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/360d1825cd9bcd90d9a500c425ff503ab356e807/reference%20documents/testing%20images/lighthouse/before-changes/about-desk-1.png)

1. The same issue as for the game page.
2. After investigating the issue with best practices, I added rel="noopener" to the social media 'a' tags which improved the score.

#### Mobile
##### Home Page
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/360d1825cd9bcd90d9a500c425ff503ab356e807/reference%20documents/testing%20images/lighthouse/before-changes/index-mobile-1.png)

1. The image was over 420KB. I used paint 3D and [TinyPNG](https://tinypng.com/) to reduce the size to 43KB which improved the performance.
2. In the scripts section I had two Javascripts that lighthouse said were duplicates so I commented out the CDN version which improved performance further.
3. I was linking to Fontawesome which is not used in this HTML file.
Issue 4. I change the CSS to preload the font
#### Game Page
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/360d1825cd9bcd90d9a500c425ff503ab356e807/reference%20documents/testing%20images/lighthouse/before-changes/game-mobile-1.png)

1. Too many images that were potentially too large. I reduced them using paint 3D and [TinyPNG](https://tinypng.com/).
2. I added - ?display="swap" to the Fontawesome CDN which preloads the font
Sadly, this did not bring the performance up quite high enough for it to turn green 
#### Help Page  
All the lights are green on the lighthouse dashboard - no need to change anything.
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/360d1825cd9bcd90d9a500c425ff503ab356e807/reference%20documents/testing%20images/lighthouse/before-changes/help-mobile.png)
#### About Page
All the lights are green on the lighthouse dashboard - no need to change anything.
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/360d1825cd9bcd90d9a500c425ff503ab356e807/reference%20documents/testing%20images/lighthouse/before-changes/about-mobile.png)

### Results from applying all the fixes
#### Desktop
##### Home Page
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/fb94d6e6c54ee4da4f4c55249e61e12bf250eb53/reference%20documents/testing%20images/lighthouse/after-changes/index-desk-after.png)
#### Game Page
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/fb94d6e6c54ee4da4f4c55249e61e12bf250eb53/reference%20documents/testing%20images/lighthouse/after-changes/game-desk-after.png)
#### Help Page  
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/fb94d6e6c54ee4da4f4c55249e61e12bf250eb53/reference%20documents/testing%20images/lighthouse/after-changes/help-desk-after.png)
#### About Page
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/fb94d6e6c54ee4da4f4c55249e61e12bf250eb53/reference%20documents/testing%20images/lighthouse/after-changes/about-desk-after.png)
### Mobile
#### Home Page
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/fb94d6e6c54ee4da4f4c55249e61e12bf250eb53/reference%20documents/testing%20images/lighthouse/after-changes/index-mobile-after.png)
#### Game Page
As can be seen in the below image, I did not manage to get the performance quite good enough. My concern is the images would lose too mych resolution.

![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/fb94d6e6c54ee4da4f4c55249e61e12bf250eb53/reference%20documents/testing%20images/lighthouse/after-changes/game-mobile-after.png)
#### Help Page
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/fb94d6e6c54ee4da4f4c55249e61e12bf250eb53/reference%20documents/testing%20images/lighthouse/after-changes/help-mobile-after.png)
#### About Page
![image](https://github.com/SiobhanBaines/Siobhan-Baines-MS2-HP-Game/blob/fb94d6e6c54ee4da4f4c55249e61e12bf250eb53/reference%20documents/testing%20images/lighthouse/after-changes/about-mobile.png)