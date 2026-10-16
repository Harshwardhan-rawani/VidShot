import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowUpRight,
  Play,
  Video,
  Palette,
  Megaphone,
  Smartphone,
  Camera,
  PenTool,
  Sparkles,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedButton from "../../component/Button/AnimatedButton";

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
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
const services = [
  {
    id: "01",
    title: "Video Production",
    shortTitle: "Video",
    description:
      "From scroll-stopping reels to cinematic brand films, we turn ideas into visuals people actually want to watch.",
    items: [
      "Instagram Reels",
      "YouTube Videos",
      "Brand Films",
      "Product Videos",
      "Video Ads",
      "Podcast Production",
    ],
    icon: Video,
    color: "#5428B0",
    visual: "video",
  },
  {
    id: "02",
    title: "Creative & Design",
    shortTitle: "Design",
    description:
      "Visual identities, campaigns and creative systems designed to make your brand instantly recognizable.",
    items: [
      "Brand Identity",
      "Social Media Design",
      "Thumbnails",
      "Campaign Creatives",
      "Presentation Design",
      "Motion Graphics",
    ],
    icon: PenTool,
    color: "#F8CC10",
    visual: "design",
  },
  {
    id: "03",
    title: "Social Media",
    shortTitle: "Social",
    description:
      "We build content systems that keep your brand consistent, relevant and impossible to ignore.",
    items: [
      "Content Strategy",
      "Content Calendars",
      "Social Media Management",
      "Reels Strategy",
      "Community Content",
      "Performance Creative",
    ],
    icon: Smartphone,
    color: "#5428B0",
    visual: "social",
  },
  {
    id: "04",
    title: "Brand Strategy",
    shortTitle: "Strategy",
    description:
      "We help brands find their voice, define their positioning and communicate with purpose.",
    items: [
      "Brand Positioning",
      "Creative Direction",
      "Content Strategy",
      "Brand Messaging",
      "Audience Research",
      "Campaign Strategy",
    ],
    icon: Megaphone,
    color: "#F8CC10",
    visual: "strategy",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
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

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function ServiceVisual({ service, active }) {
  const Icon = service.icon;

  return (
    <div className="relative h-full min-h-[340px] overflow-hidden rounded-[2rem] bg-[#17122a]">
      {/* background glow */}
      <div
        className="absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl opacity-30"
        style={{
          backgroundColor:
            service.color === "#F8CC10" ? "#F8CC10" : "#5428B0",
        }}
      />

      <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#5428B0]/30 blur-3xl" />

      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      />

      {/* Orbit */}
      <motion.div
        animate={{
          rotate: active ? 360 : 0,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
      >
        <div className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-[#F8CC10] shadow-[0_0_25px_rgba(248,204,16,.8)]" />
      </motion.div>

      <motion.div
        animate={{
          rotate: active ? -360 : 0,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
      >
        <div className="absolute -left-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white/50" />
      </motion.div>

      {/* center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{
            scale: active ? [1, 1.05, 1] : 1,
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="flex h-32 w-32 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] backdrop-blur-xl"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#5428B0] shadow-[0_0_60px_rgba(84,40,176,.5)]">
            <Icon className="h-9 w-9 text-white" strokeWidth={1.5} />
          </div>
        </motion.div>
      </div>

      {/* floating label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute left-6 top-6 rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-xs font-medium text-white/70 backdrop-blur-xl"
      >
        {service.shortTitle}
      </motion.div>

      {/* number */}
      <div className="absolute bottom-6 right-6 text-7xl font-black tracking-tighter text-white/[0.06]">
        {service.id}
      </div>

      {/* bottom text */}
      <div className="absolute bottom-6 left-6 max-w-[200px]">
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">
          What we create
        </p>
        <p className="mt-2 text-sm font-medium text-white/80">
          Ideas that move people.
        </p>
      </div>
    </div>
  );
}

function ServiceRow({ service, index, active, setActive }) {
  const Icon = service.icon;

  const isActive = active === index;

  return (
    <motion.div variants={fadeUp}>
      <div
        onMouseEnter={() => setActive(index)}
        className={`group relative overflow-hidden border-t px-4 border-[#17122a]/10 transition-all duration-500 ${
          isActive ? "bg-[#f8f6fc]" : "bg-white"
        }`}
      >
        {/* top row */}
        <button
          onClick={() => setActive(isActive ? null : index)}
          className="flex w-full items-center gap-4 py-7 text-left sm:gap-6 sm:py-8"
        >
          {/* number */}
          <span
            className={`w-9 shrink-0 text-sm font-semibold transition-colors duration-300 ${
              isActive ? "text-[#5428B0]" : "text-[#71697e]"
            }`}
          >
            {service.id}
          </span>

          {/* icon */}
          <span
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
              isActive
                ? "border-[#5428B0] bg-[#5428B0] text-white"
                : "border-[#17122a]/10 bg-white text-[#5428B0]"
            }`}
          >
            <Icon size={19} strokeWidth={1.8} />
          </span>

          {/* title */}
          <span
            className={`flex-1 text-xl font-semibold tracking-tight transition-all duration-500 sm:text-3xl ${
              isActive
                ? "translate-x-1 text-[#5428B0]"
                : "text-[#17122a]"
            }`}
          >
            {service.title}
          </span>

          {/* arrow */}
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
              isActive
                ? "rotate-45 bg-[#F8CC10] text-[#5428B0]"
                : "bg-[#f8f6fc] text-[#17122a]"
            }`}
          >
            <ArrowUpRight size={18} />
          </span>
        </button>

        {/* expanded content */}
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden"
            >
              <div className="pb-8 pl-0 sm:pb-10 sm:pl-[104px]">
                <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
                  {/* description */}
                  <div>
                    <p className="max-w-2xl text-base leading-7 text-[#71697e] sm:text-lg">
                      {service.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.items.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-2 rounded-full border border-[#17122a]/10 bg-white px-3 py-2 text-xs font-medium text-[#17122a]"
                        >
                          <Check
                            size={13}
                            className="text-[#5428B0]"
                          />
                          {item}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="group/btn mt-7 inline-flex items-center gap-3 text-sm font-semibold text-[#5428B0]"
                    >
                      Discuss your project
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F8CC10] transition-transform duration-300 group-hover/btn:rotate-45">
                        <ArrowUpRight size={15} />
                      </span>
                    </Link>
                  </div>

                  {/* mini visual */}
                  <div className="hidden lg:block">
                    <div className="relative h-36 overflow-hidden rounded-2xl bg-[#17122a]">
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute left-10 top-8 h-20 w-20 rounded-full bg-[#5428B0] blur-2xl" />
                        <div className="absolute right-10 bottom-0 h-20 w-20 rounded-full bg-[#F8CC10] blur-2xl" />
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex items-center gap-3">
                          <Sparkles className="text-[#F8CC10]" size={18} />
                          <span className="text-sm font-medium text-white/80">
                            Built to stand out.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* hover line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: isActive ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[#5428B0]"
        />
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* purple glow */}
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#5428B0]/[0.05] blur-3xl" />

        {/* yellow glow */}
        <div className="absolute -right-40 top-[35%] h-[350px] w-[350px] rounded-full bg-[#F8CC10]/[0.06] blur-3xl" />

        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(#17122a 1px, transparent 1px),
              linear-gradient(90deg, #17122a 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =========================================================
            HEADER
        ========================================================= */}
     <motion.header
  className="mb-14 max-w-5xl lg:mb-20"
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {/* Label */}
  <motion.div
    variants={itemVariants}
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

    What We Do
  </motion.div>

  {/* Heading */}
  <motion.h1
    variants={itemVariants}
    className="
      max-w-4xl
      text-5xl
      font-black
      leading-[0.95]
      
      text-[#17122a]
      sm:text-5xl
      md:text-6xl
      lg:text-[4rem]
    "
  >
    Creative Work{" "}

    <span className="relative inline-block text-[#5428B0]">
      Built to Matter

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

  {/* Description */}
  <motion.p
    variants={itemVariants}
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
    We combine strategy, storytelling, design and technology to create
    content that doesn't just look good — it gives brands something worth
    remembering.
  </motion.p>

  {/* Tags */}
  <motion.div
    variants={itemVariants}
    className="mt-6 flex flex-wrap items-center gap-3"
  >
    <span className="rounded-full bg-[#f8f6fc] px-4 py-2 text-xs font-semibold text-[#5428B0]">
      Strategy
    </span>

    <span className="rounded-full bg-[#f8f6fc] px-4 py-2 text-xs font-semibold text-[#5428B0]">
      Creativity
    </span>

    <span className="rounded-full bg-[#f8f6fc] px-4 py-2 text-xs font-semibold text-[#5428B0]">
      Production
    </span>

    <span className="rounded-full bg-[#F8CC10] px-4 py-2 text-xs font-semibold text-[#5428B0]">
      Impact
    </span>
  </motion.div>
</motion.header>
     

        {/* =========================================================
            FEATURED SERVICE
        ========================================================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mt-16 grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-1"
        >
          {/* visual */}
          <motion.div
            variants={fadeUp}
            className="order-2 lg:order-1"
          >
            <ServiceVisual
              service={services[active]}
              active={active !== null}
            />
          </motion.div>

          {/* services */}
          <motion.div
            variants={stagger}
            className="order-1 lg:order-2"
          >
            {services.map((service, index) => (
              <ServiceRow
                key={service.id}
                service={service}
                index={index}
                active={active}
                setActive={setActive}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* =========================================================
            BOTTOM CAPABILITIES
        ========================================================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-20 border-t border-[#17122a]/10 pt-8"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#5428B0]">
                  <Camera size={15} className="text-white" />
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#F8CC10]">
                  <Palette
                    size={15}
                    className="text-[#5428B0]"
                  />
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#17122a]">
                  <Play size={14} className="fill-white text-white" />
                </div>
              </div>

              <p className="text-sm text-[#71697e]">
                One creative team. Multiple ways to make an impact.
              </p>
            </div>
            <AnimatedButton
              text="Start a Project"
              to="/contact"
            />
        
          
          </div>
        </motion.div>
      </div>
    </section>
  );
}