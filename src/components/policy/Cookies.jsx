

import { useEffect } from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { MdOutlineTableView } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";

const sections = [
  { id: "what-are-cookies", label: "What Are Cookies" },
  { id: "how-we-use", label: "Types of Cookies We Use" },
  { id: "types", label: "Manage Cookie Preferences" },
  { id: "contact", label: "Contact Us" },
];

export default function CookiePolicy() {
  useEffect(() => {
    const handleScroll = () => {
      const links = document.querySelectorAll(".toc-link");
      links.forEach(link => {
        const section = document.getElementById(link.dataset.id);
        if (
          section &&
          section.getBoundingClientRect().top <= 120 &&
          section.getBoundingClientRect().bottom >= 120
        ) {
          links.forEach(l => l.classList.remove("text-amber-600"));
          link.classList.add("text-amber-600");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <div className="bg-[#FAF7F2] text-[#2B2B2B]">
    <div className="bg-[#FAF7F2] text-[#2B2B2B] overflow-x-hidden">


      {/* HERO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-10 text-center">
        <div className="relative overflow-hidden rounded-3xl mb-6 min-h-[300px] md:min-h-[420px]">

          <img
            src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1920"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 px-4 sm:px-6 py-12 md:py-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F5E6C8]">
              Cookie Policy
            </h1>

            <p className="text-[#F5E6C8] max-w-2xl mx-auto mt-4 text-sm sm:text-base">
              At Graphura Interiors, we believe in transparency and providing you
              with a seamless, personalized shopping experience.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 text-[#F5E6C8] font-bold px-6 py-3 rounded-full shadow bg-black/20">
              <FaCalendarCheck />
              <span className="text-sm">Last updated: December 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 pb-24 overflow-x-hidden items-start"> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12
                grid grid-cols-1 lg:grid-cols-4 gap-10">

  <aside className="hidden lg:block lg:w-60">
    <div className="lg:sticky lg:top-24
                    p-6 rounded-3xl
                    bg-[#3e2723] text-[#F5E6C8] shadow-lg">

      <p className="font-bold mb-4">Table of Contents</p>
      <ul className="space-y-3 text-sm">
        {sections.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              data-id={item.id}
              className="toc-link block hover:text-[#C9A24D]"
            >
              {index + 1}. {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </aside>



        {/* MAIN */}
        <main className="lg:col-span-3 space-y-14 px-4 sm:px-6 md:px-8">

   


          <section id="what-are-cookies" className="scroll-mt-32">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-4">
              1. What Are Cookies
            </h2>
            <p className="leading-relaxed">
            Cookies are small text files that are stored on your device when you visit our website. They act as a memory for the website, allowing it to recognize you and your preferences on future visits.

            We use cookies to ensure our website functions correctly, to understand how visitors interact with our content, and to deliver personalized marketing that aligns with your refined tastes.
            </p>
          </section>

          <section id="how-we-use" className="scroll-mt-32 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif">
              2. Types of Cookies We Use
            </h2>

            {[
              ["Strictly Necessary Cookies", "These cookies are essential for the website to function properly. They enable basic features like page navigation, secure areas, and shopping cart functionality. The website cannot function correctly without these cookies.."],
              ["Performance & Analytics", "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site."],
              ["Functional Cookies", "These cookies enable the website to provide enhanced functionality and personalization, such as remembering your region or preferred language. If you do not allow these cookies then some or all of these services may not function properly."],
              ["Marketing & Advertising", "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information. "]
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl p-4 sm:p-5">
                <h3 className="font-bold font-serif">{title}</h3>
                <p className="mt-2 text-sm sm:text-base">{desc}</p>
              </div>
            ))}
          </section>

          <section id="types" className="scroll-mt-32">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-4 flex items-center gap-2">
              <MdOutlineTableView /> Manage Cookie Preferences
            </h2>

            {/* <div className="overflow-x-auto rounded-xl"> */}
            <div className="overflow-x-auto w-full max-w-full">
            <table className="w-full min-w-[520px] text-left text-sm">

              {/* <table className="min-w-[600px] w-full text-left text-sm"> */}
                <thead className="bg-[#fcf9f8] ">
                  <tr>
                    <th className="px-4 py-3 font-bold font-serif">Partner</th>
                    <th className="px-4 py-3 font-bold font-serif">Purpose</th>
                    <th className="px-4 py-3 font-bold font-serif">Category</th>
                  </tr>
                </thead>
                <tbody className=" divide-amber-50">
                  <tr>
                    <td className="px-4 py-3 font-bold">Google Analytics</td>
                    <td className="px-4 py-3">Traffic measurement</td>
                    <td className="px-4 py-3">Analytics</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">Stripe</td>
                    <td className="px-4 py-3">Payment processing</td>
                    <td className="px-4 py-3">Essential</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">Facebook Pixel</td>
                    <td className="px-4 py-3">Ad targeting</td>
                    <td className="px-4 py-3">Marketing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

       
          <section
  id="contact"
  className="bg-[#3e2723] text-white rounded-2xl px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 text-center scroll-mt-32 overflow-hidden"
>

            <IoIosMail className="h-14 w-14 mx-auto text-[#C9A24D] mb-4" />
            <h2 className="text-2xl sm:text-3xl font-serif mb-4">
              Questions about your data?
            </h2>
            <p className="text-[#F5E6C8] max-w-lg mx-auto mb-6 text-sm sm:text-base">
            Graphura value your trust above all else. If you have any questions regarding this policy or how we handle your data, please reach out to our privacy officer.

            </p>
{/* 
            <div className="flex flex-col sm:flex-row gap-4 justify-center"> */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

            <a
  href="mailto:official@graphura.in"
  className="inline-flex w-auto items-center justify-center
             px-4 py-2 sm:px-6 sm:py-3
             text-sm sm:text-base
             rounded-lg bg-[#C9A24D]
             text-[#F5E6C8] font-medium
             hover:text-[#222120]"
>
  official@graphura.in
</a>

<Link
  to="/privacy"
  className="inline-flex w-auto items-center justify-center
             px-4 py-2 sm:px-6 sm:py-3
             text-sm sm:text-base
             rounded-lg bg-[#C9A24D]
             text-[#F5E6C8] font-medium
             hover:text-[#222120]"
>
  View Privacy Policy
</Link>

            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

// import React from 'react'

// const Cookies = () => {
//   return (
//     <div>Cookies</div>
//   )
// }

// export default Cookies