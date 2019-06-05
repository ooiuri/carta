function fase2(){
    if (luz == true && luzvalue < 255) luzvalue += 1;
    if (luz == false && luzvalue > 0) luzvalue -= 1;
    background(luzvalue);
    textFont(font);
    //rotate();
    for(var j = 0; j < 10;j++){
      noStroke();
      fill(255,211,0,j*2);
      ellipse(mouseX,mouseY, 200-j*20)
    }
    fill(255,211,0,10,60);
    ellipse(mouseX,mouseY, 75)
    fill(255,211,0,80);
    ellipse(mouseX,mouseY, 50,50)
    translate(0,0)
    //rotate(i);
    //textSize(50*sin(i/2));
    fill(0,0,0);
    textSize(20);
    textAlign(CENTER, TOP);
    textLeading(60);
    text( `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nulla tincidunt congue enim. Donec eros mi, elementum in ex eu, interdum dapibus risus. Pellentesque commodo sapien eget lorem 
    tempus, ac auctor quam commodo. Morbi ut laoreet nibh, quis tincidunt ex. Cras laoreet magna sit amet nibh varius, sit amet 
    Nulla tincidunt congue enim. Donec eros mi, elementum in ex eu, interdum dapibus risus. Pellentesque commodo sapien eget lorem 
    tempus, ac auctor quam commodo. Morbi ut laoreet nibh, quis tincidunt ex. Cras laoreet magna sit amet nibh varius, sit amet 
    Nulla tincidunt congue enim. Donec eros mi, elementum in ex eu, interdum dapibus risus. Pellentesque commodo sapien eget lorem 
    tempus, ac auctor quam commodo. Morbi ut laoreet nibh, quis tincidunt ex. Cras laoreet magna sit amet nibh varius, sit amet 
    sollicitudin ex cursus. Praesent ut luctus ex, id scelerisque dolor. Integer ullamcorper molestie tincidunt. In volutpat ` 
    , width/2,20);
    
}

