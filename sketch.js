let hueSlider
let flock

// prepares p5 resources for rendering
function setup() {
    createCanvas(windowWidth, windowHeight);
    
    // createCanvas(400, 400);
    flock = new Flock(2, 10);
}

//renders the graphics
function draw() {
    background(220);
    flock.update();
    flock.render();
}
