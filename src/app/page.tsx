import HomeHero from '@/components/HomeHero'
import Map from '@/components/Map'
import ExerciseBenefits from '@/components/ExcerciseBenefits'
import Testimonials from '@/components/Testimonials'
import Hero2 from '@/components/Hero2'
import Services from '@/components/Services'

export default function Home() {
  return (
    <>
    <Hero2 />
    <HomeHero/>
    <Services/>
    <ExerciseBenefits />
    <Testimonials />
    <Map />
    </>
  );
}
