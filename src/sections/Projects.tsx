import { ReactNode, useState } from "react";
import Card from "../components/Card";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { GithubIcon, LiveLinkIcon } from "../utils/icons";

function ProjectPoints({
    heading,
    count,
    children,
}: {
    heading: string;
    count: number;
    children: ReactNode;
}) {
    return (
        <div className="grid min-h-[40vh] w-full place-items-center">
            <motion.div
                initial={{
                    scale: 0.95,
                    opacity: 0.1,
                }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ amount: "all", once: true }}
                className="w-full">
                <section className="align-center flex gap-2">
                    <div className="flex size-12 justify-center rounded-full bg-primary-accent align-middle text-primary">
                        <span className="m-auto font-mono text-2xl font-semibold">
                            {count}
                        </span>
                    </div>
                    <p className="my-auto font-mono text-3xl font-semibold">
                        {heading}
                    </p>
                </section>
                {children}
            </motion.div>
        </div>
    );
}

export default function Projects() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const currentProject = projects[currentProjectIndex];

    return (
        <div>
            <Container className="py-12">
                <Heading>Projects</Heading>
                <section className="sticky -top-24 flex gap-4 py-6 backdrop-blur-lg">
                    {projects.map((projects, index) => (
                        <Card
                            className="w-56 p-0"
                            onClick={() => setCurrentProjectIndex(index)}>
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
                    ))}
                </section>
                <section
                    className="static grid grid-cols-3 gap-12"
                    key={currentProjectIndex.toString()}>
                    <aside className="sticky top-36 flex h-fit flex-col">
                        <img
                            className="h-96 w-full rounded object-cover"
                            src={currentProject.preview}
                            alt=""
                        />
                        <h4 className="mt-4 font-mono text-xl">
                            {currentProject.name}
                        </h4>
                        <p className="text-muted-foreground">
                            {currentProject.description}
                        </p>
                        <hr className="my-4 text-muted" />
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
                    </aside>
                    <section className="col-span-2 py-24">
                        <ProjectPoints count={1} heading="Why?">
                            <p className="p-4 text-xl">
                                {currentProject.content?.story}
                            </p>
                        </ProjectPoints>
                        <ProjectPoints count={2} heading="Features">
                            <section className="grid gap-2">
                                {currentProject.content?.features.map(
                                    (feature, index) => (
                                        <section className="flex gap-2 rounded bg-muted p-2">
                                            <div className="grid size-8 place-items-center rounded bg-black">
                                                {index + 1}
                                            </div>
                                            <p className="my-auto">{feature}</p>
                                        </section>
                                    )
                                )}
                            </section>
                        </ProjectPoints>
                        <ProjectPoints count={3} heading="Tech Stack">
                            <p className="p-2">
                                {currentProject.content?.teachStack}
                            </p>
                        </ProjectPoints>
                        <div></div>
                    </section>
                </section>
            </Container>
        </div>
    );
}
