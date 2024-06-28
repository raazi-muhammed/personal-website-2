export default function App() {
    return (
        <main className="min-h-screen bg-neutral-950 text-white">
            <div className="relative w-full min-h-screen bg-[url(/bg.svg)] overflow-hidden flex flex-col justify-between py-16 mx-auto">
                <div className="absolute container inset-0 w-full mx-auto h-screen">
                    <div className="absolute top-[-40vh] left-[20vh] size-[100vh] bg-indigo-700 rounded-full mix-blend-screen filter blur-3xl animate-blob" />
                    <div className="absolute top-[-40vh] left-[-20vh] size-[100vh] bg-purple-700 rounded-full mix-blend-screen filter blur-3xl animate-blob2" />
                    {/*  <div className="absolute top-[-40vh] left-[-40vh] size-[130vh] bg-violet-950 rounded-full mix-blend-plus-lighter filter blur-3xl animate-blob animation-delay-4" /> */}
                </div>

                <div className="container mx-auto flex gap-4 underline font-mono">
                    <p>About</p>
                    <p>Projects</p>
                </div>

                <div className="container flex flex-col justify-center mx-auto">
                    <h1 className="text-9xl font-mono font-semibold">
                        Raazi Muhammed
                    </h1>
                    <p className="font-mono text-xl">
                        Full Stack developer with a strong background in graphic
                        design.
                    </p>
                </div>
                <section className="container mx-auto flex gap-4">
                    <div className="border-[.15rem] p-2 border-black rounded-full ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-linkedin">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </div>
                    <div className="border-[.15rem] p-2 border-black rounded-full ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-github">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                    </div>
                    <div className="border-[.15rem] p-2 border-black rounded-full ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-mail">
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                    </div>
                </section>
            </div>
        </main>
    );
}
