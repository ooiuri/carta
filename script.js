//////////////////////////////////////////////////////////
/*                                                      */
/*                  A   C A R T A                       */
/*                                                      */
/*   De: Iuri                                           */
/*                                                      */
/*   O programa está escrito em p5.js                   */
/*   Funciona com o intuito de ser uma carta eletronica */
/*                                                      */
/*                                                      */
/*   comando para iniciar o servidor node.js            */
/*   browser-sync start --server -f -w                  */
/*                                                      */
/*                                                      */
//////////////////////////////////////////////////////////


//Fase 1
var font;
var i = 0;
var fase = 0;
var cartax,cartay;
var luz = false;
var luzvalue = 0;

//Fase 1 - Fundo
var v=[];
var l =200;
var last_mouseX;

//Fase 3
var a, b=1
var kp=0.28
var t=0;

//Carregar Fonte
function preload() {
  font = loadFont('MERCY.otf');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  textAlign(CENTER, CENTER);
  cartax= width*0.25, cartay = width*0.15;
  //font= loadFont('AvenirNextLTPro-Bold.otf');
  //inicializar fase1  
  for (var i = 0 ; i<l; i++){
    v[i]= new pointy();
    }
    last_mouseX = mouseX;
    a=new trace ();
}

function draw() {
  if (fase == 0) fase1();
  else if (fase == 1) fase2();
  else if (fase == 3) fase3();

}


function fase1(){ //PRIMEIRA FASE CARTA FUNDO BRANCO
    //background(38,0,64);
    background(5,0,36);
    mouseVel = getmouse(last_mouseX);
    for (i = 0 ; i<l; i++){
        v[i].draw();
        v[i].update(mouseVel);
    }
    last_mouseX = mouseX;

    fill(255); //FUNDO DA CARTA
    //stroke(53,56,62);
    stroke(5,0,36);
    strokeWeight(10);
    rectMode(CENTER)
    rect(width/2,height/2,cartax,cartay)

    fill(252,254,163) //PAPEL
    noStroke();
    rectMode(CENTER)
    h = map(constrain(mouseY,height/3,height), 0, height, 0, 90)
    rect(width/2,(height/2)-h,cartax,cartay)

    textFont(font); // TEXTO
    textSize(height*0.04);
    noStroke();
    fill(0,h*3-90);
    text('A Super Carta',width/2,(height/2.5)-h);

    textFont(font); // TEXTO
    textSize(height*0.026);
    noStroke();
    fill(0,h*3-90);
    text('De: Iuri\nPara: Luísa',width/2,(height/2)-h);

    polygon(width/2,height/2); //FRENTE
    
    textFont(font); // TEXTO
    textSize(height*0.026);
    fill(255,h*3-100);
    text('pressione "d" para continuar',width/2,(height)*3/4);



}



function polygon(x,y){
    fill(255);
    //stroke(53,56,62);
    stroke(5,0,36);
    strokeWeight(5);
    beginShape();
    vertex(x-cartax/2,y-cartay/2);
    vertex(x-cartax/2,y+cartay/2);
    vertex(x+cartax/2,y+cartay/2);
    vertex(x+cartax/2,y-cartay/2);
    vertex(x,y+cartay/10);
    endShape(CLOSE);
}
function triangulo(x,y,h){
    fill(255);
    stroke(53,56,62);
    strokeWeight(5);
    beginShape();
    vertex(x-cartax,y-cartay);
    h = map(mouseY, 0,height,-cartay,cartay)
    vertex(x,y-2*h);
    vertex(x+cartax,y-cartay);
    endShape(CLOSE);
}
/////////////////////////////////////////////////////////////
//BACKGROUND FASE 1
function pointy () {
	this.pos=createVector(random(width),random(height),random(-100,100));
    this.vel=createVector(0,-.5);
  this.vel.setMag(map(this.pos.z,-100,100,0,1));
this.color=random(0,255);
	this.draw=function (){
    noStroke();
    fill(this.color);
    ellipse(this.pos.x,this.pos.y,map(this.pos.z,-100,100,1,10));
  }
  this.update=function(mouseVel){
    zlocal = map(this.pos.z, -100,100,-2,2);
  	this.vel.add(mouseVel);
    //this.vel.x=map(this.pos.z,-100,100,-1,1);
    this.pos.add(this.vel);
    if (this.pos.y>height || this.pos.y<0){
    	this.pos.y = height;
    }
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.x > width) this.pos.x =  0;
    
    if (this.vel.x < -1) this.vel.x = -1;
    if (this.vel.x >  1) this.vel.x =  1;
    this.vel.x*=0.99;
    
  }
  
}

function getmouse(last_mouseX){
  a = createVector(mouseX - last_mouseX,0);
  //this.a.setMag(map(0,width,0,1));
   if (this.a.x < -1) this.a.x = -1;
   if (this.a.x >  1) this.a.x =  1;
  return a;  
}

function keyPressed(){
    if(key == 'd' || key == 'D'){
        fase = 1;
    }else if(key == 'a'){
        fase = 0;
    }else if(key == 'l' && fase == 1){
        luz = true;
    }else if(key == 'g'  && fase == 1){
        luz = false;
    }else if(key == 'c' ){
        fase = 3;
    }else if(key == 'n'  ){
        fase = 1;
    }

}
/////////////////////////////////////////////////////