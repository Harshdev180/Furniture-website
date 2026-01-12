export default function WorkshopGallery() {
  const images = [
    {
      src: "https://wwn-files-live.s3.us-east-2.amazonaws.com/s3fs-public/styles/webp/public/field/image/joinery-custom-1.jpg?itok=DXmkECj1&utm_source=chatgpt.com",
      title: "Handcrafted Precision",
    },
    {
      src: "https://images.unsplash.com/photo-1661476705917-4f84c9bc4222?q=80&w=1470&auto=format&fit=crop",
      title: "Premium Wood Selection",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1682147368377-cf00a625089f?q=80&w=1470&auto=format&fit=crop",
      title: "Modern Workshop",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1745313739593-dcf63a9ff23f?w=600&auto=format&fit=crop&q=60",
      title: "Quality Finishing",
    },
  ];

  return (
    <section className="py-6 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4">
        {/* SECTION TITLE */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12  h-0.5 bg-[#C9A24D]"></span>
            <span className="text-sm uppercase tracking-widest text-[#C9A24D] font-medium">
              Behind The Scenes
            </span>
            <span className="w-12  h-0.5bg-[#C9A24D]"></span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2B2B2B]">
            Our Workshop
          </h2>
        </div>

        {/* GALLERY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg group border border-[#E6D5C3]"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#3E2723]/70 opacity-0 group-hover:opacity-100 transition flex items-end">
                <p className="text-[#FAF7F2] text-sm font-medium p-4">
                  {img.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
