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