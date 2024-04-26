import { posts } from '@/app/Posts'; 
import BlogArticle from '@/components/BlogArticle'

const page = () => {
  return (
    <BlogArticle posts={posts} />
  )
}

export default page