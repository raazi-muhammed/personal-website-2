export const defaultAnimation = {
    initial: {
        scale: 0.95,
        opacity: 0,
    },
    animate: {
        scale: 1,
        opacity: 1,
    },
    hover: {
        scale: 1.05,
    },
    tap: {
        scale: 0.95,
    },
};

export const blobAnimation = {
    animate1: {
        scale: [1, 1.1, 1.3, 1],
        x: [0, "-15%", "15%", "5%", 0],
        y: [0, "40%", "20%", "25%", 0],
    },
    animate2: {
        scale: [1, 1.1, 1.3, 1],
        x: [0, "25%", "-25%", 0],
        y: [0, "20%", "25%", 0],
    },
};

export const blobTransition = {
    repeat: Infinity,
    duration: 12,
    easings: 100,
};
