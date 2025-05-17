import Image from "next/image";
import imagePortatil from "../../../../img/image_about.png";
export default function About() {
    return (
        <section id="about" className="w-full flex flex-col gap-8 items-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">Sobre mí</h2>
            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10 w-full">
                <div className="flex flex-col gap-5 flex-1 justify-center">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Soy Desarrollador de Aplicaciones Multiplataforma con especialización en Ciberseguridad, combinando habilidades de programación con un enfoque en la defensa (Blue Team), análisis forense y evaluación ofensiva de sistemas (Red Team). Mi perfil técnico me permite moverme con soltura entre la construcción segura de software y la simulación de ataques para detectar vulnerabilidades antes de que lo hagan los adversarios reales.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Me defino por un enfoque metódico y orientado al detalle, capaz de analizar comportamientos anómalos en entornos complejos, realizar investigaciones técnicas profundas y proponer soluciones fundamentadas para mejorar la seguridad y la eficiencia de sistemas. Manejo herramientas tanto defensivas como ofensivas, como SIEM, EDR, análisis de logs, explotación controlada.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Además de mi experiencia en desarrollo full stack, participo activamente en CTFs y laboratorios técnicos de Red Team, lo que me permite entender las tácticas y técnicas empleadas por atacantes. Esta visión cruzada refuerza mi capacidad para diseñar sistemas más robustos y responder eficazmente ante incidentes. Busco crecer profesionalmente en entornos donde se valore el pensamiento crítico, la investigación aplicada y la mejora continua de la seguridad desde múltiples ángulos.
                    </p>
                </div>
                <div className="flex-shrink-0 flex items-center justify-center">
                    <Image
                        src={imagePortatil}
                        alt="Imagen de un Portatil"
                        width={420}
                        height={420}
                        className="rounded-xl shadow-lg border-4 border-blue-100 object-cover h-full max-h-[420px] w-[350px] md:w-[420px] bg-white"
                        style={{ aspectRatio: "4/5", maxHeight: "100%" }}
                    />
                </div>
            </div>
        </section>
    );
}