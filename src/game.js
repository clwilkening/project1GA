
console.log('JS is working!')

class Game {
  constructor() {
    this.simonButtonOptions = ['b0', 'b1', 'b2', 'b3'];
    this.simonCurrentArray = null;
    this.playerCurrentArray = null;
    this.playerTurn = false;
    this.currentLevel = null;
    this.isFirstMove = null;
  };

  newGame() {
    this.simonCurrentArray = [];
    this.playerCurrentArray = [];
    this.currentLevel = 1;
    this.playerTurn = false;
    this.isFirstMove = true;
    setTimeout(function() {
      this.simonNewMove();
    }, 1000);
      console.log(simonNewMove);
    document.getElementById('simonStrings').play();
  };

  //click function is to change Id of the button
  redClick(){
    $('.b0').addClass('b0-red');
    setTimeout(function(){
    $('.b0').removeClass('b0-red');
    }, 300);
    document.getElementById('playb0').play();
  };

  yellowClick() {
    $('.b1').addClass('b1-yellow');
    setTimeout(function(){
    $('.b1').removeClass('b1-yellow');
    }, 300);
    document.getElementById('playb1').play();
  };

  greenClick() {
    $('.b2').addClass('b2-green');
    setTimeout(function(){
    $('.b2').removeClass('b2-green');
    }, 300);
    document.getElementById('playb2').play();
  };

  blueClick() {
    $('.b3').addClass('b3-blue');
    setTimeout(function() {
    $('.b3').removeClass('b3-blue');
    }, 300);
    document.getElementById('playb3').play();
  };

  //this buttonClick grabbs the buttonID from simonShow.
  //It checks too match the passed ID with the correct color.
  //ID and color are then passed to a function that displays the array
  //  on the screen.
  buttonClick(buttonID) {
    let color;
      if (this.isFirstMove === true) {
        if (buttonID === 'b0') {
          color = 'red';
        } else if (buttonID === 'b1') {
          color = 'yellow';
        } else if (buttonID === 'b2') {
          color = 'green';
        } else if (buttonID === 'b3') {
          color = 'blue';
        };
        this.isFirstMove = false;
      } else {
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

  simonShow() {
    // $('.button').prop('disabled', true);
    console.log(simonCurrentArray);
    // loop over simonCurrentArray and call buttonClick passing in each item
    if (this.playerTurn === false) {
    console.log('playerTurn', playerTurn);
      let x = 0
        for(let i = 0; i < this.simonCurrentArray.length; i++) {
        setTimeout(function() {
        console.log(simonCurrentArray);
      //call buttonClick to automate the current array with the new move
        this.buttonClick(this.simonCurrentArray[i]);
        }, 500 * x);
        x++;
      };
    };
    this.playerTurn = true;
    console.log('playerTurn', playerTurn);
  };

  //simonNewMove invokes simonShow, which invokes buttonClick.
  //this adds a new move onto the past moves. simonShow calls the function to display the array
  simonNewMove() {
    console.log(playerTurn);
    //if (playerTurn === false) {
      this.simonCurrentArray.push(simonButtonOptions[(Math.floor(Math.random()*4))]);
      this.simonShow();
      $('.count').html(currentLevel);
    }; //console.log(playerTurn);

  nextLevel() {
    this.currentLevel++;
    this.playerCurrentArray = [];
    console.log(currentLevel);
  };

  playerMove(par) {
    if (this.playerTurn === true) {
      this.playerCurrentArray.push(par);
        console.log(playerCurrentArray);
        console.log(playerTurn);
      if (this.playerCurrentArray[this.playerCurrentArray.length -1] !== simonCurrentArray[playerCurrentArray.length -1]){
        setTimeout(function() {
          alert('haha YOU LOSE!');
          console.log('haha YOU LOSE!');
        }, 350);
        this.playerTurn = false;
      } else {
        let checkLevel = this.playerCurrentArray.length === this.simonCurrentArray.length;
          if (checkLevel) {
            if(this.currentLevel === 5) {
              alert('Great YOU WIN! Click start to play again.');
            } else {
              // setTimeout(function() {
              //   alert('Next Level!');
              // }, 400);
              //no longer needed
              setTimeout(function() {
              this.nextLevel();
              }, 800);
              this.playerTurn = false;
              setTimeout(function() {
                this.simonNewMove();
              }, 1000);
            };
          };
        };
      };
    };



  //set the event listeners to change button color.
  $('.start').on('click', newGame);
  //change above listener to start new Game. Not New Move.
  $('.b0').on('click', redClick);
  $('.b1').on('click', yellowClick);
  $('.b2').on('click', greenClick);
  $('.b3').on('click', blueClick);


  //sending the middle class into playerMove
  $('.button').on('click', function(event) {
  this.playerMove($(event.target).attr('class').split(' ')[1]);
  });
};

  //testing trigger function
  /*function red() { $('.b0').trigger('click') };
  function yellow() { $('.b1').trigger('click') };
  function green() { $('.b2').trigger('click') };
  function blue() { $('.b3').trigger('click') };*

  //this adds a new move onto the past moves. simonShow calls the function to display the array

  //create a function to show simon's moves that is invoked in at the end of simons new move.
