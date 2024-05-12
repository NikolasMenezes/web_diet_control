import { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'disabled:opacity-50 font-medium rounded-md text-white duration-300',

  variants: {
    variant: {
      primary:
        'bg-violet-500 hover:bg-violet-600 dark:bg-violet-600 dark:hover:bg-violet-700',
      success:
        'bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700',
      secondary:
        'bg-zinc-500 hover:bg-zinc-600',
    },
    size: {
      sm: 'p-1.5 h-8 text-xs',
      md: 'p-2.5 h-10 text-sm',
      lg: 'p-4 h-10 text-md',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof button> {}

export function Button({ className, variant, size, children, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant, size, className })} >{children}</button>
}
