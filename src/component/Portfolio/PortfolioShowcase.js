import React, { useEffect, useMemo, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  Play,
  Sparkles,
  Instagram,
  Youtube,
  Megaphone,
  Smartphone,
  Clapperboard,
  Palette,
} from "lucide-react";

/* =========================================================
   PORTFOLIO DATA
========================================================= */

const works = [
  {
    id: 1,
    title: "Social Reels",
    category: "Reels",
    type: "reel",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=85",
    description: "High-retention short-form content.",
    rotate: -5,
  },
  {
    id: 2,
    title: "YouTube Stories",
    category: "YouTube",
    type: "youtube",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1000&q=85",
    description: "Long-form videos built to hold attention.",
    rotate: 4,
  },
  {
    id: 3,
    title: "Meta Campaign",
    category: "Meta Ads",
    type: "ads",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",
    description: "Performance-driven creative campaigns.",
    rotate: -3,
  },
  {
    id: 4,
    title: "Creator Content",
    category: "Social Media",
    type: "social",
    image:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1000&q=85",
    description: "Content systems for growing brands.",
    rotate: 6,
  },
  {
    id: 5,
    title: "Motion Campaign",
    category: "Motion Graphics",
    type: "motion",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=85",
    description: "Motion-led visuals with personality.",
    rotate: -6,
  },
  {
    id: 6,
    title: "Brand Film",
    category: "Production",
    type: "production",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=85",
    description: "Cinematic stories for modern brands.",
    rotate: 3,
  },
];

const categories = [
  {
    name: "Reels",
    icon: Instagram,
  },
  {
    name: "Shorts",
    icon: Smartphone,
  },
  {
    name: "YouTube",
    icon: Youtube,
  },
  {
    name: "Meta Ads",
    icon: Megaphone,
  },
  {
    name: "Social Media",
    icon: Sparkles,
  },
  {
    name: "Motion Graphics",
    icon: Palette,
  },
];

/* =========================================================
   FLOATING CARD
========================================================= */

function PortfolioCard({ work, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 60,
        rotate: work.rotate,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: work.rotate,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -14,
        rotate: 0,
        scale: 1.04,
        zIndex: 30,
        transition: {
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="
        group
        relative
        w-full
        cursor-pointer
        overflow-hidden
        rounded-[26px]
        border
        border-white/20
        bg-[#17122A]
        shadow-[0_25px_70px_rgba(32,15,70,0.20)]
      "
    >
      {/* IMAGE */}

      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.img
          src={work.image}
          alt={work.title}
          className="h-full w-full object-cover"
          animate={{
            scale: hovered ? 1.12 : 1,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* Purple overlay */}

        <motion.div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#17122A]
            via-[#351477]/20
            to-transparent
          "
          animate={{
            opacity: hovered ? 0.95 : 0.7,
          }}
        />

        {/* Yellow light sweep */}

        <motion.div
          initial={{
            x: "-120%",
          }}
          animate={{
            x: hovered ? "130%" : "-120%",
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            inset-y-0
            w-[35%]
            skew-x-[-20deg]
            bg-gradient-to-r
            from-transparent
            via-[#F8CC10]/30
            to-transparent
          "
        />

        {/* Top category */}

        <div className="absolute left-4 top-4">
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              bg-black/25
              px-3
              py-1.5
              text-[10px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-white
              backdrop-blur-md
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#F8CC10]" />
            {work.category}
          </span>
        </div>

        {/* Play button */}

        <motion.div
          animate={{
            scale: hovered ? 1 : 0.85,
            opacity: hovered ? 1 : 0.8,
          }}
          className="
            absolute
            right-4
            top-4
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-white
            text-[#5428B0]
            shadow-lg
          "
        >
          <Play size={15} fill="currentColor" />
        </motion.div>

        {/* Bottom content */}

        <div className="absolute inset-x-0 bottom-0 p-5">
          <motion.div
            animate={{
              y: hovered ? -4 : 0,
            }}
          >
            <h3 className="text-xl font-bold tracking-[-0.04em] text-white">
              {work.title}
            </h3>

            <p className="mt-1.5 text-xs leading-5 text-white/65">
              {work.description}
            </p>
          </motion.div>

          {/* Arrow */}

          <motion.div
            animate={{
              x: hovered ? 0 : 8,
              opacity: hovered ? 1 : 0,
            }}
            className="
              absolute
              bottom-5
              right-5
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-[#F8CC10]
              text-[#351477]
            "
          >
            <ArrowUpRight size={17} />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   CENTER CREATIVE HUB
========================================================= */

function CreativeHub() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % categories.length);
    }, 2600);

    return () => clearInterval(timer);
  }, []);

  const ActiveIcon = categories[active].icon;

  return (
    <div
      className="
        relative
        flex
        min-h-[390px]
        items-center
        justify-center
        overflow-hidden
        rounded-[34px]
        bg-[#5428B0]
        p-8
        shadow-[0_30px_90px_rgba(84,40,176,0.25)]
      "
    >
      {/* Background glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#F8CC10]/10
          blur-[80px]
        "
      />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.08]
          [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
          [background-size:32px_32px]
        "
      />

      {/* Rotating rings */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[330px]
          w-[330px]
          rounded-full
          border
          border-dashed
          border-white/15
        "
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[230px]
          w-[230px]
          rounded-full
          border
          border-white/10
        "
      />

      {/* Orbit dots */}

      <motion.span
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[330px]
          w-[330px]
          rounded-full
        "
      >
        <span
          className="
            absolute
            left-1/2
            top-0
            h-2
            w-2
            -translate-x-1/2
            rounded-full
            bg-[#F8CC10]
            shadow-[0_0_18px_rgba(248,204,16,0.8)]
          "
        />
      </motion.span>

      {/* Center */}

      <div className="relative z-10 text-center">
        <motion.div
          animate={{
            rotate: [0, 8, -8, 0],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            mx-auto
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-[24px]
            border
            border-white/20
            bg-white/10
            text-[#F8CC10]
            backdrop-blur-md
          "
        >
          <ActiveIcon size={34} strokeWidth={1.7} />
        </motion.div>

        <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
          We create
        </p>

        <div className="relative mt-2 h-12 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h3
              key={categories[active].name}
              initial={{
                y: 30,
                opacity: 0,
                filter: "blur(8px)",
              }}
              animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              exit={{
                y: -30,
                opacity: 0,
                filter: "blur(8px)",
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-3xl
                font-black
                tracking-[-0.06em]
                text-white
                sm:text-4xl
              "
            >
              {categories[active].name}
            </motion.h3>
          </AnimatePresence>
        </div>

        <p className="mx-auto mt-4 max-w-[230px] text-sm leading-6 text-white/60">
          From strategy to production, we build content that moves brands
          forward.
        </p>

        {/* Category indicators */}

        <div className="mt-7 flex justify-center gap-1.5">
          {categories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActive(index)}
              aria-label={`Show ${category.name}`}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300
                ${
                  index === active
                    ? "w-7 bg-[#F8CC10]"
                    : "w-1.5 bg-white/25"
                }
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   DESKTOP SIDE ITEM
========================================================= */

function SidePortfolioCard({ work, index }) {
  const y = index % 2 === 0 ? -15 : 18;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        y,
        rotate: work.rotate,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y,
        rotate: work.rotate,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <PortfolioCard work={work} index={index} />
    </motion.div>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function PortfolioShowcase() {
  const leftWorks = useMemo(() => [works[0], works[2], works[4]], []);
  const rightWorks = useMemo(() => [works[1], works[3], works[5]], []);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F8F6FC]
        px-5
        py-20
        sm:px-8
        sm:py-24
        lg:px-10
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(#5428B0_1px,transparent_1px),linear-gradient(90deg,#5428B0_1px,transparent_1px)]
            [background-size:50px_50px]
          "
        />

        {/* Purple glow */}

        <div
          className="
            absolute
            left-1/2
            top-[35%]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-[#5428B0]/10
            blur-[120px]
          "
        />

        {/* Yellow glow */}

        <div
          className="
            absolute
            right-[-100px]
            top-[20%]
            h-[280px]
            w-[280px]
            rounded-full
            bg-[#F8CC10]/10
            blur-[100px]
          "
        />

        {/* Decorative rings */}

        <div
          className="
            absolute
            left-[5%]
            top-[20%]
            h-32
            w-32
            rounded-full
            border
            border-[#5428B0]/10
          "
        />

        <div
          className="
            absolute
            bottom-[15%]
            right-[4%]
            h-48
            w-48
            rounded-full
            border
            border-[#5428B0]/10
          "
        />
      </div>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="relative z-10 mx-auto mb-16 max-w-3xl text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            mb-4
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-[#5428B0]/10
            bg-white
            px-4
            py-2
            text-[10px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-[#5428B0]
            shadow-sm
          "
        >
          <Sparkles size={12} />
          Selected Work
        </motion.div>

        <motion.h2
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.65,
            delay: 0.05,
          }}
          className="
            text-4xl
            font-black
            leading-[0.95]
            tracking-[-0.07em]
            text-[#17122A]
            sm:text-5xl
            lg:text-6xl
          "
        >
          We don't just make
          <br />
          <span className="text-[#5428B0]">content.</span>
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
          className="
            mx-auto
            mt-5
            max-w-xl
            text-sm
            leading-6
            text-neutral-500
            sm:text-base
          "
        >
          We build scroll-stopping creative across every platform,
          format, and stage of the customer journey.
        </motion.p>
      </div>

      {/* =====================================================
          DESKTOP COLLAGE
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          hidden
          max-w-7xl
          items-center
          gap-6
          lg:grid
          lg:grid-cols-[1fr_0.9fr_1fr]
        "
      >
        {/* LEFT */}

        <div className="space-y-8">
          {leftWorks.map((work, index) => (
            <SidePortfolioCard
              key={work.id}
              work={work}
              index={index}
            />
          ))}
        </div>

        {/* CENTER */}

        <div className="sticky top-20">
          <CreativeHub />
        </div>

        {/* RIGHT */}

        <div className="space-y-8">
          {rightWorks.map((work, index) => (
            <SidePortfolioCard
              key={work.id}
              work={work}
              index={index + 3}
            />
          ))}
        </div>
      </div>

      {/* =====================================================
          TABLET
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          hidden
          max-w-4xl
          grid-cols-2
          gap-6
          md:grid
          lg:hidden
        "
      >
        {works.map((work, index) => (
          <PortfolioCard
            key={work.id}
            work={work}
            index={index}
          />
        ))}

        <div className="col-span-2">
          <CreativeHub />
        </div>
      </div>

      {/* =====================================================
          MOBILE
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-md space-y-7 md:hidden">
        {/* Center hub first */}

        <CreativeHub />

        {/* Single column portfolio */}

        {works.map((work, index) => (
          <PortfolioCard
            key={work.id}
            work={{
              ...work,
              rotate: index % 2 === 0 ? -2 : 2,
            }}
            index={index}
          />
        ))}
      </div>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          relative
          z-10
          mx-auto
          mt-16
          flex
          max-w-3xl
          flex-col
          items-center
          justify-between
          gap-5
          rounded-[28px]
          border
          border-[#5428B0]/10
          bg-white
          p-6
          shadow-[0_15px_50px_rgba(84,40,176,0.07)]
          sm:flex-row
          sm:p-7
        "
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#5428B0]">
            Have a project?
          </p>

          <h3 className="mt-1 text-xl font-bold tracking-[-0.04em] text-[#17122A]">
            Let's create something worth watching.
          </h3>
        </div>

        <a
          href="/contact"
          className="
            group
            inline-flex
            shrink-0
            items-center
            gap-3
            rounded-full
            bg-[#5428B0]
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#351477]
            active:scale-95
          "
        >
          Start a project

          <span
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              bg-[#F8CC10]
              text-[#351477]
              transition-transform
              duration-300
              group-hover:rotate-45
            "
          >
            <ArrowUpRight size={15} />
          </span>
        </a>
      </motion.div>
    </section>
  );
}