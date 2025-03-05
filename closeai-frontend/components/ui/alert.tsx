import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { AlertCircle, CheckCircle, Info, XCircle } from "lucide-react"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "neumorph relative w-full rounded-lg p-4 [&>svg~*]:pl-7 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "text-foreground",
        destructive: "border-red-500/50 text-red-400 [&>svg]:text-red-400",
        success: "border-green-500/50 text-green-400 [&>svg]:text-green-400",
        info: "border-blue-500/50 text-blue-400 [&>svg]:text-blue-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants> & { icon?: React.ReactNode }
>(({ className, variant, icon, children, ...props }, ref) => {
  let IconComponent = null;
  
  if (!icon) {
    switch (variant) {
      case "destructive":
        IconComponent = <XCircle className="h-4 w-4" />;
        break;
      case "success":
        IconComponent = <CheckCircle className="h-4 w-4" />;
        break;
      case "info":
        IconComponent = <Info className="h-4 w-4" />;
        break;
      default:
        IconComponent = <AlertCircle className="h-4 w-4" />;
    }
  }
  
  return (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {icon || IconComponent}
      {children}
    </div>
  )
})
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight text-white", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-gray-300", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription } 