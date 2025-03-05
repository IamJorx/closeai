import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const spinnerVariants = cva(
  "inline-block animate-spin rounded-full border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
  {
    variants: {
      size: {
        default: "h-6 w-6 border-2",
        sm: "h-4 w-4 border-2",
        lg: "h-8 w-8 border-2",
        xl: "h-12 w-12 border-3",
      },
      variant: {
        default: "text-white",
        primary: "text-primary",
        secondary: "text-secondary",
        success: "text-green-400",
        destructive: "text-red-400",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
)

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  label?: string
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size, variant, label = "Cargando...", ...props }, ref) => {
    return (
      <div ref={ref} role="status" className={cn("flex flex-col items-center justify-center", className)} {...props}>
        <div className={cn(spinnerVariants({ size, variant }))} />
        {label && (
          <span className="mt-2 text-sm text-gray-300">{label}</span>
        )}
        <span className="sr-only">Cargando...</span>
      </div>
    )
  }
)
Spinner.displayName = "Spinner"

export { Spinner } 