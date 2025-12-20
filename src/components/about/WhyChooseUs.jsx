export default function WhyChooseUs() {
  const points = [
    {
      label: "Exclusive",
      title: "Custom Designs",
      desc: "Bespoke furniture crafted to match your space, style, and lifestyle.",
    },
    {
      label: "Premium",
      title: "Premium Materials",
      desc: "High-quality wood, superior finishes, and long-lasting materials.",
    },
    {
      label: "Crafted",
      title: "Skilled Artisans",
      desc: "Expert craftsmen with years of experience and attention to detail.",
    },
    {
      label: "Reliable",
      title: "On-Time Delivery",
      desc: "Timely and safe delivery without compromising on quality.",
    },
  ];

  return (
    <section className="pb-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#2B2B2B]">
            Why Choose Us
          </h2>
          <p className="text-[#3E2723] mt-4 max-w-2xl mx-auto">
            A perfect blend of luxury design, premium materials, and
            exceptional craftsmanship.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {points.map((item, index) => (
            <div
              key={index}
              className="bg-[#E6D5C3]/50 p-8 rounded-2xl border border-[#E6D5C3] hover:shadow-lg transition duration-300"
            >
              {/* Label Badge */}
              <span className="inline-block text-xs uppercase tracking-wide bg-[#C9A24D]/20 text-[#3E2723] px-4 py-1 rounded-full mb-4">
                {item.label}
              </span>

              <h3 className="font-serif text-lg font-semibold text-[#2B2B2B] mb-3">
                {item.title}
              </h3>
              <p className="text-[#3E2723] text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

