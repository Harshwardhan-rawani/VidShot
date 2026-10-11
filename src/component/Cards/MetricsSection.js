import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

/* -----------------------------------------
   DATA
----------------------------------------- */

const metrics = [
  {
    label: "Creators",
    value: 80,
    suffix: "+",
    description: "Creators in our network",
    growth: "+24%",
    graphic: [20, 35, 28, 55, 48, 72, 65, 90],
  },
  {
    label: "Projects Delivered",
    value: 250,
    suffix: "+",
    description: "Successful projects",
    growth: "+38%",
    graphic: [25, 42, 30, 62, 50, 70, 64, 94],
  },
  {
    label: "Content Produced",
    value: 1.2,
    suffix: "K+",
    description: "Pieces of content",
    growth: "+42%",
    graphic: [15, 28, 45, 38, 65, 55, 78, 96],
  },
  {
    label: "Client Satisfaction",
    value: 98,
    suffix: "%",
    description: "Happy clients",
    growth: "+12%",
    graphic: [30, 45, 40, 60, 55, 78, 70, 95],
  },
];


/* -----------------------------------------
   COUNTER
----------------------------------------- */

function Counter({
  target,
  suffix = "",
  duration = 1800,
  start,
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      // Smooth ease-out
      const eased =
        1 - Math.pow(1 - progress, 4);

      const current = target * eased;

      setCount(current);

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      }
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [start, target, duration]);

  return (
    <>
      {target % 1 !== 0
        ? count.toFixed(1)
        : Math.floor(count)}
      {suffix}
    </>
  );
}


/* -----------------------------------------
   MINI GRAPHIC
----------------------------------------- */

function MiniGraph({ points, animate }) {
  const width = 300;
  const height = 90;

  const max = Math.max(...points);
  const min = Math.min(...points);

  const coordinates = points.map((point, index) => {
    const x =
      (index / (points.length - 1)) *
      width;

    const y =
      height -
      ((point - min) / (max - min)) *
        55 -
      15;

    return `${x},${y}`;
  });

  const path = `M ${coordinates.join(" L ")}`;

  const areaPath = `
    M ${coordinates[0]}
    L ${coordinates.join(" L ")}
    L ${width},${height}
    L 0,${height}
    Z
  `;

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[100px] overflow-hidden opacity-70">

      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        {/* Area */}
        <motion.path
          d={areaPath}
          fill="url(#metricGradient)"
          initial={{
            opacity: 0,
          }}
          animate={
            animate
              ? {
                  opacity: 1,
                }
              : {
                  opacity: 0,
                }
          }
          transition={{
            duration: 1,
            delay: 0.5,
          }}
        />

        {/* Line */}
        <motion.path
          d={path}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#f15b38]"
          initial={{
            pathLength: 0,
          }}
          animate={
            animate
              ? {
                  pathLength: 1,
                }
              : {
                  pathLength: 0,
                }
          }
          transition={{
            duration: 1.4,
            delay: 0.3,
            ease: "easeInOut",
          }}
        />

        <defs>
          <linearGradient
            id="metricGradient"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#f15b38"
              stopOpacity="0.15"
            />

            <stop
              offset="100%"
              stopColor="#f15b38"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}


/* -----------------------------------------
   METRIC CARD
----------------------------------------- */

function MetricCard({
  item,
  index,
  isInView,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 45,
        scale: 0.96,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
            }
          : {
              opacity: 0,
              y: 45,
              scale: 0.96,
            }
      }
      transition={{
        duration: 0.75,
        delay: index * 0.14,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -7,
        transition: {
          duration: 0.25,
        },
      }}
      className="
        group
        relative
        min-h-[250px]
        overflow-hidden
        rounded-[28px]
        border
        border-slate-200
        bg-white
        p-6
        shadow-[0_10px_35px_rgba(15,23,42,0.04)]
        transition-shadow
        duration-500
        hover:border-slate-300
        hover:shadow-[0_25px_60px_rgba(15,23,42,0.10)]
      "
    >

      {/* Decorative circle */}
      <motion.div
        className="
          pointer-events-none
          absolute
          -right-12
          -top-12
          h-32
          w-32
          rounded-full
          border
          border-[#f15b38]/10
        "
        animate={
          isInView
            ? {
                scale: [1, 1.15, 1],
              }
            : {}
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small dot */}
      <div
        className="
          absolute
          right-6
          top-6
          h-2
          w-2
          rounded-full
          bg-[#f15b38]
          shadow-[0_0_0_5px_rgba(241,91,56,0.08)]
        "
      />

      {/* Label */}

      <p
        className="
          relative
          z-10
          text-xs
          font-semibold
          uppercase
          tracking-[0.16em]
          text-slate-400
        "
      >
        {item.label}
      </p>

      {/* Number */}

      <div
        className="
          relative
          z-10
          mt-5
          text-5xl
          font-black
          tracking-[-0.07em]
          text-[#111827]
          md:text-6xl
        "
      >
        <Counter
          target={item.value}
          suffix={item.suffix}
          start={isInView}
        />
      </div>

      {/* Description */}

      <p
        className="
          relative
          z-10
          mt-2
          text-sm
          text-slate-500
        "
      >
        {item.description}
      </p>

      {/* Growth */}

      <motion.div
        initial={{
          opacity: 0,
          x: -10,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                x: 0,
              }
            : {}
        }
        transition={{
          delay: index * 0.14 + 0.5,
          duration: 0.5,
        }}
        className="
          relative
          z-10
          mt-5
          inline-flex
          items-center
          gap-1.5
          rounded-full
          bg-[#fff3ef]
          px-3
          py-1.5
          text-xs
          font-semibold
          text-[#f15b38]
        "
      >
        <span>↗</span>
        {item.growth}
      </motion.div>

      {/* Graph */}

      <MiniGraph
        points={item.graphic}
        animate={isInView}
      />

    </motion.div>
  );
}


/* -----------------------------------------
   MAIN SECTION
----------------------------------------- */

export default function MetricsSection() {
  const sectionRef = React.useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#f8fafc]
        px-5
        py-20
        md:px-10
        lg:px-16
      "
    >

      {/* ---------------------------------
          BACKGROUND GRAPHIC
      --------------------------------- */}

      <div className="pointer-events-none absolute inset-0">

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(#111827_1px,transparent_1px),linear-gradient(90deg,#111827_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />

        {/* Large circle */}

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#f15b38]/10
          "
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[350px]
            w-[350px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#f15b38]/10
          "
        />

      </div>


      {/* ---------------------------------
          CONTENT
      --------------------------------- */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.7,
          }}
          className="max-w-2xl"
        >

          <div className="mb-5 flex items-center gap-3">

            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#f15b38]
              "
            />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-slate-500
              "
            >
              By the numbers
            </span>

          </div>

          <h2
            className="
              text-4xl
              font-black
              leading-[0.95]
              tracking-[-0.055em]
              text-[#111827]
              md:text-6xl
            "
          >
            Numbers that
            <br />

            <span className="text-[#f15b38]">
              speak for us.
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-xl
              text-base
              leading-7
              text-slate-500
              md:text-lg
            "
          >
            We combine creative storytelling, strategic
            thinking and performance-driven content to
            help brands grow.
          </p>

        </motion.div>


        {/* ---------------------------------
            METRIC CARDS
        --------------------------------- */}

        <div
          className="
            mt-12
            grid
            gap-4
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >

          {metrics.map((item, index) => (
            <MetricCard
              key={item.label}
              item={item}
              index={index}
              isInView={isInView}
            />
          ))}

        </div>

      </div>

    </section>
  );
}