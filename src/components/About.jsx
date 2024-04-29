import React from 'react';
import Image from 'next/image';
import kinepaiva from '../../public/img/kinepaiva720x600.png';

const About = () => {
    return (
        <section className="bg-gray-100 dark:bg-gray-800 lg:py-12 lg:flex lg:justify-center">
            <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
                <div className="lg:w-1/2">
                    <div className="h-80 md:h-full">
                        <Image src={kinepaiva} className="object-cover h-full w-full"/>
                    </div>
                </div>

                <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                        Rehabilitación con <span className="text-blue-500">Sentido</span>
                    </h2>

                    <p className="mt-4 text-gray-500 dark:text-gray-300">
                        Soy Marcelo, un apasionado kinesiólogo con 12 años de experiencia dedicados al fascinante mundo de la traumatología y ortopedia. Mi enfoque especializado como osteópata y magister en terapia manual ortopédica me ha permitido destacarme en el tratamiento del dolor musculoesquelético y las lesiones deportivas. Mi práctica profesional se basa en la combinación efectiva de ejercicio terapéutico, educación y fisioterapia, brindando soluciones integrales a mis pacientes.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
