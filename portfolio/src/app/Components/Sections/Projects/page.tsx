'use client';

import ImageCarousel from '../../ImageCarousel';

interface ProjectImage {
    src: string;
    alt: string;
}

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    images: ProjectImage[];
    githubUrl?: string;
    liveUrl?: string;
}



export default function Projects() {
    const projects: Project[] = [
        {
            id: 1,
            title: 'ByTech',
            description: 'Es una tienda que vende productos tecnologicos. Además cuenta con dos lados tanto el lado para el cliente que sería la tienda y para el lado de la empresa que puede ver las compras, el stock, los trabajadores y tiene un dashboard con estadísticas.',
            technologies: ['Next.js', 'TypeScript', 'Spring Boot', 'Java', 'MySQL', 'Stripe'],
            images: [
                { src: '/projects/bytech/home.svg', alt: 'ByTech - Página principal' },
                { src: '/next.svg', alt: 'ByTech - Dashboard (placeholder)' },
                { src: '/vercel.svg', alt: 'ByTech - Funcionalidades (placeholder)' },
                { src: '/file.svg', alt: 'ByTech - Responsive Design (placeholder)' },
            ],
            githubUrl: 'https://github.com/isravg22/ByTech'
        },
        {
            id: 2,
            title: 'Scripts Python',
            description: 'Varios Scripts de python que hacen una automatización de tareas. Como puede ser la verificación de hashes y para renombrar los archivos.',
            technologies: ['Python'],
            images: [
                { src: '/projects/scripts_python/python-modern.svg', alt: 'scripts_python - Vista principal' },
                { src: '/projects/scripts_python/projects.png', alt: 'scripts_python - Sección proyectos' },
                { src: '/projects/scripts_python/contact.png', alt: 'scripts_python - Contacto' },
            ],
            githubUrl: 'https://github.com/isravg22/Scripts_Python',

        },
        {
            id: 3,
            title: 'Solucionarios CTF',
            description: 'Soluciones de CTF.',
            technologies: ['NMAP', 'SMBCLIENT', 'NETCAT', 'SEARCHSPLOIT', 'SHELL', 'HYDRA', 'JOHN THE RIPPER', 'SSH', 'METASPLOIT'],
            images: [
                { src: '/projects/ecommerce/catalog.png', alt: 'E-commerce - Catálogo' },
                { src: '/projects/ecommerce/cart.png', alt: 'E-commerce - Carrito' },
            ],
            githubUrl: '#'
        },
    ];

    return (
        <section id="projects" className="w-full flex flex-col gap-8 items-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">Proyectos</h2>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 w-full">
                {projects.map((project) => (
                    <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">

                        <ImageCarousel images={project.images} />


                        <div className="p-6">
                            <h3 className="font-semibold text-xl text-blue-700 mb-3">{project.title}</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>


                            <div className="mb-4">
                                <h4 className="text-sm font-medium text-gray-900 mb-2">Tecnologías:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>


                            <div className="flex gap-3">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200 text-sm font-medium"
                                    >
                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                        </svg>
                                        GitHub
                                    </a>
                                )}

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}