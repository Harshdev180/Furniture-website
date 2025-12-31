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
//  
<div className="bg-[#FAF7F2] text-[#2B2B2B] ">
  <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 text-center">

    <div className="relative overflow-hidden rounded-3xl mb-6 h-100">

      
    <img
            src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    alt="Hero"
                />
                {/* <div className="absolute inset-0 bg-black/60" /> */}
                <div className="absolute inset-0 bg-[#3E2723]/70"></div>

      {/* <div className="absolute inset-0 bg-black/40" /></div> */}

      <div className="relative z-10 px-6 p-30 ">
        <h1 className="mt-2 text-3xl md:text-5xl font-serif font-bold text-[#F5E6C8]">
          Cookie Policy
        </h1>
        <p className="text-[#F5E6C8] max-w-2xl mx-auto p-3">
      At Graphura Interiors, we believe in transparency and providing you with a
      seamless, personalized shopping experience.
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

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 pb-24">
        {/*Sidebar */}
         <aside className="hidden lg:block">
          <div className="sticky top-28 bg-[#3e2723] text-[#F5E6C8]  rounded-3xl p-6 border">
            <p className="font-bold mb-4">Table of Contents</p>
            <ul className="space-y-3 text-sm">
              {sections.map((item, index) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    data-id={item.id}
                    className="text-[#F5E6C8]  font-semibold hover:text-[#C9A24D] border-[#C9A24D] pl-4 -ml-4"
                  >
                    {index + 1}. {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>


        {/* Main Content */}
        <main className=" rounded-3xl p-8 md:p-12  space-y-12">
        <section id="what-are-cookies" className="scroll-mt-32">
        
            <h2 className="text-3xl font-bold font-serif mb-4">1. What Are Cookies</h2>
            <p className="text-[#2B2B2B] leading-relaxed">
            Cookies are small text files that are stored on your device when you visit our website. They act as a memory for the website, allowing it to recognize you and your preferences on future visits.

            We use cookies to ensure our website functions correctly, to understand how visitors interact with our content, and to deliver personalized marketing that aligns with your refined tastes.
            </p>
          </section>

          <section id="how-we-use" className="scroll-mt-32">

            <h2 className="text-3xl font-bold mb-4 font-serif">
            2.  Types of Cookies We Use
            </h2>
            <div className="space-y-6 p-5">
        {/* Essential */}
        <div className="flex items-center justify-between  rounded-2xl p-5">
          <div>
            <h3 className="font-bold font-serif">Strictly Necessary Cookies</h3>
            <p className="leading-relaxed text-[#2B2B2B]  mt-1">
            These cookies are essential for the website to function properly. They enable basic features like page navigation, secure areas, and shopping cart functionality. The website cannot function correctly without these cookies.
            </p>
          </div></div></div>
          <div className="space-y-6 p-5">
        {/* Essential */}
        <div className="flex items-center justify-between  rounded-2xl p-5">
          <div>
            <h3 className="font-bold font-serif">Performance & Analytics</h3>
            <p className="leading-relaxed text-[#2B2B2B]  mt-1">
            These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
            </p>
          </div></div></div>
          <div className="space-y-6 p-5">
        {/* Essential */}
        <div className="flex items-center justify-between  rounded-2xl p-5">
          <div>
            <h3 className="font-bold font-serif">Functional Cookies</h3>
            <p className="leading-relaxed text-[#2B2B2B]  mt-1">
            These cookies enable the website to provide enhanced functionality and personalization, such as remembering your region or preferred language. If you do not allow these cookies then some or all of these services may not function properly.
            </p>
          </div></div></div>
          <div className="space-y-6 p-5">
        {/* Essential */}
        <div className="flex items-center justify-between  rounded-2xl p-5">
          <div>
            <h3 className="font-bold font-serif">Marketing & Advertising</h3>
            <p className="leading-relaxed text-[#2B2B2B]  mt-1">
            These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information.
            </p>
          </div></div></div>
          </section>

          <section id="types" className="scroll-mt-32">

            <h2 className="text-3xl font-bold font-serif mb-4 flex items-center gap-2"><MdOutlineTableView className="text-black-400" />Manage Cookie Preferences
            </h2>
            <div className="overflow-x-auto rounded-xl  border-[#f3eae7]">
            <table className="w-full text-left text-sm">
  <thead className="bg-[#fcf9f8] text-[#2B2B2B] border-b border-[#f3eae7]">
    <tr>
      <th className="px-4 py-3 text-left text-sm font-bold font-serif">
        Partner
      </th>
      <th className="px-4 py-3 text-left text-sm font-bold font-serif">
        Purpose
      </th>
      <th className="px-4 py-3 text-left text-sm font-bold font-serif">
        Category
      </th>
    </tr>
  </thead>

  <tbody className="divide-y divide-[#f3eae7]">
    <tr>
      <td className="px-4 py-3 text-[#2B2B2B] font-bold font-serif">Google Analytics</td>
      <td className="px-4 py-3 leading-relaxed text-[#2B2B2B] ">
        Traffic measurement and user behavior analysis.
      </td>
      <td className="px-4 py-3">Analytics</td>
    </tr>

    <tr>
      <td className="px-4 py-3 text-[#2B2B2B] font-bold font-serif">Stripe</td>
      <td className="px-4 py-3 leading-relaxed text-[#2B2B2B] ">
      Payment processing and fraud prevention.
      </td>
      <td className="px-4 py-3 leading-relaxed text-[#2B2B2B] ">Essential</td>
    </tr>

    <tr>
      <td className="px-4 py-3 text-[#2B2B2B] font-bold font-serif">Facebook Pixel</td>
      <td className="px-4 py-3 leading-relaxed text-[#2B2B2B] ">
      Ad targeting and conversion tracking.
      </td>
      <td className="px-4 py-3">Marketing</td>
    </tr>
  </tbody>
</table>
</div>
          </section>

          <section class="bg-[#3e2723] text-white rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden  scroll-mt-32" id="contact">
<div class="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary via-[#211511] to-[#211511]"></div>
<div class="relative z-10">

 <div className="size-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
 <a class="" href="mailto:official@graphura.in">
 <IoIosMail className="h-16 w-16 text-[#C9A24D]"/>
                            </a>

</div>
<h2 class="text-3xl lg:text-3xl font-light mb-4 font-serif">Questions about your data?</h2>
<p class="text-[#F5E6C8] mb-8 max-w-lg mx-auto">
                            Graphura value your trust above all else. If you have any questions regarding this policy or how we handle your data, please reach out to our privacy officer.
                        </p>
<div class="flex flex-col sm:flex-row gap-4 justify-center">
<a class="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-[#F5E6C8]  hover:text-[#222120] bg-[#C9A24D] rounded-lg  font-medium transition-colors" href="mailto:official@graphura.in">
official@graphura.in
                            </a>
                            <Link
  to="/newprivacy"
  className="inline-flex items-center justify-center px-6 py-3 border border-white/20  text-[#F5E6C8] bg-[#C9A24D] hover:text-[#222120] rounded-lg font-medium transition-colors"
>
  View Privacy Policy
</Link>
</div>
</div>
</section>
        </main>
      </div>
    </div>
  );
}

