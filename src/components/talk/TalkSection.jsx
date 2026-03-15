import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const TalkSection = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  const [submitted, setSubmitted] = useState(false);

  const contactCta = {
    title: "Let’s Talk About Your Project",
    description:
      "Have an idea or project in mind? Send us a message and our team will get back to you shortly.",
    placeholder: "Enter your email",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Text animation
      gsap.from(contentRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Background parallax
      gsap.to(bgRef.current, {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden py-[7rem] text-white md:py-[8.5rem] xl:py-[10rem]"
    >
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/imgs/cta-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[81.25rem] px-5 xl:px-[4.375rem]">
        <div
          ref={contentRef}
          className="mx-auto max-w-[54rem] text-center"
        >
          <p className="mb-4 text-[0.78rem] uppercase tracking-[0.22em] text-white/60">
            Contact
          </p>

          <h2 className="text-[clamp(2.9rem,2rem+4vw,6rem)] leading-[0.94] tracking-[-0.08em]">
            {contactCta.title}
          </h2>

          <p className="mx-auto mt-5 max-w-[34rem] text-[1rem] leading-[1.7] tracking-[-0.03em] text-white/80 md:text-[1.08rem]">
            {contactCta.description}
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-9 flex max-w-[36rem] flex-col gap-3 rounded-[1.75rem] bg-white p-3 text-black shadow-lg sm:flex-row"
          >
            <label htmlFor="contact-email" className="sr-only">
              Email address
            </label>

            <input
              id="contact-email"
              type="email"
              required
              placeholder={contactCta.placeholder}
              className="h-14 flex-1 rounded-full   bg-transparent px-5 text-[1rem] outline-none placeholder:text-gray-400 focus:border-black/30"
            />

            <button
              type="submit"
              className="h-14 rounded-full bg-black px-7 text-[1rem] text-white transition-all duration-300 hover:bg-black/80"
            >
              Send
            </button>
          </form>

          <p
            className="mt-4 min-h-[1.5rem] text-[0.95rem] leading-[1.6] text-white/70"
            aria-live="polite"
          >
            {submitted
              ? "Thanks. Your message has been captured."
              : "We respect your inbox and only send useful updates."}
          </p>
        </div>
      </div>
    </section>
  );
};