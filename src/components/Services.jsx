import { prisma } from '@/libs/prisma';
import Link from 'next/link';

async function loadServices() {
  return await prisma.service.findMany();
}

async function Services() {
  const services = await loadServices();

  return (
    <section className="text-gray-600 body-font bg-blue-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-blue-600"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Servicios</h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Descubre cómo la kinesiología especializada en rehabilitación musculoesquelética puede ayudarte a recuperarte y mejorar tu calidad de vida. Con enfoque en ejercicio terapéutico, terapia manual ortopédica y fisioterapia, incluyendo tecnologías como la tecarterapia, te acompañamos en tu camino hacia la recuperación y el bienestar.</p>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {services.map((service) => (
            <div key={service.id} className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src={service.image} />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{service.title}</h2>
              <p className="text-base leading-relaxed mt-2">{service.description}</p>
              <Link href={`/rehabServices/${service.id}`} className="text-blue-600 inline-flex items-center mt-3">
              <span className="mx-1">Leer más</span>
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
