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
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                        <img
                            alt=""
                            src={service.image}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl">{service.title}</h2>

                        <p className="mt-4 text-gray-600">{service.text}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicePage;



