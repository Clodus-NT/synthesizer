let octSelect, selectedOct;
let wavSelect, selectedWav;
let attSlider, decSlider, susSlider, relSlider;
let attLvl, relLvl;
let attTime, decTime, susTime, relTime;
let osc, env, fft;
let canvas;
// The keys on a computer keyboard that will play a note (musical typing)
const keyboardOptions = [
  'a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 
  'h', 'u', 'j', 'k', 'o', 'l', 'p', ';', '\''
];
const keysArr = [
  'white', 'black', 'white', 'black', 'white', 'white', 'black', 'white', 'black', 
  'white', 'black', 'white', 'white', 'black', 'white', 'black', 'white', 'white'
]

function setup() {
  // Generate the canvas and change default FR to 30fps
  canvas = createCanvas(windowWidth/2, windowHeight/2);
  canvas.parent('oscilloscope')
  frameRate(30);
  //Create a dropdown selector for octave options
  createOctSelect();
  //Create dropwdown selector for waveform options
  createWavSelect();
  // Create the oscillator and envelope
  createOsc();
  //Create Envelope
  createEnv();
  // Create Keyboard (<ul> with an <li> as each key)
  createKeys();
  
  //Create oscilloscope
  fft = new p5.FFT();
  createVis();
  //Env Sliders
  // envSliderSetup();
}

function draw() {
  background(200);
  createVis();
  // createKeys();
  // handleEnv();
}

function keyPressed() {
  handleMusicalTyping();
}