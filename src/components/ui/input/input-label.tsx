import { ComponentProps, ElementType } from "react";

interface LabelInputGroupProps extends ComponentProps<"label"> {
  labelText: string;
  icon: ElementType;
}

export function InputLabel({ icon: Icon, labelText }: LabelInputGroupProps) {
  return (
    <label className="flex gap-3 items-center capitalize font-medium">
      <Icon className="w-5" />
      {labelText}
    </label>
  );
}
