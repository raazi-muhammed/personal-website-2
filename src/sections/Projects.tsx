import { ReactNode, useRef, useState } from "react";
import Card from "../components/Card";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { GithubIcon, LiveLinkIcon } from "../utils/icons";
import { FaCode, FaQuestion } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";

function ProjectPoints({
    type,
    children,
}: {
    type: "story" | "features" | "teachStack";
    children: ReactNode;
}) {
    return (
        <div className="grid w-full place-items-center py-12">
            <motion.div
                initial={{
                    scale: 0.95,
                    opacity: 0.1,
                }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ margin: "-200px", once: true }}
                className="w-full">
                <section className="align-center mb-2 flex gap-2">
                    <div className="flex size-12 justify-center rounded-full bg-primary-accent align-middle text-primary">
                        <span className="m-auto font-mono text-2xl font-semibold">
                            {type === "story" ? (
                                <FaQuestion />
                            ) : type === "features" ? (
                                <IoSparkles />
                            ) : (
                                <FaCode />
                            )}
                        </span>
                    </div>
                    {type === "story" ? (
                        <p className="my-auto font-mono text-3xl font-semibold">
                            Story
                        </p>
                    ) : type === "features" ? (
                        <p className="my-auto font-mono text-3xl font-semibold">
                            Features
                        </p>
                    ) : (
                        <p className="my-auto font-mono text-3xl font-semibold">
                            Teach Stack
                        </p>
                    )}
                </section>
                {children}
            </motion.div>
        </div>
    );
}

export default function Projects() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const currentProject = projects[currentProjectIndex];

    const divRef = useRef<HTMLDivElement | null>(null);

    const scrollToElement = () => {
        const { current } = divRef;
        if (current) {
            current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <Container className="py-12">
            <Heading>Projects</Heading>
            <div ref={divRef} />

            <section className="sticky -top-24 flex gap-4 overflow-auto py-6 backdrop-blur-lg">
                {projects.map((projects, index) => (
                    <motion.div
                        initial={{ scale: 0.95 }}
                        whileInView={{ scale: 1 }}
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}
                        viewport={{ amount: "all", once: true }}>
                        <Card
                            className={`w-56 p-0 ${
                                currentProjectIndex === index
                                    ? "border-primary"
                                    : ""
                            }`}
                            onClick={() => {
                                scrollToElement();
                                setCurrentProjectIndex(index);
                            }}>
                            <img
                                className="h-24 w-full rounded-t object-cover"
                                src={projects.preview}
                                alt=""
                            />
                            <div className="p-3">
                                <p className="line-clamp-1 font-mono">
                                    {projects.name}
                                </p>
                                <small className="line-clamp-2 text-muted-foreground">
                                    {projects.description}
                                </small>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </section>

            <section
                className="static grid grid-cols-1 gap-2 lg:grid-cols-2 xl:grid-cols-3"
                key={currentProjectIndex.toString()}>
                <motion.aside
                    className="flex h-fit w-full flex-col lg:sticky lg:top-36"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ opacity: 1, y: 0 }}>
                    <img
                        className="mb-6 w-full rounded object-cover"
                        src={currentProject.mockup}
                        alt=""
                    />
                    <div className="px-4">
                        <h4 className="mt-4 font-mono text-xl">
                            {currentProject.name}
                        </h4>
                        <p className="text-muted-foreground">
                            {currentProject.description}
                        </p>
                        <hr className="my-4 me-4 text-muted" />
                        <div className="flex gap-4">
                            <section className="flex gap-2">
                                <GithubIcon />
                                <a
                                    href={currentProject.links.gitHub}
                                    className="my-auto underline">
                                    Github
                                </a>
                            </section>
                            <section className="flex gap-2">
                                <LiveLinkIcon />
                                <a
                                    href={currentProject.links.gitHub}
                                    className="my-auto underline">
                                    Live link
                                </a>
                            </section>
                        </div>
                    </div>
                </motion.aside>
                <section className="py-24 xl:col-span-2">
                    <ProjectPoints type="story">
                        <p className="text-xl">
                            {currentProject.content?.story}
                        </p>
                    </ProjectPoints>
                    <ProjectPoints type="features">
                        <section className="grid gap-2">
                            {currentProject.content?.features.map(
                                (feature, index) => (
                                    <section className="flex gap-2 rounded bg-secondary p-2">
                                        <div className="grid size-8 place-items-center rounded bg-black">
                                            {index + 1}
                                        </div>
                                        <p className="my-auto w-full">
                                            {feature}
                                        </p>
                                    </section>
                                )
                            )}
                        </section>
                    </ProjectPoints>
                    <ProjectPoints type="teachStack">
                        <p className="p-2">
                            {currentProject.content?.teachStack}
                        </p>
                    </ProjectPoints>
                    <div></div>
                </section>
            </section>
        </Container>
    );
}
