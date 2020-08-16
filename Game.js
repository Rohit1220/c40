class Game {
  constructor(){}
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
  }
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    player1 = createSprite(100,200);
    player1.addImage("car1",player1_img);
    player2 = createSprite(300,200);
    player2.addImage("car2",player2_img);
    car3 = createSprite(500,200);
    car3.addImage("car3",car3_img);
    car4 = createSprite(700,200);
    car4.addImage("car4",car4_img);
    head = [player1,player2,car3,car4];
  }
  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();
    if(allPlayers !== undefined){
      background("white");
      image(track,0,-displayHeight*4,displayWidth,displayHeight*4)
      var index = 0;
      var x = 100;
      var y;
      //var display_position = 130;
      for(var plr in allPlayers){
       // flag1 = 0;
        index=index+1;
        x = x+200;
        y = displayHeight-allPlayers[plr].distance;
        head[index-1].x=x;
        head[index-1].y=y;
        if(index===player.index)
        {
          head[index-1].shapeColor="red";
          camera.position.x=displayWidth/2;
          camera.position.y=head[index-1].y;
        }
        /*if (plr === "player" + player.index)
          fill("red")
        else
          fill("black");
        display_position+=20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }*/
    }
  }
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
      if (player.distance>3500)
  {
    gameState=2;
    }
  drawSprites();
  }
end()
{
  game.update(2);
}
}