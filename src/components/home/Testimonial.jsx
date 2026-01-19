import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] py-10">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-[#C9A24D] font-semibold tracking-wider text-sm uppercase">
          Testimonials
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mt-3 text-[#3E2723]">
          What Our Customers Say
        </h2>
        <p className="mt-3 text-[#2B2B2B]/70 text-sm sm:text-base">
          Real experiences from customers who love our furniture.
        </p>
      </div>

      {/* Slider */}
      <div className="mt-6 py-16">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="max-w-6xl mx-auto"
        >
          <SwiperSlide>
            <TestimonialCard
              name="Donald Jackman"
              role="Content Creator"
              img="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=200&q=80"
              review="The chair quality is excellent and delivery was quick. Great value."
              rating={5}
            />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard
              name="Richard Nelson"
              role="Instagram Influencer"
              img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"
              review="Loved the sofa design. Cushioning could be a bit softer."
              rating={4}
            />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard
              name="Stella Smith"
              role="Marketing Manager"
              img="https://i.pinimg.com/736x/d1/81/e4/d181e44cf0a7d5f9190bc96939da4164.jpg"
              review="Dining set looks premium. Assembly instructions were clear."
              rating={4}
            />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard
              name="James Washington"
              role="Marketing Manager"
              img="https://i.pinimg.com/736x/42/7f/c6/427fc6f7c41fd2ba3ecf0cba29cb1fd8.jpg"
              review="Recliner is comfortable. Slight delay in shipping."
              rating={3}
            />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard
              name="Michael Brown"
              role="Business Owner"
              img="https://i.pinimg.com/736x/c9/dc/a8/c9dca894be7a95741e9f612912d29a1e.jpg"
              review="Solid craftsmanship. Will order again for my office."
              rating={5}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
