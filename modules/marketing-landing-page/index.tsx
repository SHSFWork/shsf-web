import HeroSection from "./components/hero-section";
import ProductsSection from "./components/products-section";
import PrinciplesSection from "./components/principles-section";
import WallOfLoveSection from "./components/wall-of-love-section";
import ClientsSection from "./components/clients-section";
import FaqsSection from "./components/faqs-section";

export default function MarketingLandingPage() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <ProductsSection />
      <PrinciplesSection />
      <WallOfLoveSection />
      <FaqsSection />
    </>
  );
}
