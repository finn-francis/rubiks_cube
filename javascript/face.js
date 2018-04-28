var Face = function(name) {
  this.name = name;

  this.setOpposite = function(oppositeFace) {
    this.oppositeFace = oppositeFace;
    if (this.oppositeFace.oppositeFace === undefined) {
      oppositeFace.setOpposite(this);
    }
  }
}
