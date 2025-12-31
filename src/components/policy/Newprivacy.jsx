
import { useEffect } from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { MdMarkEmailRead } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use", label: "How We Use Your Information" },
  { id: "cookies-tracking", label:"Cookies,Tracking Technologies" },
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
        if (section && section.getBoundingClientRect().top <= 150) {
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
  <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 text-center">

    <div className="relative overflow-hidden rounded-3xl mb-8 h-100">
      {/* <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1524758631624-e2822e304c36)",
        }}
      /> */}
       <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36" 
            
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    alt="Hero"
                />
                {/* <div className="absolute inset-0 bg-black/60" /> */}
                <div className="absolute inset-0 bg-[#2f6b4f]/70"></div>


      {/* <div className="absolute inset-0 bg-black/40" /> */}


      <div className="relative z-10 p-25">
        <h1 className="mt-2 text-3xl md:text-5xl font-serif font-bold text-[#F5E6C8]">
          Privacy Policy
        </h1>

        <p className="text-[#F5E6C8] max-w-2xl mx-auto mt-4">
          At Graphura, your privacy matters to us. This Privacy Policy describes how we collect, use, and protect your personal information when you use our website and services.
        </p>
        <nav className=" text-[#F5E6C8] transition hover:text-[#C9A24D] rounded-full font-bold px-6 py-3 w-fit mx-auto shadow p-5">
      <span className="flex items-center gap-2">
        <FaCalendarCheck className="text-lg" />
        <span>Last updated: December 2025</span>
      </span>
    </nav>
      </div>

    </div>


    

  </div>


      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 pb-24">
       
<aside className="hidden lg:block">
  <div
    className="
      sticky top-24
      p-8 rounded-3xl min-h-[350px]
      border-l-2 border-[#C9A24D]/30
      bg-[#3e2723]
      text-[#F5E6C8]
      shadow-lg
    "
  >
    <p className="font-bold mb-6  text-[#F5E6C8]/80
              hover:text-[#C9A24D]
              hover:border-[#C9A24D]
              transition-all duration-200">
      Table of Contents
    </p>

    <ul className="space-y-4 text-sm">
      {sections.map((item, index) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            data-id={item.id}
             className="text-[#F5E6C8]  font-semibold hover:text-[#C9A24D] border-[#C9A24D] pl-4 -ml-4"
          >
            <span className="mr-2 font-semibold ">
              {index + 1}.
            </span>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
</aside>





        {/* CONTENT  */}
        <main className="rounded-3xl p-8 md:p-12 space-y-14">
          <section id="introduction" className="scroll-mt-28">
            <h2 className="text-3xl font-bold font-serif mb-4">1. Introduction</h2>
            <p className="text-[#2B2B2B] leading-relaxed pl-5">
            At Graphura Interiors, we are committed to maintaining the trust and confidence of our visitors to our website. In particular, we want you to know that Luxe Interiors is not in the business of selling, renting, or trading email lists with other companies for marketing purposes. This Privacy Policy details when and why we collect your personal information, how we use it, the limited conditions under which we may disclose it to others, and how we keep it secure.
            </p>
          </section>

          <section
            id="information-we-collect"
            className="scroll-mt-28 mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 font-serif">
              2. Information We Collect
            </h2>

            <div class="overflow-hidden rounded-xl bg-[#FAF7F2]   ">
 <div class="divide-y divide-[#fde0d6] ">
 <div class="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-4 p-6">
 <div class="font-semibold text-[#2B2B2B] font-serif">Personal Information</div>
 <div class="text-[#2B2B2B] leading-relaxed">Name, email address, phone number, and shipping address provided during checkout or account creation.</div>
 </div>
 <div class="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-4 p-6">
 <div class="font-semibold text-[#2B2B2B] font-serif">Usage Data</div>
 <div class="text-[#2B2B2B] leading-relaxed">Information on how the Service is accessed and used (e.g., page views, time spent on pages, device information).</div>
 </div>
 <div class="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-4 p-6">
<div class="font-semibold text-[#2B2B2B] font-serif">Payment Information</div>
<div class="text-[#2B2B2B] leading-relaxed">We do not store full credit card information. Payments are processed via secure third-party payment processors.</div>
 </div>
 </div>
 </div>
          </section>

          <section id="how-we-use" className="scroll-mt-28">
            <h2 className="text-3xl font-bold font-serif mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-[#2B2B2B] leading-relaxed p-3">
             We use the collected data for various purposes, primarily to provide and maintain our Service. Specifically, we use your data to:
             </p>
             <ul className="p-4 text-[#2B2B2B] ">
             <li className="p-3 flex items-center gap-3">
             <FaCheckCircle className="text-[#2B2B2B]"/>&nbsp;&nbsp; Process and fulfill your orders, including sending emails to confirm your order status and shipment.</li>
             <li className="p-3 flex items-center gap-3"><FaCheckCircle className="text-[#2B2B2B]" />&nbsp;&nbsp; Provide customer support and respond to your inquiries.
             </li>
             <li className="p-3 flex items-center gap-3"><FaCheckCircle className="text-[#2B2B2B]" />&nbsp;&nbsp; Gather analysis or valuable information so that we can improve our Service.
             </li>
             <li className="p-3 flex items-center gap-3"><FaCheckCircle className="text-[#2B2B2B]" />&nbsp;&nbsp; Monitor the usage of our Service to detect, prevent, and address technical issues.
             </li>
             </ul>
          </section>

          <section id="cookies-tracking" className="scroll-mt-28 text-[#2B2B2B]">
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

          <section id="sharing " className="scroll-mt-28 text-[#2B2B2B]">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              5. Third-Party Sharing
            </h2>
            <p className=" text-[#2B2B2B]-700 leading-relaxed p-3">
            We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services, or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
             </p>
         
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6">
           <div class="p-4 rounded-lg bg-[#f5ead6] font-serif flex items-center gap-3">
           <span className="flex items-center gap-2">
           <MdOutlineLocalShipping className="w-10 h-10" />&nbsp;&nbsp;
            <span>Logistics Partners</span>
          </span>
         </div>
         <div class="p-4 rounded-lg bg-[#f5ead6] font-serif flex items-center gap-3">
         <span className="flex items-center gap-2">
         <MdPayments className="w-10 h-10" />&nbsp;&nbsp;
            <span>Payment Processors</span>
          </span>
         </div>
         <div class="p-4 rounded-lg bg-[#f5ead6] flex items-center font-serif gap-3">
         <span className="flex items-center gap-2">
         <SiGoogleanalytics className="w-10 h-10" />&nbsp;&nbsp;
            <span>Analytics Providers </span>
          </span>
         </div>
         <div class="p-4 rounded-lg bg-[#f5ead6] font-serif flex items-center gap-3">
         <span className="flex items-center gap-2">
         <MdMarkEmailRead className="w-10 h-10"/>&nbsp;&nbsp;
            <span>Email Services</span>
          </span>
        </div>

</div>
          </section>

          <section id="security" className="scroll-mt-28">
            <h2 className="text-3xl font-bold font-serif mb-4">
              6. Your Data Protection Rights
            </h2>
            <p className=" text-[#2B2B2B] leading-relaxed p-3 ">
            Graphura Interiors aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data. Whenever made possible, you can update your Personal Data directly within your account settings section. If you are unable to change your Personal Data, please contact us to make the required changes.
              <br /><br />
            If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please contact us.
            </p>
          </section>

          <section id="contact" className="scroll-mt-28">
          <div className="relative overflow-hidden rounded-xl bg-[#3e2723] px-8 py-10 shadow-lg">

   
    <div
      className="absolute inset-0 opacity-10"
       style={{
         backgroundImage: "radial-gradient(#bd580f 1px, transparent 1px)",
         backgroundSize: "20px 20px",
       }}
     />

    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      
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

     </div>
  </div>
          </section>
        </main>
      </div>
    </div>
    
  );
}


