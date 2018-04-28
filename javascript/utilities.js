function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function addLeadingZero(time) {
  if (time < 10) {
    return '0' + String(time)
  } else {
    return String(time);
  }
}
