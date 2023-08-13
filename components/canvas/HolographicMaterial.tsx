import { extend, useThree, useFrame, useLoader } from "@react-three/fiber";
import { ShaderMaterial, TextureLoader, Vector2 } from "three";

// This extends the known JSX elements for R3F to include ShaderMaterial
extend({ ShaderMaterial });

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  uv.y += sin(uv.x * 10.0 + u_time) * 0.1;
  vec4 color = texture2D(u_texture, uv);
  gl_FragColor = vec4(color.rgb, 1.0);
}
`;

export const useHolographicMaterial = () => {
  const texture = useLoader(TextureLoader, "/woman_bust_2_image0.png");
  const { size } = useThree();
  const uniforms = {
    u_time: { value: 0.0 },
    u_texture: { value: texture },
    u_resolution: { value: new Vector2(size.width, size.height) },
  };

  useFrame((state) => {
    uniforms.u_time.value = state.clock.getElapsedTime();
  });

  return new ShaderMaterial({ uniforms, vertexShader, fragmentShader });
};
