var $app;
var $scramble;
var $newScramble;
var $previousScramble;
var $timer;
var $minutes;
var $seconds;
var $tens;

var l, f, r, b, u, d;
var faces;
var scramble;
var scrambleHistory = [];
var times = [];
var currentTimer;

$(function(_e) {
  setElements();
  setupFaces();
  SetEvents();
});

function setElements() {
  $app = $('#app');
  $scramble = $app.find('#scramble');
  $newScramble = $app.find('#new-scramble');
  $previousScramble = $app.find('#previous-scramble');
  $timer = $app.find('#timer');
  $minutes = $timer.find('#minutes');
  $seconds = $timer.find('#seconds');
  $tens = $timer.find('#tens');
}

function newScramble() {
  appendScramble(scramble);
  scramble = new Scrambler({ faces: faces, turns: 20 });
  displayScramble();
}

function displayScramble() {
  var scrambleDisplay = scramble.scramble();
  $scramble.html(scrambleDisplay);
}

function greenText(turnGreen) {
  if (turnGreen) {
    $timer.addClass('green-text');
  } else {
    $timer.removeClass('green-text');
  }
}
