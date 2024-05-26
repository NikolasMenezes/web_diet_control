import { ComponentProps } from "react";

interface ErrorSpanProps extends ComponentProps<"span"> {}

export function ErrorSpan({ children }: ErrorSpanProps) {
  return <span className="font-semibold text-red-500 text-sm">{children}</span>;
}
