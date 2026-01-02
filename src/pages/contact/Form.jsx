import React, { useState } from "react";
import { MdMarkEmailUnread, MdOutlineCall, MdOutlineMail, MdLocationPin } from "react-icons/md";
import { Link } from 'react-router-dom';
import { submitContactForm, submitNewsletterForm } from '../../utils/googleSheets';
import { motion } from 'framer-motion';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [news, setNewsletter] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isNewsSubmitting, setIsNewsSubmitting] = useState(false);
  const [newsStatus, setNewsStatus] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await submitContactForm({
        name,
        email,
        phone,
        message,
      });

      if (result.success) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully! We\'ll get back to you soon.' });
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setSubmitStatus({ type: 'error', message: result.message || 'Failed to send message. Please try again.' });
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus({ type: 'error', message: 'Submission failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSubmitNews = async (e) => {
    e.preventDefault();
    setIsNewsSubmitting(true);
    setNewsStatus(null);

    try {
      const newResult = await submitNewsletterForm({
        email: news,
      });

      if (newResult.success) {
        setNewsStatus({
          type: 'success',
          message: 'Subscribed successfully!',
        });
        setNewsletter("");
      } else {
        setNewsStatus({
          type: 'error',
          message: newResult.message || 'Subscription failed.',
        });
      }
    } catch (err) {
      console.error(err);
      setNewsStatus({
        type: 'error',
        message: 'Submission failed. Please try again.',
      });
    } finally {
      setIsNewsSubmitting(false);
    }
  };




  return (
    <div className="mx-auto mb-20">
      {/* Main card container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 -mt-[50px] relative z-10 mb-20">
        {/* Left side - contact form */}
        <div className="lg:col-span-8 p-6 sm:p-8 border border-[#3E2723]/30 rounded-3xl bg-white shadow-xl shadow-[#3E2723]/50">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#3E2723] mb-6">
            Get in Touch
          </h2>
          <form className="space-y-6" onSubmit={onSubmit}>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="w-full">
                <label className="block text-[#2B2B2B]/90 text-sm font-bold mb-2 uppercase">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-[#FAF7F2] border-2 border-[#E6D5C3] rounded-lg px-4 py-3 text-[#2B2B2B]/80 placeholder:text-[#2B2B2B]/50 placeholder:text-sm focus:outline-none focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 transition"
                />
              </div>
              <div className="w-full">
                <label className="block text-[#2B2B2B]/90 text-sm font-bold mb-2 uppercase">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-[#FAF7F2] border-2 border-[#E6D5C3] rounded-lg px-4 py-3 text-[#2B2B2B]/80 placeholder:text-[#2B2B2B]/50 placeholder:text-sm focus:outline-none focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 transition"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="block text-[#2B2B2B]/90 text-sm font-bold mb-2 uppercase">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 12345 67890"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full bg-[#FAF7F2] border-2 border-[#E6D5C3] rounded-lg px-4 py-3 text-[#2B2B2B]/80 placeholder:text-[#2B2B2B]/50 placeholder:text-sm focus:outline-none focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 transition"
              />
            </div>

            <div>
              <label className="block text-[#2B2B2B]/90 text-sm font-bold mb-2 uppercase">
                Message
              </label>
              <textarea
                placeholder="Write your message here..."
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full bg-[#FAF7F2] border-2 border-[#E6D5C3] rounded-lg px-4 py-3 text-[#2B2B2B]/80 placeholder:text-[#2B2B2B]/50 placeholder:text-sm focus:outline-none focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 transition resize-none"
              ></textarea>
            </div>

            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg ${submitStatus.type === 'success'
                  ? 'bg-green-50 border-2 border-green-200 text-green-800'
                  : 'bg-red-50 border-2 border-red-200 text-red-800'
                  }`}
              >
                {submitStatus.message}
              </motion.div>
            )}

            <button
              className="mt-4 w-full bg-[#3E2723] text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg shadow-[#3E2723]/50 hover:bg-[#C9A24D] hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer font-serif disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⏳</span>
                  <span className="text-lg">Sending...</span>
                </>
              ) : (
                <span className="text-lg">Send Message</span>
              )}
            </button>
          </form>
        </div>

        {/* Right Side Newsletter */}
        <div className="lg:col-span-4 flex flex-col">
          <div className="bg-[#FAF7F2] border-[#3E2723]/30 p-6 sm:p-8 rounded-3xl border h-full flex flex-col justify-center items-center text-center relative overflow-hidden group shadow-xl shadow-[#3E2723]/50">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/40 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10 flex flex-col gap-4 items-center">
              <div className="bg-white p-3 rounded-full shadow-xl text-[#C9A24D] mb-2 border border-[#3E2723]/20">
                <MdMarkEmailUnread className="text-4xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#3E2723]">
                Our Newsletter
              </h3>
              <p className="text-xs sm:text-sm text-[#2B2B2B]/50 mb-4">
                Subscribe to our weekly newsletter to get the latest interior
                design trends and exclusive offers.
              </p>

              <form className="w-full flex flex-col gap-3" onSubmit={onSubmitNews}>
                <input
                  className="w-full border-2 border-[#E6D5C3] rounded-lg bg-white text-center h-12 px-4 text-sm"
                  placeholder="Enter your Email"
                  required
                  type="email"
                  value={news}
                  onChange={(e) => setNewsletter(e.target.value)}
                />

                {newsStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${newsStatus.type === 'success'
                      ? 'bg-green-50 border-2 border-green-200 text-green-800'
                      : 'bg-red-50 border-2 border-red-200 text-red-800'
                      }`}
                  >
                    {newsStatus.message}
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isNewsSubmitting}
                  className="w-full bg-[#C9A24D] hover:bg-[#B8923D] text-white font-bold py-3 rounded-lg text-sm transition-colors shadow-md disabled:opacity-50"
                >
                  {isNewsSubmitting ? "Subscribing..." : "Subscribe Now"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <Link to="tel:+917378021327" className="bg-white p-4 sm:p-6 rounded-2xl border border-[#3E2723]/30 flex items-center gap-4 sm:gap-5 hover:border-[#C9A24D]/50 hover:shadow-md transition-all group shadow-md shadow-[#3E2723]/50">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#E6D5C3]/20 flex items-center justify-center text-[#3E2723] group-hover:bg-[#3E2723] group-hover:text-white transition-colors duration-300 shrink-0">
            <MdOutlineCall className="text-xl sm:text-2xl" />
          </div>
          <div>
            <p className="font-bold text-xs sm:text-sm text-[#C9A24D] uppercase tracking-wider mb-1">
              Call Us
            </p>
            <p className="text-sm sm:text-md text-[#2B2B2B]/80 group-hover:text-[#3E2723] transition-colors">
              +91 7378021327
            </p>
          </div>
        </Link>
        <Link to="mailto:official@graphura.in" className="bg-white p-4 sm:p-6 rounded-2xl border border-[#3E2723]/30 flex items-center gap-4 sm:gap-5 hover:border-[#C9A24D]/50 hover:shadow-md transition-all group shadow-md shadow-[#3E2723]/50">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#E6D5C3]/20 flex items-center justify-center text-[#3E2723] group-hover:bg-[#3E2723] group-hover:text-white transition-colors duration-300 shrink-0">
            <MdOutlineMail className="text-xl sm:text-2xl" />
          </div>
          <div>
            <p className="font-bold text-xs sm:text-sm text-[#C9A24D] uppercase tracking-wider mb-1">
              Email Us
            </p>
            <p className="text-sm sm:text-md text-[#2B2B2B]/80 group-hover:text-[#3E2723] transition-colors break-all">
              official@graphura.in
            </p>
          </div>
        </Link>
        <Link to="https://maps.app.goo.gl/E9kYa6hi8wj5eA8z6" target="_blank" className="bg-white p-4 sm:p-6 rounded-2xl border border-[#3E2723]/30 flex items-center gap-4 sm:gap-5 hover:border-[#C9A24D]/50 hover:shadow-md transition-all group shadow-md shadow-[#3E2723]/50">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#E6D5C3]/20 flex items-center justify-center text-[#3E2723] group-hover:bg-[#3E2723] group-hover:text-white transition-colors duration-300 shrink-0">
            <MdLocationPin className="text-xl sm:text-2xl" />
          </div>
          <div>
            <p className="font-bold text-xs sm:text-sm text-[#C9A24D] uppercase tracking-wider mb-1">
              Office
            </p>
            <p className="text-xs sm:text-md text-[#2B2B2B]/80 group-hover:text-[#3E2723] transition-colors">
              near RSF, Pataudi, Gurgaon, Haryana 122503
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Form;
