precision highp float;

attribute vec3 position;

uniform mat4 model, view, projection;

// model: transforms the object from data coordinates to world coordinates. Controls the location of the object in the world.
// view: transforms world coordinate system to a viewing coordinate system. Controls the position and orientation of the camera.
// projection: transforms the view coordinate system into device clip coordinates. Controls whether the view is orthographic or perspective, and also controls the aspect ratio of the camera.

void main() {

  //TODO: Apply the model-view-projection matrix to `position`
  gl_Position = (projection * view * model) * vec4(position, 1.0);

}