import { ReactNode } from "react";
import { cn } from "../utils/cn";

export default function Heading({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    const defaultClasses = "text-2xl font-mono font-semibold";
    return <h2 className={cn(defaultClasses, className)}>{children}</h2>;
}
