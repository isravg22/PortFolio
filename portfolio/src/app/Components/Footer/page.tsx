export default function Footer() {
    return (
        <footer className="w-full py-6 mt-12 bg-white/80 backdrop-blur-md flex flex-col items-center gap-2 border-t">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Israel Valderrama</p>
            <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/israel-valderrama-garc%C3%ADa-172674277/" className="text-blue-700 hover:underline text-sm">LinkedIn</a>
                <a href="https://github.com/isravg22" className="text-gray-700 hover:underline text-sm">GitHub</a>
            </div>
        </footer>
    );
}