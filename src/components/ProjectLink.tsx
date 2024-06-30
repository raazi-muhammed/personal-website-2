import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

export function ProjectLink({
    href,
    children,
    title,
    icon,
}: {
    href: string | undefined;
    children: ReactNode;
    title: string;
    icon: ReactNode;
}) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div
            className="relative h-8 w-24"
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}>
            <a href={href} className="absolute bottom-0 left-0 mt-auto">
                <motion.div
                    layout
                    initial={{ y: 0 }}
                    animate={{ y: isActive ? -20 : 0 }}
                    className={`relative z-50 flex gap-2 bg-primary/20 border-primary/30 border rounded backdrop-blur-sm ${
                        isActive ? "z-40 p-2" : "z-0"
                    }`}>
                    <div className="my-auto grid place-items-center gap-2 rounded-full p-1">
                        {icon}
                    </div>
                    {isActive ? (
                        <motion.div className="flex flex-col gap-0 pe-2">
                            <p className="text-xs uppercase text-muted-foreground">
                                {title}
                            </p>
                            {children}
                        </motion.div>
                    ) : (
                        <p className="my-auto me-4 text-nowrap">{title}</p>
                    )}
                </motion.div>
            </a>
        </div>
    );
}
