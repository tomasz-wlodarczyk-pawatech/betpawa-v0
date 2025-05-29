import * as React from "react";
import {cva, type VariantProps} from "class-variance-authority";
import {cn} from "@/lib/utils";

const badgeVariants = cva(
    "inline-flex items-center justify-center gap-1.5 rounded-full font-medium transition-all duration-200 select-none",
    {
        variants: {
            variant: {
                primary: "bg-lime-400 text-black border border-lime-400",
                secondary: "bg-orange-500 text-white border border-orange-500",
                outline: "bg-transparent text-gray-700 border border-gray-300",
                dark: "bg-gray-800 text-white border border-gray-800",
            },
            size: {
                sm: "px-2 py-0.5 text-xs max-h-5",
                default: "px-2 py-1 text-sm max-h-5",
                lg: "px-2 py-1 text-base max-h-5",
                md: "text-sm h-5 w-5 rounded-full",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
);

const iconSizes = {
    sm: "w-3 h-3",
    default: "w-4 h-4",
    md: "w-4 h-4",
    lg: "w-4 h-4",
};

export interface BadgeProps
    extends React.HTMLAttributes<HTMLSpanElement>,
        VariantProps<typeof badgeVariants> {
    Icon?: React.ElementType;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    ({variant, Icon, size, children, className, ...props}, ref) => {
        return (
            <span
                ref={ref}
                className={cn(badgeVariants({variant, size}), className)}
                {...props}
            >
        {Icon && (
            <Icon className={cn(iconSizes[size || "default"], )}/>
        )}
                {children && <span>{children}</span>}
      </span>
        );
    }
);

Badge.displayName = "Badge";

export {Badge, badgeVariants};
