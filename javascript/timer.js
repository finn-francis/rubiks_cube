var timerCurrentlyRunning = false;

function spaceDown() {
  if (timerCurrentlyRunning) {
    stopTimer();
  } else {
    prepareTimer();
  }
}

function spaceUp() {
  if (timerCurrentlyRunning) {
    finishAttempt();
  } else {
    startTimer();
  }
}

function prepareTimer() {
  currentTimer = new Timer();
  greenText(true);
}

function startTimer() {
  currentTimer.start();
  timerCurrentlyRunning = true;
  greenText(false);
}

function stopTimer() {
  currentTimer.stop();
  greenText(true);
}

function finishAttempt() {
  timerCurrentlyRunning = false
  saveTime();
  newScramble();
  greenText(false);
}

function saveTime() {
  newTime({
    minutes: addLeadingZero(currentTimer.minutes),
    seconds: addLeadingZero(currentTimer.seconds),
    tens: addLeadingZero(currentTimer.tens),
    scramble: scramble
  });
}

var Timer = function() {
  this.tens    = 0;
  this.seconds = 0;
  this.minutes = 0;
  var Interval;

  this.start = function() {
    _this = this.updateTimer.bind(this)
    Interval = setInterval(_this, 10);
  }

  this.stop = function() {
    clearInterval(Interval);
  }

  this.updateTimer = function() {
    ++this.tens;

    if (this.tens > 99) {
      ++this.seconds;
      this.tens = 0;
    }

    if (this.seconds > 59) {
      ++this.minutes
      this.seconds = 0;
    }
    updateDisplay.bind(this)();
  }

  function updateDisplay() {
    $tens.html(addLeadingZero(this.tens));
    $seconds.html(addLeadingZero(this.seconds));
    $minutes.html(addLeadingZero(this.minutes));
  }
}
