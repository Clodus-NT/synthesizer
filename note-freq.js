// This big chunk calculates the freq values for each note and pairs them with their note name.
// It then creates and array that holds an object (with name and freq).
// Array result of calculations contains the 88 notes on a standard piano keyboard.

const refNote = 440; //A4
const refNoteName = 'A4';
const A = Math.pow(2, (1 / 12));

function calcFreq(refFreq, steps) {
  let result = refFreq * Math.pow(A, steps);
  return +(result).toFixed(2);   // '+' converts string back into number
}

const noteNameArray = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
// let startNote = 'A0';
// let endNote = 'C8';

// function createNoteFreqArray(startNote, endNote) {
//   let resultArray = [];
//   let noteArray = [];
//   let startOctave = parseInt(startNote.slice(-1));
//   let endOctave = parseInt(endNote.slice(-1));

//   if (startOctave > endOctave) {
//     return;
//   }

//   let startNoteName = startNote.slice(0, -1);
//   let endNoteName = endNote.slice(0, -1);
//   let noteNameArrayStartIndex = noteNameArray.indexOf(startNoteName);
//   let noteNameArrayEndIndex = noteNameArray.indexOf(endNoteName);

//   for (let octave = startOctave; octave <= endOctave; octave++) {
//     //If this is first octave, start from the start note index
//     if (octave === startOctave) {
//       for (let i = noteNameArrayStartIndex; i < noteNameArray.length; i++) {
//         noteArray.push(noteNameArray[i] + octave);
//       }
//     // Else if this is end octave add note name
//     } else if (octave === endOctave) {
//       for (let i = 0; i <= noteNameArrayEndIndex; i++) {
//         noteArray.push(noteNameArray[i] + octave);
//       }
//     } else {
//       //If somewhere in between
//       noteNameArray.forEach((noteName) => {
//         noteArray.push(noteName + octave);
//       });
//     }
//   }
//   // Now find freq for each note in noteArray
//   let refNotePos = noteArray.indexOf(refNoteName);
//   let firstVal = -Math.abs(refNotePos);

//   let noteNameIndex = 0;

//   for (let i = firstVal; i < noteArray.length -refNotePos; i++) {
//     resultArray.push(
//       {'noteName': noteArray[noteNameIndex], 'frequency': calcFreq(refNote, i)}
//     );
//     noteNameIndex++;
//   }
//   return resultArray;
// }
// createNoteFreqArray(startNote, endNote)
