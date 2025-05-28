import {Loader2} from "lucide-react";
import type React from "react";

export const Spinner = ({size = "default"}: { size?: "sm" | "md" | "default" | "lg" }) => {
    const sizes = {
        sm: "w-4 h-4",
        default: "w-6 h-6",
        md: "w-6 h-6",
        lg: "w-8 h-8",
    }

    return (
        <div className="flex items-center justify-center p-4">
            <Loader2 className={`${sizes[size]} animate-spin text-lime-400`}/>
        </div>
    )
}