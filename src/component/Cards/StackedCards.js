import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "Creative Production",
    description: "High-quality content designed for modern brands.",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=900",
  },
  {
    id: 2,
    title: "Social Media",
    description: "Content that helps brands grow across social platforms.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900",
  },
  {
    id: 3,
    title: "Video Production",
    description: "Professional videos built around your brand story.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900",
  },
  {
    id: 4,
    title: "Brand Strategy",
    description: "Creative strategies that turn attention into growth.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900",
  },
  {
    id: 5,
    title: "Content Marketing",
    description: "Performance-focused content for ambitious brands.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900",
  },
];

/* ---------------------------------------
   STACK POSITIONS
--------------------------------------- */

const positions = [
  {
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    zIndex: 50,
    opacity: 1,
  },
  {
    x: 18,
    y: 12,
    rotate: 3,
    scale: 0.96,
    zIndex: 40,
    opacity: 0.95,
  },
  {
    x: -15,
    y: 25,
    rotate: -4,
    scale: 0.92,
    zIndex: 30,
    opacity: 0.9,
  },
  {
    x: 22,
    y: 38,
    rotate: 5,
    scale: 0.88,
    zIndex: 20,
    opacity: 0.8,
  },
  {
    x: -20,
    y: 50,
    rotate: -6,
    scale: 0.84,
    zIndex: 10,
    opacity: 0.7,
  },
];

export default function StackedCards() {
  const [cardOrder, setCardOrder] = useState(cards);

  // Card currently under mouse
  const [hoveredCard, setHoveredCard] = useState(null);

  // Prevent autoplay while user interacts
  const [isPaused, setIsPaused] = useState(true);

  // ---------------------------------------
  // AUTO ROTATION
  // ---------------------------------------

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCardOrder((current) => {
        const firstCard = current[0];

        return [...current.slice(1), firstCard];
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // ---------------------------------------
  // CLICK CARD
  // ---------------------------------------

  const handleCardClick = (clickedCard) => {
    setCardOrder((current) => {
      const clickedIndex = current.findIndex(
        (card) => card.id === clickedCard.id
      );

      if (clickedIndex === 0) {
        return current;
      }

      /*
        Move clicked card to the front.

        Example:

        [1, 2, 3, 4, 5]

        Click 4

        [4, 5, 1, 2, 3]
      */

      return [
        ...current.slice(clickedIndex),
        ...current.slice(0, clickedIndex),
      ];
    });
  };

  return (
    <div
      className="
        relative
        z-0
        flex
        min-h-[500px]
        w-full
        items-center
        justify-center
        overflow-hidden
        px-4
        py-5
      "
    >
      {/* ---------------------------------------
          DECORATIVE BACKGROUND
      --------------------------------------- */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/[0.04]
          blur-3xl
        "
      />

      {/* ---------------------------------------
          CARD STACK
      --------------------------------------- */}

      <div
        className="
          relative
          h-[460px]
          w-[320px]
          sm:h-[500px]
          sm:w-[360px]
          md:h-[500px]
          md:w-[430px]
        "
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setHoveredCard(null);
        }}
      >
        {cardOrder.map((card, index) => {
          const position = positions[index];

          const isHovered = hoveredCard === card.id;
          const isFrontCard = index === 0;

          return (
            <motion.div
              key={card.id}
              className={`
                group
                absolute
                left-0
                top-0
                h-full
                w-full
                cursor-pointer
                overflow-hidden
                rounded-[28px]
                bg-white

           
              `}
              animate={{
                x: position.x,
                y: position.y,
                rotate: position.rotate,
                scale: isHovered
                  ? position.scale + 0.025
                  : position.scale,
                opacity: position.opacity,
              }}
              whileHover={{
                y: position.y - 8,
                rotate: 0,
                scale: position.scale + 0.035,
              }}
              whileTap={{
                scale: position.scale - 0.02,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 22,
                mass: 0.8,
              }}
              style={{
                zIndex: position.zIndex,
            
              }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onClick={() => handleCardClick(card)}
            >
              {/* ---------------------------------------
                  IMAGE
              --------------------------------------- */}

              <div
                className="
                  relative
                  h-[62%]
                  w-full
                  overflow-hidden
                "
              >
                <motion.img
                  src={card.image}
                  alt={card.title}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                  animate={{
                    scale: isHovered ? 1.08 : 1,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* Dark image overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/10
                    via-black/5
                    to-transparent
                  "
                />

                {/* ---------------------------------------
                    HOVER IMAGE SHINE
                --------------------------------------- */}

                <motion.div
                  className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    -left-[100%]
                    w-[50%]
                    skew-x-[-20deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                  "
                  animate={{
                    left: isHovered ? "150%" : "-100%",
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                />

                {/* ---------------------------------------
                    FRONT CARD INDICATOR
                --------------------------------------- */}

                {isFrontCard && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="
                      absolute
                      right-5
                      top-5
                      rounded-full
                      bg-white/90
                      px-3
                      py-1.5
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-neutral-800
                      shadow-lg
                      backdrop-blur
                    "
                  >
                    Featured
                  </motion.div>
                )}
              </div>

              {/* ---------------------------------------
                  CONTENT
              --------------------------------------- */}

              <div className="p-6 md:p-7">
                <p
                  className="
                    mb-2
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-neutral-400
                  "
                >
                  Vidshot
                </p>

                <motion.h3
                  className="
                    text-2xl
                    font-semibold
                    tracking-tight
                    text-neutral-900
                    md:text-3xl
                  "
                  animate={{
                    x: isHovered ? 4 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 20,
                  }}
                >
                  {card.title}
                </motion.h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-relaxed
                    text-neutral-500
                    md:text-base
                  "
                >
                  {card.description}
                </p>

                {/* ---------------------------------------
                    CLICK INDICATOR
                --------------------------------------- */}

                <motion.div
                  className="
                    mt-5
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-medium
                    text-neutral-400
                  "
                  animate={{
                    opacity: isHovered ? 1 : 0.55,
                    x: isHovered ? 4 : 0,
                  }}
                >
                  <span>Explore</span>

                  <motion.span
                    animate={{
                      x: isHovered ? 5 : 0,
                    }}
                    transition={{
                      repeat: isHovered ? Infinity : 0,
                      repeatType: "reverse",
                      duration: 0.5,
                    }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>

              {/* ---------------------------------------
                  HOVER BORDER GLOW
              --------------------------------------- */}

              <motion.div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[28px]
                  border-2
                  border-blue-500/0
                "
                animate={{
                  borderColor: isHovered
                    ? "rgba(59,130,246,0.45)"
                    : "rgba(59,130,246,0)",
                }}
                transition={{
                  duration: 0.25,
                }}
              />
            </motion.div>
          );
        })}
      </div>

    
    </div>
  );
}