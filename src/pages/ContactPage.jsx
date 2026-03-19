import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export const ContactPage = () => {
  return (
    <section className="bg-[#f5f5f5] min-h-screen px-6 py-32 relative">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mx-auto mb-20"
      >
        <h1 className="text-5xl md:text-7xl  font-extrabold text-gray-800">
          Connect with us
        </h1>
      </motion.div>

      {/* Cards */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Address Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-10 shadow-sm hover:shadow-xl transition-all text-center"
        >
          <h3 className="text-xl font-semibold mb-8 text-gray-800">Address</h3>

          <p className="text-gray-600 leading-relaxed">
            HOMART BUILDERS LLP 2ND FLOOR 15/2327/A31-KM MALL RING ROAD -TIRUR,
            MALAPPURAM, KERALA-676101
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white p-10 shadow-sm hover:shadow-xl transition-all text-center"
        >
          <h3 className="text-xl font-semibold mb-8 text-gray-800">Contact</h3>

          <div className="text-gray-600 space-y-3">
            {/* Emails */}
            <a
              href="mailto:homartbuilder@gmail.com"
              className="block hover:text-black"
            >
              homartbuilder@gmail.com
            </a>

            <a
              href="mailto:homartarchitects@gmail.com"
              className="block hover:text-black"
            >
              homartarchitects@gmail.com
            </a>

            <a
              href="mailto:hadddrawing@gmail.com"
              className="block hover:text-black"
            >
              hadddrawing@gmail.com
            </a>

            {/* Phones */}
            <a href="tel:+918075749002" className="block hover:text-black pt-3">
              +91 8075749002 — Er. Jihad
            </a>

            <a href="tel:+918075979003" className="block hover:text-black">
              +91 8075979003 — Er. Shafeeq
            </a>

            <a href="tel:+914944043248" className="block hover:text-black">
              +91 494-4043248 — Office
            </a>
          </div>
        </motion.div>

        {/* Social Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-10 shadow-sm hover:shadow-xl transition-all text-center"
        >
          <h3 className="text-xl font-medium mb-8 text-gray-800">Social</h3>

          <div className="flex justify-center gap-6 text-gray-600">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/homartgroup/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/photo/?fbid=1181233744020500&set=a.460152542795294"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              Facebook
            </a>

            <a href="#" className="hover:text-black">
              Linkedin
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918075749002?text=Hello%20Homart%20Architects"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
      >
        <FaWhatsapp size={28} />
      </a>
    </section>
  );
};
