export default function Header() {
    return (
        <header className="w-full py-6 px-4 flex flex-col sm:flex-row items-center justify-between shadow-md bg-white/80 backdrop-blur-md">
            <div className="flex gap-3 items-center">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-700 tracking-tight">Israel Valderrama</h1>
                <span className="hidden sm:inline text-2xl text-gray-300">|</span>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-600">Desarrollador Multiplataforma</h2>
            </div>
            <nav className="flex gap-6 mt-4 sm:mt-0">
                <a href="#about" className="text-gray-600 hover:text-blue-700 font-medium transition-colors">Sobre mí</a>
                <a href="#projects" className="text-gray-600 hover:text-blue-700 font-medium transition-colors">Proyectos</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-700 font-medium transition-colors">Contacto</a>
            </nav>
        </header>
    );
}