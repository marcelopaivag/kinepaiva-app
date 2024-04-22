import React from 'react';
import Image from "next/image";
import gym from '../../public/img/gym.png';

const ExerciseBenefits = () => {
    return (
        <section className="bg-gray-100 text-gray-700">
            <div className="container px-6 py-10 mx-auto">
                <div className="lg:flex lg:items-center">
                    <div className="w-full space-y-12 lg:w-1/2">
                        <div>
                            <h1 className="text-2xl font-semibold capitalize lg:text-3xl text-gray-700">Beneficios del <br />Ejercicio terapéutico para tu recuperación</h1>
                            <div className="mt-2">
                                <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                                <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                                <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                            </div>
                            <p className="mt-3">
                                El ejercicio es un subconjunto de la actividad física y se define como la actividad estructurada con el objetivo de mejorar el rendimiento físico y/o la salud. En las últimas dos décadas se ha acumulado un conocimiento considerable sobre la importancia del ejercicio como tratamiento de primera línea de varias enfermedades.
                            </p>
                        </div>
                        <div className="md:flex md:items-start md:-mx-4">
                            <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </span>
                            <div className="mt-4 md:mx-4 md:mt-0">
                                <h1 className="text-xl font-semibold">Osteoartritis, osteoporosis, dolor de espalda, artritis reumatoide.</h1>
                            </div>
                        </div>
                        <div className="md:flex md:items-start md:-mx-4">
                            <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </span>
                            <div className="mt-4 md:mx-4 md:mt-0">
                                <h1 className="text-xl font-semibold">Cualquier lesión deportiva como esguinces articulares, desgarros musculares y fracturas óseas.</h1>
                            </div>
                        </div>
                        <div className="md:flex md:items-start md:-mx-4">
                            <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                </svg>
                            </span>
                            <div className="mt-4 md:mx-4 md:mt-0">
                                <h1 className="text-xl font-semibold">Antes y después de operaciones como Latarjet, pinzamientos de cadera, meniscectomías u injertos de LCA o prótesis articulares.</h1>
                            </div>
                        </div>
                    </div>
                    <div className="lg:flex lg:items-center lg:w-1/2 lg:justify-center mt-7">
                        <Image className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src={gym} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExerciseBenefits;

