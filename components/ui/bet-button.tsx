"use client"

import {cn} from "@/lib/utils"

interface BetButtonProps {
    leftValue: string | number
    rightValue: string | number
    Icon?: React.ElementType
    active?: boolean
    onClick?: () => void
    className?: string
}

export default function BetButton({
                                      leftValue,
                                      rightValue,
                                      Icon = undefined,
                                      active = false,
                                      onClick,
                                      className,
                                  }: BetButtonProps) {


    return (
        <button
            onClick={onClick}
            className={cn(
                "inline-flex items-center rounded-[8px] gap-4 justify-between px-2 py-2 text-sm font-extrabold ",
                "h-[36px]",
                active ? "bg-primary text-foreground border border-primary " : "bg-neutral-100  text-foreground border border-neutral-200",
                className,
                Icon && " gap-2",
            )}
        >
            <span className="font-semibold">{leftValue}</span>

            <div className="flex items-center flex-row justify-center flex-1">
                {Icon && <Icon strokeWidth={3} className={cn("h-4 w-4 mr-0.5 mb-0.5", "text-red-400")}/>}

                <span className="font-semibold">{rightValue}</span>
            </div>

        </button>
    )
}
