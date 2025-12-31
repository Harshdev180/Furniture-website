import { Container } from "postcss";
import { useEffect, useState } from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdOutlineSchedule } from "react-icons/md";
import { MdInventory } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
// import { Link } from "react-router-dom";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "eligibility", label: "Return Eligibility" },
  { id: "process", label: "Return Process" },
  { id: "refunds", label: "Refunds" },
  // { id: "exchanges", label: "Exchanges" },
  // { id: "exceptions", label: "Non-Returnable Items" },
  { id: "contact", label: "Contact Us" },
];

export default function ReturnPolicy() {
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
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (

   
<div className="min-h-screen w-full bg-[#FAF7F2] text-[#2B2B2B] font-sans">
  <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 text-center">

    {/* Image Header */}
    <div className="relative overflow-hidden rounded-3xl mb-8 h-100">

      {/* Furniture Background Image */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf)",
        }}
      /> */}
          <img
            src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf" 
            
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    alt="Hero"
                />
                {/* <div className="absolute inset-0 bg-black/60" /> */}
                <div className="absolute inset-0 bg-[#000000]/60"></div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* Heading Content */}
      <div className="relative z-10  p-30 justify-center ">
        <h1 className="mt-2 text-3xl md:text-5xl font-serif font-bold text-[#F5E6C8]">
          Return Policy
        </h1>

        <p className="max-w-2xl mx-auto mt-4 text-[#F5E6C8]">
          Your satisfaction matters — our return process is simple and honest.
          This policy outlines our return process, ensuring clarity, fairness,
          and a smooth experience for every customer.
        </p>
        <nav className="p-7 text-[#F5E6C8] transition hover:text-[#C9A24D] rounded-full font-bold px-6 py-3 w-fit mx-auto shadow ">
      <span className="flex items-center gap-2">
        <FaCalendarCheck className="text-lg" />
        <span>Last updated: December 2025</span>
      </span>
    </nav>
      </div>

    </div>   
  

  </div>

<div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-10 ">
      {/* Sidebar */}
      <aside className="w-60 flex flex-col">
        {/* <div className="sticky top-24 bg-[#3e2723] rounded-2xl p-8 text-[#F5E6C8]"> */}
        <div
  className="sticky top-24 p-8 rounded-3xl min-h-[220px]
             border-l-2 border-gray-200
             bg-[#3e2723] text-[#F5E6C8]
             transition shadow-lg"
>
          <p className="font-bold mb-4 text-base">Table of Contents</p>
          <ul className="space-y-5 text-sm list-decimal pl-4">
            {sections.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  // className={`block transition ${
                  //   active === item.id
                  //     ? "text-[#C9A24D] font-semibold"
                  //     : "hover:text-[#C9A24D]"
                  // }`}
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
      <main className="lg:col-span-3 space-y-20 p-8 rounded-2xl text-[#2B2B2B]">
        
        <section id="overview" className="scroll-mt-28">
          <h1 className="text-3xl font-bold font-serif mb-4 ">1. Return & Refund Policy</h1>
          <p className="text-text-muted   rounded-2xl p-4">
          At Graphura Interiors, we curate our collection with the utmost attention to detail, quality, and aesthetics. We want you to be completely delighted with your new furniture. If for any reason you are not satisfied, we offer a transparent and seamless return process to ensure your experience remains exceptional from start to finish.
          </p>
        </section>

        <section id="eligibility" className="scroll-mt-28">
          <h2 className="text-3xl font-bold font-serif mb-3">2. Return Eligibility</h2>
          <div className= "p-4 rounded-2xl">
          <p className="p-2">
          To be eligible for a return, your item must be in the same condition that you received it: unworn or unused, with tags, and in its original packaging. You will also need the receipt or proof of purchase.

          </p>
          <ul className="p-2">
            <li className="p-1.5">1. Returns are accepted within 30 days of delivery.</li>
            <li className="p-1.5">2. Items must be free from scratches, stains, or damages.</li>
            <li className="p-1.5">3. Original packaging is required for a full refund; a repacking fee may apply otherwise.</li>
          </ul>
          </div>
          <div className="flex p-6 gap-4">
            <div className="col-md-4 justify-center p-5 bg-amber-50 rounded-2xl">
              <h2 className="font-bold pb-3 text-2xl flex gap-2"> <MdInventory className="pt-2 text-[#2B2B2B] text-4xl" />Standard Collection</h2>
              <p>Stocked items such as dining chairs, lighting, and decor accessories can be returned for a full refund (less shipping costs) within the 30-day window.
              </p>
            </div>
            <div className="col-md-4 justify-center p-5  bg-amber-50 rounded-2xl">
              <h2 className="font-bold pb-3 text-2xl flex gap-2"><MdDesignServices className="pt-2 text-[#2B2B2B] text-4xl" />Made-to-Order</h2>
              <p>Custom upholstery and bespoke furniture pieces are crafted specifically for you. As such, these items are final sale and cannot be returned unless manufacturing defects are present.
              </p>
            </div>


          </div>
        </section>

        <section id="process" className="scroll-mt-28">
          <h2 className="text-3xl font-bold font-serif mb-3">3. Return Process</h2>
          <p className="text-[#2B2B2B] font-bold font-serif">
          Three simple steps to process your return.
          </p>
          <div className="pt-5">
          <div className="flex bg-[#FAF7F2] rounded-2xl">
              <h1 className="font-bold text-5xl p-6 bg-amber-100 font-serif  ">1</h1>
              <div className="p-3">
            <h1 className="font-bold font-serif">Initiate Request</h1>
            <p>
            Visit our online Returns Portal or contact our Concierge team at support@luxeinteriors.com. Provide your order number and reason for return to receive your Return Merchandise Authorization (RMA).
            </p>
              </div>
          </div>
          </div>
          <div className="pt-5">
          <div className="flex bg-[#FAF7F2] rounded-2xl">
              <h1 className="font-bold text-5xl p-6 bg-amber-100 font-serif ">2</h1>
              <div className="p-3">
            <h1 className="font-bold font-serif ">Prepare Shipment</h1>
            <p>
            Securely pack your items in the original packaging. Affix the prepaid shipping label provided by our team. For large furniture items, our logistics partner will contact you to schedule a pickup time.
            </p>
              </div>
          </div>
          </div>
          <div className="pt-5">
          <div className="flex bg-[#FAF7F2] rounded-2xl">
              <h1 className="font-bold text-5xl p-6 bg-amber-100 font-serif ">3</h1>
              <div className="p-3">
            <h1 className="font-bold ">Inspection & Refund</h1>
            <p>
            Once received at our warehouse, our team will inspect the item within 3-5 business days. Upon approval, your refund will be processed to the original payment method immediately.
              </p></div>
          </div>
          </div>
         
          
        </section>

        <section id="refunds" className="scroll-mt-28">
          <h2 className="text-3xl font-bold font-serif mb-3 flex gap-2"><MdOutlineSchedule className="pt-2 text-[#2B2B2B] text-4xl" />Refunds & Timelines</h2>
    
            <div className="overflow-x-auto rounded-xl bg-[#FAF7F2]">
  <table className="w-full text-sm border border-white border-collapse">
    <thead className="bg-[#F3ECE6]">
      <tr>
        <th className="px-4 py-3 text-left font-bold font-serif border border-white">
          Return Method
        </th>
        <th className="px-4 py-3 text-left font-bold font-serif border border-white">
          Handling Fee
        </th>
        <th className="px-4 py-3 text-center font-bold font-serif border border-white ">
          Processing Time
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td className="px-4 py-3 font-semibold border border-white font-serif">
          Small Parcel (UPS/FedEx)
        </td>
        <td className="px-4 py-3 border border-white">
          Free
        </td>
        <td className="px-4 py-3 border border-white ">
          <p className="text-emerald-600 bg-emerald-50 text-center rounded">  5-7 Business Days</p>
        </td>
      </tr>

      <tr>
        <td className="px-4 py-3 font-semibold border border-white font-serif">
          Large Item Freight Pickup
        </td>
        <td className="px-4 py-3 border border-white">
          $149 flat rate
        </td>
        <td className="px-4 py-3 border border-white">
         <p className=" text-amber-600 bg-amber-100 text-center rounded "> 10-14 Business Days</p>
        </td>
      </tr>

      <tr>
        <td className="px-4 py-3 font-semibold border border-white font-serif ">
          In-Store Return
        </td>
        <td className="px-4 py-3 border border-white">
          Free
        </td>
        <td className="px-4 py-3 border border-white text-blue-400">
          <p className="text-center rounded text-blue-600 bg-blue-200  ">Immediate</p>
        </td>
      </tr>
    </tbody>
  </table>
</div>

        </section>

       
        <section id="contact" className="scroll-mt-28">
        <div className="relative overflow-hidden rounded-2xl bg-[#3e2723] px-8 py-14 text-center">
  
  {/* Background Gradient */}
  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary via-[#211511] to-[#211511]"></div>

  {/* Content */}
  <div className="relative z-10">
  <div className="size-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
<MdOutlineSupportAgent className="h-16 w-16 text-[#C9A24D]"/>
</div>
    <h2 className="text-2xl lg:text-3xl  mb-4 text-[#F5E6C8] font-bold font-serif">
      Questions about your data?
    </h2>

    <p className="text-[#F5E6C8] mb-8 max-w-lg mx-auto">
    At Graphura, your trust matters to us. If you have any questions about this policy or your purchase, our team is always happy to assist you.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="mailto:official@graphura.in"
        className="inline-flex items-center bg-[#C9A24D] justify-center px-6 py-3 border border-white/20 text-[#F5E6C8] hover:text-black rounded-lg font-medium transition-colors"
      >
        official@graphura.in
      </a>

      {/* <Link
        to="/privacy-policy"
        className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-[#F5E6C8] hover:text-[#C9A24D] rounded-lg font-medium transition-colors"
      >
        View Privacy Policy
      </Link> */}
    </div>
  </div>
</div>

        
        </section>

      </main>
    </div>
    </div>
  
 
  );
}
