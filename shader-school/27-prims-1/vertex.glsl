precision highp float;

attribute vec3 position; //the position of each point sprite
attribute vec3 color; //the color of each point sprite
attribute float size; //the desired radius of the point sprite in pixels

uniform mat4 model, view, projection;

varying vec3 fragColor;

void main() {
  gl_Position = projection * view * model * vec4(position, 1.0);
  gl_PointSize = size; //controls the radius of the point in pixels, and can be assigned by the vertex shader.
  fragColor = color;
}