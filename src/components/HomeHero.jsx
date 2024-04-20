import Image from "next/image";
import tmo2 from '../../public/img/tmo2.png'

const Hero = () => {
    return (
        <div class="container px-6 py-16 mx-auto">
            <div class="items-center lg:flex">
                <div class="w-full lg:w-1/2">
                    <div class="lg:max-w-lg">
                        <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Optimiza tu recuperación <br /> y alivia tu <span class="text-blue-500 ">dolor</span></h1>

                        <p class="mt-3 text-gray-600 dark:text-gray-400">Con ejercicio terapéutico, educación y fisioterapia soy el encargado de asistrir una recuperación de la que tú debes ser protagonista.</p>

                        <button class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Reservar una cita</button>
                    </div>
                </div>

                <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img class="w-full h-full lg:max-w-3xl" src="https://merakiui.com/images/components/Catalogue-pana.svg" alt="Catalogue-pana.svg"/>                </div>
            </div>
        </div>
    );
};

export default Hero;