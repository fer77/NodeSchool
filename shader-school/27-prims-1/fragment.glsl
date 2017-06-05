precision highp float;

varying vec3 fragColor;

void main() {
	//gives the coordinate of the fragment in the sprite starting from the upper left corner.
  if(distance(gl_PointCoord.st, vec2(0.5,0.5)) > 0.5) {
    discard;
  }
  gl_FragColor = vec4(fragColor,1.0);
}