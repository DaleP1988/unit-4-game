$ (document).ready(function(){
var random = Math.floor(Math.random()*101+19)
//selects random number to be shown at start of game
//number should be between 19 and 120

$('#randomNumber').text(Random);
//Appending random number to the randNumber id in the html doc

var crys1= Math.floor(Math.random()*11+1)
var crys1= Math.floor(Math.random()*11+1)
var crys1= Math.floor(Math.random()*11+1)
var crys1= Math.floor(Math.random()*11+1)

//setting up random numbers for each jewel
//random number has to be between 1 and 12
//
var userTotal= 0;
var wins= 0;
var losses = 0;
//Declaring variables for tallies

$('#numberWins').text(wins);
$('#numberLosses').text(losses);
//resets the game
function reset(){
         Random=Math.floor(Math.random()*101+19);
         console.log(Random)
         $('#randomNumber').text(Random);
         crys1= Math.floor(Math.random()*11+1);
         crys2= Math.floor(Math.random()*11+1);
         crys3= Math.floor(Math.random()*11+1);
         crys4= Math.floor(Math.random()*11+1);
         userTotal= 0;
         $('#finalTotal').text(userTotal);
        
        }
//adds the wins to the userTotal

function yay(){
alert("You won!");
   wins++;
   $('#numberWins').text(wins);
   $('#youWin').text("You Win!!!");
   reset();

}
//adds the losses to the userTotal
function loser(){
    alert("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    $('#youLose').text("You Lose");
    reset()
}

//sets up click for jewels
$('#one').on('click', function(){
    userTotal = userTotal + crys1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    //sets win/lose conditions
    if (userTotal == Random){
        yay();
    }
    else if (userTotal > Random){
        loser();
    }

})

$('#two').on('click', function(){
    userTotal = userTotal + crys2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    //sets win/lose conditions
    if (userTotal == Random){
        yay();
    }
    else if (userTotal > Random){
        loser();
    }

})

$('#three').on('click', function(){
    userTotal = userTotal + crys3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    //sets win/lose conditions
    if (userTotal == Random){
        yay();
    }
    else if (userTotal > Random){
        loser();
    }

})

$('#four').on('click', function(){
    userTotal = userTotal + crys4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    //sets win/lose conditions
    if (userTotal == Random){
        yay();
    }
    else if (userTotal > Random){
        loser();
    }

});

});



