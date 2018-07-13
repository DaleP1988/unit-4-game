



function sound(src) {                               //NOT WORKING!
    this.sound = document.createElement("audio");   //NOT WORKING!
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}

var toto;



$(document).ready(function () {
    toto = new sound ("javascript/toto.wav");
    toto.play();
    var random = Math.floor(Math.random() * 101 + 19)
   // selects random number to be shown at start of game
   // number should be between 19 and 120

    $('#randomNumber').text(random);
 //   Appending random number to the randNumber id in the html doc

    var crys1;
    var crys2;
    var crys3;
    var crys4;

   // setting up random numbers for each jewel
  //  random number has to be between 1 and 12
    
     var userTotal = 0;
     var wins = 0;
     var losses = 0;
   // Declaring variables for tallies
     $('#numberWins').text(wins);
     $('#numberLosses').text(losses);
    //  resets the game

      function randomCrysNum() {

          crys1 = Math.floor(Math.random() * 11 + 1);
          crys2 = Math.floor(Math.random() * 11 + 1);
          crys3 = Math.floor(Math.random() * 11 + 1);
          crys4 = Math.floor(Math.random() * 11 + 1);
      }

      randomCrysNum();

      function reset() {
          random = Math.floor(Math.random() * 101 + 19);
          console.log(random)
          $('#randomNumber').text(random);
          randomCrysNum();
          userTotal = 0;
          $('#finalTotal').text(userTotal);
      }

   // adds the wins to the userTotal

      function yay() {
          alert("You won!");
          $('#youWin!').text("You Win!");    //THIS NOT WORKING
          wins++;
          $('#numberWins').text(wins);
          reset();
      }
   // adds the losses to the userTotal
      function loser() {
          alert("You lose!");
          $('#youLose!').text("You Lose!");    //THESE NOT WORKING
          losses++;
          $('#numberLosses').text(losses);
          reset();
      }

      function onCrystalClick(crystalValue) {
          userTotal = userTotal + crystalValue;
          console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
          //sets win/lose conditions
          if (userTotal == random) {
              yay();
              toto.stop();
          }
          else if (userTotal > random) {
              loser();
              toto.stop();
          }
      }
    //sets up click for jewels

      $('#one').on('click', function () {
          onCrystalClick(crys1);
      });

      $('#two').on('click', function () {
          onCrystalClick(crys2);
      });

      $('#three').on('click', function () {
          onCrystalClick(crys3);
    });

    $('#four').on('click', function () {
        onCrystalClick(crys4);
    });

});
