function appendScramble() {
  scrambleHistory.push(scramble);
}

function previousScramble() {
  scramble = scrambleHistory.pop();
  displayScramble();
}

function newTime(options) {
  times.push(new Time(options))
  console.log(times[times.length - 1].time())
}
