import React from "react";

const Map = () => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark p-2 rounded-3xl shadow-xl border border-[#3E2723]/30">
      <div className="w-full h-90 rounded-2xl overflow-hidden relative">
        <iframe
          allowfullscreen=""
          className="transition-all duration-700 opacity-90 group-hover:opacity-100 border-0 w-full h-full"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7024.203256435271!2d76.778214!3d28.325526!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d41000fe8670d%3A0x7b0a08f0043a22af!2sGraphura%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1766130436319!5m2!1sen!2sin"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
