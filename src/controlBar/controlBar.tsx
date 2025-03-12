import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ControlBarSlider from "./_components/controlBarSlider";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export interface Controls {
  shape: string;
  cameraZ: number;
  exposure: number;
  saturation: number;
  pixelation: number;
  noise: number;
}

export const defaultControls: Controls = {
  shape: "plane",
  cameraZ: 3,
  exposure: 0,
  saturation: 0,
  pixelation: 0,
  noise: 0,
};

export default function ControlBar({
  setControls,
}: {
  setControls: Dispatch<SetStateAction<Controls>>;
}) {
  const [shape, setShape] = useState(defaultControls.shape);
  const [cameraZ, setCameraZ] = useState(defaultControls.cameraZ);
  const [exposure, setExposure] = useState(defaultControls.exposure);
  const [saturation, setSaturation] = useState(defaultControls.saturation);
  const [pixelation, setPixelation] = useState(defaultControls.pixelation);
  const [noise, setNoise] = useState(defaultControls.noise);

  useEffect(() => {
    const controls: Controls = {
      shape,
      cameraZ,
      exposure,
      saturation,
      pixelation,
      noise,
    };
    setControls(controls);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shape, exposure, saturation, pixelation, noise, cameraZ]);
  return (
    <div className="w-full flex flex-col gap-5">
      <h2 className="text-xl font-bold">Controls</h2>
      <div className="divide-y divide-neutral-700">
        <Select value={shape} onValueChange={(e) => setShape(e)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Geometry</SelectLabel>
              <SelectItem value="plane">Plane</SelectItem>
              <SelectItem value="box">Box</SelectItem>
              <SelectItem value="curvedplane">Curved Plane</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <ControlBarSlider
          label="Camera Z"
          value={cameraZ}
          defaultValue={defaultControls.cameraZ}
          setter={setCameraZ}
          min={0.1}
          max={5}
          step={0.1}
        />
        <ControlBarSlider
          label="Exposure"
          value={exposure}
          defaultValue={defaultControls.exposure}
          setter={setExposure}
          min={0}
          max={1}
          step={0.1}
        />
        <ControlBarSlider
          label="Saturation"
          value={saturation}
          defaultValue={defaultControls.saturation}
          setter={setSaturation}
          min={-1}
          max={0.7}
          step={0.1}
        />
        <ControlBarSlider
          label="Pixelation"
          value={pixelation}
          defaultValue={defaultControls.pixelation}
          setter={setPixelation}
          min={0}
          max={20}
          step={0.5}
        />
        <ControlBarSlider
          label="Noise"
          value={noise}
          defaultValue={defaultControls.noise}
          setter={setNoise}
          min={0}
          max={1}
          step={0.1}
        />
      </div>
    </div>
  );
}
