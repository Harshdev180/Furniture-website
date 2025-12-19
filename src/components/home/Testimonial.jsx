import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <>
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 text-[#3E2723]">
          What Our Customers Say
        </h2>
      </div>

      <div className="pt-14 pb-5 mt-10">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
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
          {/* Slide 1 */}
          <SwiperSlide>
            <TestimonialCard
              name="Donald Jackman"
              role="Content Creator"
              img="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
            />
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <TestimonialCard
              name="Richard Nelson"
              role="Instagram Influencer"
              img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
            />
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <TestimonialCard
              name="Stella Smith"
              role="Marketing Manager"
              img="https://randomuser.me/api/portraits/women/65.jpg"
            />
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <TestimonialCard
              name="James Washington"
              role="Marketing Manager"
              img="https://randomuser.me/api/portraits/men/45.jpg"
            />
          </SwiperSlide>

          {/* Slide 5 */}
          <SwiperSlide>
            <TestimonialCard
              name="James Washington"
              role="Marketing Manager"
              img="https://randomuser.me/api/portraits/men/75.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
