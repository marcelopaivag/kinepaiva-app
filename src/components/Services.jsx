import React from 'react';
import { prisma } from '@/libs/prisma';
import ServiceCard from '@/components/ServiceCard';

async function loadServices() {
  return await prisma.service.findMany();
}

async function Services() {
  const services = await loadServices();

  return (
    <section className="bg-white dark:bg-gray-900">
      <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white py-3">
        Servicios de kinesiología y rehabilitación<br />
        optimiza tu recuperación y alivia el <span className="text-blue-500">dolor</span>
      </h1>
      <div className="container px-4 py-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard service={service} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;