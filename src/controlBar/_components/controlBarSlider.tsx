import { Slider } from "@/components/ui/slider";

export default function ControlBarSlider({
  label,
  value,
  setter,
  defaultValue,
  min,
  max,
  step,
}: {
  label: string;
  value: number;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  setter: Function;
  defaultValue: number;
  min: number;
  max: number;
  step: number;
}) {
  return (
    <div className="flex flex-col gap-2 pt-3 pb-5">
      <label>
        {label} ({value})
      </label>
      <Slider
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={(e) => setter(e[0])}
        defaultValue={[defaultValue]}
      />
    </div>
  );
}
