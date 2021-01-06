class Player{

constructor(){

this.aliean=createSprite(200,200);

this.aliean.addImage(jadu);

this.aliean.scale=0.1;
    this.aliean.velocityX=2
}
display(){
      drawSprites();

  if(keyCode===UP_ARROW){
  this.aliean.y-=5
 }

    if(keyCode===DOWN_ARROW){
    this.aliean.y+=5
    }
};
}