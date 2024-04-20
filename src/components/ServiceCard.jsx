import React from 'react';
import Image from 'next/image';

const ServiceCard = ({ service }) => {
    return (
        <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800 mb-4">
            <Image
                width={200}
                height={60}
                src={service.image}
                alt={service.title}
            />

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">{service.title}</h1>

            <p className="text-gray-500 dark:text-gray-300">{service.description}</p>

            <a href={`/services/${service.id}`} className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                <span className="mx-1">Leer más</span>
                <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
        </div>
    );
}

export default ServiceCard;

