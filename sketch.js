let octSelect, selectedOct;
let wavSelect, selectedWav;

const keyOffset = 50;
const moveOctave = 12;
let osc, env;

// The keys on a computer keyboard that will play a note (musical typing)
const keyboardOptions = [
  'a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 
  'h', 'u', 'j', 'k', 'o', 'l', 'p', ';', '\''
];

function setup() {
  createCanvas(windowWidth, windowHeight);

  //Create a dropdown selector for octave options
  octSelect = createSelect();
  octSelect.position(40, 40);
  octSelect.option('C0-F1');
  octSelect.option('C1-F2');
  octSelect.option('C2-F3');
  octSelect.option('C3-F4');
  octSelect.option('C4-F5');
  octSelect.option('C5-F6');
  octSelect.option('C6-F7');
  octSelect.option('C7-F8');
  octSelect.selected('C3-F4');
  octSelect.changed(handleMusicalTyping);

  //Create dropwdown selector for waveform options
  wavSelect = createSelect();
  wavSelect.position(120, 40);
  wavSelect.option('sine');
  wavSelect.option('triangle');
  wavSelect.option('sawtooth');
  wavSelect.option('square');
  wavSelect.selected('sawtooth');
  wavSelect.changed(handleWavForm)
  // selectedWav = octSelect.value();
  

  // Create the oscillator and envelope
  env = new p5.Envelope(0.01, 0.5, 1, 0.5);
  osc = new p5.Oscillator('sawtooth');

  osc.start();
  osc.amp(env);
}

function draw() {
  background(100);
  // Draw a rectangle for each pc keyboard key in keyboardOptions
  for (let i = 0; i < keyboardOptions.length; i++) {
    fill(255);
    rect(25 + (keyOffset * i), 100, 40, 200);
  }
}

// Map notes to keys and provide octave selection
function handleMusicalTyping() {
  selectedOct = octSelect.value();
  const C0 = 0; const C1 = 1; const C2 = 2; const C3 = 3; 
  const C4 = 4; const C5 = 5; const C6 = 6; const C7 = 7;

  if (selectedOct === 'C0-F1') {
    for (let i = 0; i < keyboardOptions.length; i++) {
      if (keyIsPressed && key === keyboardOptions[i]) {
        osc.freq(midiToFreq(mainOctArr[C0][i]));
        env.play();
      } 
    }
  } else if (selectedOct === 'C1-F2') {
    for (let i = 0; i < keyboardOptions.length; i++) {
      if (keyIsPressed && key === keyboardOptions[i]) {
        osc.freq(midiToFreq(mainOctArr[C1][i]));
        env.play();
      } 
    }
  } else if (selectedOct === 'C2-F3') {
    for (let i = 0; i < keyboardOptions.length; i++) {
      if (keyIsPressed && key === keyboardOptions[i]) {
        osc.freq(midiToFreq(mainOctArr[C2][i]));
        env.play();
      } 
    }
  } else if (selectedOct === 'C3-F4') {
    for (let i = 0; i < keyboardOptions.length; i++) {
      if (keyIsPressed && key === keyboardOptions[i]) {
        osc.freq(midiToFreq(mainOctArr[C3][i]));
        env.play();
      } 
    }
  } else if (selectedOct === 'C4-F5') {
    for (let i = 0; i < keyboardOptions.length; i++) {
      if (keyIsPressed && key === keyboardOptions[i]) {
        osc.freq(midiToFreq(mainOctArr[C4][i]));
        env.play();
      } 
    }
  } else if (selectedOct === 'C5-F6') {
    for (let i = 0; i < keyboardOptions.length; i++) {
      if (keyIsPressed && key === keyboardOptions[i]) {
        osc.freq(midiToFreq(mainOctArr[C5][i]));
        env.play();
      } 
    }
  } else if (selectedOct === 'C6-F7') {
    for (let i = 0; i < keyboardOptions.length; i++) {
      if (keyIsPressed && key === keyboardOptions[i]) {
        osc.freq(midiToFreq(mainOctArr[C6][i]));
        env.play();
      } 
    }
  } else if (selectedOct === 'C7-F8') {
    for (let i = 0; i < keyboardOptions.length; i++) {
      if (keyIsPressed && key === keyboardOptions[i]) {
        osc.freq(midiToFreq(mainOctArr[C7][i]));
        env.play();
      } 
    }
  }
}

// Change waveform based on user choice
function handleWavForm() {
  selectedWav = wavSelect.value();
  if (selectedWav === 'sine') {
    osc.setType('sine');
  } else if (selectedWav === 'triangle') {
    osc.setType('triangle');
  } else if (selectedWav === 'sawtooth') {
    osc.setType('sawtooth');
  } else if (selectedWav === 'square') {
    osc.setType('square');
  }

}

function keyPressed() {
  handleMusicalTyping();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}