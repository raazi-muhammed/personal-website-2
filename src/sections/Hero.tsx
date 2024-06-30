import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon } from "../utils/icons";
import Container from "../components/Container";
import { AnimatedBallsHero } from "../components/AnimatedBalls";

function LinkButton({
    href,
    children,
    icon,
    title,
}: {
    href: string;
    children: ReactNode;
    icon: ReactNode;
    title: string;
}) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div
            className="relative size-8"
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}>
            <a href={href} className="absolute bottom-0 left-0 mt-auto">
                <motion.div
                    layout
                    initial={{ y: 0 }}
                    animate={{ y: isActive ? -20 : 0 }}
                    className={`relative z-50 flex gap-2 bg-white/10 border-white/20 border rounded backdrop-blur-sm ${
                        isActive ? "z-40 p-2" : "z-0"
                    }`}>
                    <div className="my-auto grid size-8 place-items-center rounded-full">
                        {icon}
                    </div>
                    {isActive && (
                        <motion.div className="flex flex-col gap-0 pe-2">
                            <p className="text-xs uppercase text-muted-foreground">
                                {title}
                            </p>
                            {children}
                        </motion.div>
                    )}
                </motion.div>
            </a>
        </div>
    );
}

export default function Hero() {
    return (
        <div className="relative mx-auto flex min-h-screen w-full flex-col justify-between overflow-hidden p-8 py-16">
            <div className="noise pointer-events-none fixed inset-0" />
            <AnimatedBallsHero />
            <div className="container mx-auto flex gap-4 font-mono">
                <p>&lt;/&gt;</p>
            </div>
            <Container className="flex flex-col justify-center">
                <h1 className="font-mono text-4xl font-semibold sm:text-6xl lg:text-8xl xl:text-9xl">
                    Raazi Muhammed
                </h1>
                <p className="font-mono text-xl">
                    Full Stack developer with a strong background in graphic
                    design.
                </p>
            </Container>
            <section className="container mx-auto flex gap-4">
                <LinkButton
                    href="https://www.linkedin.com/in/raazimuhammed"
                    title="Linkedin"
                    icon={<LinkedinIcon />}>
                    <span className="text-nowrap">raazimuhammed</span>
                </LinkButton>
                <LinkButton
                    href="https://github.com/raazi-muhammed"
                    title="GitHub"
                    icon={<GithubIcon />}>
                    <span className="text-nowrap">raazi-muhammed</span>
                </LinkButton>
                <LinkButton
                    href="https://www.linkedin.com/in/raazimuhammed"
                    title="Email"
                    icon={<MailIcon />}>
                    <span className="text-nowrap">raazi6163@gmail.com</span>
                </LinkButton>
            </section>
        </div>
    );
}
