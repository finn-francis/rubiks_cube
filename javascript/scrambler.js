var Scrambler = function(options) {
  var faces           = options['faces'];
  var otherOptions    = ['`', '2', ''];
  var currentScramble = [];

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
    if (invalidTurn(face)) { face = selectFace(); }
    return face;
  }

  function invalidTurn(face) {
    var lastTurn = currentScramble[currentScramble.length - 1];
    var penultimateTurn = currentScramble[currentScramble.length - 2];

    var lastFaceName = lastTurn === undefined ? null : lastTurn.face.name;
    var penultimateFaceName = penultimateTurn === undefined ? null : penultimateTurn.face.name;
    if (currentScramble.length > 4) {
    }

    if (face.name === lastFaceName) { return true }
    if (face.name === penultimateFaceName && face.oppositeFace.name === lastFaceName) {
      return true;
    }

    return false
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
