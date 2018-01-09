(function () {

var descButton = document.querySelector(".descButton"),
    desc = document.querySelector(".personalDesc");

var context = new AudioContext()
var sound = context.createOscillator()
var gain = context.createGain()
var frequency = "246.9";
sound.type = "square";
sound.connect(gain)
gain.connect(context.destination)

// gain.gain.exponentialRampToValueAtTime(
//   0.1, context.currentTime + 0.04
// )

function playNote(e){
  if (e.keycode == "49") {
    frequency = "246.9";
  } else if (e.keycode == 50) {
    frequency = "277.2";
  } else if (e.keycode == 51) {
    frequency = "311.1";
  } else if (e.keycode == 52) {
    frequency = "329.6";
  } else if (e.keycode == 53) {
    frequency = "370";
  } else if (e.keycode == 54) {
    frequency = "415.3";
  } else if (e.keycode == 55) {
    frequency = "466.2";
  } else if (e.keycode == 56) {
    frequency = "493.9";
  } else {
    frequency = "0";
  }
  sound.frequency.value = frequency;
  sound.start(0)
}

//Notes: B, C#, D#, E, F#, G#, A#, B
//Frequencies: 246.9, 277.2, 311.1, 329.6, 370, 415.3, 466.2, 493.9
//Keycodes: 49, 50, 51, 52, 53, 54, 55, 56

function revealDesc() {
  desc.classList.add("show");
};


window.addEventListener("keypress", playNote, false);

descButton.addEventListener("click", revealDesc, false);


setTimeout(function(){
  document.getElementById('underNav').className = " ";
}, 300);

})();
