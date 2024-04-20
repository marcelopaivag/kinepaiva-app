import React from 'react'

const About = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Rehabilitación con
                        <br className="hidden lg:inline-block" />Sentido
                    </h1>
                    <p className="mb-8 leading-relaxed">Soy Marcelo, un apasionado kinesiólogo con 12 años de experiencia 
                    dedicados al fascinante mundo de la traumatología y ortopedia. 
                    Mi enfoque especializado como osteópata y magister en terapia manual ortopédica me ha permitido 
                    destacarme en el tratamiento del dolor musculoesquelético y las lesiones deportivas. 
                    Mi práctica profesional se basa en la combinación efectiva de ejercicio terapéutico, 
                    educación y fisioterapia, brindando soluciones integrales a mis pacientes.</p>
                    <div className="flex justify-center">
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About