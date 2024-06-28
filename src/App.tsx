import { ReactNode } from "react";
import {
    FaGithub as GithubIcon,
    FaLinkedinIn as LinkedinIcon,
} from "react-icons/fa";
import { IoMail as MailIcon } from "react-icons/io5";

function AnimatedBalls() {
    return (
        <div className="absolute container inset-0 w-full mx-auto h-screen">
            <div className="absolute top-[-40vh] left-[20vh] size-[100vh] bg-indigo-700 rounded-full mix-blend-screen filter blur-3xl animate-blob" />
            <div className="absolute top-[-40vh] left-[-20vh] size-[100vh] bg-purple-700 rounded-full mix-blend-screen filter blur-3xl animate-blob2" />
        </div>
    );
}

function LinkButton({ href, children }: { href: string; children: ReactNode }) {
    return (
        <a href={href}>
            <div className="border p-2 border-white/15 rounded-full bg-white bg-opacity-10 backdrop-blur-sm">
                {children}
            </div>
        </a>
    );
}

export default function App() {
    return (
        <main className="min-h-screen bg-neutral-950 text-white">
            <div className="relative w-full min-h-screen overflow-hidden flex flex-col justify-between py-16 mx-auto">
                <div className="fixed inset-0 noise" />
                <AnimatedBalls />
                <div className="container mx-auto flex gap-4 font-mono">
                    <p>&lt;/&gt;</p>
                </div>

                <div className="container flex flex-col justify-center mx-auto">
                    <h1 className="text-9xl font-mono font-semibold -ms-2">
                        Raazi Muhammed
                    </h1>
                    <p className="font-mono text-xl">
                        Full Stack developer with a strong background in graphic
                        design.
                    </p>
                </div>
                <section className="container mx-auto flex gap-4">
                    <LinkButton href="https://www.linkedin.com/in/raazimuhammed">
                        <LinkedinIcon size={"1.3em"} />
                    </LinkButton>
                    <LinkButton href="https://github.com/raazi-muhammed">
                        <GithubIcon size={"1.3em"} />
                    </LinkButton>
                    <LinkButton href="mailto:raazi6163@gmail.com">
                        <MailIcon size={"1.3em"} />
                    </LinkButton>
                </section>
            </div>
        </main>
    );
}
