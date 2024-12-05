export const metadata = {
  title: "Yagleel - Home",
  description: "Yagleel ICT Services",
};

import Hero from "@/components/hero-home";
import ServiceGrid from "@/components/ServicesUi/ServiceGrid";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";


export default function Home() {
  const handleFormSubmit = (formData: FormData) => {
    console.log(formData);
  }
  return (
    <>
      <Hero />
      <ServiceGrid />
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
      
    </>
  );
}
