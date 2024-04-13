import { InputHTMLAttributes, MutableRefObject } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  reference: MutableRefObject<HTMLInputElement | null>;
}

const CustomInput = ({ reference, ...props }: CustomInputProps) => {
  return <input {...props} ref={reference} />;
};

export default CustomInput;
