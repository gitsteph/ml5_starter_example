// Your code will go here
// open up your console - if everything loaded properly you should see 0.3.0
console.log('ml5 version:', ml5.version);

function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    background(255);
    fill(255, 0, 255);
    stroke(255 - 100, 0, 255 - 100);
    strokeWeight(4);
    circle(mouseX, mouseY, 40);
}
