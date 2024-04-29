import React from 'react';

const BlogArticle = ({ post }) => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">{post.title}</h1>

                <div className="mt-8">
                    <div className="relative">
                        <img className="object-cover w-full h-64 rounded-lg lg:h-96" src={post.image} alt={post.title} />

                        <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
                            <img className="object-cover object-center w-10 h-10 rounded-full" src="https://res.cloudinary.com/dbteftlej/image/upload/v1714397079/Linkedin_Profile_Picture_mxogpv.png" alt="" />

                            <div className="mx-4">
                                <h1 className="text-sm text-gray-700 dark:text-gray-200">{post.author}</h1>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Fecha de publicación: {post.publicationDate}</p>
                            </div>
                        </div>
                    </div>

                    <p className="mt-6 text-lg text-gray-700 dark:text-white">{post.content}</p>

                    <div className="flex items-center mt-6">
                        <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                        <div className="mx-4">
                            <h1 className="text-sm text-gray-700 dark:text-gray-200">Marcelo</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogArticle;
