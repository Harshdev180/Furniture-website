import CompanyHistory from "./CompanyHistory";
import Craftsmanship from "./Craftsmanship";
import MissionVision from "./MissionVission";
import WarrantyPolicy from "./WarrentyPolicy";
import WhyChooseUs from "./WhyChooseUs";
import WorkshopGallery from "./WorkshopGallery";

const AboutHero = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#3E2723]/70" />

        {/* Content */}
        <div className="relative z-10 px-4 max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#FAF7F2]">
            About Our Furniture Studio
          </h1>

          <div className="w-20 h-1 bg-[#C9A24D] mx-auto mb-6" />

          <p className="text-lg text-[#E6D5C3]">
            Handcrafted furniture designed for comfort, durability, and timeless style.
          </p>
        </div>
      </section>

      {/* ABOUT SECTIONS */}
      <CompanyHistory />
      <WorkshopGallery />
      <MissionVision />
      <Craftsmanship />
      <WarrantyPolicy />
      <WhyChooseUs />
    </>
  );
};

export default AboutHero;