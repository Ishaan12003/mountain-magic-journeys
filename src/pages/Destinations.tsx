
import { Navbar } from "@/components/Navbar";
import { DestinationsSection } from "@/components/DestinationsSection";
import { Footer } from "@/components/Footer";

const Destinations = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <DestinationsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Destinations;
