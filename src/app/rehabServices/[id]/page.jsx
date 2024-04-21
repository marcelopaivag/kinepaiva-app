import { prisma } from '@/libs/prisma';

async function getService(id) {
    return await prisma.service.findUnique({
        where: {
            id: Number(id)
        }
    });
}

async function ServicePage({ params }) {
    const service = await getService(params.id);

    return (
        <div>{service.id}</div>
    );
}

export default ServicePage;

