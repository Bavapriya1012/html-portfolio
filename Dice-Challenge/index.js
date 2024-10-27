var randomNumber1 = Math.floor(Math.random()*6 ) + 1;

var randomDiceImage = "images/"+"dice" + randomNumber1 +".png" 
var Dice1 = document.querySelector(".img1").setAttribute('src',randomDiceImage)

var randomNumber2 = Math.floor(Math.random()*7);
var randomDiceImage = "images/"+ "dice"+ randomNumber2 + ".png";
var Dice2 = document.querySelector('.img2').setAttribute("src",randomDiceImage);
var winner = resultOfGame();

function resultOfGame(){
   if(randomNumber1 > randomNumber2){
      document.querySelector('h1').innerHTML = ".....Player 1 Wins"
   }else if(randomNumber1 < randomNumber2){
      document.querySelector('h1').innerHTML = "Player 2 Winss....."
   }else{
      document.querySelector('h1').innerHTML = "DRAW !!!"
   }
}