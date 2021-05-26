
function setup(){
    canvas=createCanvas(650,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,650,480);
    
    fill(127,255,212);
    stroke(70,130,180);
    rect(80,60,490,20);
    rect(80,425,490,20);
    rect(80,60,20,385);
    rect(550,60,20,385);
    fill(255,0,0);
    stroke(139,0,0);
    circle(80,70,70);
    circle(570,70,70);
    circle(570,430,70);
    circle(80,430,70);
}
function take_snapshot(){
    save('My Picture.png');
}