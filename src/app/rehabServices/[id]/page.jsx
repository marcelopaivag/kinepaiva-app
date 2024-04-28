
import { prisma } from '@/libs/prisma';

async function getService(id) {
    try {
        const service = await prisma.service.findUnique({
            where: {
                id: Number(id)
            }
        });
        return service;
    } catch (error) {
        console.error('Error fetching service:', error);
        return null;
    }
}

async function ServicePage({ params }) {
    const service = await getService(params.id);

    if (!service) {
        return <div>Error: El servicio no se encontró.</div>;
    }

    return (
        <section class="text-gray-600 body-font bg-blue-100">
            <div class="container px-5 py-24 mx-auto flex flex-col">
                <div class="lg:w-4/6 mx-auto">
                    <div class="rounded-lg h-64 overflow-hidden">
                        <img alt="content" class="object-cover object-center h-full w-full" src={service.image} />
                    </div>
                    <div class="flex flex-col sm:flex-row mt-10">
                        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-10 h-10" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div class="flex flex-col items-center text-center justify-center">
                                <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Marcelo Paiva</h2>
                                <div class="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
                                <p class="text-base">Kinesiólogo D.O - MTMO</p>
                            </div>
                        </div>
                        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-4 sm:mb-0">{service.title}</h1>
                            <p class="leading-relaxed text-lg mb-4 mt-3">{service.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
}

export default ServicePage;



