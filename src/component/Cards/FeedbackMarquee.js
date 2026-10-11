import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    rating: 4,
    feedback:
      "Throughout the process, they kept me informed and involved, ensuring I was happy with the direction. I came to them with a vague idea, and they helped me refine it into a concrete plan.",
    name: "Ema Watson",
    role: "Founder at Ritof",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200",
  },
  {
    id: 2,
    rating: 5,
    feedback:
      "The team understood our vision from day one and transformed our ideas into content that actually connected with our audience.",
    name: "Sarah Miller",
    role: "Marketing Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
  },
  {
    id: 3,
    rating: 5,
    feedback:
      "From concept to final delivery, everything was handled professionally. The creative quality and attention to detail were outstanding.",
    name: "Daniel Carter",
    role: "CEO at Nova",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
  },
  {
    id: 4,
    rating: 4,
    feedback:
      "They took our rough concept and turned it into a clear creative direction. Communication was smooth and the final result exceeded our expectations.",
    name: "Olivia Brown",
    role: "Brand Manager",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
  },
  {
    id: 5,
    rating: 5,
    feedback:
      "A genuinely creative team that understands what brands need today. The content felt authentic, engaging and completely aligned with our brand.",
    name: "James Wilson",
    role: "Founder at Elevate",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
  },
];

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-[5px]">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          viewBox="0 0 24 24"
          className={`h-[22px] w-[22px] ${
            star <= rating
              ? "fill-[#D9A441] text-[#D9A441]"
              : "fill-[#D9D9D9] text-[#D9D9D9]"
          }`}
        >
          <path d="M12 2.5l2.93 5.94 6.56.95-4.74 4.62 1.12 6.53L12 17.46l-5.87 3.08 1.12-6.53L2.51 9.39l6.56-.95L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <article
      className="
        group
        mx-3
        flex
        
        w-[650px]
        shrink-0
        flex-col
        rounded-[28px]
        bg-[#f6f6f8]
        px-10
        py-9
        md:w-[500px]
      "
    >
      {/* Rating */}
      <Stars rating={testimonial.rating} />

      {/* Feedback */}
      <p
        className="
          mt-auto
          max-w-[570px]
          text-[20px]
          leading-[1.65]
          tracking-[-0.3px]
          text-[#17171b]
          md:text-[17px]
        "
      >
        {testimonial.feedback}
      </p>

      {/* Divider */}
      <div
        className="
          mt-5
          border-t
          border-dashed
          border-[#cccccc]
        "
      />

      {/* User */}
      <div className="mt-5 flex items-center gap-5">

        {/* Avatar */}
        <div
          className="
            h-[60px]
            w-[60px]
            shrink-0
            overflow-hidden
            rounded-full
            border
            border-[#dedede]
            bg-white
            p-[3px]
          "
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="
              h-full
              w-full
              rounded-full
              object-cover
            "
          />
        </div>

        {/* User info */}
        <div>
          <h3
            className="
              text-[21px]
              font-semibold
              tracking-[-0.5px]
              text-[#18181c]
            "
          >
            {testimonial.name}
          </h3>

          <p
            className="
              mt-1
              text-[15px]
              font-medium
              text-[#77777d]
            "
          >
            {testimonial.role}
          </p>
        </div>

      </div>
    </article>
  );
}

export default function FeedbackMarquee() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        py-20
      "
    >
      {/* Section heading */}
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
                    Client FeedBack
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
                    What Our Clients
                    <br />
      
                    <span className="text-[var(--primary-dark)]">
                      Say About Us
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
              A team of directors, designers, strategists and creators who turn ambitious ideas 
              into memorable visual experiences.
                </p>
      
              </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">

        {/* Left fade */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            h-full
            w-24
            bg-gradient-to-r
            from-white
            to-transparent
            md:w-40
          "
        />

        {/* Right fade */}
        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-20
            h-full
            w-24
            bg-gradient-to-l
            from-white
            to-transparent
            md:w-40
          "
        />

        <Marquee
          direction="left"
          speed={38}
          pauseOnHover={true}
          gradient={false}
          loop={0}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </Marquee>

      </div>
    </section>
  );
}