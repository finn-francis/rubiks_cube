var Scrambler = function(options) {
  var faces           = options['faces'];
  var otherOptions    = ['`', '2', ''];
  var currentScramble = [];
  var lastFace;

  this.scramble = function() {
    if (currentScramble.length > 0) {
      return joinScramble();
    }

    for (var i = 0; i < 20; ++i) {
      currentScramble.push(generateTurn());
    }

    return joinScramble();
  }

  function generateTurn() {
    return new Turn(selectFace(), selectOtherOption())
  }

  function selectFace() {
    var face = sample(faces);
    if (face === lastFace) { face = selectFace(); }
    lastFace = face;
    return face;
  }

  function selectOtherOption() {
    return sample(otherOptions);
  }

  function joinScramble() {
    return $.map(currentScramble, function(turn) {
    	return turn.name
    }).join(' ');
  }
}
