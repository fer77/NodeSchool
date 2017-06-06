precision highp float;

uniform vec3 frontColor, backColor;

void main() {
	//Triangle primitives in GLSL get a special property called called gl_FrontFacing which tests if they are oriented towards the camera or not.
  if(gl_FrontFacing) {
    gl_FragColor = vec4(frontColor, 1.0); //facing towards the camera
  } else {
    gl_FragColor = vec4(backColor, 1.0); //facing away from the camera
  }
}