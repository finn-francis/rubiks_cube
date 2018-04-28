var Time = function(options) {
  this.minutes  = options['minutes'];
  this.seconds  = options['seconds'];
  this.tens     = options['tens'];
  this.scramble = options['scramble'];

  this.time = function() {
    return [this.minutes, this.seconds, this.tens].join(':')
  }
}
