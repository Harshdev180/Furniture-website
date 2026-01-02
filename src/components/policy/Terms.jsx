
import { useEffect, useState } from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { MdOutlineSupportAgent, MdOutlineLocalShipping, MdOutlineChair, MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "products", label: "Products & Services" },
  { id: "pricing", label: "Pricing & Payment" },
  { id: "shipping", label: "Shipping & Delivery" },
  { id: "returns", label: "Returns & Exchanges" },
  { id: "ip", label: "Intellectual Property" },
  { id: "liability", label: "Limitation of Liability" },
];

export default function TermsOfService() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#FAF7F2] text-[#2B2B2B]">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <div className="relative overflow-hidden rounded-3xl mb-8 h-[260px] md:h-[420px]">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-[#3E2723]/70" />

          <div className="relative z-10 h-full flex flex-col justify-center px-4">
            <h1 className="mt-2 text-3xl md:text-5xl font-serif font-bold text-white">
              Terms of Service
            </h1>

            <p className="text-white mt-4 max-w-2xl mx-auto">
              Please read these terms carefully before using Graphura services. They
              outline the rules and regulations for the use of Luxury Living&apos;s
              Website and Services.
            </p>

            <nav className="mt-6 text-[#F5E6C8] font-bold w-fit mx-auto shadow px-6 py-3 rounded-full">
              <span className="flex items-center gap-2">
                <FaCalendarCheck />
                <span>Last updated: December 2025</span>
              </span>
            </nav>
          </div>
        </div>
      </div>

      {/* LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-8 pb-4">

        {/* MOBILE TOC */}
        <div className="lg:hidden bg-[#3e2723] text-[#F5E6C8] rounded-2xl p-4">
          <p className="font-bold mb-3">Table of Contents</p>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {sections.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={active === item.id ? "text-[#C9A24D] font-semibold" : ""}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* DESKTOP SIDEBAR */}
        <aside className="hidden lg:block w-64">
          <div className="sticky top-24 p-8 rounded-3xl min-h-[350px] bg-[#3e2723] text-[#F5E6C8] shadow-lg">
            <p className="font-bold pb-4 text-base">Table of Contents</p>
            <ul className="space-y-5 text-sm list-decimal pl-4">
              {sections.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`transition ${
                      active === item.id
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
        <main className="flex-1 min-w-0">
          <div className="rounded-xl pt-5 pl-4 md:pl-12">

            {/* ======= ALL ORIGINAL CONTENT BELOW (UNCHANGED) ======= */}

            {/* Overview */}
            <section id="overview" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 flex items-center gap-3">
                <span className="font-serif text-primary">1.</span> Overview
              </h2>
              <p>
                By visiting Graphura site and/or purchasing something from us, you engage in our
                “Service” and agree to be bound by the following terms and conditions
                (“Terms of Service”, “Terms”), including those additional terms and
                conditions and policies referenced herein and/or available by hyperlink.
              </p>
              <p className="mt-4">
                Please read these Terms of Service carefully before accessing or using our
                website. By accessing or using any part of the site, you agree to be bound
                by these Terms of Service.
              </p>
            </section>

            {/* Products */}
            <section id="products" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 flex gap-3">
                <span>2.</span> Products & Services
              </h2>
              <p> Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.</p>

            </section>

            {/* Pricing */}
            <section id="pricing" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 flex gap-3">
                <span>3.</span> Pricing & Payment
              </h2>
              <p className="pb-2">Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.</p>
              <p className ="text-sm italic font-medium p-4 bg-red-300 rounded-xl">Note: All prices are listed in USD unless otherwise noted. Taxes and shipping costs are calculated at checkout.</p>

            </section>

            {/* Shipping */}
            <section id="shipping" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 flex gap-3">
                <span>4.</span> Shipping & Delivery
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="p-4 bg-amber-100 rounded-lg">
                  <div className="flex items-center gap-2 font-bold font-serif">
                    <MdOutlineLocalShipping className="h-8 w-8 md:h-10 md:w-10" />
                    <span>Standard Shipping</span>
                    </div>
                    <p className="">Small items and accessories are shipped via standard ground carriers and typically arrive within 5-7 business days.</p>

                  </div>
                
                <div className="p-4 bg-amber-100 rounded-lg">
                  <div className="flex items-center gap-2 font-bold font-serif">
                    <MdOutlineChair className="h-8 w-8 md:h-10 md:w-10" />
                    <span>White Glove</span>
                    </div>
                    <p className="">Large furniture items are delivered via our premium partners. Scheduling will be arranged directly with you.</p>

                  </div>
                </div>
              
            </section>

            {/* Returns */}
            <section id="returns" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 flex gap-3">
                <span>5.</span> Returns & Exchanges
              </h2>
              <p>Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging. </p>

            </section>

            {/* IP */}
            <section id="ip" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 flex gap-3">
                <span>6.</span> Intellectual Property
              </h2>
             <p>The site and its original content, features, and functionality are owned by Luxury Living and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. </p>

            </section>

            {/* Liability */}
            <section id="liability" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 flex gap-3">
                <span>7.</span> Limitation of Liability
              </h2>
              <p>In no case shall Luxury Living, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind.</p>

            </section>

          </div>
        </main>
      </div>

      {/* CTA */}
      <section className="bg-[#f3eae7] py-16 mt-12">
        <div className="max-w-[960px] mx-auto p-6 text-center rounded-2xl bg-[#3e2723]">
          <MdOutlineSupportAgent className="h-16 w-16 mx-auto mb-6 text-[#C9A24D]" />
          <h2 className="text-3xl font-bold font-serif mb-4 text-[#F5E6C8]">
            Still have questions?
          </h2>
           <p className="text-text-main/70 text-[#F5E6C8] mb-8 max-w-md mx-auto">
                 If you have any questions about these Terms, please contact us. We are available Monday through Friday, 9am - 5pm EST.
             </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a className="inline-flex items-center gap-2 bg-[#C9A24D] px-6 py-3 rounded-lg text-white font-bold hover:text-[#3e2723]">
              <MdEmail /> official@graphura.in
            </a>
            <a className="inline-flex items-center gap-2 bg-[#C9A24D] px-6 py-3 rounded-lg text-white font-bold hover:text-[#3e2723]">
              <IoCall /> +91 73780 21327
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

