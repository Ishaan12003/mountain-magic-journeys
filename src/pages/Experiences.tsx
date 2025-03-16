
import { Navbar } from "@/components/Navbar";
import { ExperiencesSection } from "@/components/ExperiencesSection";
import { Footer } from "@/components/Footer";

const Experiences = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <ExperiencesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Experiences;
