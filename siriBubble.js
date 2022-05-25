let fft;
let audio;
let canvas;

let isPressed = false;


function preload() {
    audio = loadSound('audio/Are you gonna dance or what.mp3');
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);

    colorMode(HSB, 255);

    fft = new p5.FFT();
}

function draw() {
    blendMode(BLEND)

    // drawingContext.filter = 'blur(3px)'

    background(0);
    // clear();

    noStroke();

    // translate(0, height/2);

    let spectrum = fft.analyze();

    blendMode(ADD)
    //line figure
    // for (let i = 0; i < spectrum.length; i++) {
    //     let hue = map(i, 0, spectrum.length, 0, 255);
    //     let brightness = spectrum[i] / 2.0;

    //     fill(hue, 127, brightness);
    //     //vertical right half figure
    //     let x = map(i, 0, spectrum.length, width / 2, width);
    //     let col = spectrum[i];
    //     rect(x, 0, 1, height);
        
    //     //vertical left half figure
    //     x = map(i, 0, spectrum.length, width / 2, 0);
    //     rect(x, 0, 1, height);

    //     //horizontal upper half figure
    //     let y = map(i, 0, spectrum.length, height / 2, height);
    //     rect(0, y, width, 1)

    //     //horizontal lower half figure
    //     y = map(i, 0, spectrum.length, height / 2, 0);
    //     rect(0, y, width, 1)
    // }

    //bubble figure
    for (let i = 0; i < spectrum.length * 2; i+=10) {
        let hue = map(i, 0, spectrum.length, 0, 255);
        let diameter = map(spectrum[i], 0, 255, 0, height * 0.75);

        fill(hue, 255, 15);

        let x = map(i, 0, spectrum.length, width / 2, width);
        ellipse(x, height / 2, diameter, diameter);

        x = map(i, 0, spectrum.length, width / 2, 0);
        ellipse(x, height / 2, diameter, diameter);
    }

    for (let i = 0; i < spectrum.length * 3; i+=30) {
        let hue = map(i, 0, spectrum.length, 0, 255);
        let diameter = map(spectrum[i], 0, 255, 0, height * 0.75);

        fill(hue, 255, 30);

        let x = map(i, 0, spectrum.length, width / 6, width / 3);
        ellipse(x, height / 2, diameter / 2, diameter / 2);

        x = map(i, 0, spectrum.length, width / 6, 0);
        ellipse(x, height / 2, diameter / 2, diameter / 2);
    }

    for (let i = 0; i < spectrum.length * 3; i+=30) {
        let hue = map(i, 0, spectrum.length, 0, 255);
        let diameter = map(spectrum[i], 0, 255, 0, height * 0.75);

        fill(hue, 255, 30);

        let x = map(i, 0, spectrum.length, width * 5 / 6, width * 2 / 3);
        ellipse(x, height / 2, diameter / 2, diameter / 2);

        x = map(i, 0, spectrum.length, width * 5 / 6, width);
        ellipse(x, height / 2, diameter / 2, diameter / 2);
    }
}


function mousePressed() {
    if (isPressed) {
      audio.pause()
      isPressed = false
    }
    else {
      isPressed = true
      audio.loop()
    }
  }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}