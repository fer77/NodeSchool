precision mediump float;

uniform vec3 ambient;// the ambient light coefficient
uniform vec3 diffuse;// the diffuse light coefficient
uniform vec3 lightDirection;// the direction of the point light source (normalized)

varying vec3 fragNormal;

void main() {
  vec3 lightColor = ambient + diffuse * max(dot(normalize(fragNormal), normalize(lightDirection)), 0.0);
  gl_FragColor = vec4(lightColor, 1);
}