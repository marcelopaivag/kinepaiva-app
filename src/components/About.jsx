import React from 'react'
import Image from 'next/image'
import kinepaiva from '../../public/img/kinepaiva.png'

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center">

            <div className="flex grid lg:grid-cols-2">

                <div className="bg-teal-500">
                    <Image
                        src={kinepaiva}
                        alt="Kinepaiva Image"
                        layout="responsive"
                    />
                </div>

                <div>
                    <div className="bg-teal-500 p-10 mb-10 h-full">
                        <h2 className="mb-2 text-xl">Rehabilitación con sentido</h2>
                        <p className='mb-4'>Mi enfoque especializado como osteópata y magister en terapia manual ortopédica me ha
                            permitido destacarme en el tratamiento del dolor musculoesquelético y las lesiones
                            deportivas.
                            Mi práctica profesional se basa en la combinación efectiva de ejercicio terapéutico,
                            educación y
                            fisioterapia, brindando soluciones integrales a mis pacientes.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default About