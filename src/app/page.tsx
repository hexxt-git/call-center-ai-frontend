import Header from "@/components/Header";
import FeatureOverview from "@/components/FeatureOverview";
import PricingPlans from "@/components/PricingPlans";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative z-20">
      <Header />
      <FeatureOverview />
      <PricingPlans />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
