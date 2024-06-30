import { useEffect, useRef, useState } from "react";
import { ProjectType } from "../data/projects";
import { motion } from "framer-motion";
import { defaultAnimation } from "../utils/animation";
import Card from "./Card";
import Container from "./Container";

export function ProjectCarousel({
    projects,
    setCurrentProjectIndex,
    currentProjectIndex,
}: {
    projects: ProjectType[];
    currentProjectIndex: number;
    setCurrentProjectIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
    const divRef = useRef<HTMLDivElement | null>(null);
    const scrollToElement = () => {
        const { current } = divRef;
        if (current) {
            current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement | null>(null);

    const handleWindowSize = () => {
        if (carousel) {
            const newWidth =
                (carousel.current?.scrollWidth || 0) -
                (carousel.current?.offsetWidth || 0);
            setWidth(newWidth);
        }
    };

    useEffect(() => {
        handleWindowSize();
        window.addEventListener("resize", handleWindowSize, false);
    }, []);

    return (
        <section className="sticky -top-24 z-30 w-full backdrop-blur-lg">
            <div ref={divRef} />
            <Container>
                <section
                    ref={carousel}
                    className="cursor-grab backdrop-blur-lg">
                    <motion.div
                        drag="x"
                        dragConstraints={{
                            right: 0,
                            left: -width,
                        }}
                        className="flex w-max gap-4">
                        {projects.map((projects, index) => (
                            <motion.div
                                variants={defaultAnimation}
                                initial={{ opacity: 0.5, scale: 0.95 }}
                                whileInView="animate"
                                whileHover="hover"
                                whileTap="tap"
                                transition={{ delay: index * 0.1 }}
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
                                        className="pointer-events-none h-24 w-full rounded-t object-cover"
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
                    </motion.div>
                </section>
            </Container>
        </section>
    );
}
