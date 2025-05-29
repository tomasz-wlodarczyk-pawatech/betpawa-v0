import * as React from "react";
import {Slot} from "@radix-ui/react-slot";
import {cva, type VariantProps} from "class-variance-authority";
import {cn} from "@/lib/utils";
import {Loader2} from "lucide-react";

const buttonVariants = cva(
    "flex flex-row items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none",
    {
        variants: {
            variant: {
                primary:
                    "bg-primary text-primary-foreground active:bg-lime-600 focus-visible:ring-lime-400 border border-lime-400",
                secondary:
                    "bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-900 focus-visible:ring-gray-800 border border-gray-800",
                tertiary:
                    "bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 active:bg-gray-100 focus-visible:ring-gray-400",
                outline:
                    "bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 active:bg-gray-100 focus-visible:ring-gray-400",
                text:
                    "bg-transparent text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus-visible:ring-gray-400 border-none",
            },
            size: {
                sm: "h-8 px-3 text-sm",
                default: "h-10 px-4 text-sm",
                lg: "h-12 px-6 text-base",
                icon: "h-10 w-10 p-0",
            },
            disabledStyle: {
                true: "",
                false: "",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
);

const iconSizeMap = {
    sm: "w-4 h-4",
    default: "w-4 h-4",
    lg: "w-5 h-5",
    icon: "w-5 h-5",
};

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    loading?: boolean;
    icon?: React.ElementType;
    iconPosition?: "left" | "right";
    children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            icon: Icon,
            iconPosition = "left",
            children,
            disabled,
            loading,
            variant,
            size,
            asChild = false,
            ...props
        },
        ref
    ) => {
        const Comp = asChild ? Slot : "button";

        const isDisabled = disabled || loading;

        const iconClass = iconSizeMap[size || "default"];

        const disabledClassMap = {
            primary: "bg-lime-200 text-black/50 border border-lime-200",
            secondary: "bg-gray-300 text-white border border-gray-300",
            tertiary: "bg-transparent text-white border border-gray-200",
            outline: "bg-transparent text-gray-100 border border-gray-200",
            text: "bg-transparent text-gray-100",
            link: "bg-transparent text-black/50 hover:text-primary",
        };

        const finalClass = cn(
            isDisabled ? disabledClassMap[variant || "primary"] : buttonVariants({variant, size}),
            className
        );
        const sizeMap = {
            sm: "h-8 px-3 text-sm",
            default: "h-10 px-4 text-sm",
            lg: "h-12 px-6 text-base",
            icon: "h-10 w-10 p-0",
        };
        const sizeClass = sizeMap[size || "default"];
        const baseClasses = "flex flex-row items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none"
        return (
            <Comp className={`${finalClass} ${baseClasses} ${sizeClass}`} disabled={isDisabled}
                  ref={ref} {...props} >
                {loading && <Loader2 className={cn(iconClass, "animate-spin")}/>}
                {!loading && Icon && iconPosition === "left" && <Icon className={iconClass}/>}
                {size !== "icon" && <span>{children}</span>}
                {!loading && Icon && iconPosition === "right" && <Icon className={iconClass}/>}
            </Comp>
        );
    }
);

Button.displayName = "Button";

export {Button, buttonVariants};
