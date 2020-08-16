var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var playerFlag = 1;
var flag = 0;
var flag1;
var database;
var form, player, game;
var player1,player2,head,car3,car4;
var player1_img,player2_img,car3_img,car4_img,track;
function preload()
{
  track = loadImage("images/track.jpg")
  player1_img = loadImage("images/car1.png");
  player2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
}
function setup(){
  canvas = createCanvas(displayWidth-20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}
function draw(){
  if(playerCount === 4 && flag === 0){
    game.update(1);
    flag = 1;
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}