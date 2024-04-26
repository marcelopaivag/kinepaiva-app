'use client'

import { useParams } from 'next/navigation';
import { posts } from '@/app/Posts'; // Asegúrate de importar tus posts desde donde los tengas definidos
import BlogArticle from '@/components/BlogArticle';

const BlogPostPage = () => {
  const { id } = useParams(); // Obtener la ID del post de la URL
  const post = posts.find(post => post.id === parseInt(id)); // Encontrar el post correspondiente

  if (!post) {
    return <div>Post no encontrado</div>; // Manejar el caso en que el post no se encuentre
  }

  return <BlogArticle post={post} />; // Renderizar el componente BlogPost con el post obtenido
};

export default BlogPostPage;

