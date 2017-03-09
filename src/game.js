console.log('JS is working!');

class newGame {
  constructor() {
    this.simonButtonOptions = ['b0', 'b1', 'b2', 'b3'];
    this.simonCurrentArray = [];
    this.playerCurrentArray = [];
    this.currentLevel = 1;
    this.playerTurn = false;
    this.isFirstMove = true;
    this.simonNewMove = simonNewMove;
  };
};

//click function is to change Id of the button
//allows user to let a button blink.
  redClick = () => {
    $('.b0').addClass('b0-red');
    setTimeout(function(){
    $('.b0').removeClass('b0-red');
    }, 300);
    const redAudio = document.getElementById('playb0');
    redAudio.currentTime = 0;
    redAudio.play();
  }

  yellowClick = () => {
    $('.b1').addClass('b1-yellow');
    setTimeout(function(){
    $('.b1').removeClass('b1-yellow');
    }, 300);
    yellowAudio = document.getElementById('playb1')
    yellowAudio.currentTime = 0;
    yellowAudio.play();
  }

  greenClick = () => {
    $('.b2').addClass('b2-green');
    setTimeout(function(){
    $('.b2').removeClass('b2-green');
    }, 300);
    greenAudio = document.getElementById('playb2')
    greenAudio.currentTime = 0;
    greenAudio.play();
  }

  blueClick = () => {
    $('.b3').addClass('b3-blue');
    setTimeout(function(){
    $('.b3').removeClass('b3-blue');
    }, 300);
    blueAudio = document.getElementById('playb3')
    blueAudio.currentTime = 0;
    blueAudio.play();

  }

//this buttonClick grabbs the buttonID from simonShow.
//It checks too match the passed ID with the correct color.
//ID and color are then passed to a function that displays the array
//  on the screen.
  buttonClick = (buttonID) => {
    let color;
      //checks the first move so that there isn't a triplet played. only the starting sound.
      if (this.isFirstMove === true) {
        if (buttonID === 'b0') {
          color = 'red';
        } else if (buttonID === 'b1') {
          color = 'yellow';
        } else if (buttonID === 'b2') {
          color = 'green';
        } else if (buttonID === 'b3') {
          color = 'blue';
        }
        this.isFirstMove = false;
      } else {
      //will play the sounds without the intro music.
      if (buttonID === 'b0') {
        color = 'red';
        const redAudio = document.getElementById('playb0');
        redAudio.currentTime = 0;
        redAudio.play();
      } else if (buttonID === 'b1') {
        color = 'yellow';
        yellowAudio = document.getElementById('playb1')
        yellowAudio.currentTime = 0;
        yellowAudio.play();
      } else if (buttonID === 'b2') {
        color = 'green';
        greenAudio = document.getElementById('playb2')
        greenAudio.currentTime = 0;
        greenAudio.play();
      } else if (buttonID === 'b3') {
        color = 'blue';
        blueAudio = document.getElementById('playb3')
        blueAudio.currentTime = 0;
        blueAudio.play();
      };
    };
    $(`.${buttonID}`).addClass(`${buttonID}-${color}`);
    setTimeout(function() {
    $(`.${buttonID}`).removeClass(`${buttonID}-${color}`);
    }, 400);
  };

  //function blinks through Simon's array.
  simonShow = () => {
    // $('.button').prop('disabled', true);
    // console.log(simonCurrentArray);
    //tried to check for player turn in order to disable user click during Simon's turn.
    if (this.playerTurn === false) {
      console.log('playerTurn', this.playerTurn);
      // loop over simonCurrentArray and call buttonClick passing in each item
      let x = 0
        for (let i = 0; i < this.simonCurrentArray.length; i++) {
        setTimeout(() => {
        // console.log(simonCurrentArray);
        //call buttonClick to automate the current array with the new move
        this.buttonClick(this.simonCurrentArray[i]);
        }, 500 * x);
        x++

        // setTimeout(function() {
        //   $('.button').prop('disabled', false);
        // }, 1500)
      };
    };
    this.playerTurn = true;
  };

//simonNewMove invokes simonShow, which invokes buttonClick.
//this adds a new move onto the past moves. simonShow calls the function to display the array
  simonNewMove = () => {
    //if (playerTurn === false) {
      if (this.isFirstMove === true) {
        document.getElementById('simonStrings').play();
        setTimeout( () => {
          // console.log(this)
          this.simonCurrentArray.push(this.simonButtonOptions[(Math.floor(Math.random()*4))]);
          this.simonShow();
          $('.count').html(this.currentLevel);
        }, 1000);
      } else {
      this.simonCurrentArray.push(this.simonButtonOptions[(Math.floor(Math.random()*4))]);
      this.simonShow();
      $('.count').html(this.currentLevel);
    };
  };
    //playerTurn = true;
    // console.log(playerTurn);
  //};

  //adds to the level count.
  nextLevel = () => {
    this.currentLevel++;
    this.playerCurrentArray = [];
  };

  //functions checks the user array against simon array to see if they match.
  //If they match, player wins or increases level.
  playerMove = (par) => {
    if (playerTurn === true) {
      playerCurrentArray.push(par);
        console.log(playerCurrentArray);
        console.log(playerTurn);
      if (playerCurrentArray[playerCurrentArray.length -1] !== simonCurrentArray[playerCurrentArray.length -1]){
        setTimeout(function() {
          // $('.container').addClass('lose');
          //     $('.lose').html('YOU LOSE!');
          //     setTimeout(function(){
          //       $('.lose').empty();
          //     }, 1500);
          //     setTimeout(function(){
          //       $('.container').removeClass('lose');
          //     }, 2500);
          alert('haha YOU LOSE!');
          //decided to comment the above functions for now until I figure out why it removes my .container board.
          //console.log('haha YOU LOSE!');
        }, 350);
        playerTurn = false;
      } else {
        let checkLevel = playerCurrentArray.length === simonCurrentArray.length;
          if (checkLevel) {
            if(currentLevel === 6) {
              //use of modal to show win.
              $('.container').addClass('win');
              $('.win').html('YOU WIN!');
              setTimeout(function(){
              $('.container').removeClass('win');
              }, 3000);
            } else {
              //timout is used to let previous blink end before new move starts.
              //otherwise user will see two colors.
              setTimeout(function() {
                nextLevel();
              }, 800);
              playerTurn = false;
              setTimeout(function() {
                simonNewMove();
              }, 1000);
            };
          };
        };
      };
    };

const startSimon = new newGame();

$('.start').on('click', startSimon.simonNewMove);
$('.b0').on('click', this.redClick);
$('.b1').on('click', this.yellowClick);
$('.b2').on('click', this.greenClick);
$('.b3').on('click', this.blueClick);

//set the event listeners to change button color.
//sending the middle html class into playerMove
$('.button').on('click', function(event) {
playerMove($(event.target).attr('class').split(' ')[1]);
});


  function addInstructions() {
    $('#modal-content').css('display', 'block');
  };
  function remInstructions() {
    $('#modal-content').css('opacity', 0);
  };
  //functions here used to show the instructions of game play.
    $('#instButton').on('click', addInstructions);
    $('#modal-content').on('click', remInstructions);

