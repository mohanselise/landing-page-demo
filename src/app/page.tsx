import Header from './(marketing)/_components/Header';
import Hero from './(marketing)/_components/Hero';
import ValueProps from './(marketing)/_components/ValueProps';
import UpgradeStrip from './(marketing)/_components/UpgradeStrip';
import UseCases from './(marketing)/_components/UseCases';
import FeatureHighlights from './(marketing)/_components/FeatureHighlights';
import Testimonials from './(marketing)/_components/Testimonials';
import Pricing from './(marketing)/_components/Pricing';
import FinalCTA from './(marketing)/_components/FinalCTA';
import FAQ from './(marketing)/_components/FAQ';
import Footer from './(marketing)/_components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <UpgradeStrip />
        <UseCases />
        <FeatureHighlights />
        <Testimonials />
        <Pricing />
        <FinalCTA />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
