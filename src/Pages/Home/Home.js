
import StackedCards from '../../component/Cards/StackedCards';
import FeedbackMarquee from '../../component/Cards/FeedbackMarquee';
import TrustedPartners from '../../component/TrustedPartner/TrustedPartners';
import ServicesSection from '../../component/Cards/ServicesSection';
import OurClients from '../../component/ourclient/OurClients';
import Stepper from '../../component/Stepper/Stepper';
import TestimonialCarousel from '../../component/Cards/TestimonialCarousel';
import OurVision from '../../component/ourvision/OurVision';
import AnimatedButton from '../../component/Button/AnimatedButton';
import TrustedClients from '../../component/Button/TrustedClients';

import AnimatedButton1 from '../../component/Button/AnimatedButton1';


const metrics = [
  { value: '120+', label: 'brand stories launched' },
  { value: '4.9/5', label: 'average client rating' },
  { value: '8x', label: 'faster campaign turnaround' },
  { value: '28K', label: 'monthly views generated' },
];



export default function Home() {
  return (
    <div className="mx-auto max-w-9xl bg-white px-4 py-8 sm:px-6 lg:px-8 mt-20">
     
      <section className="relative min-h-[400px] overflow-hidden rounded-[40px]">
  {/* =========================================
      BACKGROUND VIDEO
  ========================================= */}

  <video
    autoPlay
    muted
    loop
    playsInline
    className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
    "
  >
    <source src="/vidshot.mp4" type="video/mp4" />
  </video>

  {/* =========================================
      VIDEO DARK / PURPLE OVERLAY
  ========================================= */}

  <div
    className="
      absolute
      inset-0
      bg-white/10
    "
  />

  {/* =========================================
      GRADIENT OVERLAY
  ========================================= */}

  <div
    className="
      absolute
      inset-0
      bg-gradient-to-br
      from-white/10
      via-[#351477]/10
      to-[#351477]/10
    "
  />
    

  {/* =========================================
      SUBTLE VIDEO VIGNETTE
  ========================================= */}

  <div
    className="
      absolute
      inset-0
      bg-[radial-gradient(circle_at_center,transparent_15%,rgba(20,10,45,0.55)_100%)]
    "
  />

  {/* =========================================
      GLASS CONTENT CONTAINER
  ========================================= */}

  <div
    className="
     bg-
      relative
      z-10
      grid
      min-h-[700px]
      items-center
      gap-10
      p-5
      sm:p-8
      lg:grid-cols-[1.1fr_0.9fr]
      lg:p-8
     
    "
  >
    {/* =========================================
        LEFT GLASS PANEL
    ========================================= */}

    <div
      className="
      
        relative
        overflow-hidden
        p-7
        sm:p-9
        lg:p-8
      "
    >
      {/* Glass highlight */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
        "
      />

      {/* =====================================
          BADGE
      ===================================== */}

      <div
        className="
          mb-6
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-white/20
          bg-white/10
          px-4
          py-2
          text-xs
          font-semibold
          uppercase
          tracking-[0.2em]
          text-white
          
        "
      >
        <span
          className="
            h-2.5
            w-2.5
            animate-pulse
            rounded-full
            bg-[#F8CC10]
            shadow-[0_0_15px_rgba(248,204,16,0.8)]
          "
        />

        Creative motion studio
      </div>

      {/* =====================================
          HEADING
      ===================================== */}

      <h1
        className="
          max-w-3xl
          text-4xl
          font-black
          leading-[0.95]
          tracking-[-0.07em]
          text-black
          sm:text-5xl
          lg:text-7xl
        "
      >
        We turn ideas into{" "}
        <span className="text-[#F8CC10]">
          cinematic stories
        </span>{" "}
        that move people.
      </h1>

      {/* =====================================
          DESCRIPTION
      ===================================== */}

      <p
        className="
          mt-6
          max-w-xl
          text-base
          leading-7
          text-white/75
          sm:text-lg
        "
      >
        VidShot helps ambitious brands, founders, and creators
        build standout video experiences that look premium, feel
        authentic, and perform across every channel.
      </p>

      {/* =====================================
          BUTTONS
      ===================================== */}
  <TrustedClients/>

      <div className="mt-8 flex flex-wrap items-center gap-4">

        {/* Primary */}
      

        <AnimatedButton
          text="Book a discovery call"
          to="/contact"
        />

        {/* Secondary */}

      <AnimatedButton1
          text="View our work"
          to="/work"
        />
      </div>

 
    </div>

    {/* =========================================
        RIGHT GLASS CARD AREA
    ========================================= */}

    <div
      className="
        relative
        flex
        items-center
        justify-center
        p-2
      "
    >
      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-10
          rounded-full
          bg-[#F8CC10]/10
          blur-3xl
        "
      />

      <div className="relative w-full max-w-[500px]">
        <StackedCards />
      </div>
    </div>
  </div>

  {/* =========================================
      BOTTOM GLASS BAR
  ========================================= */}


</section>
  
      <section className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((item) => (
          <div key={item.label} className="rounded-[26px] border border-slate-200 bg-white/70 p-6 shadow-sm">
            <div className="text-3xl font-black tracking-[-0.06em] text-[#111827]">{item.value}</div>
            <p className="mt-2 text-sm uppercase tracking-[0.12em] text-slate-500">{item.label}</p>
          </div>
        ))}
      </section>
     <TrustedPartners/>
   
     <ServicesSection/>
     <Stepper/>
     <OurClients/>
     <OurVision/>
     {/* <PortfolioShowcase/> */}
     <TestimonialCarousel/>
   

   <section className="relative mt-10 overflow-hidden rounded-[30px] border border-white/10 bg-[#4820A0] px-6 py-8 text-white shadow-[0_25px_80px_rgba(84,40,176,0.25)] sm:px-8 lg:px-10 lg:py-10">

  {/* ================= BACKGROUND TEXTURE ================= */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">

    {/* Main gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#5428B0] via-[#4820A0] to-[#24104f]" />

    {/* Purple glow */}
    <div
      className="
        absolute -left-20 -top-32
        h-80 w-80
        rounded-full
        bg-[#8b5cf6]/25
        blur-[90px]
      "
    />

    {/* Yellow glow */}
    <div
      className="
        absolute -right-20 -top-20
        h-64 w-64
        rounded-full
        bg-[#F8CC10]/15
        blur-[90px]
      "
    />

    {/* Bottom purple glow */}
    <div
      className="
        absolute -bottom-32 left-1/3
        h-72 w-72
        rounded-full
        bg-[#7c3aed]/20
        blur-[100px]
      "
    />

    {/* Subtle grid */}
    <div
      className="
        absolute inset-0 opacity-[0.07]
        [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
        [background-size:42px_42px]
      "
    />

    {/* Dot texture */}
    <div
      className="
        absolute inset-0 opacity-[0.12]
        [background-image:radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)]
        [background-size:18px_18px]
      "
    />

    {/* Diagonal light streak */}
    <div
      className="
        absolute -right-20 top-1/2
        h-[160%] w-24
        -translate-y-1/2
        rotate-[25deg]
        bg-gradient-to-b
        from-transparent
        via-white/[0.06]
        to-transparent
        blur-sm
      "
    />

    {/* Decorative circle */}
    <div
      className="
        absolute -right-16 -bottom-24
        h-64 w-64
        rounded-full
        border border-white/[0.08]
      "
    />

    <div
      className="
        absolute -right-6 -bottom-14
        h-40 w-40
        rounded-full
        border border-[#F8CC10]/10
      "
    />

    {/* Floating yellow dot */}
    <div
      className="
        absolute right-[22%] top-8
        h-2.5 w-2.5
        rounded-full
        bg-[#F8CC10]
        shadow-[0_0_20px_rgba(248,204,16,0.7)]
      "
    />

    {/* Small decorative squares */}
    <div
      className="
        absolute right-[12%] top-1/2
        h-3 w-3
        rotate-45
        border border-[#F8CC10]/40
      "
    />

    <div
      className="
        absolute bottom-8 right-[30%]
        h-2 w-2
        rounded-full
        bg-white/30
      "
    />

  </div>

  {/* ================= CONTENT ================= */}
  <div className="relative z-10 lg:flex lg:items-center lg:justify-between lg:gap-10">

    {/* Text */}
    <div className="max-w-2xl">

      

      <h3
        className="
          max-w-2xl
          text-3xl
          font-black
          leading-[1.05]
          tracking-[-0.06em]
          sm:text-4xl
          lg:text-[42px]
        "
      >
        Ready to capture your
        <span className="text-[#F8CC10]"> next big moment?</span>
      </h3>

      <p className="mt-3 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
        Let&apos;s shape a video story that feels unmistakably yours.
      </p>

    </div>

    {/* CTA */}
    <div className="relative mt-7 shrink-0 lg:mt-0">

      {/* Button glow */}
      <div className="pointer-events-none absolute inset-0 rounded-full bg-[#F8CC10]/20 blur-xl" />

      <div className="relative">
        <AnimatedButton1
          text="Start Your Project"
          to="/contact"
        />
      </div>

    </div>

  </div>

</section>
   

      <FeedbackMarquee />

    </div>
  );
}
