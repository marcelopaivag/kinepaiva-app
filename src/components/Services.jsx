import React from 'react';
import { prisma } from '@/libs/prisma';
import ServiceCard from '@/components/ServiceCard';

async function loadServices() {
  return await prisma.service.findMany();
}

async function Services() {
  const services = await loadServices();

  return (
    <section className="bg-gray-100">
      <h1 className="text-2xl font-semibold text-center text-gray-700 lg:text-3xl py-3">
        Kinesiología y Rehabilitación<br />
        
      </h1>
      <h3 className='"text-2xl font-semibold text-center text-gray-700 py-3"'>optimiza tu recuperación y alivia el <span className="text-blue-500">dolor</span></h3>
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