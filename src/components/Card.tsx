import React, { ReactNode } from "react";
import { cn } from "../utils/cn";

type Props = {
    children: ReactNode;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLDivElement>;

export default function Card({ children, className = "", ...props }: Props) {
    const defaultClasses =
        "bg-foreground/10 border border-foreground/20 rounded p-2";
    return (
        <div className={cn(defaultClasses, className)} {...props}>
            {children}
        </div>
    );
}
