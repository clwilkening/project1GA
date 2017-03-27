# Simon Game
### Project 1 General Assembly - Chris Wilkening

[Play the Game Here](https://clwilkening.github.io/project1GA/)

![Picture of Simon Game](http://i.imgur.com/JraiZBo.png)

#### Technologies
To make this game I used:
- HTML
- CSS
- JavaScript
- jQuery
- Logic X
- Finale Music

Take a look: 

```
function buttonClick(buttonID) {
    let color;
      //checks the first move so that there isn't a triplet played. only the starting sound.
      if (isFirstMove === true) {
        if (buttonID === 'b0') {
          color = 'red';
        } else if (buttonID === 'b1') {
          color = 'yellow';
        } else if (buttonID === 'b2') {
          color = 'green';
        } else if (buttonID === 'b3') {
          color = 'blue';
        }
        isFirstMove = false;
      } else {
      //will play the sounds without the intro music.
      if (buttonID === 'b0') {
        color = 'red';
        document.getElementById('playb0').play();
      } else if (buttonID === 'b1') {
        color = 'yellow';
        document.getElementById('playb1').play();
      } else if (buttonID === 'b2') {
        color = 'green';
        document.getElementById('playb2').play();
      } else if (buttonID === 'b3') {
        color = 'blue';
        document.getElementById('playb3').play();
      };
    };
    $(`.${buttonID}`).addClass(`${buttonID}-${color}`);
    setTimeout(function() {
    $(`.${buttonID}`).removeClass(`${buttonID}-${color}`);
    }, 400);
  };
```

#### My approach
I broke down what the game needed to do into smaller sections. First I
focsued on the user getting the buttons to blink. Then I focused on Simon
getting them to blink. After that, I wrote the functions for the game functionality.
Once I had a working MVP, I spent some time with CSS and trying to implement modals.
Take a look at my wireframe below. 

![Picture of Wire Frame](http://i.imgur.com/W8E9sUv.png)

#### Complications
I had difficulty getting my sound to work properly with the blinking. 
I wrote my own music, intended to be half a second long. The interval of Simon's
blinking is also half a second. I changed the time to various intervals, but it the same
color blinks in a row, the sound will not play the second time. I found the solution in a Wes Bos tutorial by using ```currentTime = 0```. I also had difficulty with my modal. When the player wins, there is a "You Win" modal attached to the board container. When the class for the modal is removed, the board is also removed. I left the lose modal commented out to show that the start button will always start a new game.
I had difficulty translating my code into using a ES6 class.

Written by Chris Wilkening
