import React from 'react';
import Form from './Form';
import Map from './Map';

const Contact = () => {
  return (
    <section className="w-full">
      <div className="relative w-full h-[80vh] overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/9b/92/a6/9b92a6fda323bd401c5c871df5bc5e4c.jpg"
          alt="Contact banner"
          className="w-full h-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Centered text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4 font-serif text-[#C9A24D]">Contact Us</h1>
          <p className="max-w-2xl sm:text-lg text-[14px] leading-relaxed text-white">
            We're here to help you create your dream space. Reach out for inquiries, consultations, or just to say hello.
          </p>
        </div>
      </div>

      <div className='w-full sm:px-20 px-2'>
        <Form />
      </div>

      <div className='w-full sm:px-20 px-2 mb-20'>
        <Map />
      </div>

    </section>
  );
}

export default Contact;