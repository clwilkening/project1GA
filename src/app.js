// class Simon {

// }
console.log('JS is working!')
// function startButton() {

// }

let simonButtonOptions = ['b0', 'b1', 'b2', 'b3'];
let simonCurrentArray = [];
let simonColors = [red, blue, green, yellow];
let playerTurn = false;
let playerCurrentArray = [];





//click function is to change Id of the button
  function redClick(){
    $('.b0').addClass('b0-red');
    setTimeout(function(){
    $('.b0').removeClass('b0-red');
    }, 400);
  }

  function yellowClick() {
    $('.b1').addClass('b1-yellow');
    setTimeout(function(){
    $('.b1').removeClass('b1-yellow');
    }, 400);
  }

  function greenClick() {
    $('.b2').addClass('b2-green');
    setTimeout(function(){
    $('.b2').removeClass('b2-green');
    }, 400);
  }

  function blueClick() {
    $('.b3').addClass('b3-blue');
    setTimeout(function(){
    $('.b3').removeClass('b3-blue');
    }, 300);
  }

//this buttonClick grabbs the buttonID from simonShow.
//It checks too match the passed ID with the correct color.
//ID and color are then passed to a function that displays the array
//  on the screen.
  function buttonClick(buttonID) {
    let color;
      if (buttonID === 'b0') {
        color = 'red';
      } else if (buttonID === 'b1') {
        color = 'yellow';
      } else if (buttonID === 'b2') {
        color = 'green';
      } else if (buttonID === 'b3') {
        color = 'blue';
      };
    $(`.${buttonID}`).addClass(`${buttonID}-${color}`);
    setTimeout(function() {
    $(`.${buttonID}`).removeClass(`${buttonID}-${color}`);
    }, 400);
  };

  function simonShow() {
    console.log(simonCurrentArray);
    // loop over simonCurrentArray and call buttonClick passing in each item
    let x = 0
      for(let i = 0; i < simonCurrentArray.length; i++) {
      setTimeout(function() {
        console.log(simonCurrentArray);
    //call buttonClick to automate the current array with the new move
      buttonClick(simonCurrentArray[i]);
      }, 500 * x);
      x++
    };
  };

  // function isPlayerTurn() {
  //   if (playerTurn === false) {
  //     nowSimonMove = true;
  //   }
  //   if (playerTurn === true) {
  //     nowSimonMove == false;
  // }

//this adds a new move onto the past moves. simonShow calls the function to display the array
  function simonNewMove() {
    if (playerTurn === false) {
      simonCurrentArray.push(simonButtonOptions[(Math.floor(Math.random()*4))]);
      simonShow();
      }
    playerTurn = true;
  }

//simonNewMove invokes simonShow, which invokes buttonClick.

//set the event listeners to change button color.
$('.start').on('click', newGame);
//change above listener to start new Game. Not New Move.
$('.b0').on('click', redClick);
$('.b1').on('click', yellowClick);
$('.b2').on('click', greenClick);
$('.b3').on('click', blueClick);
//testing trigger function
function red() { $('.b0').trigger('click') };
function yellow() { $('.b1').trigger('click') };
function green() { $('.b2').trigger('click') };
function blue() { $('.b3').trigger('click') };

function newGame() {
  simonCurrentArray = []
  playerTurn = false
  simonNewMove();
}

//this adds a new move onto the past moves. simonShow calls the function to display the array

//create a function to show simon's moves that is invoked in at the end of simons new move.
