import HomeHero from '@/components/HomeHero'
import Map from '@/components/Map'
import ExerciseBenefits from '@/components/ExcerciseBenefits'
import About from '@/components/About';
import Testimonials from '@/components/Testimonials'
import Hero2 from '@/components/Hero2'

export default function Home() {
  return (
    <>
    <Hero2/>
    <HomeHero/>
    <ExerciseBenefits />
    <Testimonials />
    <Map />
    </>
  );
}
