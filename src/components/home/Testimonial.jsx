import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 bg-[#FAF7F2]">
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
      <div className="mt-14">
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
              img="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
            />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard
              name="Richard Nelson"
              role="Instagram Influencer"
              img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
            />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard
              name="Stella Smith"
              role="Marketing Manager"
              img="https://randomuser.me/api/portraits/women/65.jpg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard
              name="James Washington"
              role="Marketing Manager"
              img="https://randomuser.me/api/portraits/men/45.jpg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard
              name="Michael Brown"
              role="Business Owner"
              img="https://randomuser.me/api/portraits/men/75.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section >
  );
};

export default Testimonial;
