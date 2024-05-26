import { forwardRef } from "react";
import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  name: string;
}

const InputRoot = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      id={props.name}
      ref={ref}
      className="text-black px-3 h-10 rounded shadow-sm shadow-zinc-900 dark:shadow-zinc-100 outline-none focus:bg-zinc-200"
      {...props}
    />
  );
});

export { InputRoot };
