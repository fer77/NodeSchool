precision highp float;

uniform float theta; // the amount to rotate by in radians

attribute vec2 position; // the position of the vertices in the plane

void main() {

  //TODO: rotate position by theta radians about the origin

  float c = cos(theta);
  float s = sin(theta);

  mat2 rot = mat2(c, s, -s, c);

  gl_Position = vec4(rot * position, 0, 1.0);
  }