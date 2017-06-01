precision mediump float;

attribute vec3 position;// the position of vertex in data coordinates
attribute vec3 normal;// the surface normal sampled at each vertex in data coordinates

// the transformations for moving the object from data coordinates to clip coordinates
uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

// the matrix inverses of each of the above transformations
uniform mat4 inverseModel;
uniform mat4 inverseView;
uniform mat4 inverseProjection;

varying vec3 fragNormal;

void main() {
  vec4 worldPosition = model * vec4(position, 1.0);
  vec4 worldNormal = vec4(normal, 0.0) * inverseModel * inverseView;

  gl_Position = projection * view * worldPosition;
  fragNormal = worldNormal.xyz;
}