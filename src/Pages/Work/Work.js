import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Plus } from "lucide-react";
import { Link } from "react-router-dom";

// ============================================================
// SVG ICONS
// Put your SVG files inside:
// src/icons/
// ============================================================

import InstagramIcon from "../../icons/instagram.svg";
import YoutubeIcon from "../../icons/youtube.svg";
import FacebookIcon from "../../icons/facebook.svg";
import PersonalBrandIcon from "../../icons/personal-branding.svg";
import AiAdsIcon from "../../icons/ai-ads.svg";
import MetaAdsIcon from "../../icons/meta-ads.svg";
import VideoEditingIcon from "../../icons/video-editing.svg";
import GraphicDesignIcon from "../../icons/graphic-design.svg";
import AnimatedButton1 from "../../component/Button/AnimatedButton1";






// ============================================================
// SERVICE DATA
// ============================================================

const services = [
  {
    id: "01",
    title: "Social Media Content",
    shortTitle: "Social Content",
    description:
      "Content built for Instagram, YouTube and Facebook — from reels and shorts to carousels, stories and campaign creatives.",
    icon: InstagramIcon,
    color: "#5428B0",
    accent: "#F8CC10",
    size: "featured",
    tags: [
      "Instagram",
      "YouTube",
      "Facebook",
      "Reels",
      "Shorts",
      "Carousels",
    ],
    platforms: [
      {
        name: "Instagram",
        icon: InstagramIcon,
      },
      {
        name: "YouTube",
        icon: YoutubeIcon,
      },
      {
        name: "Facebook",
        icon: FacebookIcon,
      },
    ],
  },

  {
    id: "02",
    title: "Personal Branding",
    shortTitle: "Personal Brand",
    description:
      "Build a recognizable personal brand with consistent content, visual identity and storytelling that feels authentically you.",
    icon: PersonalBrandIcon,
    color: "#17122a",
    accent: "#F8CC10",
    size: "normal",
    tags: [
      "Content Strategy",
      "Personal Identity",
      "Reels",
      "Storytelling",
    ],
  },

  {
    id: "03",
    title: "AI Ads",
    shortTitle: "AI Ads",
    description:
      "AI-powered ad creatives combining speed, experimentation and visual storytelling to create attention-grabbing campaigns.",
    icon: AiAdsIcon,
    color: "#5428B0",
    accent: "#F8CC10",
    size: "normal",
    tags: [
      "AI Creative",
      "Ad Concepts",
      "AI Video",
      "Creative Testing",
    ],
  },

  {
    id: "04",
    title: "Meta Ads",
    shortTitle: "Meta Ads",
    description:
      "Scroll-stopping creative for Facebook and Instagram campaigns designed around your audience, offer and conversion goals.",
    icon: MetaAdsIcon,
    color: "#F8CC10",
    accent: "#5428B0",
    size: "normal",
    tags: [
      "Facebook Ads",
      "Instagram Ads",
      "Creative Strategy",
      "Ad Creative",
    ],
  },

  {
    id: "05",
    title: "Video Editing",
    shortTitle: "Video Editing",
    description:
      "Fast, engaging and platform-native editing for reels, shorts, YouTube videos, podcasts, ads and branded content.",
    icon: VideoEditingIcon,
    color: "#17122a",
    accent: "#F8CC10",
    size: "wide",
    tags: [
      "Reels",
      "YouTube",
      "Shorts",
      "Podcasts",
      "Motion",
      "Ads",
    ],
  },

  {
    id: "06",
    title: "Graphic Designing",
    shortTitle: "Graphic Design",
    description:
      "Social posts, carousels, thumbnails, campaign creatives and visual systems that make your brand instantly recognizable.",
    icon: GraphicDesignIcon,
    color: "#5428B0",
    accent: "#F8CC10",
    size: "wide",
    tags: [
      "Social Design",
      "Thumbnails",
      "Carousels",
      "Campaign Design",
      "Brand Visuals",
    ],
  },
];

// ============================================================
// ANIMATIONS
// ============================================================

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};


const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const tagsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// ============================================================
// FLOATING PLATFORM ICON
// ============================================================

function PlatformIcon({ icon, name, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.7,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
      }}
      transition={{
        opacity: {
          duration: 0.5,
          delay,
        },
        scale: {
          duration: 0.5,
          delay,
        },
        y: {
          duration: 3 + delay,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className={`absolute ${className}`}
    >
      <div
        className="
          group/platform
          relative
          flex h-14 w-14
          items-center justify-center
          rounded-2xl
          border border-white/15
          bg-white/[0.08]
          backdrop-blur-xl
          shadow-[0_15px_40px_rgba(0,0,0,.15)]
          transition-all duration-500
          hover:scale-110
          hover:border-white/30
        "
      >
        <img
          src={icon}
          alt={name}
          className="
            h-6 w-6
            object-contain
            opacity-80
            transition-all duration-500
            group-hover/platform:opacity-100
            group-hover/platform:scale-110
          "
        />

        <span
          className="
            pointer-events-none
            absolute -bottom-7
            whitespace-nowrap
            rounded-full
            bg-[#17122a]
            px-2 py-1
            text-[9px]
            font-medium
            text-white/70
            opacity-0
            transition-opacity duration-300
            group-hover/platform:opacity-100
          "
        >
          {name}
        </span>
      </div>
    </motion.div>
  );
}

// ============================================================
// ICON ORBIT
// ============================================================

function IconOrbit({ icon }) {
  return (
    <div className="relative flex h-40 w-40 items-center justify-center">
      {/* Outer orbit */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute inset-0
          rounded-full
          border border-white/10
        "
      >
        <span className="absolute -right-1 top-1/2 h-2.5 w-2.5 rounded-full bg-[#F8CC10] shadow-[0_0_15px_rgba(248,204,16,.8)]" />
      </motion.div>

      {/* Inner orbit */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute inset-7
          rounded-full
          border border-white/10
        "
      >
        <span className="absolute -left-1 top-1/2 h-2 w-2 rounded-full bg-white/40" />
      </motion.div>

      {/* Center */}
      <motion.div
        animate={{
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative z-10
          flex h-20 w-20
          items-center justify-center
          rounded-full
          bg-[#F8CC10]
          shadow-[0_0_50px_rgba(248,204,16,.25)]
        "
      >
        <img
          src={icon}
          alt=""
          className="h-9 w-9 object-contain"
        />
      </motion.div>
    </div>
  );
}

// ============================================================
// FEATURED SOCIAL CARD
// ============================================================

function FeaturedSocialCard({ service, onOpen }) {
  return (
    <motion.article
      variants={fadeUp}
      onClick={() => onOpen(service)}
      className="
        group
        relative
        min-h-[500px]
        cursor-pointer
        overflow-hidden
        rounded-[2rem]
        bg-[#17122a]
        p-6
        sm:p-8
        lg:col-span-2
        lg:row-span-2
      "
    >
      {/* ======================================================
          BACKGROUND GRAPHICS
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute -right-32 -top-32
          h-[380px] w-[380px]
          rounded-full
          bg-[#5428B0]/30
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute -bottom-40 -left-20
          h-[350px] w-[350px]
          rounded-full
          bg-[#F8CC10]/10
          blur-3xl
        "
      />

      {/* Grid */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.07]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      />

      {/* ======================================================
          TOP
      ====================================================== */}

      <div className="relative z-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#F8CC10] shadow-[0_0_15px_rgba(248,204,16,.8)]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
            {service.id} / Featured
          </span>
        </div>

        <motion.div
          whileHover={{
            rotate: 45,
          }}
          className="
            flex h-10 w-10
            items-center justify-center
            rounded-full
            border border-white/15
            bg-white/[0.07]
            text-white
            backdrop-blur-xl
          "
        >
          <ArrowUpRight size={17} />
        </motion.div>
      </div>

      {/* ======================================================
          CENTER GRAPHIC
      ====================================================== */}

      <div className="absolute inset-0 flex items-center justify-center">
        <IconOrbit icon={service.icon} />

        {/* Platform icons */}

        <PlatformIcon
          icon={service.platforms[0].icon}
          name="Instagram"
          delay={0.1}
          className="left-[14%] top-[30%]"
        />

        <PlatformIcon
          icon={service.platforms[1].icon}
          name="YouTube"
          delay={0.25}
          className="right-[15%] top-[25%]"
        />

        <PlatformIcon
          icon={service.platforms[2].icon}
          name="Facebook"
          delay={0.4}
          className="bottom-[26%] right-[20%]"
        />

        {/* Decorative dots */}
        <motion.span
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            absolute
            left-[25%]
            bottom-[28%]
            h-2 w-2
            rounded-full
            bg-[#F8CC10]
          "
        />

        <span className="absolute right-[28%] bottom-[18%] h-1.5 w-1.5 rounded-full bg-white/30" />
      </div>

      {/* ======================================================
          CONTENT
      ====================================================== */}

      <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-8">
        <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 backdrop-blur-xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
            Instagram · YouTube · Facebook
          </span>
        </div>

        <h3 className="max-w-xl text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
          Social Media
          <span className="text-[#F8CC10]"> Content</span>
        </h3>

        <p className="mt-3 max-w-xl text-sm leading-6 text-white/55 sm:text-base">
          {service.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {service.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border border-white/10
                bg-white/[0.06]
                px-3 py-1.5
                text-[10px]
                font-medium
                text-white/60
                backdrop-blur-md
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Shine */}
      <div
        className="
          pointer-events-none
          absolute inset-y-0
          -left-[100%]
          z-30
          w-[40%]
          skew-x-[-20deg]
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
          transition-all duration-[1100ms]
          group-hover:left-[140%]
        "
      />

      {/* Border */}
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/10 transition-colors duration-500 group-hover:border-white/20" />
    </motion.article>
  );
}

// ============================================================
// STANDARD SERVICE CARD
// ============================================================

function ServiceCard({ service, index, onOpen }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      variants={fadeUp}
      layout
      onClick={() => onOpen(service)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        group
        relative
        min-h-[280px]
        cursor-pointer
        overflow-hidden
        rounded-[2rem]
        p-6
        sm:p-7
        ${
          service.size === "wide"
            ? "lg:col-span-2"
            : ""
        }
        ${
          service.color === "#17122a"
            ? "bg-[#17122a]"
            : "bg-white"
        }
        border
        ${
          service.color === "#17122a"
            ? "border-white/10"
            : "border-[#17122a]/[0.07]"
        }
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-[0_25px_60px_rgba(23,18,42,.10)]
      `}
    >
      {/* Background decorative circle */}
      <motion.div
        animate={{
          scale: hovered ? 1.2 : 1,
          rotate: hovered ? 25 : 0,
        }}
        transition={{
          duration: 0.7,
        }}
        className={`
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-48
          w-48
          rounded-full
          ${
            service.color === "#17122a"
              ? "border border-white/10"
              : "border border-[#5428B0]/10"
          }
        `}
      />

      <motion.div
        animate={{
          scale: hovered ? 1.15 : 1,
        }}
        transition={{
          duration: 0.7,
        }}
        className={`
          pointer-events-none
          absolute
          -right-8
          -top-8
          h-28
          w-28
          rounded-full
          ${
            service.color === "#17122a"
              ? "bg-[#5428B0]/20"
              : "bg-[#5428B0]/[0.04]"
          }
          blur-2xl
        `}
      />

      {/* Top */}
      <div className="relative z-10 flex items-start justify-between">
        <div
          className={`
            flex h-12 w-12
            items-center justify-center
            rounded-2xl
            ${
              service.color === "#17122a"
                ? "bg-white/10"
                : "bg-[#f8f6fc]"
            }
            transition-all duration-500
            group-hover:rotate-6
            group-hover:scale-110
          `}
        >
          <img
            src={service.icon}
            alt={service.title}
            className="h-6 w-6 object-contain"
          />
        </div>

        <div
          className={`
            flex h-9 w-9
            items-center justify-center
            rounded-full
            transition-all duration-500
            ${
              service.color === "#17122a"
                ? "border border-white/10 text-white/50"
                : "border border-[#17122a]/10 text-[#17122a]/50"
            }
            group-hover:rotate-45
            group-hover:bg-[#F8CC10]
            group-hover:text-[#5428B0]
          `}
        >
          <ArrowUpRight size={15} />
        </div>
      </div>

      {/* Number */}
      <span
        className={`
          absolute
          right-5
          top-20
          text-6xl
          font-black
          tracking-[-0.08em]
          ${
            service.color === "#17122a"
              ? "text-white/[0.05]"
              : "text-[#17122a]/[0.04]"
          }
        `}
      >
        {service.id}
      </span>

      {/* Main */}
      <div className="relative z-10 mt-12">
        <p
          className={`
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.2em]
            ${
              service.color === "#17122a"
                ? "text-white/35"
                : "text-[#71697e]"
            }
          `}
        >
          {service.shortTitle}
        </p>

        <h3
          className={`
            mt-2
            text-2xl
            font-bold
            tracking-[-0.04em]
            ${
              service.color === "#17122a"
                ? "text-white"
                : "text-[#17122a]"
            }
          `}
        >
          {service.title}
        </h3>

        {/* <p
          className={`
            mt-3
            max-w-md
            text-sm
            leading-6
            ${
              service.color === "#17122a"
                ? "text-white/45"
                : "text-[#71697e]"
            }
          `}
        >
          {service.description}
        </p> */}
      </div>

      {/* Tags */}
      <div className="relative z-10 mt-5 flex flex-wrap gap-1.5">
        {service.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className={`
              rounded-full
              px-2.5
              py-1
              text-[9px]
              font-medium
              ${
                service.color === "#17122a"
                  ? "bg-white/[0.07] text-white/45"
                  : "bg-[#f8f6fc] text-[#71697e]"
              }
            `}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: hovered ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          absolute
          bottom-0
          left-0
          h-[3px]
          w-full
          origin-left
          bg-[#F8CC10]
        "
      />

      {/* Shine */}
      <div
        className={`
          pointer-events-none
          absolute
          inset-y-0
          -left-[100%]
          z-20
          w-[35%]
          skew-x-[-20deg]
          ${
            service.color === "#17122a"
              ? "bg-gradient-to-r from-transparent via-white/10 to-transparent"
              : "bg-gradient-to-r from-transparent via-[#5428B0]/[0.04] to-transparent"
          }
          transition-all
          duration-[900ms]
          group-hover:left-[140%]
        `}
      />
    </motion.article>
  );
}

// ============================================================
// SERVICE MODAL
// ============================================================

function ServiceModal({ service, onClose }) {
  if (!service) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="
          fixed inset-0
          z-[100]
          flex items-center
          justify-center
          bg-[#17122a]/70
          p-4
          backdrop-blur-xl
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.94,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.94,
            y: 30,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          onClick={(e) => e.stopPropagation()}
          className="
            relative
            max-h-[90vh]
            w-full
            max-w-2xl
            overflow-y-auto
            rounded-[2rem]
            bg-white
            p-7
            shadow-2xl
            sm:p-10
          "
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="
              absolute
              right-5
              top-5
              flex h-10 w-10
              items-center
              justify-center
              rounded-full
              bg-[#f8f6fc]
              text-[#17122a]
              transition-all
              duration-300
              hover:rotate-45
            "
          >
            <Plus size={18} />
          </button>

          {/* Icon */}
          <div
            className="
              flex h-16 w-16
              items-center justify-center
              rounded-2xl
              bg-[#5428B0]
              shadow-[0_15px_35px_rgba(84,40,176,.2)]
            "
          >
            <img
              src={service.icon}
              alt=""
              className="h-8 w-8 object-contain"
            />
          </div>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#5428B0]">
            {service.id} / {service.shortTitle}
          </p>

          <h3 className="mt-3 text-4xl font-bold tracking-[-0.05em] text-[#17122a] sm:text-5xl">
            {service.title}
          </h3>

          <p className="mt-5 text-base leading-7 text-[#71697e]">
            {service.description}
          </p>

          {/* Deliverables */}
          <div className="mt-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#17122a]">
              What we can create
            </p>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {service.tags.map((tag) => (
                <div
                  key={tag}
                  className="
                    flex items-center
                    gap-3
                    rounded-xl
                    bg-[#f8f6fc]
                    px-4 py-3
                  "
                >
                  <span
                    className="
                      flex h-6 w-6
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F8CC10]
                      text-[#5428B0]
                    "
                  >
                    <Check size={13} />
                  </span>

                  <span className="text-sm font-medium text-[#17122a]">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            onClick={onClose}
            className="
              group
              mt-9
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#5428B0]
              px-5 py-3
              text-sm
              font-semibold
              text-white
              shadow-[0_12px_30px_rgba(84,40,176,.2)]
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            Start a project

            <span
              className="
                flex h-7 w-7
                items-center
                justify-center
                rounded-full
                bg-[#F8CC10]
                text-[#5428B0]
                transition-transform
                duration-300
                group-hover:rotate-45
              "
            >
              <ArrowUpRight size={15} />
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function ServicesShowcase() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        sm:py-28
        lg:py-36
      "
    >
      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Purple glow */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-48
            top-20
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#5428B0]/[0.055]
            blur-3xl
          "
        />

        {/* Yellow glow */}
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-48
            top-[45%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#F8CC10]/[0.07]
            blur-3xl
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
          "
          style={{
            backgroundImage: `
              linear-gradient(#17122a 1px, transparent 1px),
              linear-gradient(90deg, #17122a 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Decorative rings */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            -right-20
            top-16
            hidden
            h-64
            w-64
            rounded-full
            border
            border-[#5428B0]/10
            lg:block
          "
        >
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#F8CC10]" />
        </motion.div>
      </div>

      {/* ======================================================
          CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* ====================================================
            HEADER
        ==================================================== */}
       <motion.header
  className="mb-14 max-w-5xl lg:mb-20"
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {/* =========================================
      LABEL
  ========================================= */}

  <motion.div
    variants={fadeUpVariants}
    className="
      mb-6
      inline-flex
      items-center
      gap-2.5
      rounded-full
      border
      border-[#5428B0]/15
      bg-[#5428B0]/[0.04]
      px-4
      py-2
      text-[10px]
      font-bold
      uppercase
      tracking-[0.22em]
      text-[#5428B0]
    "
  >
    <span className="relative flex h-2 w-2">
      <span
        className="
          absolute
          inline-flex
          h-full
          w-full
          animate-ping
          rounded-full
          bg-[#F8CC10]
          opacity-70
        "
      />

      <span className="relative h-2 w-2 rounded-full bg-[#F8CC10]" />
    </span>

    What We Create
  </motion.div>

  {/* =========================================
      HEADING
  ========================================= */}

  <motion.h1
    variants={fadeUpVariants}
    className="
      max-w-4xl
      text-5xl
      font-black
      leading-[0.95]
      tracking-[-0.065em]
      text-[#17122a]

      sm:text-6xl
      md:text-7xl
      lg:text-[4.7rem]
    "
  >
    Your Brand{" "}

    <span className="relative ml-2 inline-block text-[#5428B0]">
      Everywhere It Matters

      {/* Yellow underline */}

      <span
        className="
          absolute
          -bottom-2
          left-0
          h-2
          w-[75%]
          rounded-full
          bg-[#F8CC10]

          sm:-bottom-3
          sm:h-3
        "
      />
    </span>
  </motion.h1>

  {/* =========================================
      DESCRIPTION
  ========================================= */}

  <motion.p
    variants={fadeUpVariants}
    className="
      mt-7
      max-w-2xl
      text-base
      leading-7
      text-[#71697e]

      sm:text-lg
      sm:leading-8
    "
  >
    From social content and personal branding to AI-powered advertising and
    high-impact design, we create everything your brand needs to show up,
    stand out and stay memorable.
  </motion.p>

  {/* =========================================
      SERVICE TAGS
  ========================================= */}

  <motion.div
    variants={tagsContainerVariants}
    className="mt-6 flex flex-wrap gap-2"
  >
    {[
      "Strategy",
      "Content",
      "Video",
      "Design",
      "Advertising",
    ].map((item) => (
      <motion.span
        key={item}
        variants={fadeUpVariants}
        className="
          rounded-full
          bg-[#f8f6fc]
          px-3.5
          py-2
          text-[10px]
          font-semibold
          text-[#5428B0]

          transition-all
          duration-300

          hover:bg-[#5428B0]
          hover:text-white
          hover:-translate-y-0.5
        "
      >
        {item}
      </motion.span>
    ))}
  </motion.div>
</motion.header>
     

        {/* ====================================================
            SERVICES GRID
        ==================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          variants={containerVariants}
          className="
            mt-16
            grid
            auto-rows-[280px]
            grid-cols-1
            gap-4
            sm:auto-rows-[300px]
            sm:grid-cols-2
            lg:auto-rows-[270px]
            lg:grid-cols-4
            lg:gap-5
          "
        >
          {/* FEATURED */}
          <FeaturedSocialCard
            service={services[0]}
            onOpen={setSelectedService}
          />

          {/* STANDARD CARDS */}
          {services.slice(1).map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onOpen={setSelectedService}
            />
          ))}
        </motion.div>

        {/* ====================================================
            PROCESS STRIP
        ==================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUp}
          className="
            mt-16
            overflow-hidden
            rounded-[2rem]
            border
            border-[#17122a]/[0.07]
            bg-[#f8f6fc]
          "
        >
          <div className="grid divide-y divide-[#17122a]/[0.07] md:grid-cols-4 md:divide-x md:divide-y-0">
            {[
              {
                number: "01",
                title: "Strategy",
                text: "Understand the brand.",
              },
              {
                number: "02",
                title: "Create",
                text: "Turn ideas into content.",
              },
              {
                number: "03",
                title: "Distribute",
                text: "Put it where people are.",
              },
              {
                number: "04",
                title: "Grow",
                text: "Learn, improve, repeat.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="
                  group
                  relative
                  p-6
                  transition-colors
                  duration-300
                  hover:bg-white
                  sm:p-7
                "
              >
                <div className="flex items-center justify-between">
                  <span
                    className="
                      text-xs
                      font-bold
                      text-[#5428B0]
                    "
                  >
                    {step.number}
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="
                      text-[#17122a]/20
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      group-hover:text-[#5428B0]
                    "
                  />
                </div>

                <h4
                  className="
                    mt-8
                    text-lg
                    font-bold
                    text-[#17122a]
                  "
                >
                  {step.title}
                </h4>

                <p
                  className="
                    mt-1
                    text-xs
                    text-[#71697e]
                  "
                >
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ====================================================
            MARQUEE
        ==================================================== */}

        <div className="mt-16 overflow-hidden">
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              flex
              w-max
              items-center
              gap-7
              whitespace-nowrap
            "
          >
            {[
              "SOCIAL",
              "VIDEO",
              "BRANDING",
              "AI ADS",
              "META ADS",
              "DESIGN",
              "CONTENT",
              "SOCIAL",
              "VIDEO",
              "BRANDING",
              "AI ADS",
              "META ADS",
              "DESIGN",
              "CONTENT",
            ].map((text, index) => (
              <React.Fragment key={index}>
                <span
                  className="
                    text-3xl
                    font-black
                    tracking-[-0.05em]
                    text-[#17122a]/[0.07]
                    sm:text-5xl
                  "
                >
                  {text}
                </span>

                <span className="h-2 w-2 rounded-full bg-[#F8CC10]" />
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* ====================================================
            CTA
        ==================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          variants={fadeUp}
          className="
            relative
            mt-14
            overflow-hidden
            rounded-[2rem]
            bg-[#5428B0]
            p-7
            sm:p-10
            lg:p-12
          "
        >
          {/* Decorative rings */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              -right-16
              -top-16
              h-64
              w-64
              rounded-full
              border
              border-white/10
            "
          />

          <div
            className="
              absolute
              -right-4
              top-4
              h-40
              w-40
              rounded-full
              border
              border-[#F8CC10]/20
            "
          />

          <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#F8CC10]" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  Have an idea?
                </span>
              </div>

              <h3
                className="
                  max-w-2xl
                  text-3xl
                  font-bold
                  tracking-[-0.045em]
                  text-white
                  sm:text-4xl
                "
              >
                Let's turn your next idea into something people remember.
              </h3>
            </div>
            <AnimatedButton1
              text="Start a project"
              link="/contact"
              
            />
          
      
          
          </div>
        </motion.div>
      </div>

      {/* ======================================================
          MODAL
      ====================================================== */}

      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}