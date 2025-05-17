
import About from "../Sections/About/page";
import Contact from "../Sections/Contact/page";
import Projects from "../Sections/Projects/page";
export default function Main() {
    return (
        <main className="flex flex-col gap-24 items-center px-4 py-12 max-w-6xl mx-auto">

            <About />

            <Projects />

            <Contact />

        </main>

    );
}