import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

export default function App() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Hero />
            <Projects />
        </main>
    );
}
