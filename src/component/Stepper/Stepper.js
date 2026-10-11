import React, { useRef } from "react";
import "./Stepper.css"
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We align on your goals, audience, and story angle to build a sharp creative foundation.",
  },
  {
    number: "02",
    title: "Create",
    description:
      "Our team shapes the pipeline, visuals, and motion direction that bring the concept to life.",
  },
  {
    number: "03",
    title: "Produce",
    description:
      "We shoot with precision and keep every detail focused on performance and polish.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Final edits are optimized for every platform so your message hits harder everywhere.",
  },
];

/* =========================================================
   DESKTOP STEP
========================================================= */

function TimelineStep({ step, index }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 65%"],
  });

  const slideX = index % 2 === 0 ? -35 : 35;

  const progressWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 35,
        x: slideX,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative grid min-h-[245px] grid-cols-2"
    >
      {/* =====================================================
          CARD
      ===================================================== */}

      <div
        className={`
          relative flex items-center
          ${
            index % 2 === 0
              ? "justify-end pr-10"
              : "order-2 justify-start pl-10"
          }
        `}
      >
        {/* Connector */}

        <div
          className={`
            absolute
            top-1/2
            h-px
            w-10
            bg-gradient-to-r
            ${
              index % 2 === 0
                ? "right-0 from-transparent to-[#5428B0]/40"
                : "left-0 from-[#5428B0]/40 to-transparent"
            }
          `}
        />

        {/* Node */}

        <div
          className={`
            absolute
            top-1/2
            z-20
            h-3
            w-3
            -translate-y-1/2
            rounded-full
            border-2
            border-white
            bg-[#5428B0]
            shadow-[0_0_0_4px_rgba(84,40,176,0.10)]
            ${
              index % 2 === 0
                ? "right-[-6px]"
                : "left-[-6px]"
            }
          `}
        />

        {/* Card */}

        <div
          className="
            group
            relative
            w-full
            max-w-[390px]
            overflow-hidden
            rounded-2xl
            border
            border-[#5428B0]/10
            bg-white
            p-5
            shadow-[0_10px_35px_rgba(84,40,176,0.07)]
            transition-all
            duration-500
            hover:-translate-y-1
            hover:border-[#5428B0]/20
            hover:shadow-[0_18px_45px_rgba(84,40,176,0.12)]
          "
        >
          {/* Small yellow accent */}

          <div
            className="
              absolute
              left-0
              top-0
              h-full
              w-1
              bg-[#F8CC10]
              transition-all
              duration-500
              group-hover:w-1.5
            "
          />

          {/* Top */}

          <div className="relative flex items-center justify-between">
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                bg-[#F3EEFF]
                text-xs
                font-bold
                text-[#5428B0]
              "
            >
              {step.number}
            </div>

            <div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-neutral-200
                text-neutral-400
                transition-all
                duration-300
                group-hover:rotate-45
                group-hover:border-[#5428B0]/20
                group-hover:text-[#5428B0]
              "
            >
              <ArrowUpRight size={15} />
            </div>
          </div>

          {/* Content */}

          <div className="relative mt-5">
            <h3
              className="
                text-xl
                font-bold
                tracking-[-0.04em]
                text-[#17122A]
              "
            >
              {step.title}
            </h3>

            <p
              className="
                mt-2
                max-w-[340px]
                text-sm
                leading-6
                text-neutral-500
              "
            >
              {step.description}
            </p>
          </div>

          {/* Animated progress */}

          <motion.div
            className="
              absolute
              bottom-0
              left-0
              h-[2px]
              bg-[#F8CC10]
            "
            style={{
              width: progressWidth,
            }}
          />
        </div>
      </div>

      {/* Empty alternating side */}

      <div
        className={`
          ${index % 2 === 0 ? "" : "order-1"}
        `}
      />
    </motion.div>
  );
}

/* =========================================================
   MOBILE STEP
========================================================= */

function MobileStep({ step, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.04,
      }}
      className="relative pl-9"
    >
      {/* Timeline dot */}

      <div
        className="
          absolute
          left-0
          top-5
          z-10
          h-3
          w-3
          rounded-full
          border-2
          border-white
          bg-[#5428B0]
          shadow-[0_0_0_4px_rgba(84,40,176,0.10)]
        "
      />

      {/* Card */}

      <div
        className="
          group
          relative
          overflow-hidden
          rounded-2xl
          border
          border-[#5428B0]/10
          bg-white
          p-5
          shadow-[0_8px_30px_rgba(84,40,176,0.06)]
          transition-all
          duration-300
          hover:-translate-y-1
        "
      >
        {/* Yellow accent */}

        <div
          className="
            absolute
            bottom-0
            left-0
            top-0
            w-1
            bg-[#F8CC10]
          "
        />

        <div className="flex items-center justify-between">
          <div
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              bg-[#F3EEFF]
              text-xs
              font-bold
              text-[#5428B0]
            "
          >
            {step.number}
          </div>

          <ArrowUpRight
            size={17}
            className="
              text-neutral-400
              transition-transform
              duration-300
              group-hover:rotate-45
              group-hover:text-[#5428B0]
            "
          />
        </div>

        <h3
          className="
            mt-5
            text-xl
            font-bold
            tracking-[-0.04em]
            text-[#17122A]
          "
        >
          {step.title}
        </h3>

        <p
          className="
            mt-2
            text-sm
            leading-6
            text-neutral-500
          "
        >
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN STEPPER
========================================================= */

export default function Stepper() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 25%", "end 75%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section
      ref={containerRef}
      className="
        relative
        overflow-hidden
        bg-[#F8F6FC]
        px-5
        py-16
        sm:px-8
        sm:py-20
        lg:px-10
        lg:py-24
      "
    >
      {/* =====================================================
          SUBTLE BACKGROUND
      ===================================================== */}
{/* =========================================
    ANIMATED BACKGROUND TEXTURE
========================================= */}

<div className="pointer-events-none absolute inset-0 overflow-hidden">

  {/* Main purple glow */}

  <div
    className="
      absolute
      left-1/2
      top-20
      h-80
      w-80
      -translate-x-1/2
      rounded-full
      bg-[#5428B0]/[0.06]
      blur-3xl
      animate-[floatGlow_8s_ease-in-out_infinite]
    "
  />

  {/* Secondary purple glow */}

  <div
    className="
      absolute
      -left-32
      top-1/3
      h-64
      w-64
      rounded-full
      bg-[#5428B0]/[0.045]
      blur-3xl
      animate-[floatLeft_12s_ease-in-out_infinite]
    "
  />

  {/* Yellow glow */}

  <div
    className="
      absolute
      -right-32
      top-1/4
      h-56
      w-56
      rounded-full
      bg-[#F8CC10]/[0.06]
      blur-3xl
      animate-[floatRight_10s_ease-in-out_infinite]
    "
  />

  {/* =========================================
      RANDOM DOT TEXTURE
  ========================================= */}

  <div
    className="
      absolute
      left-[12%]
      top-[18%]
      h-2
      w-2
      rounded-full
      bg-[#5428B0]/20
      animate-[dotFloat_5s_ease-in-out_infinite]
    "
  />

  <div
    className="
      absolute
      right-[18%]
      top-[28%]
      h-1.5
      w-1.5
      rounded-full
      bg-[#F8CC10]/40
      animate-[dotFloat_7s_ease-in-out_infinite_reverse]
    "
  />

  <div
    className="
      absolute
      left-[25%]
      bottom-[20%]
      h-1.5
      w-1.5
      rounded-full
      bg-[#5428B0]/15
      animate-[dotFloat_6s_ease-in-out_infinite]
    "
  />

  <div
    className="
      absolute
      right-[30%]
      bottom-[15%]
      h-2
      w-2
      rounded-full
      bg-[#F8CC10]/25
      animate-[dotFloat_8s_ease-in-out_infinite_reverse]
    "
  />

  {/* =========================================
      FLOATING CIRCLE
  ========================================= */}

  <div
    className="
      absolute
      right-[12%]
      top-[15%]
      h-24
      w-24
      rounded-full
      border
      border-[#5428B0]/10
      animate-[slowRotate_18s_linear_infinite]
    "
  />

  {/* Inner circle */}

  <div
    className="
      absolute
      right-[15%]
      top-[18%]
      h-4
      w-4
      rounded-full
      bg-[#F8CC10]/30
      blur-[1px]
      animate-[orbitDot_6s_linear_infinite]
    "
  />

  {/* =========================================
      RANDOM SQUARE
  ========================================= */}

  <div
    className="
      absolute
      left-[8%]
      bottom-[18%]
      h-12
      w-12
      rotate-12
      rounded-xl
      border
      border-[#5428B0]/10
      animate-[slowFloat_9s_ease-in-out_infinite]
    "
  />

  {/* =========================================
      DIAGONAL CREATIVE LINE
  ========================================= */}

  <div
    className="
      absolute
      right-[-5%]
      top-[45%]
      h-px
      w-72
      rotate-[-25deg]
      bg-gradient-to-r
      from-transparent
      via-[#5428B0]/15
      to-transparent
      animate-[lineMove_7s_ease-in-out_infinite]
    "
  />

  {/* =========================================
      SECOND LINE
  ========================================= */}

  <div
    className="
      absolute
      left-[-5%]
      top-[65%]
      h-px
      w-64
      rotate-[25deg]
      bg-gradient-to-r
      from-transparent
      via-[#F8CC10]/20
      to-transparent
      animate-[lineMove_9s_ease-in-out_infinite_reverse]
    "
  />

  {/* =========================================
      SUBTLE GRID
  ========================================= */}

  <div
    className="
      absolute
      inset-0
      opacity-[0.025]
      [background-image:linear-gradient(#5428B0_1px,transparent_1px),linear-gradient(90deg,#5428B0_1px,transparent_1px)]
      [background-size:60px_60px]
      [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]
    "
  />

</div>

      {/* =====================================================
          HEADER
      ===================================================== */}
       <div className="relative mx-auto max-w-7xl">
     <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mb-12
            flex
            flex-col
            justify-between
            gap-6
            md:flex-row
            md:items-end
          "
        >

          <div>

            {/* Label */}

            <div className="mb-5 flex items-center gap-3">

              <span
                className="
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-[var(--secondary-dark)]
                "
              />

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[var(--primary-dark)]

                "
              >
                What we do
              </span>

            </div>

            {/* Heading */}

            <h2
              className="
                max-w-3xl
                text-4xl
                font-black
                leading-[0.95]
                tracking-[-0.065em]
                text-[#101418]
                sm:text-5xl
                lg:text-7xl
              "
            >
              From
              <br />

              <span className="text-[var(--primary-dark)]">
              idea To Impact
              </span>
            </h2>

          </div>

          {/* Description */}

          <p
            className="
              max-w-sm
              text-sm
              leading-6
              text-slate-500
              md:text-base
            "
          >
       A simple, strategic process that turns your vision into content people remember.
          </p>

        </motion.div>
 
</div>
      {/* =====================================================
          DESKTOP TIMELINE
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          hidden
          max-w-5xl
          md:block
        "
      >
        {/* Static line */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-1/2
            top-0
            w-px
            -translate-x-1/2
            bg-neutral-200
          "
        />

        {/* Animated line */}

        <motion.div
          style={{
            height: lineHeight,
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            w-[2px]
            -translate-x-1/2
            bg-gradient-to-b
            from-[#5428B0]
            to-[#F8CC10]
          "
        />

        {/* Top node */}

        <div
          className="
            absolute
            left-1/2
            top-[-6px]
            z-20
            h-3
            w-3
            -translate-x-1/2
            rounded-full
            bg-[#F8CC10]
            ring-4
            ring-[#F8F6FC]
          "
        />

        {steps.map((step, index) => (
          <TimelineStep
            key={step.number}
            step={step}
            index={index}
          />
        ))}

        {/* Bottom node */}

        <div
          className="
            absolute
            bottom-[-6px]
            left-1/2
            z-20
            h-3
            w-3
            -translate-x-1/2
            rounded-full
            bg-[#5428B0]
            ring-4
            ring-[#F8F6FC]
          "
        />
      </div>

      {/* =====================================================
          MOBILE TIMELINE
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-xl
          md:hidden
        "
      >
        {/* Vertical line */}

        <div
          className="
            absolute
            bottom-2
            left-[5px]
            top-2
            w-px
            bg-neutral-200
          "
        />

        {/* Animated line */}

        <motion.div
          style={{
            height: lineHeight,
          }}
          className="
            absolute
            left-[4px]
            top-2
            w-[2px]
            bg-gradient-to-b
            from-[#5428B0]
            to-[#F8CC10]
          "
        />

        <div className="space-y-5">
          {steps.map((step, index) => (
            <MobileStep
              key={step.number}
              step={step}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}