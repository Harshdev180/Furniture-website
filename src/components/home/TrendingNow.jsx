import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { products, productActions } from "../../assests/assests";

const TrendingNow = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    <section>
      <div className="mx-auto">
        {/* HEADING AND LEFT, RIGHT ICON */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-[#C9A24D] font-bold tracking-wider text-sm uppercase">
              Best Sellers
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold mt-2 text-[#3E2723]">
              Trending Now
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="size-10 rounded-full border border-[#E6D5C3] hover:bg-[#E6D5C3] flex items-center justify-center text-[#3E2723] transition cursor-pointer"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={scrollRight}
              className="size-10 rounded-full border border-[#E6D5C3] hover:bg-[#E6D5C3] flex items-center justify-center text-[#3E2723] transition cursor-pointer"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* CARDS */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x snap-mandatory"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="snap-start rounded-2xl overflow-hidden group bg-[#E6D5C3] border border-[#E6D5C3]/20 shadow-xl/20 min-w-full sm:min-w-[50%] md:min-w-[33.333%] lg:min-w-[23.2%]"
            >
              <div className="aspect-4/5 relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Badge */}
                {product.badge && (
                  <span
                    className={`absolute top-3 left-3 text-white text-xs font-bold px-2 py-1 rounded ${product.badgeColor}`}
                  >
                    {product.badge}
                  </span>
                )}

                {/* Action Icons */}
                <div className="absolute bottom-7 left-0 right-0 flex justify-center gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  {productActions.map(({ id, icon: Icon }) => (
                    <button
                      key={id}
                      className="bg-white text-[#3E2723] p-4 rounded-full shadow-lg hover:bg-[#C9A24D] hover:text-white"
                    >
                      <Icon />
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 text-center">
                <p className="text-xs uppercase font-bold text-[#2B2B2B]/50">
                  {product.category}
                </p>
                <h3 className="font-serif font-bold text-lg text-[#3E2723]">
                  {product.title}
                </h3>

                <div className="flex justify-center gap-2">
                  <span className="font-bold text-[#C9A24D]">
                    ₹{product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="line-through text-sm text-[#2B2B2B]/40">
                      ₹{product.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
