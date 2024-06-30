import { motion } from "framer-motion";
import { ReactNode } from "react";
import { defaultAnimation } from "../utils/animation";

export function ProjectLink({
    href,
    children,
}: {
    href: string | undefined;
    children: ReactNode;
}) {
    return (
        <motion.a
            variants={defaultAnimation}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            href={href}
            className="flex gap-2 rounded bg-primary-accent px-2 py-1 pe-4 text-primary-light hover:animate-pulse">
            {children}
        </motion.a>
    );
}
