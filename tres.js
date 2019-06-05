
function fase3(){
   // background(255);
    translate(width/2,height/2);
    x=16*sin(t)*sin(t)*sin(t);
    y=13*cos(t)-5*cos(2*t)-2*cos(3*t)-cos(4*t);
    x*=10
    y*=-10
    //background(220);
	//background(255,255,255,3);
  a.draww();
  a.update(x,y);
  strokeWeight(30);
  stroke(0)
  //point(x,y);
  t+=0.02;
  
 
}
function trace () {
    this.angle=PI/2
    this.vel=createVector(0,0)
    this.acc=createVector(0,0);
    this.pos=createVector(0,-20);
    this.dir=createVector(3*cos(this.angle),3*sin(this.angle));

    this.draww= function () {
      background(255);
        stroke(0,127,255)
            strokeWeight(5);
      //var vec=p5.Vector.add(this.pos,this.dir);
            line(this.pos.x,this.pos.y,this.dir.x+this.pos.x,this.dir.y+this.pos.y);
            line(this.pos.x,this.pos.y,this.pos.x-this.dir.x,this.pos.y-this.dir.y);
            
            //print(b);
    }
    this.update=function(x,y){
        this.acc.x=x-this.pos.x;
        this.acc.y=y-this.pos.y;
        this.acc.normalize();
  this.dir=this.acc.copy();
  this.dir.mult(5);
  //this.dir.y=this.acc.y;
        this.acc.mult(kp);
        this.vel.add(this.acc);
        this.vel.mult(0.95)
        this.pos.add(this.vel);
        //this.dir.x=3*cos(this.angle);
        //this.dir.y=3*sin(this.angle);
    }

}