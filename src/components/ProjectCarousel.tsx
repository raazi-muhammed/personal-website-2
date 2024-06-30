import { useRef } from "react";
import { ProjectType } from "../data/projects";
import { motion } from "framer-motion";
import { defaultAnimation } from "../utils/animation";
import Card from "./Card";

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
    return (
        <>
            <div ref={divRef} />
            <section className="sticky -top-24 flex gap-4 overflow-auto py-6 backdrop-blur-lg">
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
        </>
    );
}
