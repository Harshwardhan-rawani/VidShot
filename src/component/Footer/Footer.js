
import React from "react";
import { Link } from "react-router-dom";
import AnimatedButton1 from "../Button/AnimatedButton1";

const footerLinks = {
  company: [
    { name: "About", path: "/about" },
    { name: "Our Work", path: "/work" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ],

  services: [
    { name: "Brand Films", path: "/services/brand-films" },
    { name: "Social Media", path: "/services/social-media" },
    { name: "Video Production", path: "/services/video-production" },
    { name: "Event Coverage", path: "/services/event-coverage" },
    { name: "AI Ads", path: "/services/ai-ads" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="
        relative isolate mt-20 overflow-hidden
        bg-[#5428B0] text-white
      "
    >
      {/* =========================================
          PREMIUM TEXTURED BACKGROUND
      ========================================= */}

      {/* Base gradient */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-gradient-to-br
          from-[#5428B0]
          via-[#4B209F]
          to-[#351477]
        "
      />

      {/* Purple ambient glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-40 -top-40 -z-10
          h-[500px] w-[500px]
          rounded-full
          bg-[#8B5CF6]/20
          blur-[110px]
          animate-[footerFloat_12s_ease-in-out_infinite]
        "
      />

      {/* Yellow ambient glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-40 -left-40 -z-10
          h-[450px] w-[450px]
          rounded-full
          bg-[#F8CC10]/10
          blur-[100px]
          animate-[footerFloat_16s_ease-in-out_infinite]
        "
      />

      {/* Fine grid texture */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-10
          opacity-[0.055]
          [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
          [background-size:46px_46px]
        "
      />

      {/* Grain texture */}
      {/* <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-10
          opacity-[0.12]
          mix-blend-soft-light
          [background-image:url('data:image/svg+xml,%3Csvg_viewBox=%220_0_180_180%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22n%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%22.85%22_numOctaves=%223%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23n)%22_opacity=%22.4%22/%3E%3C/svg%3E')]
        "
      /> */}

      {/* Decorative top border */}
      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 top-0 h-px
          bg-gradient-to-r
          from-transparent via-[#F8CC10]/60 to-transparent
        "
      />

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =========================================
            CALL TO ACTION
        ========================================= */}

        <section
          className="
            relative overflow-hidden
            border-b border-white/15
            py-16 sm:py-20 lg:py-24
          "
        >
          {/* CTA decorative glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -right-10 top-1/2
              h-64 w-64 -translate-y-1/2
              rounded-full bg-[#F8CC10]/10
              blur-[90px]
            "
          />

          {/* Subtle decorative rings */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -right-10 top-1/2
              hidden h-72 w-72 -translate-y-1/2
              rounded-full border border-white/[0.07]
              lg:block
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -right-2 top-1/2
              hidden h-52 w-52 -translate-y-1/2
              rounded-full border border-white/[0.07]
              lg:block
            "
          />

          <div
            className="
              relative flex flex-col gap-8
              lg:flex-row lg:items-end
              lg:justify-between
            "
          >
            {/* CTA Heading */}
            <div className="max-w-3xl">

              <div
                className="
                  mb-6 inline-flex items-center gap-3
                  rounded-full
                  border border-white/15
                  bg-white/[0.07]
                  px-4 py-2
                  text-[10px] font-semibold uppercase
                  tracking-[0.2em] text-white/80
                  backdrop-blur-md
                "
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="
                      absolute inline-flex h-full w-full
                      animate-ping rounded-full
                      bg-[#F8CC10] opacity-50
                    "
                  />

                  <span className="relative h-2 w-2 rounded-full bg-[#F8CC10]" />
                </span>

                Let's create something remarkable
              </div>

              <h2
                className="
                  max-w-3xl
                  text-4xl font-black
                  leading-[1.02] 
                  text-white
                  sm:text-4xl md:text-5xl
                  lg:text-6xl
                "
              >
                Your next story
                <span className="text-[#F8CC10]">
                  {" "}starts here.
                </span>
              </h2>

              <p
                className="
                  mt-6 max-w-xl
                  text-base leading-7
                  text-white/65
                  sm:text-lg sm:leading-8
                "
              >
                Have an idea, campaign, or story in mind?
                Let's turn it into something people remember.
              </p>
            </div>

            {/* CTA Button */}
            <div className="relative z-10 shrink-0">
              <AnimatedButton1
                text="Start a Project"
                to="/contact"
              />
            </div>
          </div>
        </section>

        {/* =========================================
            FOOTER CONTENT
        ========================================= */}

        <div
          className="
            grid gap-12
            py-14 sm:py-16
            md:grid-cols-2
            lg:grid-cols-[1.5fr_0.8fr_1fr_1.2fr]
            lg:gap-10 lg:py-20
          "
        >

          {/* =====================================
              BRAND
          ===================================== */}

          <div className="max-w-sm">

            {/* Logo */}
            <Link
              to="/"
              className="group inline-flex items-center gap-3"
            >
              <span
                className="
                  flex h-12 w-12 items-center justify-center
                  rounded-2xl
                  bg-[#F8CC10]
                  text-xl font-black text-[#5428B0]
                  shadow-[0_8px_30px_rgba(248,204,16,0.18)]
                  transition-all duration-300
                  group-hover:-translate-y-1
                  group-hover:rotate-3
                "
              >
                V
              </span>

              <span
                className="
                  text-2xl font-black
                  tracking-[-0.06em] text-white
                "
              >
                VID<span className="text-[#F8CC10]">SHOT</span>
              </span>
            </Link>

            <p
              className="
                mt-6 max-w-xs
                text-sm leading-7 text-white/60
              "
            >
              A creative production studio helping brands,
              founders, and creators turn ideas into cinematic
              stories that move people.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-3">

              <SocialLink href="#" label="Instagram">
                ◎
              </SocialLink>

              <SocialLink href="#" label="LinkedIn">
                in
              </SocialLink>

              <SocialLink href="#" label="YouTube">
                ▶
              </SocialLink>

              <SocialLink href="#" label="X">
                𝕏
              </SocialLink>

            </div>
          </div>

          {/* =====================================
              COMPANY LINKS
          ===================================== */}

          <FooterColumn
            title="Company"
            links={footerLinks.company}
          />

          {/* =====================================
              SERVICES LINKS
          ===================================== */}

          <FooterColumn
            title="Services"
            links={footerLinks.services}
          />

          {/* =====================================
              CONTACT
          ===================================== */}

          <div>

            <FooterHeading title="Get in touch" />

            <div className="mt-6 space-y-4">

              <a
                href="mailto:hello@vidshotmedia.com"
                className="
                  block break-words
                  text-lg font-semibold text-white
                  transition-colors duration-300
                  hover:text-[#F8CC10]
                "
              >
                hello@vidshotmedia.com
              </a>

              <a
                href="tel:+919999999999"
                className="
                  block text-sm text-white/60
                  transition-colors duration-300
                  hover:text-white
                "
              >
                +91 99999 99999
              </a>

              <p className="text-sm text-white/50">
                India · Working globally
              </p>
            </div>

            {/* Availability */}
            <div
              className="
                mt-7 inline-flex items-center gap-2.5
                rounded-full
                border border-white/10
                bg-white/[0.06]
                px-3.5 py-2.5
                text-xs text-white/75
                backdrop-blur-md
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute inline-flex h-full w-full
                    animate-ping rounded-full
                    bg-[#F8CC10] opacity-50
                  "
                />

                <span className="relative h-2 w-2 rounded-full bg-[#F8CC10]" />
              </span>

              Available for new projects
            </div>
          </div>
        </div>

        {/* =========================================
            BOTTOM BAR
        ========================================= */}

        <div
          className="
            flex flex-col gap-5
            border-t border-white/10
            py-6
            text-xs text-white/45
            sm:flex-row sm:items-center
            sm:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} VidShot. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">

            <Link
              to="/privacy"
              className="transition-colors duration-300 hover:text-[#F8CC10]"
            >
              Privacy
            </Link>

            <Link
              to="/terms"
              className="transition-colors duration-300 hover:text-[#F8CC10]"
            >
              Terms
            </Link>

            <Link
              to="/cookies"
              className="transition-colors duration-300 hover:text-[#F8CC10]"
            >
              Cookies
            </Link>

          </div>
        </div>

      </div>

      {/* =========================================
          BOTTOM ACCENT
      ========================================= */}

      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 bottom-0 h-1
          bg-gradient-to-r
          from-[#5428B0] via-[#F8CC10] to-[#5428B0]
        "
      />

      {/* =========================================
          ANIMATION STYLES
      ========================================= */}

      <style>{`
        @keyframes footerFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-20px, 20px, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[footerFloat_12s_ease-in-out_infinite\\],
          .animate-\\[footerFloat_16s_ease-in-out_infinite\\] {
            animation: none !important;
          }
        }
      `}</style>
    </footer>
  );
}

/* =========================================
   FOOTER COLUMN
========================================= */

function FooterColumn({ title, links }) {
  return (
    <div>
      <FooterHeading title={title} />

      <ul className="mt-6 space-y-4">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className="
                group inline-flex items-center gap-2.5
                text-sm text-white/60
                transition-colors duration-300
                hover:text-white
              "
            >
              <span
                className="
                  h-px w-0 shrink-0
                  bg-[#F8CC10]
                  transition-all duration-300
                  group-hover:w-3
                "
              />

              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* =========================================
   FOOTER HEADING
========================================= */

function FooterHeading({ title }) {
  return (
    <p
      className="
        text-[11px] font-bold uppercase
        tracking-[0.2em] text-[#F8CC10]
      "
    >
      {title}
    </p>
  );
}

/* =========================================
   SOCIAL LINK
========================================= */

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="
        flex h-10 w-10 items-center justify-center
        rounded-xl
        border border-white/10
        bg-white/[0.05]
        text-sm font-bold text-white/70
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#F8CC10]/50
        hover:bg-[#F8CC10]
        hover:text-[#5428B0]
        hover:shadow-[0_8px_25px_rgba(248,204,16,0.12)]
        active:scale-95
      "
    >
      {children}
    </a>
  );
}
