precision mediump float;

// the two colors which the Gooch shading model interpolates
uniform vec3 warm;
uniform vec3 cool;
uniform vec3 lightDirection;// the direction of incident light in the scene

varying vec3 fragNormal;

uniform float numBands;

void main() {
  float weight = 0.5 * (1.0 + dot(normalize(fragNormal), normalize(lightDirection)));
  vec3 lightColor = mix(cool, warm, weight);
  gl_FragColor = vec4(lightColor, 1);
// The basic idea in Gooch shading is to modify Lambertian diffuse lighting in two ways:
// First, instead of clamping negative weights to 0, the weights are allowed to range from [-1,1].
// Second, instead of interpolating from the diffuse light value to 0, the light color is smoothly interpolated over some other color space.
}