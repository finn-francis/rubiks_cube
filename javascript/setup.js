function setupFaces() {
  buildFaces();
  setOppositeFaces();
  faces = [l, f, r, b, u, d]
}

function buildFaces() {
  l = new Face('L');
  f = new Face('F');
  r = new Face('R');
  b = new Face('B');
  u = new Face('U');
  d = new Face('D');
}

function setOppositeFaces() {
  l.setOpposite(r);
  f.setOpposite(b);
  u.setOpposite(d);
}
