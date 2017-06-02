precision mediump float;

uniform vec3 diffuse;
uniform vec3 lightDirection;
varying vec3 fragNormal;

uniform float numBands;

void main() {
// The basic idea behind cel-shading is to start from the Lambert diffuse lighting model, and then apply quantization to intensity values
  float lambertWeight = max(dot(normalize(fragNormal), normalize(lightDirection)), 0.0);
  lambertWeight = ceil(lambertWeight * numBands) / numBands;
  vec3 lightColor = diffuse * lambertWeight;
  gl_FragColor = vec4(lightColor, 1);
}