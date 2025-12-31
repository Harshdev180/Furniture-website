import { useEffect, useState } from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdOutlineChair } from "react-icons/md";
import { MdEmail } from "react-icons/md";
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
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (

<div className="bg-[#FAF7F2] text-[#2B2B2B]">
  
  <div className="max-w-7xl mx-auto px-4 py-12 text-center">

    <div className="relative overflow-hidden rounded-3xl mb-8 h-100">

    <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" 
            
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    alt="Hero"
                />
                {/* <div className="absolute inset-0 bg-black/60" /> */}
                <div className="absolute inset-0 bg-[#3E2723]/70"></div>

      
      {/* <div className="absolute inset-0 bg-black/45" /> */}

      
      <div className="relative z-10 px-6 p-30">
        <h1 className="mt-2 text-3xl md:text-5xl font-serif font-bold text-white">
          Terms of Service
        </h1>

        <p className="text-white mt-4 max-w-2xl mx-auto">
          Please read these terms carefully before using Graphura services. They
          outline the rules and regulations for the use of Luxury Living&apos;s
          Website and Services.
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


      {/* Layout */}
    
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex min-h-screen bg-[#FAF7F2]  gap-8 pb-4">

      {/* <aside className="w-60 flex flex-col"> */}
      <aside className="hidden lg:block">


{/* Sticky Sidebar */}
<div
  className="sticky top-24 p-8 rounded-3xl min-h-[350]px]
             border-l-2 border-gray-200
             bg-[#3e2723] text-[#F5E6C8]
             transition shadow-lg"
>
  <p className="font-bold pb-4 text-base">
    Table of Contents
  </p>

  <ul className="space-y-5 text-sm list-decimal pl-4">
  {sections.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                 
                  className={`cursor-pointer transition-all
                    ${
                      active === item.id
                        ? "text-[#F5E6C8] font-semibold  border-[#C9A24D] pl-4 -ml-4"
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





        {/* Content */}
        
        <main className="flex-1 min-w-0 gap-50">
        
        <div className=" rounded-xl  pt-5 pl-12  ">
        {/* <div className="bg-[#FAF7F2] dark:bg-surface-dark rounded-xl  lg:p-12 shadow-sm"> */}

<Section className=" scroll-mt-28 " id="overview">
  <h2 className="text-2xl  md:text-3xl font-serif font-bold text-text-main text-[#2B2B2B] mb-6 flex items-center gap-3">
     <span className="text-2xl md:text-3xl font-serif font-bold text-primary"> 1.</span>
     <span>Overview</span>
  </h2>
<div className="prose prose-lg prose-neutral dark:prose-invert max-w-none text-text-main/80 text-[#2B2B2B] leading-relaxed ">
    <p> By visiting Graphura site and/or purchasing something from us, you engage in our
      “Service” and agree to be bound by the following terms and conditions
      (“Terms of Service”, “Terms”), including those additional terms and
      conditions and policies referenced herein and/or available by hyperlink.</p>
<p className="mt-4">Please read these Terms of Service carefully before accessing or using our
      website. By accessing or using any part of the site, you agree to be bound
      by these Terms of Service.</p></div>
</Section>

          <Section className="md-12 scroll-mt-28" id="products" >
          <h2 className="pt-4 text-2xl md:text-3xl font-bold text-text-main text-[#2B2B2B] mb-6 flex font-serif items-center gap-3">
  <span className="text-2xl md:text-3xl font-bold font-serif text-primary">
    2.
  </span>
  <span>Products &amp; Services</span>
</h2>

          <div className ="prose prose-lg prose-neutral dark:prose-invert max-w-none text-text-main/80 text-[#2B2B2B] leading-relaxed  rounded-2xl p-3">
          <p> Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.</p>
          <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-primary">
          <li>We have made every effort to display as accurately as possible the colors and images of our products that appear at the store.</li>
          <li>We cannot guarantee that your computer monitor's display of any color will be accurate.</li>
          <li>We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction.</li>
          </ul>
          </div>
          </Section>
          <Section className="mb-12 scroll-mt-28" id="pricing">
          <h2 className="pt-4 text-2xl md:text-3xl font-bold font-serif text-text-main text-[#2B2B2B] mb-6 flex items-center gap-3">
  <span className="text-2xl md:text-3xl font-bold text-primary font-serif">
    3.
  </span>
  <span>Pricing & Payment </span>
</h2>

         <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none text-text-main/80 text-[#2B2B2B] leading-relaxed ">
         <p>Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.</p>
         <div className="bg-red-300 dark:bg-[#221510] border-l-4 border-primary p-4 mt-6 rounded-r-lg">
        <p className ="text-sm italic font-medium">Note: All prices are listed in USD unless otherwise noted. Taxes and shipping costs are calculated at checkout.</p>
        </div>
       </div>
     </Section>

    <Section className
  ="mb-12 scroll-mt-28" id="shipping">
     <h2 className="pt-4 text-2xl md:text-3xl font-bold font-serif text-text-main text-[#2B2B2B] mb-6 flex items-center gap-3">
  <span className="text-2xl md:text-3xl font-bold font-serif text-primary">
    4.
  </span>
  <span>Shipping & Delivery</span>
</h2>

<div className=" p-3 rounded-2xl prose prose-lg prose-neutral dark:prose-invert max-w-none text-text-main/80 text-[#2B2B2B] leading-relaxed ">
<p>We offer White Glove Delivery for most of our furniture items. This service includes delivery to the room of your choice, unpacking, assembly, and removal of packing materials.</p>
<div className="grid md:grid-cols-2 gap-6 mt-6">
<div className="p-4 border  bg-amber-100 border-[#f3eae7] dark:border-[#3a2820] rounded-lg">
<div className="flex items-center gap-2 mb-2 text-primary font-bold font-serif">
<MdOutlineLocalShipping className="h-10 w-20"/>
<span>Standard Shipping</span>
</div>
<p className="text-sm">Small items and accessories are shipped via standard ground carriers and typically arrive within 5-7 business days.</p>
</div>
<div className="p-4 border bg-amber-100 border-[#f3eae7] dark:border-[#3a2820] rounded-lg">
<div className="flex items-center gap-2 mb-2 text-primary font-bold font-serif">
<MdOutlineChair className="h-10 w-20"/>

<span>White Glove</span>
</div>
<p className="text-sm">Large furniture items are delivered via our premium partners. Scheduling will be arranged directly with you.</p>
</div>
</div>
</div>
</Section>

<Section className="mb-12 scroll-mt-28" id="returns">
<h2 className="pt-4 text-2xl md:text-3xl font-bold font-serif text-text-main text-[#2B2B2B] mb-6 flex items-center gap-3">
  <span className="text-2xl md:text-3xl font-bold text-primary font-serif">
    5.
  </span>
  <span>Returns & Exchanges</span>
</h2>

<div className="prose prose-lg prose-neutral dark:prose-invert max-w-none text-text-main/80 text-[#2B2B2B] leading-relaxed ">
<p>Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging. </p>
<p className="mt-4 font-medium text-text-main text-[#2B2B2B]">Custom Orders: </p>
<p className="mt-2">Please note that custom or made-to-order furniture pieces are final sale and cannot be returned unless there is a manufacturing defect.</p>
</div>
</Section>

<Section className="mb-12 scroll-mt-28" id="ip">
<h2 className="pt-4 text-2xl md:text-3xl font-bold font-serif text-text-main text-[#2B2B2B] mb-6 flex items-center gap-3">
  <span className="text-2xl md:text-3xl font-bold font-serif text-primary">
    6.
  </span>
  <span>Intellectual Property</span>
</h2>

<div className= "p-3 rounded-2xl prose prose-lg prose-neutral dark:prose-invert max-w-none text-text-main/80 text-[#2B2B2B] leading-relaxed ">
<p>The site and its original content, features, and functionality are owned by Luxury Living and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. </p>
</div>
</Section>

<Section className="mb-8 scroll-mt-28" id="liability">
<h2 className="pt-4 text-2xl md:text-3xl font-bold font-serif text-text-main text-[#2B2B2B] mb-6 flex items-center gap-3">
  <span className="text-2xl md:text-3xl font-bold font-serif text-primary">
    7.
  </span>
  <span>Limitation of Liability</span>
</h2>

<div className="prose prose-lg prose-neutral dark:prose-invert max-w-none text-text-main/80 text-[#2B2B2B] leading-relaxed ">
<p>In no case shall Luxury Living, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind.</p>
</div>
</Section>
</div>
        </main>
      </div>
      <section className="bg-[#f3eae7] dark:bg-[#2d1e18] py-16 md:py-24 mt-12">
<div className="max-w-[960px] mx-auto p-6 text-center shadow-amber-400 rounded-2xl bg-[#3e2723]">
<div className="size-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
<MdOutlineSupportAgent className="h-16 w-16 text-[#C9A24D]"/>
</div>
<h2 className="text-3xl font-bold font-serif mb-4 text-text-main text-[#F5E6C8]">Still have questions?</h2>
<p className="text-text-main/70 text-[#F5E6C8] mb-8 max-w-md mx-auto">
                If you have any questions about these Terms, please contact us. We are available Monday through Friday, 9am - 5pm EST.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a
           href="mailto:official@graphura.in"
          className="inline-flex items-center justify-center rounded-lg  px-6 py-3 bg-[#C9A24D] text-sm font-bold text-white transition hover:text-[#2B2B2B]"
        >
         <MdEmail /> &nbsp; official@graphura.in
        </a>

             <a
           href="#"
          className="inline-flex items-center justify-center rounded-lg  px-6 py-3 bg-[#C9A24D] text-sm font-bold text-white transition hover:text-[#2B2B2B]"
        >
          <IoCall /> &nbsp;   +91 73780 21327
        </a>   

</div>
</div>
</section>
    </div>

  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600 leading-relaxed">{children}</p>
    </section>
  );
}
