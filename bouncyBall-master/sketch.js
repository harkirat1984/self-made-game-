var back
var jadu
var player,ncp
var tigersharkimg
//var makosharkimg
function preload(){
back=loadImage("images/background.jpg");
jadu=loadImage("images/aleain.png");
tigersharkimg=loadImage("images/tigershark.png");
//makosharkimg=loadImage("images/makosharkimg.png");
}
function setup() {
createCanvas(windowWidth-10,windowHeight-10);
player=new Player()
npc=new Npc()
}
function draw() {
background(back); 
player.display();
npc.displays();
}

