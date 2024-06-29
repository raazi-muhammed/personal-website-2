import { ReactNode, useState } from "react";
import {
    FaGithub as GithubIcon,
    FaLinkedinIn as LinkedinIcon,
} from "react-icons/fa";
import { IoMail as MailIcon } from "react-icons/io5";
import { motion } from "framer-motion";

function AnimatedBalls() {
    return (
        <div className="container absolute inset-0 mx-auto h-screen w-full">
            <div className="absolute left-[20vh] top-[-40vh] size-[100vh] animate-blob rounded-full bg-indigo-700 mix-blend-screen blur-3xl filter" />
            <div className="absolute left-[-20vh] top-[-40vh] size-[100vh] animate-blob2 rounded-full bg-purple-700 mix-blend-screen blur-3xl filter" />
        </div>
    );
}

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
            <div
                onMouseEnter={() => setIsActive(true)}
                onMouseLeave={() => setIsActive(false)}
                className="animate-pulse rounded-full border border-foreground/15 bg-foreground/10 p-2 backdrop-blur-sm hover:animate-none">
                {children}
            </div>
        </a>
    );
}

export default function Hero() {
    return (
        <div className="relative mx-auto flex min-h-screen w-full flex-col justify-between overflow-hidden py-16">
            <div className="noise pointer-events-none absolute inset-0" />
            <AnimatedBalls />
            <div className="container mx-auto flex gap-4 font-mono">
                <p>&lt;/&gt;</p>
            </div>

            <div className="container mx-auto flex flex-col justify-center">
                <h1 className="-ms-2 font-mono text-9xl font-semibold">
                    Raazi Muhammed
                </h1>
                <p className="font-mono text-xl">
                    Full Stack developer with a strong background in graphic
                    design.
                </p>
            </div>
            <section className="container mx-auto flex gap-4">
                <LinkButton
                    href="https://www.linkedin.com/in/raazimuhammed"
                    username="raazimuhammed">
                    <LinkedinIcon className="my-auto" size={"1.3em"} />
                </LinkButton>
                <LinkButton
                    href="https://github.com/raazi-muhammed"
                    username="raazi-muhammed">
                    <GithubIcon className="my-auto" size={"1.3em"} />
                </LinkButton>
                <LinkButton
                    href="mailto:raazi6163@gmail.com"
                    username="raazi6163@gmail.com">
                    <MailIcon className="my-auto" size={"1.3em"} />
                </LinkButton>
            </section>
        </div>
    );
}
