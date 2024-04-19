import HomeHero from '@/components/HomeHero'
import Map from '@/components/Map'
import ExerciseBenefits from '@/components/ExcerciseBenefits'
import About from '@/components/About';
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
    <HomeHero/>
    <About />
    <ExerciseBenefits />
    <Testimonials />
    <Map />
    </>
  );
}
