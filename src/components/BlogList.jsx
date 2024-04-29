import React from 'react';
import Link from 'next/link';

const BlogList = ({ posts }) => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Blog</h1>
                    <p className="max-w-lg mx-auto mt-4 text-gray-500">Información relevante para usuarios y profesionales de la salud.</p>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
                    {posts.map(post => (
                        <div key={post.id}>
                            <div className="relative">
                                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={post.image} alt={post.title} />
                                <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
                                    <img className="object-cover object-center w-10 h-10 rounded-full" src="https://res.cloudinary.com/dbteftlej/image/upload/v1714397079/Linkedin_Profile_Picture_mxogpv.png" alt="" />
                                    <div className="mx-4">
                                        <h1 className="text-sm text-gray-700 dark:text-gray-200">{post.author}</h1>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Fecha de publicación: {post.publicationDate}</p>
                                    </div>
                                </div>
                            </div>
                            <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">{post.title}</h1>
                            <hr className="w-32 my-6 text-blue-500" />
                            <p className="text-sm text-gray-500 dark:text-gray-400">{post.content}</p>
                            <Link className="inline-block mt-4 text-blue-500 underline hover:text-blue-400" href={`/blog/${post.id}`}>
                                Leer más
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogList;



