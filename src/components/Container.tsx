import { ReactNode } from "react";
import { cn } from "../utils/cn";

export default function Container({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div className={cn(" container mx-auto", className)}>{children}</div>
    );
}
