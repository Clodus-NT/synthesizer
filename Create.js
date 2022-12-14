// Oscillator
function createOctSelect() {
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
  // octSelect.parent('note-range-controls');
}
function createOsc() {
  // env = new p5.Envelope(attVal, 0.5, 1, 0.5);
  osc = new p5.Oscillator('square');
  osc.start();
  // osc.amp(env);
}
  // Allows waveform to be chosen
function handleWavForm() {
  // const wavDropdown = document.querySelectorAll('.wav-menu');

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
function createWavSelect() {
  wavSelect = createSelect();
  wavSelect.position(120, 40);
  wavSelect.option('sine');
  wavSelect.option('triangle');
  wavSelect.option('sawtooth');
  wavSelect.option('square');
  wavSelect.selected('square');
  wavSelect.changed(handleWavForm)
}

// Envelope
function createEnv() {
  env = new p5.Envelope();
  osc.amp(env);
}
// function envSliderSetup() {
//   // Attack
//   attSlider = document.getElementById('attSlider');
//   // attTime = attSlider.value;
//   // Decay
//   decSlider = document.getElementById('decSlider');
//   // decTime = decSlider.value;
//   // Sustain
//   susSlider = document.getElementById('susSlider');
//   // susTime = susSlider.value;
//   // Release
//   relSlider = document.getElementById('relSlider');
//   // relTime = relSlider.value;
//   // handleEnv();
//   // env.setADSR(attTime, decTime, susTime, relTime);
//   // // Attack
//   // attSlider = createSlider(0, 1, 0, 0);
//   // attSlider.position(10, 60);
//   // attSlider.style('width', '80px');
//   // // Decay
//   // decSlider = createSlider(0, 1, 0, 0);
//   // decSlider.position(10, 80);
//   // decSlider.style('width', '80px');
//   // // Sustain
//   // susSlider = createSlider(0, 1, 0, 0);
//   // susSlider.position(10, 100);
//   // susSlider.style('width', '80px');
//   // // Release
//   // relSlider = createSlider(0, 1, 0, 0);
//   // relSlider.position(10, 120);
//   // relSlider.style('width', '80px');
// }
// function handleEnv() {
//   Attack
//   attSlider = document.getElementById('attSlider');
//   attTime = attSlider.value();
//   attLvl = 0.5;
//   // Decay
//   decSlider = document.getElementById('decSlider');
//   decTime = decSlider.value();
//   // Sustain
//   susSlider = document.getElementById('susSlider');
//   susTime = susSlider.value();
//   // Release
//   relSlider = document.getElementById('relSlider');
//   susTime = susSlider.value();

//   // attTime = attSlider.value;
//   // decTime = decSlider.value;
//   // susTime = susSlider.value;
//   // susTime = susSlider.value;
//   env.setADSR(attTime, decTime, susTime, relTime);
// }

// Oscilloscope
function createVis() {
  let waveform = fft.waveform();

  noFill(250);
  beginShape();
  stroke(138, 43, 226);
  strokeWeight(3);
  for (let i = 0; i < waveform.length; i++){
    let x = map(i, 0, waveform.length, 0, width);
    let y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();
}

// Generate Keys
function createKeys() {
  for (let i = 0; i < keyboardOptions.length; i++) {
    const keyboardUL = document.getElementById('keyboard');
    let keyboardLI = document.createElement('li');
    keyboardLI.innerText = keyboardOptions[i].toUpperCase();
    keyboardLI.classList.add('key');
    keyboardUL.append(keyboardLI);
    if (
      keyboardOptions[i] === 'w' || 
      keyboardOptions[i] === 'e' ||
      keyboardOptions[i] === 't' ||
      keyboardOptions[i] === 'y' ||
      keyboardOptions[i] === 'u' ||
      keyboardOptions[i] === 'o' ||
      keyboardOptions[i] === 'p'
    ) {
      keyboardLI.classList.add('black-key');
    } else {
      keyboardLI.classList.add('white-key');
    }
  }
}

// function createKeys() {
//   const keyOffset = 40;
//   for (let i = 0; i < keyboardOptions.length; i++) {
//     if (keysArr[i] === 'white') {
//       if (keyIsPressed && key === keyboardOptions[i]) {
//         fill(200);
//         strokeWeight(1);
//         stroke(150);
//         rect(30 + (keyOffset * i), 150, 40, 200, 2, 2, 7, 7);
//       } else {
//         fill(250);
//         strokeWeight(1);
//         stroke(150);
//         rect(30 + (keyOffset * i), 150, 40, 200, 2, 2, 7, 7);
//       }
//     } else if (keysArr[i] === 'black') {
//       if (keyIsPressed && key === keyboardOptions[i]) {
//         fill(75);
//         strokeWeight(1);
//         stroke(150);
//         rect(30 + (keyOffset * i), 150, 40, 200, 2, 2, 7, 7);
//       } else {
//         fill(0);
//         strokeWeight(1);
//         stroke(150);
//         rect(30 + (keyOffset * i), 150, 40, 200, 2, 2, 7, 7);
//       }
//     }
//   }
// }