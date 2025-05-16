

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1 flex gap-[24px] items-center justify-center">
        <div className="flex gap-[8px] items-center">
          <h1 className="text-[32px] font-bold text-center">Portfolio</h1>
          <span className="text-[16px] text-gray-500">|</span>
          <h2 className="text-[16px] font-semibold text-center">Desarrollador Multiplataforma</h2>
        </div>
        <nav className="flex gap-[16px]">
          <a href="#about" className="text-[16px] text-gray-500 hover:text-gray-700">Sobre mí</a>
          <a href="#projects" className="text-[16px] text-gray-500 hover:text-gray-700">Proyectos</a>
          <a href="#contact" className="text-[16px] text-gray-500 hover:text-gray-700">Contacto</a>
        </nav>
      </header>

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <section id="about" className="flex flex-col gap-[16px] items-center">
          <h2 className="text-[24px] font-bold">Sobre mí</h2>
          <p className="text-[16px] text-gray-700">Soy Desarrollador de Aplicaciones Multiplataforma con especialización en Ciberseguridad, y un marcado interés por el análisis técnico y la investigación digital. Mi formación combina el desarrollo de software con el estudio riguroso de tecnologías orientadas a la protección y evaluación de sistemas informáticos.</p>

          <p className="text-[16px] text-gray-700">Me caracterizo por un enfoque metódico y analítico, con especial atención al detalle en entornos complejos. He trabajado con herramientas y metodologías que me permiten comprender a fondo el funcionamiento de sistemas, interpretar eventos técnicos y aportar soluciones fundamentadas a problemas relacionados con la seguridad y el rendimiento de las aplicaciones.</p>

          <p className="text-[16px] text-gray-700">Además de mi experiencia en desarrollo web full stack, me involucro de forma activa en retos técnicos como CTFs y análisis de sistemas, lo que refuerza mi capacidad para adaptarme a distintos escenarios tecnológicos. Busco seguir creciendo profesionalmente en entornos que valoren la precisión técnica, el aprendizaje continuo y la investigación aplicada.</p>
        </section>

        <section id="projects" className="flex flex-col gap-[16px] items-center">
          <h2 className="text-[24px] font-bold">Proyectos</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Proyecto 1: Descripción del proyecto 1.</li>
            <li>Proyecto 2: Descripción del proyecto 2.</li>
            <li>Proyecto 3: Descripción del proyecto 3.</li>
          </ul>
        </section>

        <section id="contact" className="flex flex-col gap-[16px] items-center">
          <h2 className="text-[24px] font-bold">Contacto</h2>
          <p className="text-[16px] text-white-700">Puedes contactarme a través de mi correo electrónico: <a href="mailto:isvalgar@gmail.com" className="text-blue-500 hover:underline"> aquí</a></p>
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <div className="flex gap-[8px] items-center">
          <p className="text-[16px] text-gray-500">© 2023 Israel Valderrama</p>
        </div>
        <nav className="flex gap-[16px]">
          <a href="https://www.linkedin.com/in/israel-valderrama-garc%C3%ADa-172674277/" className="text-[16px] text-gray-500 hover:text-gray-700">LinkedIn</a>
          <a href="https://github.com/isravg22" className="text-[16px] text-gray-500 hover:text-gray-700">GitHub</a>
        </nav>
      </footer>
    </div>
  );
}
