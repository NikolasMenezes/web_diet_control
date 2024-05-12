import { ComponentProps } from "react";

export function InputRoot({ ...props }: ComponentProps<"input">) {
  return (
    <input
      {...props}
      className="text-black px-3 h-10 rounded shadow-sm shadow-zinc-900 dark:shadow-zinc-100 outline-none focus:bg-zinc-200"
    />
  );
}
