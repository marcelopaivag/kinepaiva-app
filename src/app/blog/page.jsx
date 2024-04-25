import { posts } from '@/app/Posts'; 
import BlogList from '@/components/BlogList'; 

const HomePage = () => {
  return (
    <div className="home-page">
      <BlogList posts={posts} />
    </div>
  );
};

export default HomePage;
