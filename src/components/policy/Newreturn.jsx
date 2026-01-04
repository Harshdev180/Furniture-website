

import { useEffect, useState } from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { MdOutlineSupportAgent, MdOutlineSchedule, MdInventory, MdDesignServices } from "react-icons/md";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "eligibility", label: "Return Eligibility" },
  { id: "process", label: "Return Process" },
  { id: "refunds", label: "Refunds" },
  { id: "contact", label: "Contact Us" },
];

export default function ReturnPolicy() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#FAF7F2] text-[#2B2B2B]">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16 pb-10 text-center">
        <div className="relative overflow-hidden rounded-3xl mb-8 h-[260px] md:h-[420px]">

          <img
            src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 h-full flex flex-col justify-center px-4">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#F5E6C8]">
              Return Policy
            </h1>

            <p className="max-w-2xl mx-auto mt-4 text-[#F5E6C8] text-sm md:text-base">
              Your satisfaction matters — our return process is simple and honest.
              This policy outlines our return process, ensuring clarity, fairness,
              and a smooth experience for every customer.
            </p>

            <nav className="mt-5 mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full bg-black/30 px-4 py-2 text-xs sm:text-sm text-[#F5E6C8] font-bold">
                <FaCalendarCheck />
                Last updated: December 2025
              </span>
            </nav>
          </div>
        </div>
      </div>

      {/* LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 grid grid-cols-1 lg:grid-cols-4 gap-10">

        {/* SIDEBAR */}
        <aside className="hidden lg:block lg:w-60">
          <div className="lg:sticky lg:top-24 p-6 rounded-3xl bg-[#3e2723] text-[#F5E6C8] shadow-lg">
            <p className="font-bold mb-4">Table of Contents</p>

            <ul className="space-y-4 text-sm list-decimal pl-4">
              {sections.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`transition block ${active === item.id
                      ? "text-[#C9A24D] font-semibold"
                      : "hover:text-[#C9A24D]"
                      }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>


        {/* CONTENT */}
        {/* <main className="lg:col-span-3 space-y-20 p-4 md:p-8 text-[#2B2B2B]"> */}
        {/* CONTENT */}
        <main className="lg:col-span-3 space-y-16 px-3 sm:px-4 md:px-8">


          <section id="overview" className="scroll-mt-28">
            <h2 className="text-3xl font-bold font-serif mb-4">
              1. Return & Refund Policy
            </h2>
            <p>
              At Graphura Interiors, we curate our collection with the utmost attention to detail, quality, and aesthetics. We want you to be completely delighted with your new furniture. If for any reason you are not satisfied, we offer a transparent and seamless return process to ensure your experience remains exceptional from start to finish.

            </p>
          </section>

          <section id="eligibility" className="scroll-mt-28">
            <h2 className="text-3xl font-bold font-serif mb-6">
              2. Return Eligibility
            </h2>

            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Returns are accepted within 30 days of delivery.</li>
              <li>Items must be free from scratches, stains, or damages.</li>
              <li>Original packaging is required for a full refund; a repacking fee may apply otherwise.</li>
            </ul>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="p-5 bg-amber-50 rounded-2xl">
                <h3 className="font-bold text-xl flex gap-2 mb-2">
                  <MdInventory className="text-3xl" /> Standard Collection
                </h3>
                <p>
                  Stocked items such as dining chairs, lighting, and decor accessories can be returned for a full refund (less shipping costs) within the 30-day window.

                </p>
              </div>

              <div className="p-5 bg-amber-50 rounded-2xl">
                <h3 className="font-bold text-xl flex gap-2 mb-2">
                  <MdDesignServices className="text-3xl" /> Made-to-Order
                </h3>
                <p>
                  Custom upholstery and bespoke furniture pieces are crafted specifically for you. As such, these items are final sale and cannot be returned unless manufacturing defects are present.

                </p>
              </div>
            </div>
          </section>

          <section id="process" className="scroll-mt-28">
            <h2 className="text-3xl font-bold font-serif mb-6">
              3. Return Process
            </h2>
            <p className="text-[#2B2B2B] font-bold font-serif">
              Three simple steps to process your return.
            </p>
            {[1, 2, 3].map((step) => (

              <div className="flex gap-4 bg-[#FAF7F2] rounded-2xl p-4 mb-4 items-start sm:items-center">
                <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-2xl sm:text-4xl font-bold bg-amber-100 rounded-full">
                  {step}
                </div>
                <div className="flex-1">
                  <p>
                    {step === 1 &&
                      "Visit our online Returns Portal or contact our Concierge team at official@graphura.in. Provide your order number and reason for return to receive your Return Merchandise Authorization (RMA)."}
                    {step === 2 &&
                      "Securely pack your items in the original packaging. Affix the prepaid shipping label provided by our team. For large furniture items, our logistics partner will contact you to schedule a pickup time."}
                    {step === 3 &&
                      "Once received at our warehouse, our team will inspect the item within 3-5 business days. Upon approval, your refund will be processed to the original payment method immediately."}
                  </p>
                </div>
              </div>

            ))}
          </section>

          <section id="refunds" className="scroll-mt-28">
            <h2 className="text-3xl font-bold font-serif mb-4 flex gap-2">
              <MdOutlineSchedule className="text-4xl" /> Refunds & Timelines
            </h2>

            {/* <div className="overflow-x-auto"> */}
            <div className="overflow-x-auto -mx-3 sm:mx-0">

              <table className="w-full text-sm ">
                <thead className="bg-[#F3ECE6]">
                  <tr>
                    <th className="p-3 text-left">Return Method</th>
                    <th className="p-3 text-left">Handling Fee</th>
                    <th className="p-3 text-center">Processing Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 font-bold">Small Parcel (UPS/FedEx)</td>
                    <td className="p-3">Free</td>
                    <td className="p-3 text-center "> 5-7 Business Days</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold"> Large Item Freight Pickup</td>
                    <td className="p-3"> ₹150 flat rate</td>
                    <td className="p-3 text-center">10-14 Business Days</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold"> In-Store Return</td>
                    <td className="p-3">Free</td>
                    <td className="p-3 text-center">Immediate</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="contact" className="scroll-mt-28">
            <div className="bg-[#3e2723] rounded-2xl text-center p-10 text-[#F5E6C8]">
              <MdOutlineSupportAgent className="text-5xl mx-auto mb-4 text-[#C9A24D]" />
              <h2 className="text-4xl font-serif mb-3">
                Questions about your data?
              </h2>
              <p className="mb-6 text-[#F5E6C8]  max-w-lg mx-auto">
                At Graphura, your trust matters to us. If you have any questions about this policy or your purchase, our team is always happy to assist you.

              </p>
              <a
                href="mailto:official@graphura.in"
                className="inline-block bg-[#C9A24D] px-6 py-3 rounded-lg font-bold hover:text-black"
              >
                official@graphura.in
              </a>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}


// import React from 'react'

// const Newreturn = () => {
//   return (
//     <div>Newreturn</div>
//   )
// }

// export default Newreturn