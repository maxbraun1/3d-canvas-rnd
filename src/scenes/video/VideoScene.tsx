import {
  Box,
  Environment,
  OrbitControls,
  Plane,
  useVideoTexture,
} from "@react-three/drei";
import { DoubleSide } from "three";
import { Controls } from "../../controlBar/controlBar";

export default function VideoScene({ controls }: { controls: Controls }) {
  const videoURL =
    "https://virtual-studio-dev.4b17db9c10460d3ab1f82a6f4e9b335e.r2.cloudflarestorage.com/f32d2d7c-ca95-4de4-9a63-614d936a9f0f.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=36a445f1dba944f4a979b871dfbdf6d5%2F20250312%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20250312T000000Z&X-Amz-Expires=86400&X-Amz-Signature=788f3b98807f8585777261300ce70091a7ccf4439f6882be630d08cb9d75a8f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject";
  const texture = useVideoTexture(videoURL);
  const aspectRatio = texture.image.videoWidth / texture.image.videoHeight;
  function shape(shape: string) {
    switch (shape) {
      case "plane":
        return (
          <Plane scale={[aspectRatio, 1, aspectRatio]} position-y={0.5}>
            <meshStandardMaterial map={texture} side={DoubleSide} />
          </Plane>
        );
      case "box":
        return (
          <Box scale={[aspectRatio, 1, aspectRatio]} position-y={0.5}>
            <meshStandardMaterial map={texture} side={DoubleSide} />
          </Box>
        );
      case "curvedplane":
        return (
          <Plane scale={[aspectRatio, 1, aspectRatio]} position-y={0.5}>
            <meshStandardMaterial map={texture} side={DoubleSide} />
          </Plane>
        );
    }
  }

  return (
    <>
      {shape(controls.shape)}
      <Environment preset="lobby" />
      <OrbitControls enableZoom={false} />
    </>
  );
}
