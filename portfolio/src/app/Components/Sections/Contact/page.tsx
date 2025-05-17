export default function Contact() {
    return (
        <section id="contact" className="w-full flex flex-col gap-6 items-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">Contacto</h2>
            <p className="text-lg text-gray-700 text-center">
                Puedes contactarme a través de mi correo electrónico:&nbsp;
                <a href="mailto:isvalgar@gmail.com" className="text-blue-600 font-semibold hover:underline transition-colors">isvalgar@gmail.com</a>
            </p>
            <div className="flex gap-6">
                <a href="https://www.linkedin.com/in/israel-valderrama-garc%C3%ADa-172674277/" target="_blank" rel="noopener noreferrer"
                    className="bg-blue-700 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-800 transition-colors font-medium">
                    LinkedIn
                </a>
                <a href="https://github.com/isravg22" target="_blank" rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-5 py-2 rounded-lg shadow hover:bg-gray-900 transition-colors font-medium">
                    GitHub
                </a>
            </div>
        </section>        
    );

}
