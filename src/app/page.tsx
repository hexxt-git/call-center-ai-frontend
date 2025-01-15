import Header from "@/components/Header";
import FeatureOverview from "@/components/FeatureOverview";
import PricingPlans from "@/components/PricingPlans";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Demo from "@/components/Demo";

export default function Home() {
  return (
    <div className="relative z-20">
      <Header />
      <Demo />
      <FeatureOverview />
      <PricingPlans />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
