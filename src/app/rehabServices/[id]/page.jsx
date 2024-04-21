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
        <section>
            <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                        <img
                            alt=""
                            src={service.image}
                            class="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div class="lg:py-24">
                        <h2 class="text-3xl font-bold sm:text-4xl">{service.title}</h2>

                        <p class="mt-4 text-gray-600">{service.text}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicePage;


