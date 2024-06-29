export const projects: {
    name: string;
    description: string;
    date: string;
    preview?: string;
    mockup?: string;
    readmeMeLink: string;
    links: {
        gitHub?: string;
        liveUrl?: string;
    };
    content?: {
        story: string;
        features: string[];
        teachStack: string;
    };
}[] = [
    {
        name: "Omniflow",
        description:
            "Project Toolkit for Effortless Planning and Management of Projects.",
        date: "Mar 2024 - Present",
        preview: "/images/homepage/omniflow.webp",
        mockup: "/images/mockups/omniflow.png",
        readmeMeLink: "/markdown/projects/omniflow.md",
        links: {
            gitHub: "https://github.com/raazi-muhammed/omniflow",
            liveUrl: "https://omni-flow.live/",
        },
        content: {
            story: "Managing multiple projects can be hard when using different apps for planning and management. To solve this problem, a solution was created that combines all the tools needed into one place. This makes planning and managing projects easier and faster.",
            features: [
                "Employed Microservices architecture with asynchronous message queuing, ensuring scalability and maintainability of the system.",
                "Integrated functionalities include project management, team administration, API documentation creation, database designing, module and task management, video conferencing with screen sharing and chat.",
                "Adhered to CLEAN architecture and SOLID principles to ensure the development of a robust, clean and easily maintainable codebase.",
                "The project is split into seven services which are containerized with Docker and orchestrated using Kubernetes.",
                "Implemented Unit tests and Integration tests to ensure code reliability and resilience.",
                "Created RESTful API following OpenAPI Specification and documented it using Swagger laying a solid foundation for ongoing development.",
            ],
            teachStack:
                "Kafka, Next.js, Typescript, Node.js, Redux, MongoDB, Postgress, Tailwind + Shadcn, Framer motions, Winston, Git, WebSocket, AWS S3, Lambda, Zogocloud, Nodemailer, Grafana, Prometheus, Loki, Jest, RTL",
        },
    },
    {
        name: "KeySense AI",
        description:
            "An AI based typing assistance that checks your typing speed and accuracy",
        date: "May 2024 - May 2024",
        preview: "/images/homepage/key-sense-ai.webp",
        mockup: "/images/mockups/key-sense-ai.png",
        readmeMeLink: "/markdown/projects/key-sense-ai.md",
        links: {
            gitHub: "https://github.com/raazi-muhammed/key-sense-ai",
            liveUrl: "https://key-sense-ai.vercel.app/",
        },
        content: {
            story: "An AI based typing assistance that checks your typing speed and accuracy.",
            features: [
                "AI typing test that checks your typing speed and accuracy.",
                "The AI identifies letters you struggle with and creates tests focusing on those letters.",
                "Choose topics you like and improve your typing speed while learning.",
                "Implemented custom hooks to optimise the typing engine.",
                "Conducted thorough testing of hooks, components and functionalities for reliability and performance validation using Jest and RTL",
            ],
            teachStack: "Next.js, NextAuth",
        },
    },
    {
        name: "Shop Nexus",
        description:
            "A comprehensive Multi-Vendor E-Commerce platform facilitating buying and selling of products",
        date: "Sep 2023 - Nov 2023",
        preview: "/images/homepage/shop-nexus.webp",
        mockup: "/images/mockups/shop-nexus.png",
        readmeMeLink: "/markdown/projects/shop-nexus.md",
        links: {
            gitHub: "https://github.com/raazi-muhammed/shop-nexus",
            liveUrl: "https://shopnexus.live/",
        },
        content: {
            story: "Shop Nexus is a multi-vendor E-commerce application that includes features such as a wallet, payment, cart, order management, referral programs, events, reports, chat, coupons, checkout and reviews.",
            features: [
                "Options to manage product, stock, coupon, offers and order for the seller.",
                "The system includes user and seller management, with administrative oversight and management.",
                "Both sellers and admins have dashboards with charts and sales reports.",
                "Integrated Wallet and Razorpay payment options.",
                "Added subscription model called “Shop Nexus Plus” with benefits like chatting directly to the seller and better referral benefits.",
            ],
            teachStack:
                "Node.js, React.js, Redux, MongoDB, Bootstrap + SCSS, Socket.IO, Razorpay, Firebase, Cloudinary, Multer, Morgan, JWT",
        },
    },
    {
        name: "NPM: React Connect Div",
        description: "Developed a npm package to connect two divs together",
        date: "Apr 2023 - Apr 2023",
        preview: "/images/homepage/react-connect-div.webp",
        mockup: "/images/mockups/react-connect-div.png",
        readmeMeLink: "/markdown/projects/react-connect-div.md",
        links: {
            gitHub: "https://github.com/raazi-muhammed/react-connect-div",
            liveUrl: "https://www.npmjs.com/package/react-connect-div",
        },
        content: {
            story: "While creating a database design tool for a project, I needed to draw a line between two sections. But existing libraries lacked some key features. Such as the ability to adjust the corner radius of the line, and some didn’t even support TypeScript. So, I took matters into my own hands and created my own npm package to address this gap.",
            features: [
                "A lightweight npm package designed for connecting two HTML elements together with a line.",
                "Add options for changing the line color, thickness and border radius, etc.. ensuring seamless integration with your application's design aesthetic.",
            ],
            teachStack: "React, SVG, NPM",
        },
    },
    {
        name: "Alma Foods",
        readmeMeLink: "/markdown/projects/alma-foods.md",
        preview: "/images/homepage/alma-foods.webp",
        mockup: "/images/mockups/alma-foods.png",
        description:
            "Converted a HTML, CSS, JS website into React + Typescript",
        date: "Jan 2024 - Jan 2024",
        links: {
            liveUrl: "https://almafood.sa/",
        },
        content: {
            story: "Freelance Project",
            features: [
                "Converted a HTML, CSS, JS website into React + Typescript.",
                "Designed and implemented admin section for dynamic data.",
                "Added code splitting and lazy loading etc... to make the app faster (scored above 90 on lighthouse).",
                "Utilized the Firebase ecosystem for data management, authentication and hosting.",
            ],
            teachStack:
                "Firebase Hosting, Database, Auth, Tailwind, React, Typescript",
        },
    },
    {
        name: "Rastreo",
        description: "A score-tracking app with features like",
        date: "Mar 2024 - Mar 2024",
        preview: "/images/homepage/rastreo.webp",
        mockup: "/images/mockups/rastreo.png",
        readmeMeLink: "/markdown/projects/rastreo.md",
        links: {
            gitHub: "https://github.com/raazi-muhammed/rastreo",
            liveUrl: "https://rastreo-rmk.netlify.app/",
        },
        content: {
            story: "As a software developer, I constantly find myself drawn to solving everyday problems through technology. And recently, I had a lightbulb moment while playing UNO with my family. While we were playing, there was no great way to keep track of the scores. So I took the initiative to develop a solution, making our family time more hassle-free.",
            features: [
                "Web App for mobile and iPad users",
                "Scoreboard with sorting options",
                "Enhanced accessibility with a touch mode feature",
                "Offline functionality for uninterrupted usage",
            ],
            teachStack: "TypeScript, React, Framer Motion, Tailwind, Docker",
        },
    },
    {
        name: "Sorting Visualizer",
        description:
            "Using this project anyone can explore diverse sorting algorithms like Insertion, Bubble, Selection, Quick, and Merge",
        date: "Dec 2023 - Dec 2023",
        preview: "/images/homepage/sorting-visualizer.webp",
        mockup: "/images/mockups/sorting-visualizer.png",
        readmeMeLink: "/markdown/projects/sorting-visualizer.md",
        links: {
            gitHub: "https://github.com/raazi-muhammed/sorting-visualizer",
            liveUrl: "https://sorting-visualizer-rmk.netlify.app/",
        },
        content: {
            story: "While learning data structures and algorithms, I found a sorting visualizer app and trying to create by own. The journey of constructing and utilizing this project has been highly rewarding. While delving into the intricacies of sorting algorithms, Sorting Visualizer has served as a valuable tool for visualization, enhancing my understanding of sorting algorithms.",
            features: [
                "Adjust delay and array length for control.",
                "Device-based theme switching.",
                "Custom array input for a personalized experience.",
                "Markdown preview of sorting algorithms.",
            ],
            teachStack: " TypeScript, React, Redux, SCSS",
        },
    },
];
