export default function Projects() {

    return (
        <section id="projects" className="w-full flex flex-col gap-8 items-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">Proyectos</h2>
            <ul className="grid gap-6 md:grid-cols-2 w-full">
                <li className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-400">
                    <h3 className="font-semibold text-lg text-blue-700 mb-1">Proyecto 1</h3>
                    <p className="text-gray-700">Descripción del proyecto 1.</p>
                </li>
                <li className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-400">
                    <h3 className="font-semibold text-lg text-blue-700 mb-1">Proyecto 2</h3>
                    <p className="text-gray-700">Descripción del proyecto 2.</p>
                </li>
                <li className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-400">
                    <h3 className="font-semibold text-lg text-blue-700 mb-1">Proyecto 3</h3>
                    <p className="text-gray-700">Descripción del proyecto 3.</p>
                </li>
            </ul>
        </section>
    );

}