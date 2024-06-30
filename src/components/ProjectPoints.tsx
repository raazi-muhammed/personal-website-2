import { motion } from "framer-motion";
import { ReactNode } from "react";
import { FaCode, FaQuestion } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";

export function ProjectPoints({
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
