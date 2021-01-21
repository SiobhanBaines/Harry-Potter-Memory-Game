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

## User Story One Testing

## User Story Two Testing

## User Story Three Testing

## Performance Testing using Lighthouse

# Deployment
In Gitpod the bottom area of the screen is where git commands are entered.

![image]()

1.	If you have been running the 8000 port you will need to use Ctrl + Z to escape back and use the command entry. This line will appear “gitpod /workspace/Siobhan-Baines-MS2-HP-Game $” allowing commands to be entered.
2.	Make sure any changes that have been made are save by selecting the ‘File’ tab and ‘Save All’
3.	Type “git add .” to add all the changes ready to be committed. Remember the full stop because this will add everything that has been save. If only one file has been changed that file name can be entered instead of the full stop
4.	Type “git commit -m” immediately followed by a description of the change(s) being committed to Github 
5.	Type “git push” which will push everything to Github
6.	Open Github and the repository the website is in. To the far right of the menu bar is the Settings tab. Select this and scroll down to “GitHub Pages”
7.	Under Source if the dropdown menu has “None” select the “master” branch which will bring up the “(root)” folder, and click “Save”
8.	Your page will now show as published under the GitHub Pages section
