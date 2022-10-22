let octSelect, selectedOct;
let wavSelect, selectedWav;
let osc, env, fft;
let canvas;
// The keys on a computer keyboard that will play a note (musical typing)
const keyboardOptions = [
  'a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 
  'h', 'u', 'j', 'k', 'o', 'l', 'p', ';', '\''
];

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //Create a dropdown selector for octave options
  createOctSelect();
  //Create dropwdown selector for waveform options
  createWavSelect();
  // Create the oscillator and envelope
  createOsc();
  //Create oscilloscope
  fft = new p5.FFT();
  createVis();
}

function draw() {
  background(200);
  createVis();
  createKeys();
}

function keyPressed() {
  handleMusicalTyping();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}