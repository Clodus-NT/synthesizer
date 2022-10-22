let octSelect, selectedOct;
let wavSelect, selectedWav;
let osc, env, fft;
const keyOffset = 50;


// The keys on a computer keyboard that will play a note (musical typing)
const keyboardOptions = [
  'a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 
  'h', 'u', 'j', 'k', 'o', 'l', 'p', ';', '\''
];

function setup() {
  createCanvas(windowWidth, windowHeight);

  //Create a dropdown selector for octave options
  createOctSelect();

  //Create dropwdown selector for waveform options
  createWavSelect();
  
  // Create the oscillator and envelope
  createOsc();

  fft = new p5.FFT();
}

function draw() {
  background(100);
  // Draw a rectangle for each pc keyboard key in keyboardOptions
  // for (let i = 0; i < keyboardOptions.length; i++) {
  //   fill(255);
  //   rect(25 + (keyOffset * i), 100, 40, 200);
  // }
}

function keyPressed() {
  handleMusicalTyping();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}