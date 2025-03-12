import { Canvas } from "@react-three/fiber";
import VideoScene from "./scenes/video/VideoScene";
import ControlBar, {
  defaultControls,
  type Controls,
} from "./controlBar/controlBar";
import { BrightnessContrast, HueSaturation } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useState } from "react";
import { EffectComposer, Noise, Pixelation } from "@react-three/postprocessing";
import { PerspectiveCamera } from "@react-three/drei";

export default function App() {
  const [controls, setControls] = useState<Controls>(defaultControls);

  return (
    <div className="flex h-screen">
      <div className="basis-sm w-full bg-neutral-800 white p-5">
        <ControlBar setControls={setControls} />
      </div>
      <div className="grow h-full bg-neutral-900">
        <Canvas>
          <PerspectiveCamera
            position={[0, 0, controls.cameraZ]}
            fov={50}
            makeDefault={true}
          />
          <VideoScene controls={controls} />
          <EffectComposer>
            <BrightnessContrast brightness={controls.exposure} />
            <HueSaturation
              blendFunction={BlendFunction.NORMAL}
              saturation={controls.saturation}
            />
            <Pixelation granularity={controls.pixelation} />
            <Noise opacity={controls.noise} />
          </EffectComposer>
        </Canvas>
      </div>
    </div>
  );
}
