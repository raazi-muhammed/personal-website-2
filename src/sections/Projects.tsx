import { useState } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { GithubIcon, LiveLinkIcon } from "../utils/icons";
import { ProjectCarousel } from "../components/ProjectCarousel";
import { ProjectLink } from "../components/ProjectLink";
import { ProjectPoints } from "../components/ProjectPoints";
import { AnimatedBallsSmall } from "../components/AnimatedBalls";

export default function Projects() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const currentProject = projects[currentProjectIndex];

    return (
        <Container className="py-12">
            <Heading>Projects</Heading>
            <ProjectCarousel
                currentProjectIndex={currentProjectIndex}
                setCurrentProjectIndex={setCurrentProjectIndex}
                projects={projects}
            />
            <section
                className="static grid grid-cols-1 gap-2 lg:grid-cols-2 xl:grid-cols-3"
                key={currentProjectIndex.toString()}>
                <motion.aside
                    className="relative flex h-fit w-full flex-col lg:sticky lg:top-36"
                    initial={{
                        y: 100,
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}>
                    <img
                        loading="lazy"
                        className="mb-6 w-full rounded object-cover"
                        src={currentProject.mockup}
                        alt=""
                    />
                    <AnimatedBallsSmall />
                    <div className="px-4">
                        <h4 className="mt-4 font-mono text-xl">
                            {currentProject.name}
                        </h4>
                        <p className="text-muted-foreground">
                            {currentProject.description}
                        </p>
                        <hr className="my-4 me-4 text-muted" />
                        <div className="flex gap-4">
                            <ProjectLink href={currentProject.links.gitHub}>
                                <GithubIcon />
                                Github
                            </ProjectLink>
                            <ProjectLink href={currentProject.links.gitHub}>
                                <LiveLinkIcon />
                                Live link
                            </ProjectLink>
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
