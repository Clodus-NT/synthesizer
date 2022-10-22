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
}
function createOsc() {
  // env = new p5.Envelope(attVal, 0.5, 1, 0.5);
  osc = new p5.Oscillator('square');
  osc.start();
  // osc.amp(env);
}

  // Allows waveform to be chosen
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
function envSliderSetup() {
  // Attack
  attSlider = createSlider(0, 1, 0, 0);
  attSlider.position(10, 60);
  attSlider.style('width', '80px');
  // Decay
  decSlider = createSlider(0, 1, 0, 0);
  decSlider.position(10, 80);
  decSlider.style('width', '80px');
  // Sustain
  susSlider = createSlider(0, 1, 0, 0);
  susSlider.position(10, 100);
  susSlider.style('width', '80px');
  // Release
  relSlider = createSlider(0, 1, 0, 0);
  relSlider.position(10, 120);
  relSlider.style('width', '80px');
}
function handleEnv() {
  attTime = attSlider.value();
  decTime = decSlider.value();
  susTime = susSlider.value();
  relTime = relSlider.value();
  env.setADSR(attTime, decTime, susTime, relTime);
}

// Oscilloscope
function createVis() {
  // background(150);

  let waveform = fft.waveform();
  noFill(250);
  beginShape();
  stroke(138, 43, 226);
  strokeWeight(3);
  for (let i = 0; i < waveform.length; i++){
    let x = map(i, 0, waveform.length, 0, width / 2.5);
    let y = map( waveform[i], -1, 1, 0, height / 2.5);
    vertex(x,y);
  }
  endShape();
}

// Generate Keys
function createKeys() {
  const keyOffset = 35;
  for (let i = 0; i < keyboardOptions.length; i++) {
    if (keysArr[i] === 'white') {
      fill(255);
      stroke(55);
      rect(30 + (keyOffset * i), 150, 40, 200);
      text(keyboardOptions[i])
    } else if (keysArr[i] === 'black') {
      fill(0);
      stroke(55);
      rect(35 + (keyOffset * i), 150, 40, 200);
      text(keyboardOptions[i])
    }
  }
  // for (let i = 0; i < keyboardOptions.length; i++) {
  //   fill(255);
  //   stroke(55)
  //   rect(30 + (keyOffset * i), 150, 30, 200);
  // }
}

// Handles both note range selector and musical typing
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