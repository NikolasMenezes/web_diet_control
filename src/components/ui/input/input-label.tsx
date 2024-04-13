import CustomInput from "./input-root";
import { MutableRefObject } from "react";

interface LabelInputGroupProps {
  labelText: string;
  inputType: string;
  icon: JSX.Element;
  reference: MutableRefObject<HTMLInputElement | null>;
}

const LabelInputGroup = ({
  icon,
  inputType,
  labelText,
  reference,
}: LabelInputGroupProps) => {
  return (
    <label>
      <span>
        {icon} {labelText}
      </span>
      <CustomInput type={inputType} reference={reference} />
    </label>
  );
};

export default LabelInputGroup;
