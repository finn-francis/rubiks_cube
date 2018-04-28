var SetEvents = function() {
  newScramble();

  $newScramble.bind('click', function(_e){ newScramble(); });
  $previousScramble.bind('click', function(_e) { previousScramble(); })

  $(document).bind('keydown', function(e) {
    if (e.keyCode === 32) {
      spaceDown();
    }
  });

  $(document).bind('keyup', function(e) {
    if (e.keyCode === 32) {
      spaceUp();
    }
  })
}
