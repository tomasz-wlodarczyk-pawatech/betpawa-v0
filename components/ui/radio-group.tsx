"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { cn } from "@/lib/utils"

type Variant = "primary" | "secondary"
type Size = "sm" | "default" | "lg"

const variantClasses = {
    primary: {
        unchecked: "border-gray-300 bg-white",
        checked: "border-lime-400 bg-white",
        disabled: "border-gray-200 bg-gray-100 cursor-not-allowed",
        ring: "focus:ring-lime-400",
        dot: "bg-lime-400",
    },
    secondary: {
        unchecked: "border-gray-300 bg-white",
        checked: "border-[#FF9940] bg-white",
        disabled: "border-gray-200 bg-gray-100 cursor-not-allowed",
        ring: "focus:ring-[#FF9940]",
        dot: "bg-[#FF9940]",
    },
}

const sizeClasses = {
    sm: "w-4 h-4",
    default: "w-5 h-5",
    lg: "w-6 h-6",
}

const dotSizes = {
    sm: "w-2 h-2",
    default: "w-2.5 h-2.5",
    lg: "w-3 h-3",
}

export const RadioGroup = ({
                               children,
                               className,
                               ...props
                           }: RadioGroupPrimitive.RadioGroupProps) => (
    <RadioGroupPrimitive.Root
        className={cn("space-y-3", className)}
        {...props}
    >
        {children}
    </RadioGroupPrimitive.Root>
)

interface RadioGroupItemProps
    extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
    label?: string
    description?: string
    variant?: Variant
    size?: Size
    onValueChange?: (value: string) => void
}

export const RadioGroupItem = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Item>,
    RadioGroupItemProps
>(
    (
        {
            label,
            description,
            value,
            variant = "primary",
            size = "default",
            disabled,
            className,
            checked,
            onValueChange,
            ...props
        },
        ref
    ) => {
        const variantStyle = variantClasses[variant]

        return (
            <div className={cn("flex items-start gap-3", className)}>
                <RadioGroupPrimitive.Item
                    ref={ref}
                    value={value}
                    disabled={disabled}
                    onClick={() => {
                        if (!disabled && onValueChange) onValueChange?.(value)
                    }}
                    className={cn(
                        "relative inline-flex items-center justify-center rounded-full border-2 ",
                        sizeClasses[size],

                        disabled
                            ? variantStyle.disabled
                            : checked
                                ? `${variantStyle.checked}  ${variantStyle.ring}`
                                : `${variantStyle.unchecked}  ${variantStyle.ring}`
                    )}
                    {...props}
                >
                    {checked && (
                        <div
                            className={cn(
                                "rounded-full",
                                dotSizes[size],
                                variantStyle.dot
                            )}
                        />
                    )}
                </RadioGroupPrimitive.Item>

                {(label || description) && (
                    <div className="flex-1 min-w-0">
                        {label && (
                            <label
                                onClick={() => {
                                    if (!disabled && onValueChange) onValueChange?.(value)
                                }}
                                className={cn(
                                    "block text-sm font-medium cursor-pointer",
                                    disabled ? "text-gray-400" : "text-gray-900"
                                )}
                            >
                                {label}
                            </label>
                        )}
                        {description && (
                            <p className={cn("text-xs mt-1", disabled ? "text-gray-300" : "text-gray-500")}>
                                {description}
                            </p>
                        )}
                    </div>
                )}
            </div>
        )
    }
)

RadioGroupItem.displayName = "RadioGroupItem"

