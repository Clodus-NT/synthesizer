let midiValArr = [];
// Start at C0 (midi value 12) and loop to F8 (midi value 113)
for (let i = 12; i <= 113; i++) {
  midiValArr.push(i);
}
// console.log(midiValArr.length)

// let C3Ref = 36; // C3 midi val is actually 48, but I didn't know what to name it and I need 36.

const keyOffset = 50;
const moveOctave = 12;
let osc, env;

// The keys on a computer keyboard that will play a note
const keyboardOptions = [
  'a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 
  'h', 'u', 'j', 'k', 'o', 'l', 'p', ';', '\''
];
// console.log(keyboardOptions.length)

function setup() {
  createCanvas(windowWidth, windowHeight);
  env = new p5.Envelope(0.01, 0.5, 1, 0.5);
  osc = new p5.Oscillator('triangle');
  osc.start();
  osc.amp(env);
  // for (let i = 21; i <= 108; i++) {
  //   midiValArray.push(i);
  // }
}

function draw() {
  background(100);
  // Draw a rectangle for each pc keyboard key in keyboardOptions
  for (let i = 0; i < keyboardOptions.length; i++) {
    fill(255);
    rect(25 + (keyOffset * i), 100, 40, 200);
  }
}

function handleMusicalTyping() {
  for (let i = 0; i < keyboardOptions.length; i++) {
    let C3Ref = 36;
    if (keyIsPressed && key === keyboardOptions[i]) {
      osc.freq(midiToFreq(midiValArr[i + C3Ref])); // By default, [i + C3Ref] will start keyboard key 'a' at C3
      env.play();
      // console.log(midiValArr[i + C3Ref], keyboardOptions[i], C3Ref)
    }
  }
}

function handleOctaveChange() {
  if (keyIsPressed && key === 'z') {
    return C3Ref = C3Ref - 12;
    // console.log(C3Ref)
  }
}

function keyPressed() {
  handleMusicalTyping();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
// console.log(midiValArray.length)
console.log(mainOctArr.length)