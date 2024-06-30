import { motion } from "framer-motion";
import { blobAnimation, blobTransition } from "../utils/animation";

export function AnimatedBallsSmall() {
    return (
        <div className="container absolute inset-0 -z-10 mx-auto h-full w-full">
            <motion.div
                variants={blobAnimation}
                animate="animate1"
                transition={blobTransition}
                className="absolute -top-2 left-[10rem] size-[20rem] rounded-full bg-indigo-700 mix-blend-screen blur-3xl filter"
            />
            <motion.div
                variants={blobAnimation}
                animate="animate2"
                transition={blobTransition}
                className="absolute -top-2 left-[-5rem] size-[20rem] rounded-full bg-purple-700 mix-blend-screen blur-3xl filter"
            />
        </div>
    );
}

export function AnimatedBallsHero() {
    return (
        <div className="container absolute inset-0 mx-auto h-screen w-full">
            <motion.div
                variants={blobAnimation}
                animate="animate1"
                transition={blobTransition}
                className="absolute left-[20vh] top-[-40vh] size-[100vh] animate-blob rounded-full bg-indigo-700 mix-blend-screen blur-3xl filter"
            />
            <motion.div
                variants={blobAnimation}
                animate="animate1"
                transition={blobTransition}
                className="absolute left-[-20vh] top-[-40vh] size-[100vh] animate-blob2 rounded-full bg-purple-700 mix-blend-screen blur-3xl filter"
            />
        </div>
    );
}
