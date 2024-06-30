import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon } from "../utils/icons";
import Container from "../components/Container";
import { defaultAnimation } from "../utils/animation";
import { AnimatedBallsHero } from "../components/AnimatedBalls";

function LinkButton({
    href,
    children,
    username,
}: {
    href: string;
    children: ReactNode;
    username: string;
}) {
    const [isActive, setIsActive] = useState(false);

    return (
        <a href={href} className="relative">
            {isActive ? (
                <motion.div
                    initial={{ originX: 0, originY: 1.2, scale: 0.5 }}
                    animate={{ scale: 1 }}
                    className="absolute bottom-12 flex gap-2 text-nowrap rounded border border-foreground/15 bg-foreground/10 p-2 pe-4 align-middle">
                    {children}
                    {username}
                </motion.div>
            ) : null}
            <motion.div
                variants={defaultAnimation}
                initial="initial"
                animate="animate"
                whileHover="hover"
                whileTap="tap"
                onMouseEnter={() => setIsActive(true)}
                onMouseLeave={() => setIsActive(false)}
                className="animate-pulse rounded-full border border-foreground/15 bg-foreground/10 p-2 backdrop-blur-sm hover:animate-none">
                {children}
            </motion.div>
        </a>
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
                    username="raazimuhammed">
                    <LinkedinIcon />
                </LinkButton>
                <LinkButton
                    href="https://github.com/raazi-muhammed"
                    username="raazi-muhammed">
                    <GithubIcon />
                </LinkButton>
                <LinkButton
                    href="mailto:raazi6163@gmail.com"
                    username="raazi6163@gmail.com">
                    <MailIcon />
                </LinkButton>
            </section>
        </div>
    );
}
