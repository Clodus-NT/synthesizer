let midiValArr = [];
for (let i = 21; i <= 108; i++) {
  midiValArr.push(i);
}
console.log(midiValArr.length)

const keyOffset = 50;

let osc, env;
// The keys on a computer keyboard that will play a note
const keyboardOptions = [
  // 'A', 'W', 'S', 'E', 'D', 'F', 'T', 'G', 'Y', 
  // 'H', 'U', 'J', 'K', 'O', 'L', 'P', ';', '\''
  'a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 
  'h', 'u', 'j', 'k', 'o', 'l', 'p', ';', '\''
];
console.log(keyboardOptions.length)

function setup() {
  createCanvas(windowWidth, windowHeight);
  env = new p5.Envelope(0.01, 0.5, 1, 0.5);
  osc = new p5.Oscillator('square');
  osc.start();
  osc.amp(env);
  // for (let i = 21; i <= 108; i++) {
  //   midiValArray.push(i);
  // }
}

function draw() {
  background(100);
  // rect(25, 100, 40, 200);
  for (let i = 0; i < keyboardOptions.length; i++) {
    fill(255);
    rect(25 + (keyOffset * i), 100, 40, 200);
    // if (keyIsPressed && key === keyboardOptions[i]) {
    //   osc.freq(midiToFreq(midiValArr[i+24]))
    // }
  }
}

function keyPressed() {
  for (let i = 0; i < keyboardOptions.length; i++) {
    if (keyIsPressed && key === keyboardOptions[i]) {
      osc.freq(midiToFreq(midiValArr[i+24]));
      env.play();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
// console.log(midiValArray.length)