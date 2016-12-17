// class Simon {

// }
console.log('JS is working!')
// function startButton() {

// }

let simonButtonOptions = ['b0', 'b1', 'b2', 'b3'];
let simonCurrentArray = [];
let playerTurn = false;
let playerCurrentArray = [];
let currentLevel = 1;





//click function is to change Id of the button
  function redClick(){
    $('.b0').addClass('b0-red');
    setTimeout(function(){
    $('.b0').removeClass('b0-red');
    }, 200);
    document.getElementById('playb0').play();
  }

  function yellowClick() {
    $('.b1').addClass('b1-yellow');
    setTimeout(function(){
    $('.b1').removeClass('b1-yellow');
    }, 200);
    document.getElementById('playb1').play();
  }

  function greenClick() {
    $('.b2').addClass('b2-green');
    setTimeout(function(){
    $('.b2').removeClass('b2-green');
    }, 200);
    document.getElementById('playb2').play();
  }

  function blueClick() {
    $('.b3').addClass('b3-blue');
    setTimeout(function(){
    $('.b3').removeClass('b3-blue');
    }, 200);
    document.getElementById('playb3').play();
  }


//this buttonClick grabbs the buttonID from simonShow.
//It checks too match the passed ID with the correct color.
//ID and color are then passed to a function that displays the array
//  on the screen.
  function buttonClick(buttonID) {
    let color;
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
    $(`.${buttonID}`).addClass(`${buttonID}-${color}`);
    setTimeout(function() {
    $(`.${buttonID}`).removeClass(`${buttonID}-${color}`);
    }, 300);
  };

  function simonShow() {
    // $('.button').prop('disabled', true);
    console.log(simonCurrentArray);
    // loop over simonCurrentArray and call buttonClick passing in each item
    if (playerTurn === false) {
      console.log('playerTurn', playerTurn);
      let x = 0
        for(let i = 0; i < simonCurrentArray.length; i++) {
        setTimeout(function() {
          console.log(simonCurrentArray);
      //call buttonClick to automate the current array with the new move
        buttonClick(simonCurrentArray[i]);
        }, 520 * x);
        x++

        // setTimeout(function() {
        //   $('.button').prop('disabled', false);
        // }, 1500)
      };
    };
    playerTurn = true;
    console.log('playerTurn', playerTurn);
  };

//simonNewMove invokes simonShow, which invokes buttonClick.
//this adds a new move onto the past moves. simonShow calls the function to display the array
  function simonNewMove() {
    console.log(playerTurn);
    //if (playerTurn === false) {
      simonCurrentArray.push(simonButtonOptions[(Math.floor(Math.random()*4))]);
      simonShow();
    };
    //playerTurn = true;
    console.log(playerTurn);
  //};

function nextLevel() {
  currentLevel++;
  playerCurrentArray = [];
  console.log(currentLevel);
};

  function playerMove(par) {
    if (playerTurn === true) {
      playerCurrentArray.push(par);
        console.log(playerCurrentArray);
        console.log(playerTurn);
      if (playerCurrentArray[playerCurrentArray.length -1] !== simonCurrentArray[playerCurrentArray.length -1]){
        setTimeout(function() {
          alert('haha YOU LOSE!');
          console.log('haha YOU LOSE!');
        }, 350);
        playerTurn = false;
      } else {
        let checkLevel = playerCurrentArray.length === simonCurrentArray.length;
          if (checkLevel) {
            if(currentLevel === 5) {
              alert('Great YOU WIN! Click start to play again.');
            } else {
              setTimeout(function() {
                alert('Next Level!');
              }, 350);
              setTimeout(function() {
                nextLevel();
              }, 400);
              playerTurn = false;
              setTimeout(function() {
                simonNewMove();
              }, 500);
            }
          }
        }
      }
    }



//set the event listeners to change button color.
$('.start').on('click', newGame);
//change above listener to start new Game. Not New Move.
$('.b0').on('click', redClick);
$('.b1').on('click', yellowClick);
$('.b2').on('click', greenClick);
$('.b3').on('click', blueClick);


//sending the middle class into playerMove
$('.button').on('click', function(event) {
playerMove($(event.target).attr('class').split(' ')[1]);
});

//testing trigger function
/*function red() { $('.b0').trigger('click') };
function yellow() { $('.b1').trigger('click') };
function green() { $('.b2').trigger('click') };
function blue() { $('.b3').trigger('click') };*/

function newGame() {
  simonCurrentArray = [];
  playerCurrentArray = [];
  currentLevel = 1;
  playerTurn = false;
  setTimeout(function() {
    simonNewMove();
  }, 1000);
  document.getElementById('simonStrings').play();
};

//this adds a new move onto the past moves. simonShow calls the function to display the array

//create a function to show simon's moves that is invoked in at the end of simons new move.
