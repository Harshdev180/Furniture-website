

import { useEffect } from "react";
import { FaCalendarCheck, FaCheckCircle } from "react-icons/fa";
import { MdOutlineLocalShipping, MdPayments, MdMarkEmailRead } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use", label: "How We Use Your Information" },
  { id: "cookies-tracking", label: "Cookies,Tracking Technologies" },
  { id: "sharing", label: "Third-Party Sharing" },
  { id: "security", label: "Your Data Protection Rights" },
  { id: "contact", label: "Contact Us" },
];

export default function PrivacyPolicy() {
  useEffect(() => {
    const onScroll = () => {
      let currentId = "";

      sections.forEach((item) => {
        const section = document.getElementById(item.id);
          if (section && section.getBoundingClientRect().top <= 180) {

          currentId = item.id;
        }
      });

      document.querySelectorAll(".pp-link").forEach((link) => {
        link.classList.remove("text-amber-600");
        if (link.dataset.id === currentId) {
          link.classList.add("text-amber-600");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-[#FAF7F2] text-[#2B2B2B]">
      {/* HERO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-8 text-center">
        <div className="relative overflow-hidden rounded-3xl mb-8
                        h-[260px] sm:h-[340px] md:h-[420px]">

          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-10">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-[#F5E6C8]">
              Privacy Policy
            </h1>

            <p className="text-[#F5E6C8] max-w-2xl mx-auto mt-4 text-sm sm:text-base">
              At Graphura, your privacy matters to us. This Privacy Policy describes how we collect, use, and protect your personal information when you use our website and services.
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6
                      grid grid-cols-1 lg:grid-cols-[280px_1fr]
                      gap-8 lg:gap-12 pb-24">

        <aside className="hidden lg:block">
          <div className="sticky top-24 p-6 rounded-3xl min-h-[350px]
                          bg-[#3e2723] text-[#F5E6C8] shadow-lg">
            <p className="font-bold mb-6 text-[#F5E6C8]/80">
              Table of Contents
            </p>

            <ul className="space-y-4 text-sm">
              {sections.map((item, index) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    data-id={item.id}
                    className="pp-link block pl-4 -ml-4 font-semibold
                               border-l-2 border-transparent
                               hover:text-[#C9A24D] hover:border-[#C9A24D]
                               transition"
                  >
                    {index + 1}. {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="rounded-3xl p-5 sm:p-8 md:p-12 space-y-14">
          {/* <section id="introduction" className="scroll-mt-28"> */}
          <section className="relative">
  {/* anchor spacer */}
  <span
    id="introduction"
    className="absolute -top-[200px] sm:-top-[220px] md:-top-[240px]"
  />


<h2 className="text-3xl font-bold font-serif mb-6">
  1. Introduction
</h2>

            <p className="leading-relaxed pl-2 sm:pl-5">
              At Graphura Interiors, we are committed to maintaining the trust and confidence of our visitors to our website...
            </p>
          </section>

          <section
            id="information-we-collect"
            className="scroll-mt-[140px] sm:scroll-mt-[160px] md:scroll-mt-[180px]"

          >
            <h2 className="text-3xl font-bold mb-6 font-serif">
              2. Information We Collect
            </h2>

            
 <div className="rounded-xl bg-[#FAF7F2] p-5 sm:p-6">
  <div className="divide-y divide-[#fde0d6]">

 <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-4 p-6">
 <div className="font-semibold text-[#2B2B2B] font-serif">Personal Information</div>
 <div className="text-[#2B2B2B] leading-relaxed">Name, email address, phone number, and shipping address provided during checkout or account creation.</div>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-4 p-6">
 <div className="font-semibold text-[#2B2B2B] font-serif">Usage Data</div>
 <div className="text-[#2B2B2B] leading-relaxed">Information on how the Service is accessed and used (e.g., page views, time spent on pages, device information).</div>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-4 p-6">
<div className="font-semibold text-[#2B2B2B] font-serif">Payment Information</div>
<div className="text-[#2B2B2B] leading-relaxed">We do not store full credit card information. Payments are processed via secure third-party payment processors.</div>
 </div>
 </div>
 </div>
          </section>

          <section id="how-we-use" className="scroll-mt-[140px] sm:scroll-mt-[160px] md:scroll-mt-[180px]"
          >
            <h2 className="text-3xl font-bold font-serif mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-[#2B2B2B] leading-relaxed p-3">
             We use the collected data for various purposes, primarily to provide and maintain our Service. Specifically, we use your data to:
             </p>
             {/* <ul className="p-4 text-[#2B2B2B] "> */}
             <ul className="space-y-3 px-2 sm:px-4">
             <li className="flex items-start gap-3">
  <FaCheckCircle className="text-[#2B2B2B] w-5 h-5 mt-1 flex-shrink-0" />
  <span>
    Process and fulfill your orders, including sending emails to confirm your order status and shipment.
  </span>
</li>
<li className="flex items-start gap-3">
  <FaCheckCircle className="text-[#2B2B2B] w-5 h-5 mt-1 flex-shrink-0" />
  <span>
  Provide customer support and respond to your inquiries.
  </span>
</li>
<li className="flex items-start gap-3">
  <FaCheckCircle className="text-[#2B2B2B] w-5 h-5 mt-1 flex-shrink-0" />
  <span>
  Gather analysis or valuable information so that we can improve our Service.
  </span>
</li>
<li className="flex items-start gap-3">
  <FaCheckCircle className="text-[#2B2B2B] w-5 h-5 mt-1 flex-shrink-0" />
  <span>
  Monitor the usage of our Service to detect, prevent, and address technical issues.
  </span>
</li>

             </ul>
          </section>

          <section id="cookies-tracking" className="scroll-mt-[140px] sm:scroll-mt-[160px] md:scroll-mt-[180px]"
          >
            <h2 className="text-3xl font-bold mb-4 font-serif">
              4. Cookies & Tracking Technologies
            </h2>
            <div className="bg-[#FAF7F2] p-4 rounded-xl ">
              <p>
              We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.

              </p>
              <br />
              <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.   
              </p>

            </div>
            
          </section>

          <section id="sharing" className="scroll-mt-[140px] sm:scroll-mt-[160px] md:scroll-mt-[180px]"
          >
            <h2 className="text-3xl font-bold mb-4 font-serif">
              5. Third-Party Sharing
            </h2>
            <p className=" text-[#2B2B2B]-700 leading-relaxed p-3">
            We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services, or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
             </p>
         
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6">
           <div className="p-4 rounded-lg bg-[#f5ead6] font-serif flex items-center gap-3">
           <span className="flex items-center gap-2">
           <MdOutlineLocalShipping className="w-8 h-8 sm:w-10 sm:h-10"/>&nbsp;&nbsp;
            <span>Logistics Partners</span>
          </span>
         </div>
         <div className="p-4 rounded-lg bg-[#f5ead6] font-serif flex items-center gap-3">
         <span className="flex items-center gap-2">
         <MdPayments className="w-8 h-8 sm:w-10 sm:h-10" />&nbsp;&nbsp;
            <span>Payment Processors</span>
          </span>
         </div>
         <div className="p-4 rounded-lg bg-[#f5ead6] flex items-center font-serif gap-3">
         <span className="flex items-center gap-2">
         <SiGoogleanalytics className="w-8 h-8 sm:w-10 sm:h-10" />&nbsp;&nbsp;
            <span>Analytics Providers </span>
          </span>
         </div>
         <div class="p-4 rounded-lg bg-[#f5ead6] font-serif flex items-center gap-3">
         <span className="flex items-center gap-2">
         <MdMarkEmailRead className="w-8 h-8 sm:w-10 sm:h-10"/>&nbsp;&nbsp;
            <span>Email Services</span>
          </span>
        </div>

</div>
          </section>

          <section id="security" className="scroll-mt-[140px] sm:scroll-mt-[160px] md:scroll-mt-[180px]"
>
            <h2 className="text-3xl font-bold font-serif mb-4">
              6. Your Data Protection Rights
            </h2>
            <p className=" text-[#2B2B2B] leading-relaxed p-3 ">
            Graphura Interiors aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data. Whenever made possible, you can update your Personal Data directly within your account settings section. If you are unable to change your Personal Data, please contact us to make the required changes.
              <br /><br />
            If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please contact us.
            </p>
          </section>

          <section id="contact" className="scroll-mt-[140px] sm:scroll-mt-[160px] md:scroll-mt-[180px]"
>
          {/* <div className="relative z-10 flex flex-col md:flex-row bg-[#3e2723] p-10 rounded-xl items-start md:items-center gap-6 md:gap-10"> */}



    {/* <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"> */}
    <div className="relative z-10 flex flex-col md:flex-row bg-[#3e2723] p-8 sm:p-10 rounded-xl items-center md:items-center gap-6 md:gap-10 text-center md:text-left">

       <div>
         <h2 className="text-3xl font-bold font-serif text-[#F5E6C8] mb-2">
          Have questions about your data?
         </h2>
      
         <p className=" text-[#F5E6C8] max-w-md">
           Our dedicated  privacy team of graphura is always available to assist you with any inquiries regarding this policy.
         </p>
       </div>

       <div className="w-full md:w-auto">
         <a
           href="mailto:official@graphura.in"
          className="inline-flex items-center justify-center rounded-lg  px-6 py-3 bg-[#C9A24D] text-sm font-bold text-white transition hover:text-[#2B2B2B]"
        >
          Graphura Privacy Team
        </a>
      </div>

     {/* </div> */}
  </div>
          </section>

        </main>
      </div>
    </div>
    
  );
}

// import React from 'react'

// const Newprivacy = () => {
//   return (
//     <div>Newprivacy</div>
//   )
// }

// export default Newprivacy