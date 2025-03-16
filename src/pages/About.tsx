
import { Navbar } from "@/components/Navbar";
import { FeatureSection } from "@/components/FeatureSection";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <div className="section-container py-24">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif mb-8">About Alpine Journeys</h1>
            <p className="text-lg mb-6">
              Alpine Journeys was founded by a group of passionate mountaineers with a shared vision: to create transformative mountain experiences that connect people with the majesty of nature while preserving these pristine environments for generations to come.
            </p>
            <p className="text-lg mb-6">
              Our expert guides bring deep local knowledge and decades of experience to every expedition, ensuring both safety and unforgettable moments of discovery.
            </p>
            <p className="text-lg mb-12">
              We pride ourselves on responsible tourism practices and supporting the mountain communities we visit, working closely with local partners to create authentic, sustainable adventures.
            </p>
          </div>
          <FeatureSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
