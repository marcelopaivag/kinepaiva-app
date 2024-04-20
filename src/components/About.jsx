import React from 'react'
import Image from 'next/image'
import kinepaiva from '../../public/img/kinepaiva.png'

const About = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Rehabilitación con
                        <br class="hidden lg:inline-block" />Sentido
                    </h1>
                    <p class="mb-8 leading-relaxed">Soy Marcelo, un apasionado kinesiólogo con 12 años de experiencia dedicados al fascinante mundo de la traumatología y ortopedia. Mi enfoque especializado como osteópata y magister en terapia manual ortopédica me ha permitido destacarme en el tratamiento del dolor musculoesquelético y las lesiones deportivas. Mi práctica profesional se basa en la combinación efectiva de ejercicio terapéutico, educación y fisioterapia, brindando soluciones integrales a mis pacientes.</p>
                    <div class="flex justify-center">
                    </div>
                </div>
            </div>
        </section>)
}

export default About